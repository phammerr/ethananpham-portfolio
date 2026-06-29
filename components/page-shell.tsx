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

      <header className="mt-12 animate-fade-up">
        <h1 className="font-heading text-3xl font-bold lowercase tracking-normal md:text-4xl">
          {title}
        </h1>
        <div className="mt-3 h-px w-10 bg-accent-warm" aria-hidden="true" />
        {meta ? (
          <p className="mt-3 whitespace-pre-line font-mono text-sm text-muted-foreground">
            {meta}
          </p>
        ) : null}
      </header>

      <div className="mt-8 flex-1 animate-fade-up-delay">{children}</div>

      <footer className="mt-16 border-t border-border pt-6">
        <SocialLinks />
      </footer>
    </main>
  )
}
