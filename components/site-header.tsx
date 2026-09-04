"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
] as const

type NavTheme = "hero" | "light" | "contact"

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname()
  const [navTheme, setNavTheme] = useState<NavTheme>(dark ? "hero" : "light")

  useEffect(() => {
    if (pathname !== "/") {
      setNavTheme("light")
      return
    }

    const intro = document.getElementById("intro")
    const work = document.getElementById("work")
    const contact = document.getElementById("contact")
    if (!intro || !work || !contact) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length === 0) return

        const id = visible[0].target.id
        if (id === "intro") setNavTheme("hero")
        else if (id === "contact") setNavTheme("contact")
        else setNavTheme("light")
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0, 0.15, 0.4] }
    )

    ;[intro, work, contact].forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname, dark])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/about") return pathname === "/about"
    return false
  }

  const onHero = navTheme === "hero"
  const onContact = navTheme === "contact"
  const onLight = navTheme === "light"

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        onLight && "nav-bar-light border-b border-border/60",
        onHero && "border-b border-transparent bg-transparent",
        onContact && "border-b border-primary-foreground/10 bg-primary/95 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
        <Link href="/" className="group min-w-0 shrink">
          <span
            className={cn(
              "block truncate text-sm font-semibold tracking-[-0.03em] transition sm:text-base",
              onHero || onContact
                ? "text-white group-hover:text-white/80"
                : "text-foreground group-hover:text-primary"
            )}
          >
            {site.name}
          </span>
        </Link>

        <nav className="flex shrink-0 items-center gap-4 font-mono text-[9px] uppercase tracking-[0.18em] sm:gap-8 sm:text-[10px] sm:tracking-[0.22em] md:gap-10 md:text-[11px]">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                data-active={active}
                className={cn(
                  "nav-link py-1 transition",
                  onHero || onContact
                    ? active
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                    : active
                      ? "text-primary"
                      : "text-foreground/65 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
