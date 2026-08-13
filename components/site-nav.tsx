"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { PillCta } from "@/components/pill-cta"
import { site } from "@/lib/site"

const links = [
  { label: "Projects", href: "#work" },
  { label: "GitHub & Stack", href: "#contributions" },
  { label: "Certifications", href: "#certifications" },
  { label: "Insights", href: "#insights" },
  { label: "Resume", href: site.resume, external: true },
]

export function SiteNav() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <a
        href="#top"
        className="fixed top-6 left-6 z-50 overflow-hidden rounded-full bg-black ring-1 ring-white/20"
        aria-label="Back to top"
      >
        <Image
          src={site.portrait}
          alt=""
          width={72}
          height={72}
          className="h-16 w-16 object-cover object-[center_20%] grayscale sm:h-[4.5rem] sm:w-[4.5rem]"
        />
      </a>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="fixed top-6 right-6 z-[70] flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full bg-white shadow-lg transition-all hover:scale-105"
      >
        <span
          className={`h-[2px] w-5 bg-black transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
        />
        <span
          className={`h-[2px] w-5 bg-black transition-all duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 48 }}
              transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-6 right-6 top-6 z-50 flex w-[min(calc(100%-3rem),26rem)] flex-col rounded-[2rem] bg-[#141414] p-8 pt-20 shadow-2xl"
            >
              <nav className="space-y-1">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="block text-4xl font-semibold tracking-tight text-white transition hover:text-white/55 sm:text-[2.75rem] sm:leading-tight"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-4 border-t border-white/10 pt-6">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-white/45 transition hover:text-white"
                >
                  github.com/{site.githubUser}
                </a>
                <div className="flex gap-5 text-sm text-white">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
                  >
                    GitHub
                  </a>
                </div>
                <PillCta
                  href="#contact"
                  label="Let's talk"
                  onClick={() => setOpen(false)}
                />
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
