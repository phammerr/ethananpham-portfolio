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
    org: "Greenie & College Park Flea",
    location: "College Park, MD",
    bullets: [
      "Launched and scaled a vintage clothing e-commerce and flash retail business generating over $100,000 in gross revenue, expanding to 2,500+ customers across DC, Maryland, and Virginia.",
      "Managed 7,500+ item inventory while leveraging data analysis to forecast trends and streamline supply chain.",
      "Grew a social media following of 3,000+ through targeted marketing campaigns and original graphic content.",
      "Founded College Park Flea, hosting 100+ small business owners across multiple events and drawing thousands of community members while managing all vendor relations, logistics, and event operations.",
      "Directed three marketing interns in campaign execution and day-to-day business operations.",
    ],
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Operations & Development Intern",
    org: "UnAvailable Ltd.",
    location: "Ho Chi Minh City, Vietnam",
    bullets: [
      "Analyzed financial data across Power BI dashboards to surface trends and benchmark performance across 14 brand accounts at a manufacturer supplying globally recognized streetwear brands.",
      "Developed a client-facing manufacturing platform integrating fabric selection, costing, and communication portals.",
      "Designed an original garment end-to-end, creating tech packs and directly overseeing production across textile assortment, treatments, and manufacturing on a 500-person factory floor.",
    ],
  },
  {
    period: "Aug 2024 — Feb 2025",
    role: "Associate Technical Consultant",
    org: "srcLogic",
    location: "Vienna, VA",
    bullets: [
      "Leveraged Pegasystems to improve business process operations and customer relationship management.",
      "Built a workflow management framework that digitizes multi-level inspections, then aggregates results into analytical summaries for client organizations.",
      "Generated 30% growth in user engagement through social media content creation and account management.",
    ],
  },
  {
    period: "Spring 2024",
    role: "Integrative Capstone Project",
    org: "University of Maryland",
    location: "College Park, MD",
    bullets: [
      "Led a comprehensive data analysis and visualization project focused on enhancing safety of pedestrians and bikers along Greenbelt Road.",
      "Utilized ArcGIS to identify patterns and trends in county-level injuries and casualties to pinpoint safety concerns.",
    ],
  },
  {
    period: "Spring 2024",
    role: "INFO Challenge",
    org: "University of Maryland",
    location: "College Park, MD",
    bullets: [
      "Cleaned and analyzed USDA FoodData Central data using Python and Tableau, identifying nutrient density trends across food groups and summarizing key findings with an interactive website containing 15+ data visualizations.",
      "Awarded 2nd in annual multi-university data analytics competition, presenting findings to a panel of industry judges.",
    ],
  },
  {
    period: "Spring 2024",
    role: "Teaching Assistant",
    org: "University of Maryland",
    location: "College Park, MD",
    bullets: [
      "Mentored 100+ students as teaching assistant for Asian American Psychology course, leading discussions, delivering lectures, grading assignments, creating rubrics, and managing student teams.",
    ],
  },
  {
    period: "Jun 2020 — Jan 2022",
    role: "Sales Associate",
    org: "Vans",
    location: "Tysons, VA",
    bullets: [
      "Optimized floor sales, cashier operations, merchandise restocking, and customer satisfaction.",
      'Achieved consistent monthly sales targets earning repeated "Sales Associate of the Month" recognition.',
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
          <li
            key={`${e.org}-${e.period}`}
            className="grid grid-cols-1 gap-1 md:grid-cols-[10rem_1fr] md:gap-6"
          >
            <span className="font-mono text-sm text-muted-foreground">
              {e.period}
            </span>
            <div>
              <p className="text-lg">
                {e.role}
                <span className="text-muted-foreground"> · {e.org}</span>
              </p>
              {e.location && (
                <p className="font-mono text-xs text-muted-foreground/70 mt-0.5">
                  {e.location}
                </p>
              )}
              <ul className="mt-2 space-y-1 list-disc list-inside">
                {e.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed text-foreground/80 text-sm">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function CvPage() {
  return (
    <PageShell title="resume" meta="Ethan An Pham · McLean, VA · ethananpham@gmail.com">
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
