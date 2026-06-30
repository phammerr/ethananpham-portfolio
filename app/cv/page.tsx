import { PageShell } from "@/components/page-shell"

type Entry = {
  period: string
  role: string
  org: string
  location?: string
  bullets: string[]
}

const experience: Entry[] = [
  {
    period: "Jan 2022 — now",
    role: "Founder & CEO",
    org: "Greenie",
    location: "Washington DC-Baltimore Area",
    bullets: [
      "Scaled a campus vintage operation into an established DMV brand with a presence across DC, Maryland, and Virginia.",
      "Sold 5,000+ garments through farmers markets, university pop-ups, and e-commerce.",
      "Hosted vintage markets at GMU and UMD, building a community of 100+ vendors and thousands of students.",
      "Oversee all business functions including interns, inventory, supply chain, finances, and marketing.",
      "2x Top 5 finalist at Pitch Dingman; featured on Big Ten Network and multiple university journals.",
    ],
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Operations & Development Intern",
    org: "UnAvailable Ltd.",
    location: "Ho Chi Minh City, Vietnam",
    bullets: [
      "Interned at a Vietnam-based apparel manufacturer producing for global streetwear brands including Stussy, Palace, Barbour, and Aimé Leon Dore.",
      "Organized samples and tech packs for new brand onboarding, gaining exposure to client development.",
      "Contributed to commercial operations for active accounts including order tracking and product approvals.",
      "Produced a piece from concept to completion alongside factory floor teams.",
    ],
  },
  {
    period: "Jul 2025",
    role: "Event Production Staff",
    org: "MAN / WOMAN",
    location: "New York, NY",
    bullets: [
      "Supported event setup, breakdown, and vendor check-in for a fashion industry trade show.",
      "Assisted with on-site logistics to ensure a professional experience for vendors and attendees.",
    ],
  },
  {
    period: "Mar 2024 — May 2025",
    role: "Founder & CEO",
    org: "College Park Flea",
    location: "College Park, MD",
    bullets: [
      "Founded a community-driven flea market hosting 100+ small business owners, drawing thousands of residents and students.",
      "Managed all operations from vendor onboarding and marketing interns to logistics and day-of execution.",
      "Created a welcoming third space centered around small business, community, and culture.",
    ],
  },
  {
    period: "Aug 2024 — Feb 2025",
    role: "Associate Technical Consultant",
    org: "srcLogic",
    location: "Vienna, VA",
    bullets: [
      "Applied Pega, Python, HTML, and JavaScript across multiple consulting projects.",
      "Developed an inspection dashboard in Pega routing multi-stage approval workflows with role-based verification.",
      "Earned Pega CSA and CSSA certifications.",
    ],
  },
  {
    period: "Jan 2024 — May 2024",
    role: "Undergraduate Teaching Assistant",
    org: "University of Maryland",
    location: "College Park, MD",
    bullets: [
      "Served as TA for Asian American Psychology under Dr. Derek Iwamoto.",
      "Lectured, led discussions, graded assignments, created rubrics, and managed student teams.",
    ],
  },
  {
    period: "May 2022 — Aug 2022",
    role: "Assistant Event Coordinator",
    org: "Euphoria Market",
    location: "Arlington, VA",
    bullets: [
      "Helped plan and run the DMV's largest vintage market, with 120+ vendors and 5,000+ biannual visitors.",
      "Supported vendor coordination, logistics, and day-of event management.",
    ],
  },
  {
    period: "Jun 2020 — Jan 2022",
    role: "Sales Associate",
    org: "Vans, a VF Company",
    location: "Tysons Corner, VA",
    bullets: [
      "Sold merchandise, restocked apparel, and ensured customer satisfaction as cashier and sales associate.",
      'Received "Sales Associate of the Month" recognition.',
    ],
  },
]

const education: Entry[] = [
  {
    period: "2020 — 2024",
    role: "B.S. Information Science, Data Science Cognate",
    org: "University of Maryland",
    location: "College Park, MD",
    bullets: [
      "Minor in Technology Entrepreneurship and Corporate Innovation",
      "GPA: 3.98/4.00 · Magna Cum Laude · Dean's List (2021–2024) · Presidential Scholarship",
      "Top 5 Pitch — Dingman Entrepreneurship Competition (2023, 2024)",
    ],
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
    <section className="mt-10">
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
        {heading}
      </h2>
      <ul className="mt-4 space-y-8">
        {entries.map((e) => (
          <li key={`${e.org}-${e.period}`}>
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-lg">
                <span className="font-semibold">{e.org}</span>
                {e.location && (
                  <span className="ml-2 font-mono text-xs text-muted-foreground/70">
                    {e.location}
                  </span>
                )}
              </p>
              <span className="shrink-0 font-mono text-sm text-muted-foreground">
                {e.period}
              </span>
            </div>
            <p className="mt-0.5 text-foreground/90">{e.role}</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              {e.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed text-foreground/80 text-sm">
                  {b}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CvPage() {
  return (
    <PageShell title="Resume" meta="Ethan An Pham · McLean, VA · ethananpham@gmail.com">
      <Section heading="Experience" entries={experience} />
      <Section heading="Education" entries={education} />
      <section className="mt-10">
        <h2 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Skills &amp; Interests
        </h2>
        <ul className="mt-4 space-y-3">
          {skills.map((s) => (
            <li key={s.label} className="grid grid-cols-1 gap-1 md:grid-cols-[10rem_1fr] md:gap-6">
              <span className="font-mono text-sm text-muted-foreground">{s.label}</span>
              <p className="text-sm leading-relaxed text-foreground/80">{s.value}</p>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
