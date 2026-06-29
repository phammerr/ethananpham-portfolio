"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

export type GlobeDestination = {
  name: string
  coordinates: [number, number] // [longitude, latitude]
  caption?: string
}

interface RotatingEarthProps {
  width?: number
  className?: string
  destinations?: GlobeDestination[]
}

export default function RotatingEarth({
  width = 600,
  className = "",
  destinations = [],
}: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [tooltip, setTooltip] = useState<{ name: string; caption?: string; x: number; y: number } | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    const containerWidth = Math.min(width, window.innerWidth - 40)
    const containerHeight = containerWidth
    const radius = containerWidth / 2.2

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    const pointInPolygon = (point: [number, number], polygon: number[][]): boolean => {
      const [x, y] = point
      let inside = false
      for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i]
        const [xj, yj] = polygon[j]
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside
      }
      return inside
    }

    const pointInFeature = (point: [number, number], feature: any): boolean => {
      const geometry = feature.geometry
      if (geometry.type === "Polygon") {
        const coordinates = geometry.coordinates
        if (!pointInPolygon(point, coordinates[0])) return false
        for (let i = 1; i < coordinates.length; i++) {
          if (pointInPolygon(point, coordinates[i])) return false
        }
        return true
      } else if (geometry.type === "MultiPolygon") {
        for (const polygon of geometry.coordinates) {
          if (pointInPolygon(point, polygon[0])) {
            let inHole = false
            for (let i = 1; i < polygon.length; i++) {
              if (pointInPolygon(point, polygon[i])) { inHole = true; break }
            }
            if (!inHole) return true
          }
        }
        return false
      }
      return false
    }

    const generateDotsInPolygon = (feature: any, dotSpacing = 16) => {
      const dots: [number, number][] = []
      const bounds = d3.geoBounds(feature)
      const [[minLng, minLat], [maxLng, maxLat]] = bounds
      const stepSize = dotSpacing * 0.08
      for (let lng = minLng; lng <= maxLng; lng += stepSize) {
        for (let lat = minLat; lat <= maxLat; lat += stepSize) {
          const point: [number, number] = [lng, lat]
          if (pointInFeature(point, feature)) dots.push(point)
        }
      }
      return dots
    }

    interface DotData { lng: number; lat: number }
    const allDots: DotData[] = []
    let landFeatures: any

    // Store projected pin positions for hit testing
    let projectedPins: { x: number; y: number; dest: GlobeDestination }[] = []

    const render = () => {
      context.clearRect(0, 0, containerWidth, containerHeight)

      const currentScale = projection.scale()
      const scaleFactor = currentScale / radius

      // Ocean
      context.beginPath()
      context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI)
      context.fillStyle = "#000000"
      context.fill()
      context.strokeStyle = "#ffffff"
      context.lineWidth = 2 * scaleFactor
      context.stroke()

      if (landFeatures) {
        // Graticule
        const graticule = d3.geoGraticule()
        context.beginPath()
        path(graticule())
        context.strokeStyle = "#ffffff"
        context.lineWidth = 1 * scaleFactor
        context.globalAlpha = 0.25
        context.stroke()
        context.globalAlpha = 1

        // Land outlines
        context.beginPath()
        landFeatures.features.forEach((feature: any) => { path(feature) })
        context.strokeStyle = "#ffffff"
        context.lineWidth = 1 * scaleFactor
        context.stroke()

        // Dots
        allDots.forEach((dot) => {
          const projected = projection([dot.lng, dot.lat])
          if (
            projected &&
            projected[0] >= 0 && projected[0] <= containerWidth &&
            projected[1] >= 0 && projected[1] <= containerHeight
          ) {
            context.beginPath()
            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI)
            context.fillStyle = "#999999"
            context.fill()
          }
        })

        // Pins
        projectedPins = []
        destinations.forEach((dest) => {
          const projected = projection(dest.coordinates)
          if (!projected) return

          // Check if on the visible hemisphere
          const rotation = projection.rotate()
          const rotatedLng = dest.coordinates[0] + rotation[0]
          const normalizedLng = ((rotatedLng + 180) % 360 + 360) % 360 - 180
          if (Math.abs(normalizedLng) > 90) return

          const [px, py] = projected
          projectedPins.push({ x: px, y: py, dest })

          const pinR = 5 * scaleFactor
          const stemH = 12 * scaleFactor

          // Drop shadow
          context.save()
          context.shadowColor = "rgba(0,0,0,0.5)"
          context.shadowBlur = 4

          // Stem
          context.beginPath()
          context.moveTo(px, py)
          context.lineTo(px, py - stemH)
          context.strokeStyle = "#ffffff"
          context.lineWidth = 1.5 * scaleFactor
          context.stroke()

          // Pin head
          context.beginPath()
          context.arc(px, py - stemH - pinR, pinR, 0, 2 * Math.PI)
          context.fillStyle = "#4ade80"
          context.fill()
          context.strokeStyle = "#ffffff"
          context.lineWidth = 1 * scaleFactor
          context.stroke()

          context.restore()
        })
      }
    }

    const loadWorldData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json",
        )
        if (!response.ok) throw new Error("Failed to load land data")
        landFeatures = await response.json()
        landFeatures.features.forEach((feature: any) => {
          const dots = generateDotsInPolygon(feature, 16)
          dots.forEach(([lng, lat]) => allDots.push({ lng, lat }))
        })
        render()
        setIsLoading(false)
      } catch {
        setError("Failed to load land map data")
        setIsLoading(false)
      }
    }

    const rotation = [0, 0]
    let autoRotate = true
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null

    const rotate = () => {
      if (autoRotate) {
        rotation[0] += 0.28125
        projection.rotate(rotation)
        render()
      } else {
        console.log("[globe] timer tick — autoRotate is false, skipping")
      }
    }

    const rotationTimer = d3.timer(rotate)

    const handleMouseDown = (event: MouseEvent) => {
      console.log("[globe] mousedown — stopping autoRotate")
      autoRotate = false
      const startX = event.clientX
      const startY = event.clientY
      const startRotation = [...rotation]

      const handleMouseMove = (e: MouseEvent) => {
        rotation[0] = startRotation[0] + (e.clientX - startX) * 0.5
        rotation[1] = Math.max(-90, Math.min(90, startRotation[1] - (e.clientY - startY) * 0.5))
        projection.rotate(rotation)
        render()
      }

      const handleMouseUp = () => {
        console.log("[globe] mouseup — will resume autoRotate in 5s")
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
        if (resumeTimeout) clearTimeout(resumeTimeout)
        resumeTimeout = setTimeout(() => {
          console.log("[globe] 3.5s elapsed — resuming autoRotate")
          autoRotate = true
        }, 3500)
      }

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()
      const sf = event.deltaY > 0 ? 0.95 : 1.05
      projection.scale(Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * sf)))
      render()
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mx = event.clientX - rect.left
      const my = event.clientY - rect.top
      const HIT = 12

      const hit = projectedPins.find(
        (p) => Math.abs(p.x - mx) < HIT && Math.abs(p.y - my) < HIT
      )

      if (hit) {
        canvas.style.cursor = "pointer"
        setTooltip({ name: hit.dest.name, caption: hit.dest.caption, x: mx, y: my })
      } else {
        canvas.style.cursor = "grab"
        setTooltip(null)
      }
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("wheel", handleWheel)
    canvas.addEventListener("mousemove", handleMouseMove)

    loadWorldData()

    return () => {
      rotationTimer.stop()
      if (resumeTimeout) clearTimeout(resumeTimeout)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("wheel", handleWheel)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [width, destinations])

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-card rounded-2xl p-8 ${className}`}>
        <div className="text-center">
          <p className="text-destructive font-semibold mb-2">Error loading globe</p>
          <p className="text-muted-foreground text-sm">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width: "fit-content" }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-mono text-sm text-muted-foreground">Loading globe…</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-2xl"
        style={{ maxWidth: "100%", height: "auto", cursor: "grab" }}
      />

      {/* Pin tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none absolute z-10 rounded-md bg-black/80 px-3 py-2 font-mono text-xs text-white shadow-lg"
          style={{ left: tooltip.x + 12, top: tooltip.y - 8 }}
        >
          <p className="font-semibold">{tooltip.name}</p>
          {tooltip.caption && <p className="mt-0.5 text-white/70">{tooltip.caption}</p>}
        </div>
      )}

      <div className="absolute bottom-4 left-4 text-xs text-muted-foreground px-2 py-1 rounded-md bg-black/60">
        Drag to rotate · Scroll to zoom
      </div>
    </div>
  )
}
