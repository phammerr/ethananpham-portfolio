import { PageShell } from "@/components/page-shell"
import { lists } from "@/lib/site-data"

export default function ListsPage() {
  return (
    <PageShell title="Lists" meta="Running collections, updated as I go.">
      <div className="mt-2 space-y-10">
        {lists.map((list) => (
          <section key={list.title}>
            <h2 className="text-xl">{list.title}</h2>
            <p className="mt-1 text-sm italic text-muted-foreground">
              {list.description}
            </p>
            <ul className="mt-3 space-y-2">
              {list.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-relaxed text-foreground/90"
                >
                  <span className="font-mono text-muted-foreground">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  )
}
