"use client"

import { useState } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps"
import type { Destination } from "@/lib/travel-data"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export function TravelMap({ destinations }: { destinations: Destination[] }) {
  const [tooltip, setTooltip] = useState<{ name: string; year?: number } | null>(null)
  const [position, setPosition] = useState({ coordinates: [0, 20] as [number, number], zoom: 1 })

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-sm border border-border bg-muted/30">
        <ComposableMap
          projectionConfig={{ scale: 147 }}
          style={{ width: "100%", height: "auto" }}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={({ zoom, coordinates }) =>
              setPosition({ zoom, coordinates })
            }
            minZoom={1}
            maxZoom={8}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "oklch(0.35 0.06 145)", outline: "none" },
                      hover: { fill: "oklch(0.45 0.08 145)", outline: "none" },
                      pressed: { fill: "oklch(0.45 0.08 145)", outline: "none" },
                    }}
                    stroke="oklch(0.22 0.07 145)"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>

            {destinations.map((dest, i) => (
              <Marker
                key={i}
                coordinates={dest.coordinates}
                onMouseEnter={() => setTooltip({ name: dest.name, year: dest.year })}
                onMouseLeave={() => setTooltip(null)}
              >
                <circle
                  r={4 / position.zoom}
                  fill="oklch(0.75 0.18 145)"
                  stroke="oklch(0.93 0.02 145)"
                  strokeWidth={1 / position.zoom}
                  style={{ cursor: "pointer" }}
                />
              </Marker>
            ))}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {tooltip && (
        <div className="mt-2 font-mono text-sm text-muted-foreground">
          <span className="text-foreground">{tooltip.name}</span>
          {tooltip.year && <span className="ml-2">· {tooltip.year}</span>}
        </div>
      )}

      <p className="mt-3 font-mono text-xs text-muted-foreground">
        Scroll to zoom · drag to pan · {destinations.length} place{destinations.length !== 1 ? "s" : ""} visited
      </p>
    </div>
  )
}
