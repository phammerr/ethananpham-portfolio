"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { TravelPhoto } from "@/lib/travel-data"

export function TravelCarousel({ photos }: { photos: TravelPhoto[] }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length)
  const next = () => setIndex((i) => (i + 1) % photos.length)

  const photo = photos[index]

  return (
    <div className="mt-8">
      <div className="relative overflow-hidden rounded-sm border border-border">
        <div className="relative aspect-[4/3] w-full">
          <Image
            key={index}
            src={photo.src}
            alt={`${photo.location}`}
            fill
            className="object-cover"
          />
        </div>

        <button
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm bg-background/70 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm bg-background/70 p-1.5 text-foreground backdrop-blur-sm transition-colors hover:bg-background/90"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent px-4 pb-4 pt-8">
          <p className="font-mono text-sm text-foreground">{photo.location}</p>
          <p className="font-mono text-xs text-muted-foreground">{photo.date}</p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-center gap-1.5">
        {photos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1 rounded-full transition-all ${
              i === index ? "w-4 bg-accent-warm" : "w-1 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
