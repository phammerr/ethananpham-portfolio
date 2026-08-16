import Image from "next/image"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { site } from "@/lib/site-data"

export default function HomePage() {
  return (
    <PageShell title={site.name} meta={`Currently in: ${site.location}`}>
      <div className="flex flex-col gap-0 md:flex-row md:items-start">
        <div
          className="space-y-6 leading-relaxed text-foreground/90 md:w-[420px] md:shrink-0"
          style={{ fontSize: '17px' }}
        >
          <p>
            Hi I&apos;m Ethan, a founder, creative, and data analyst.
          </p>

          <p>
            I studied Information Science and minored in<br className="hidden md:block" />
            {" "}Technological Entrepreneurship &amp; Corporate Innovation<br className="hidden md:block" />
            {" "}at the University of Maryland, College Park in 2024.
          </p>

          <p>
            For the past few years I&apos;ve been working on{" "}
            <Link
              href="/cv"
              className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-warm/70"
            >
              Greenie
            </Link>
            {" "}(&apos;22), a premium vintage clothing brand, and{" "}
            <Link
              href="/cv"
              className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-warm/70"
            >
              College Park Flea
            </Link>
            {" "}(&apos;24&ndash;&apos;25), a market showcasing small businesses at my alma
            mater. Everything I do comes from a passion to build real community
            through shared experiences.
          </p>

          <p>
            In my free time I love to solo travel, play basketball, and go
            hiking. My favorite food is sushi (personal best AYCE performance is
            currently 63 pieces).
          </p>

          <p>
            Never a bad time to meet someone new. Drop a{" "}
            <Link
              href={`mailto:${site.email}`}
              className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-warm/70"
            >
              message
            </Link>
            {" "}anytime!
          </p>
        </div>

        <div className="mt-12 ml-6 shrink-0 md:mt-4 md:ml-2">
          <Image
            src="/mepfp2.png"
            alt="Ethan An Pham"
            width={310}
            height={410}
            className="rounded-sm object-cover rotate-[3deg]"
            priority
          />
        </div>
      </div>
    </PageShell>
  )
}
