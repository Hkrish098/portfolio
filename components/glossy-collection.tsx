"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { reveal } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

type CollectionItem = {
  title: string
  tag: string
  description: string
  image: string
  href: string
  wide?: boolean
  external?: boolean
  cta?: string
}

export function GlossyCollectionGrid({
  items,
  hintDesktop = "Hover a card to read the details.",
  hintMobile = "Tap a card to open it.",
}: {
  items: CollectionItem[]
  hintDesktop?: string
  hintMobile?: string
}) {
  return (
    <>
      <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
        <span className="md:hidden">{hintMobile}</span>
        <span className="hidden md:inline">{hintDesktop}</span>
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-6">
        {items.map((item) => (
          <GlossyCollectionCard key={item.title} item={item} />
        ))}
      </div>
    </>
  )
}

function GlossyCollectionCard({ item }: { item: CollectionItem }) {
  return (
    <motion.article
      {...reveal}
      className={cn(
        "glass-surface group relative overflow-hidden rounded-2xl border border-white/60 bg-secondary transition duration-500 md:rounded-[1.75rem] md:hover:-translate-y-1.5",
        item.wide && "md:col-span-2"
      )}
    >
      <div className={cn("relative w-full", item.wide ? "aspect-[16/10] md:aspect-[16/7]" : "aspect-[4/3]")}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes={item.wide ? "(min-width: 768px) 1088px, 100vw" : "(min-width: 768px) 536px, 100vw"}
          className="object-cover transition duration-700 ease-out md:group-hover:scale-[1.04] md:group-hover:blur-[7px] md:group-hover:brightness-[.72]"
        />
      </div>

      {item.external ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Open ${item.title}`}
        />
      ) : (
        <Link href={item.href} className="absolute inset-0 z-10" aria-label={`Open ${item.title}`} />
      )}

      <div className="glass-veil pointer-events-none absolute inset-0 z-20 transition duration-500 max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-5 sm:p-6 md:p-10 max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <div>
          <h3 className="max-w-xl text-balance text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl md:text-4xl">
            {item.title}
          </h3>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/80 sm:text-[10px] md:text-[11px]">
            {item.tag}
          </p>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-white/90 sm:text-sm">{item.description}</p>
        </div>

        <span className="pill-glass mt-4 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground sm:px-5 sm:py-2.5 sm:text-sm">
          {item.cta ?? "View details"} <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.article>
  )
}

export function CollectionPageIntro({
  backHref = "/about",
  backLabel = "Back to about",
  eyebrow,
  title,
  description,
}: {
  backHref?: string
  backLabel?: string
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 pt-24 sm:px-8 sm:pt-28 lg:px-10">
      <Link
        href={backHref}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </Link>
      <motion.div {...reveal} className="mt-8 max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-xs">{eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      </motion.div>
    </section>
  )
}
