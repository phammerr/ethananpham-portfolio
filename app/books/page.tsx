import { PageShell } from "@/components/page-shell"
import { books } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export default function BooksPage() {
  return (
    <PageShell title="bookshelf" meta="A few things I've read and loved.">
      <ul className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {books.map((book) => (
          <li key={book.title} className="group">
            <div
              className={cn(
                "flex aspect-[2/3] flex-col justify-between rounded-sm p-3 shadow-sm transition-transform group-hover:-translate-y-1",
                book.cover,
                book.ink,
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                {book.author.split(" ").slice(-1)}
              </span>
              <span className="font-mono text-sm leading-tight text-balance">
                {book.title}
              </span>
            </div>
            <p className="mt-2 text-sm leading-snug text-muted-foreground">
              {book.author}
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  )
}
