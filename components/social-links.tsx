import Link from "next/link"
import { socialLinks } from "@/lib/site-data"

export function SocialLinks() {
  return (
    <nav aria-label="Social" className="font-mono text-sm">
      <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
        {socialLinks.map((item) => {
          const external = item.href.startsWith("http")
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-muted-foreground transition-colors hover:text-accent-warm"
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
