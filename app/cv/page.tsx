import { PageShell } from "@/components/page-shell"

type Entry = {
  period: string
  role: string
  org: string
  detail: string
}

const experience: Entry[] = [
  {
    period: "2024 — now",
    role: "Independent",
    org: "Self-directed work",
    detail: "Building tools and writing about interface and systems design.",
  },
  {
    period: "2021 — 2024",
    role: "Senior Designer",
    org: "Example Co.",
    detail: "Led design for a small, fast-moving product team.",
  },
  {
    period: "2018 — 2021",
    role: "Engineer",
    org: "Another Company",
    detail: "Worked across the stack on data-heavy interfaces.",
  },
]

const education: Entry[] = [
  {
    period: "2014 — 2018",
    role: "B.S. in Computer Science",
    org: "Your University",
    detail: "Minor in mathematics. Focus on human–computer interaction.",
  },
]

function Section({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <section className="mt-10">
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>
      <ul className="mt-4 space-y-6">
        {entries.map((e) => (
          <li
            key={`${e.org}-${e.period}`}
            className="grid grid-cols-1 gap-1 md:grid-cols-[8rem_1fr] md:gap-6"
          >
            <span className="font-mono text-sm text-muted-foreground">
              {e.period}
            </span>
            <div>
              <p className="text-lg">
                {e.role}
                <span className="text-muted-foreground"> · {e.org}</span>
              </p>
              <p className="mt-1 leading-relaxed text-foreground/80">
                {e.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CvPage() {
  return (
    <PageShell title="cv" meta="A short, editable résumé.">
      <Section heading="Experience" entries={experience} />
      <Section heading="Education" entries={education} />
    </PageShell>
  )
}
