"use client"

import { useState } from "react"
import type { GalleryItem } from "@/lib/gallery-data"

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  if (items.length === 0) {
    return (
      <p className="text-muted-foreground text-sm italic">
        No items yet — drop files into /public/gallery/ and add them to lib/gallery-data.ts.
      </p>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="relative aspect-square overflow-hidden rounded-sm cursor-pointer"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
        >
          {item.type === "video" ? (
            <video
              src={item.src}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay={hovered === i}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.caption}
              className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
              style={{ transform: hovered === i ? "scale(1.04)" : "scale(1)" }}
            />
          )}

          <div
            className="absolute inset-0 flex items-end bg-black/50 p-3 transition-opacity duration-200"
            style={{ opacity: hovered === i ? 1 : 0 }}
          >
            <p className="font-mono text-xs text-white leading-snug">
              {item.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
