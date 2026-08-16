"use client"

import { useState } from "react"
import Image from "next/image"
import type { TravelPhoto } from "@/lib/travel-data"

const ROTATIONS = [2, -3, 1.5, -1, 3.5, -2.5, 1, -0.5]

export function PhotoStack({ photos }: { photos: TravelPhoto[] }) {
  const [deck, setDeck] = useState(() => {
    const arr = [...photos]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  })
  const [hovered, setHovered] = useState(false)

  const sendToBack = () => {
    setHovered(false)
    setDeck((d) => {
      const rest = d.slice(0, -1)
      const last = d[d.length - 1]
      return [last, ...rest]
    })
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    if (hovered) {
      sendToBack()
    } else {
      setHovered(true)
    }
  }

  if (deck.length === 0) return null

  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <p className="font-mono text-xs tracking-widest text-muted-foreground">A Few Fun Pics &amp; Fun Facts</p>
      <div
        className="relative cursor-pointer w-[71vw] max-w-[420px]"
        style={{ aspectRatio: "3/2", marginRight: "40px" }}
        onClick={sendToBack}
        onTouchEnd={handleTouchEnd}
      >
        {[...deck].reverse().map((photo, i) => {
          const stackIndex = deck.length - 1 - i
          const rot = ROTATIONS[stackIndex % ROTATIONS.length]
          const isTop = stackIndex === deck.length - 1
          const offset = stackIndex * 2

          return (
            <div
              key={photo.src}
              className="absolute inset-0 overflow-hidden rounded-sm border border-border bg-card shadow-md"
              style={{
                transform: `rotate(${rot}deg) translate(${offset}px, ${offset}px)`,
                zIndex: stackIndex,
              }}
            >
              <Image src={photo.src} alt={photo.location} fill sizes="420px" className="object-cover" priority={isTop} />
              {isTop && (
                <div
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    padding: "16px",
                    textAlign: "center",
                    backgroundColor: hovered ? "rgba(0,0,0,0.5)" : "transparent",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <p style={{ fontFamily: "monospace", fontSize: "14px", color: "white", opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease", margin: 0 }}>
                    {photo.location}
                  </p>
                  <p style={{ fontFamily: "monospace", fontSize: "12px", color: "rgba(255,255,255,0.7)", opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease", margin: 0 }}>
                    {photo.date}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <p className="font-mono text-xs text-muted-foreground">tap to reveal · tap again to flip</p>
    </div>
  )
}
