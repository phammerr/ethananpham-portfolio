import type { ReactNode } from "react"
import { SiteNav } from "@/components/site-nav"
import { SocialLinks } from "@/components/social-links"

type PageShellProps = {
  title: string
  meta?: string
  children: ReactNode
}

export function PageShell({ title, meta, children }: PageShellProps) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-6 pb-16 pt-12 md:pt-16">
      <SiteNav />

      <header className="mt-12">
        <h1 className="font-mono text-3xl tracking-tight md:text-4xl">
          {title}
        </h1>
        {meta ? (
          <p className="mt-2 font-mono text-sm italic text-muted-foreground">
            {meta}
          </p>
        ) : null}
      </header>

      <div className="mt-6 flex-1">{children}</div>

      <footer className="mt-16 border-t border-border pt-6">
        <SocialLinks />
      </footer>
    </main>
  )
}
