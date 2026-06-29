import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { site } from "@/lib/site-data"

export default function HomePage() {
  return (
    <PageShell title={site.name} meta={`Currently in: ${site.location}`}>
      <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
        <p>Hi, I&apos;m {site.name.split(" ")[0]}.</p>

        <p>
          I&apos;m interested in using technology to enable new forms of human
          expression.
        </p>

        <p>
          This is a template starter for a personal website. Swap in your own
          words here — a little about your background, what you care about, and
          the kind of work you&apos;re drawn to. Keep it warm and specific.
        </p>

        <p>
          Right now I&apos;m exploring how the tools we build quietly shape the
          way we think, read, and make things.
        </p>

        <p>
          Feel free to poke around — this site is a sampling of what I&apos;m
          currently reading, writing, and thinking about.
        </p>

        <p>
          If any of it interests you, feel free to{" "}
          <Link
            href={`mailto:${site.email}`}
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            email me
          </Link>{" "}
          or{" "}
          <Link
            href={site.x}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            find me on X
          </Link>
          .
        </p>
      </div>
    </PageShell>
  )
}
