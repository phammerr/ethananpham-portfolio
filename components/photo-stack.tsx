"use client"

import { useState } from "react"
import Image from "next/image"
import type { TravelPhoto } from "@/lib/travel-data"

const ROTATIONS = [2, -3, 1.5, -1, 3.5, -2.5, 1, -0.5]

export function PhotoStack({ photos }: { photos: TravelPhoto[] }) {
  const [deck, setDeck] = useState(photos)

  const sendToBack = () => {
    setDeck((d) => {
      const [first, ...rest] = d
      return [...rest, first]
    })
  }

  if (deck.length === 0) return null

  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <div
        className="relative cursor-pointer"
        style={{ width: 280, height: 360 }}
        onClick={sendToBack}
        title="Click to flip"
      >
        {[...deck].reverse().map((photo, i) => {
          const stackIndex = deck.length - 1 - i
          const rot = ROTATIONS[stackIndex % ROTATIONS.length]
          const isTop = stackIndex === 0
          const offset = stackIndex * 2

          return (
            <div
              key={photo.src + stackIndex}
              className="absolute inset-0 overflow-hidden rounded-sm border border-border bg-card shadow-md transition-transform duration-300"
              style={{
                transform: `rotate(${rot}deg) translate(${offset}px, ${offset}px)`,
                zIndex: stackIndex,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.location}
                fill
                className="object-cover"
                priority={isTop}
              />
              {isTop && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10">
                  <p className="font-mono text-sm text-white">{photo.location}</p>
                  <p className="font-mono text-xs text-white/70">{photo.date}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <p className="font-mono text-xs text-muted-foreground">click to flip through</p>
    </div>
  )
}
