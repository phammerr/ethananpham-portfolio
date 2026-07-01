import { PageShell } from "@/components/page-shell"

type Entry = {
  period: string
  role: string
  org: string
  location?: string
  description: string
}

const experience: Entry[] = [
  {
    period: "Jan 2022 — now",
    role: "Founder & CEO",
    org: "Greenie",
    location: "DMV Area",
    description:
      "Scaled a campus vintage operation into an established DMV brand. Sold 5,000+ garments through markets, pop-ups, and e-commerce. Built a community of 100+ vendors. 2x Top 5 finalist at Pitch Dingman; featured on Big Ten Network.",
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Operations & Development Intern",
    org: "UnAvailable Ltd.",
    location: "Ho Chi Minh City, Vietnam",
    description:
      "Interned at a manufacturer producing for Stussy, Palace, Barbour, and Aimé Leon Dore. Managed samples, tech packs, and commercial operations across active brand accounts. Produced a garment from concept to completion on a 500-person factory floor.",
  },
  {
    period: "Jul 2025",
    role: "Event Production Staff",
    org: "MAN / WOMAN",
    location: "New York, NY",
    description:
      "Supported setup, breakdown, and vendor check-in for a fashion industry trade show. Assisted with on-site logistics and operations.",
  },
  {
    period: "Mar 2024 — May 2025",
    role: "Founder & CEO",
    org: "College Park Flea",
    location: "College Park, MD",
    description:
      "Founded a community flea market hosting 100+ small business owners and drawing thousands of local residents and students. Managed all operations from vendor onboarding to day-of execution.",
  },
  {
    period: "Aug 2024 — Feb 2025",
    role: "Associate Technical Consultant",
    org: "srcLogic",
    location: "Vienna, VA",
    description:
      "Built consulting solutions using Pega, Python, HTML, and JavaScript. Developed a multi-stage inspection dashboard with role-based approval workflows. Earned Pega CSA and CSSA certifications.",
  },
  {
    period: "Jan 2024 — May 2024",
    role: "Undergraduate Teaching Assistant",
    org: "University of Maryland",
    location: "College Park, MD",
    description:
      "TA for Asian American Psychology under Dr. Derek Iwamoto. Lectured, led discussions, graded assignments, and managed student teams.",
  },
  {
    period: "May 2022 — Aug 2022",
    role: "Assistant Event Coordinator",
    org: "Euphoria Market",
    location: "Arlington, VA",
    description:
      "Helped plan and run the DMV's largest vintage market — 120+ vendors and 5,000+ biannual visitors. Supported vendor coordination and day-of logistics.",
  },
  {
    period: "Jun 2020 — Jan 2022",
    role: "Sales Associate",
    org: "Vans, a VF Company",
    location: "Tysons Corner, VA",
    description:
      "Cashier and floor sales associate. Received \"Sales Associate of the Month\" recognition.",
  },
]

const education: Entry[] = [
  {
    period: "2020 — 2024",
    role: "B.S. Information Science, Data Science Cognate",
    org: "University of Maryland",
    location: "College Park, MD",
    description:
      "Minor in Technology Entrepreneurship · GPA 3.98 · Magna Cum Laude · Dean's List (2021–2024) · Presidential Scholarship · Top 5 Pitch Dingman (2023, 2024)",
  },
]

const skills = [
  {
    label: "Technologies",
    value:
      "Pegasystems (CSA & CSSA), Python, SQL, R Studio, Tableau, HTML, Java, MATLAB, Blender, Microsoft Office, Adobe Photoshop, Canva, CapCut, iMovie",
  },
  {
    label: "Skills",
    value:
      "Data Visualization, Statistical Analysis, Web Development, E-commerce, Event Management, Inventory Management, Agile Scrum, Graphic Design, Copywriting, Social Media Marketing, Vietnamese (Conversational)",
  },
  {
    label: "Interests",
    value:
      "Basketball, Solo Travel, Weightlifting, Vintage Clothing, Hiking, Running, Snowboarding, Scuba Diving",
  },
]

function Section({ heading, entries }: { heading: string; entries: Entry[] }) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>
      <ul className="mt-4 space-y-7">
        {entries.map((e) => (
          <li key={`${e.org}-${e.period}`}>
            <div className="flex items-baseline justify-between gap-4">
              <p>
                <span className="font-bold">{e.org}</span>
                {e.location && (
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    {e.location}
                  </span>
                )}
              </p>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {e.period}
              </span>
            </div>
            <p className="mt-0.5 font-semibold">{e.role}</p>
            <p className="mt-1 text-foreground/70 leading-relaxed">{e.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CvPage() {
  return (
    <PageShell title="cv" meta="Ethan An Pham · McLean, VA · ethananpham@gmail.com">
      <Section heading="Experience" entries={experience} />
      <Section heading="Education" entries={education} />
      <section className="mt-10 first:mt-0">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Skills &amp; Interests
        </h2>
        <ul className="mt-4 space-y-3">
          {skills.map((s) => (
            <li key={s.label} className="flex gap-6">
              <span className="shrink-0 font-mono text-xs text-muted-foreground w-24">{s.label}</span>
              <p className="text-foreground/70 leading-relaxed">{s.value}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
