"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { SectionBanner } from "@/components/section-banner"

const pieces = [
  {
    kind: "Published · 2025",
    title: "AI Image Protection Using Data Poisoning",
    description:
      "A study on adversarial machine learning and protecting digital assets using blockchain-secured PSNR methodologies.",
    href: "/research_paper.pdf",
    cta: "Read Paper",
    tilt: -2.4,
  },
  {
    kind: "Technical Blog · 2025",
    title: "The Agentic Gauntlet",
    description:
      "Chronicling the journey from a master librarian retrieval core to active, problem-solving concierge agents in LLM chatbots.",
    href: "https://nexora-sentiobot.hashnode.dev/the-agentic-gauntlet-from-amnesia-to-autonomy-in-llm-chatbots",
    cta: "Read on Hashnode",
    tilt: 2.1,
  },
]

function PaperCard({
  piece,
}: {
  piece: (typeof pieces)[number]
}) {
  return (
    <motion.div variants={fadeUp}>
      <a
        href={piece.href}
        target="_blank"
        rel="noopener noreferrer"
        className="paper-sheet group relative block"
        style={{ ["--paper-tilt" as string]: `${piece.tilt}deg` }}
      >
        <span className="paper-back" aria-hidden />
        <span className="paper-pin" aria-hidden />
        <article className="paper-face">
          <span className="paper-fold" aria-hidden />
          <span className="inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
            {piece.kind}
          </span>
          <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-100">
            {piece.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
            {piece.description}
          </p>
          <span className="mt-8 inline-flex items-center gap-1.5 text-sm text-primary transition group-hover:text-sky-200">
            {piece.cta}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </article>
      </a>
    </motion.div>
  )
}

export function InsightsSection() {
  return (
    <section id="insights" className="scroll-mt-24 bg-black px-6 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionBanner
          title="Insights & Research"
          description="Papers and field notes from shipping retrieval systems, adversarial defenses, and agent memory."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {pieces.map((piece) => (
            <PaperCard key={piece.title} piece={piece} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
