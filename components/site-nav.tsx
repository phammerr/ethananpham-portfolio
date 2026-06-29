"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "@/lib/site-data"
import { cn } from "@/lib/utils"
import { FontPicker } from "@/components/font-picker"

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
                    ? "text-accent-warm"
                    : "text-muted-foreground hover:text-accent-warm/80",
                )}
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
