export const site = {
  name: "Ethan An Pham",
  handle: "ethananpham.com",
  location: "McLean, VA",
  email: "ethananpham@gmail.com",
}

export const navItems = [
  { label: site.handle, href: "/" },
  { label: "cv", href: "/cv" },
  { label: "shelf", href: "/shelf" },
  { label: "travel", href: "/travel" },
  { label: "hobbies", href: "/hobbies" },
]

export const socialLinks = [
  { label: "email", href: `mailto:${site.email}` },
  { label: "linkedin", href: "https://linkedin.com/in/ethananpham" },
  { label: "instagram", href: "https://instagram.com/ethan.fam" },
]

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
}

export const posts: Post[] = [
  {
    slug: "on-building-in-public",
    title: "On Building in Public",
    date: "2026-05-12",
    summary:
      "Notes on why sharing unfinished work tends to attract the right people and ideas.",
  },
  {
    slug: "tools-that-think-with-you",
    title: "Tools That Think With You",
    date: "2026-03-28",
    summary:
      "A short meditation on software that disappears into the work rather than demanding attention.",
  },
  {
    slug: "reading-slowly",
    title: "Reading Slowly, On Purpose",
    date: "2026-01-09",
    summary:
      "Why I started keeping a commonplace book and what it changed about how I read.",
  },
]

export type Book = {
  title: string
  author: string
  // a tailwind background color class used for the placeholder cover
  cover: string
  ink: string
}

export const books: Book[] = [
  { title: "The Glass Bead Game", author: "Hermann Hesse", cover: "bg-chart-3", ink: "text-background" },
  { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", cover: "bg-chart-1", ink: "text-background" },
  { title: "The Order of Time", author: "Carlo Rovelli", cover: "bg-chart-2", ink: "text-background" },
  { title: "Letters to a Young Poet", author: "Rainer Maria Rilke", cover: "bg-chart-4", ink: "text-background" },
  { title: "Thinking in Systems", author: "Donella Meadows", cover: "bg-chart-5", ink: "text-foreground" },
  { title: "The Beginning of Infinity", author: "David Deutsch", cover: "bg-chart-2", ink: "text-background" },
  { title: "A Pattern Language", author: "Christopher Alexander", cover: "bg-chart-3", ink: "text-background" },
  { title: "The Dream Machine", author: "M. Mitchell Waldrop", cover: "bg-chart-1", ink: "text-background" },
]

export type List = {
  title: string
  description: string
  items: string[]
}

export const lists: List[] = [
  {
    title: "Currently watching",
    description: "Films and series in rotation right now.",
    items: ["Stalker (1979)", "The Pervert's Guide to Cinema", "Severance, S2"],
  },
  {
    title: "Tools I love",
    description: "Software that earns a permanent spot on my dock.",
    items: ["Obsidian", "Figma", "Raycast", "Linear"],
  },
  {
    title: "Open questions",
    description: "Things I keep coming back to.",
    items: [
      "What makes an interface feel alive?",
      "Can taste be taught, or only caught?",
      "How do mediums reshape the people who use them?",
    ],
  },
]
