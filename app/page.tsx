import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { site } from "@/lib/site-data"

export default function HomePage() {
  return (
    <PageShell title={site.name} meta={`Currently in: ${site.location}`}>
      <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
        <p>
          Hi, I&apos;m Ethan — a founder,
          curator, and occasional data scientist based in the DC area.
        </p>

        <p>
          I&apos;m drawn to the spaces where systems and human experience
          overlap: the economics of vintage markets, the information design of a
          well-made garment, the quiet decisions behind where someone travels
          alone.
        </p>

        <p>
          I built{" "}
          <Link
            href="/cv"
            className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-warm/70"
          >
            Greenie &amp; College Park Flea
          </Link>{" "}
          from the ground up, scaling both to reach thousands of people across
          DC, Maryland, and Virginia. Before that, I helped digitize
          manufacturing workflows on a 500-person factory floor in Ho Chi Minh
          City.
        </p>

        <p>
          Right now I&apos;m exploring how the tools we build quietly shape the
          way we think, read, and make things.
        </p>

        <p>
          If any of it interests you, feel free to{" "}
          <Link
            href={`mailto:${site.email}`}
            className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-warm/70"
          >
            email me
          </Link>{" "}
          or{" "}
          <Link
            href={site.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-warm/70"
          >
            find me on X
          </Link>
          .
        </p>
      </div>
    </PageShell>
  )
}
