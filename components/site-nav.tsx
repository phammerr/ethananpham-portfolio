"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const pathname = usePathname()

  return (
    <nav aria-label="Primary" className="font-mono text-sm">
      <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-block px-1 transition-colors",
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {"["}
                {item.label}
                {"]"}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
