"use client"

import { useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export type ShelfItem = {
  title: string
  subtitle: string
  note?: string
  imageUrl?: string
  imageScale?: number
  href?: string
}

const SPINE_COLORS = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
  "bg-accent-warm",
]

function hash(input: string) {
  let h = 0
  for (let i = 0; i < input.length; i++) {
    h = (h * 31 + input.charCodeAt(i)) >>> 0
  }
  return h
}

function spineHeight(title: string) {
  return 88 + (hash(title) % 36)
}

function spineWidth(title: string) {
  return 30 + (hash(`${title}w`) % 20)
}

export function ShelfCase({ heading, items }: { heading: string; items: ShelfItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [pinned, setPinned] = useState<number | null>(null)
  const panelId = useId()

  const activeIndex = hovered ?? pinned
  const activeItem = activeIndex !== null ? items[activeIndex] : null

  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>

      <div className="mt-4 flex items-end gap-1 overflow-x-auto [scrollbar-width:thin]">
        {items.map((item, i) => {
          const isActive = activeIndex === i
          return (
            <button
              key={`${item.title}-${i}`}
              type="button"
              aria-expanded={isActive}
              aria-controls={panelId}
              aria-label={`Preview ${item.title}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
              onClick={() => setPinned((p) => (p === i ? null : i))}
              style={{ height: spineHeight(item.title), width: spineWidth(item.title) }}
              className={cn(
                "relative shrink-0 origin-bottom rounded-t-[3px] transition-[transform,box-shadow] duration-200 ease-out motion-reduce:transition-none",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                SPINE_COLORS[i % SPINE_COLORS.length],
                isActive
                  ? "-translate-y-2.5 shadow-[0_8px_14px_-6px_rgba(0,0,0,0.55)]"
                  : "hover:-translate-y-1 hover:shadow-[0_6px_10px_-4px_rgba(0,0,0,0.45)]"
              )}
            >
              <span
                className="pointer-events-none absolute inset-1 flex items-end justify-center overflow-hidden text-center font-mono text-[10px] leading-tight tracking-tight text-primary-foreground/85 [writing-mode:vertical-rl]"
                aria-hidden="true"
              >
                {item.title}
              </span>
            </button>
          )
        })}
      </div>
      <div className="h-0.5 w-full shrink-0 bg-accent-warm/50" aria-hidden="true" />

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          activeItem ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{activeItem && <ShelfPreview item={activeItem} />}</div>
      </div>
    </section>
  )
}

function ShelfPreview({ item }: { item: ShelfItem }) {
  const inner = (
    <div className="flex gap-4 rounded-sm border border-border bg-card p-4 animate-fade-up">
      {item.imageUrl && (
        <div className="relative aspect-3/4 w-20 shrink-0 overflow-hidden rounded-sm border border-border">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
            style={item.imageScale ? { transform: `scale(${item.imageScale})` } : undefined}
          />
        </div>
      )}
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className="text-base text-foreground">{item.title}</span>
        <span className="font-mono text-xs text-muted-foreground">{item.subtitle}</span>
        {item.note && <span className="mt-1 text-sm text-foreground/60">{item.note}</span>}
        {item.href && (
          <span className="mt-2 font-mono text-xs text-accent-warm underline underline-offset-4">
            Watch on YouTube ↗
          </span>
        )}
      </div>
    </div>
  )

  if (item.href) {
    return (
      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </Link>
    )
  }

  return inner
}
