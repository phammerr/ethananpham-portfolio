import Image from "next/image"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"

type MediaItem = {
  title: string
  subtitle: string
  note?: string
}

type VideoItem = MediaItem & {
  href?: string
  videoId?: string
}

const books: MediaItem[] = [
  { title: "The Glass Bead Game", subtitle: "Hermann Hesse" },
  { title: "Gödel, Escher, Bach", subtitle: "Douglas Hofstadter" },
  { title: "The Order of Time", subtitle: "Carlo Rovelli" },
]

const podcasts: MediaItem[] = [
  { title: "Podcast Title", subtitle: "Host Name", note: "Short note on why you like it" },
  { title: "Podcast Title", subtitle: "Host Name" },
]

const videos: VideoItem[] = [
  {
    title: "Video / Channel Title",
    subtitle: "Creator",
    note: "What makes it worth watching",
  },
  {
    title: "10000 Hours — Episode 2 Payoff",
    subtitle: "IN THE LAB · Basketball Documentary",
    href: "https://www.youtube.com/watch?v=E7ctsRfbtBY&list=PLVocaCGI5NRkH6fwZ5fuXLcBD9FTY3JbZ&index=26",
    videoId: "E7ctsRfbtBY",
  },
]

const music: MediaItem[] = [
  { title: "Album or Artist", subtitle: "Artist / Genre", note: "A note on why it sticks" },
  { title: "Album or Artist", subtitle: "Artist / Genre" },
]

const movies: MediaItem[] = [
  { title: "Film Title", subtitle: "Director · Year", note: "Why it matters to you" },
  { title: "Film Title", subtitle: "Director · Year" },
]

const games: MediaItem[] = [
  { title: "Game Title", subtitle: "Studio · Year", note: "What keeps you coming back" },
  { title: "Game Title", subtitle: "Studio · Year" },
]

function MediaSection({ heading, items }: { heading: string; items: MediaItem[] }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>
      <ul className="mt-4 divide-y divide-border">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col gap-0.5 py-3">
            <span className="text-base text-foreground">{item.title}</span>
            <span className="font-mono text-xs text-muted-foreground">{item.subtitle}</span>
            {item.note && (
              <span className="mt-1 text-sm text-foreground/60">{item.note}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

function VideoSection({ heading, items }: { heading: string; items: VideoItem[] }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>
      <ul className="mt-4 divide-y divide-border">
        {items.map((item, i) => (
          <li key={i} className="py-3">
            {item.videoId && item.href ? (
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-3 items-start"
              >
                <div className="relative shrink-0 w-32 aspect-video overflow-hidden rounded-sm border border-border">
                  <Image
                    src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-80"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-base text-foreground transition-colors group-hover:text-accent-warm group-hover:underline underline-offset-4">
                    {item.title}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{item.subtitle}</span>
                  {item.note && (
                    <span className="mt-1 text-sm text-foreground/60">{item.note}</span>
                  )}
                </div>
              </Link>
            ) : (
              <div className="flex flex-col gap-0.5">
                <span className="text-base text-foreground">{item.title}</span>
                <span className="font-mono text-xs text-muted-foreground">{item.subtitle}</span>
                {item.note && (
                  <span className="mt-1 text-sm text-foreground/60">{item.note}</span>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MediaPage() {
  return (
    <PageShell title="shelf" meta="My hall of fame media consumption.">
      <MediaSection heading="Books" items={books} />
      <MediaSection heading="Podcasts" items={podcasts} />
      <VideoSection heading="YouTube" items={videos} />
      <MediaSection heading="Music" items={music} />
      <MediaSection heading="Movies" items={movies} />
      <MediaSection heading="Video Games" items={games} />
    </PageShell>
  )
}
