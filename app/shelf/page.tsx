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

type GameItem = MediaItem & {
  imageUrl?: string
  imageScale?: number
}

const books: MediaItem[] = [
  { title: "The Glass Bead Game", subtitle: "Hermann Hesse" },
  { title: "Gödel, Escher, Bach", subtitle: "Douglas Hofstadter" },
  { title: "The Order of Time", subtitle: "Carlo Rovelli" },
  { title: "The Subtle Art of Not Giving a F*ck", subtitle: "Mark Manson" },
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

const games: GameItem[] = [
  {
    title: "Dragon Ball Z: Budokai 3",
    subtitle: "PS2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/DBZ_Budokai_3.jpg/250px-DBZ_Budokai_3.jpg",
  },
  {
    title: "Call of Duty: Black Ops II",
    subtitle: "PS3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png/250px-Call_of_Duty_Black_Ops_II_box_artwork.png",
  },
  {
    title: "Fortnite",
    subtitle: "Xbox One",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Super Smash Bros. Ultimate",
    subtitle: "Nintendo Switch",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/250px-Super_Smash_Bros._Ultimate.jpg",
  },
  {
    title: "FIFA 15",
    subtitle: "PS3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/FIFA_15_Cover_Art.jpg/250px-FIFA_15_Cover_Art.jpg",
  },
  {
    title: "Pokémon Black",
    subtitle: "DS Lite",
    imageUrl: "https://media.gamestop.com/i/gamestop/10078063/Pokemon-Black?w=768&h=768&fmt=auto",
    imageScale: 1.15,
  },
  {
    title: "Pokémon LeafGreen",
    subtitle: "Game Boy",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Lc7PF_OT3zJcowXdOFeCSxFKWAzNDzSAnO6yDHeI-OZz-mRyS6UvH0NP&s=10",
  },
  {
    title: "inFamous 2",
    subtitle: "PS3",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Infamous_2.png/250px-Infamous_2.png",
  },
  {
    title: "Ratchet & Clank Future: A Crack in Time",
    subtitle: "PS3",
    imageUrl: "https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/original/products/45863/40078/Ratchet--Clank-Future-A-Cr__12611.1682538368.jpg?c=2",
  },
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

function GameSection({ heading, items }: { heading: string; items: GameItem[] }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>
      <ul className="mt-4 divide-y divide-border">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start py-3">
            {item.imageUrl && (
              <div className="relative shrink-0 w-16 aspect-[3/4] overflow-hidden rounded-sm border border-border">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={item.imageScale ? { transform: `scale(${item.imageScale})` } : undefined}
                />
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              <span className="text-base text-foreground">{item.title}</span>
              <span className="font-mono text-xs text-muted-foreground">{item.subtitle}</span>
              {item.note && (
                <span className="mt-1 text-sm text-foreground/60">{item.note}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MediaPage() {
  return (
    <PageShell title="Shelf" meta="My hall of fame media.">
      <MediaSection heading="Books" items={books} />
      <VideoSection heading="YouTube" items={videos} />
      <MediaSection heading="Music" items={music} />
      <MediaSection heading="Movies" items={movies} />
      <GameSection heading="Video Games" items={games} />
    </PageShell>
  )
}
