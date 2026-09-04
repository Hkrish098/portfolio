"use client"

import { useState } from "react"
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Phone, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { reveal } from "@/lib/portfolio-data"
import { site } from "@/lib/site"

export function ContactFooter() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <footer id="contact" className="scroll-mt-20 bg-primary text-primary-foreground sm:scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <motion.div {...reveal}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70 sm:text-xs">Contact</p>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-[1.02] tracking-[-0.05em] sm:mt-7 sm:text-5xl md:text-7xl">
            Let&apos;s build something thoughtful.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed opacity-80 sm:mt-7 sm:text-lg">
            Open to AI engineering roles, research collaborations, and interesting problems. The fastest way to reach me is email.
          </p>
        </motion.div>

        <motion.div {...reveal} className="mt-10 max-w-3xl space-y-3 sm:mt-14 sm:space-y-4">
          <div className="pill-outline flex items-center gap-3 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4">
            <Mail size={18} className="shrink-0 opacity-80" />
            <a href={`mailto:${site.email}`} className="min-w-0 flex-1 break-all text-sm underline decoration-primary-foreground/30 underline-offset-4 transition hover:decoration-primary-foreground sm:break-normal sm:truncate sm:text-base">
              {site.email}
            </a>
            <button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"} title={copied ? "Copied" : "Copy email"} className="shrink-0 opacity-70 transition hover:opacity-100">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <ContactTile icon={Phone} label={site.phone} href={`tel:${site.phone.replace(/\s+/g, "")}`} />
            <ContactTile icon={Github} label={`@${site.githubUser}`} href={site.github} external />
            <ContactTile icon={Linkedin} label="LinkedIn" href={site.linkedin} external />
          </div>
        </motion.div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7 lg:px-10">
          <span className="font-semibold">{site.name}</span>
          <span className="opacity-60">Designed and built with care · 2026</span>
          <div className="flex gap-5">
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-70 transition hover:opacity-100"><Linkedin size={18} /></a>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="opacity-70 transition hover:opacity-100"><Github size={18} /></a>
            <a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="opacity-70 transition hover:opacity-100"><Youtube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactTile({
  icon: Icon,
  label,
  href,
  external = false,
}: {
  icon: typeof Mail
  label: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="pill-outline group flex items-center gap-3 rounded-2xl px-5 py-4 text-sm transition hover:bg-primary-foreground/25"
    >
      <Icon size={18} className="shrink-0 opacity-80" />
      <span className="min-w-0 flex-1 truncate">{label}</span>
      <ArrowUpRight size={15} className="shrink-0 opacity-0 transition group-hover:opacity-80" />
    </a>
  )
}
