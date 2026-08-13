"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { InteractiveHeading } from "@/components/interactive-heading"

const contributions = [
  {
    name: "TatvaConnect",
    tag: "Fleet Optimization & AI",
    detail:
      "Optimized logistics using ML and integrated LLMs for conversational weight calculations. Deployed SAM for object detection and configured MCP. Automated CI/CD via GitHub Actions for Vercel/Render.",
  },
  {
    name: "Quotes-Comparison",
    tag: "Data Analysis",
    detail:
      "Engineered a VLM-driven system to evaluate quotations. Built dynamic data pipelines into Supabase for Pandas analysis.",
  },
  {
    name: "Property Recommender Chatbot",
    tag: "Conversational AI",
    detail:
      "Developed a custom RAG conversational AI utilizing a hybrid SLM/VLM architecture with strict prompt engineering.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 bg-black px-6 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="mb-8 text-center">
          <InteractiveHeading
            text="Professional Experience"
            className="text-4xl text-white sm:text-5xl md:text-6xl"
          />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
            Shipping production GenAI systems — from fleet optimization to retrieval-native chat.
          </p>
        </motion.div>

        <motion.article
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f0f] p-6 sm:p-10 glow-border"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
            <div className="space-y-3 border-b border-white/8 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                Feb 2026 — Present
              </p>
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                AI/ML (GenAI) Intern
              </h3>
              <p className="text-sm text-zinc-300">
                Tatvaops by EROEI Tech Pvt Ltd
              </p>
              <p className="font-mono text-xs text-zinc-500">Bengaluru, KA</p>
            </div>

            <div className="relative space-y-4">
              <span className="absolute left-[7px] top-3 bottom-3 hidden w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent sm:block" />

              {contributions.map((item) => (
                <div
                  key={item.name}
                  className="relative rounded-xl border border-white/6 bg-white/[0.02] p-5 transition duration-300 hover:border-primary/30 hover:bg-primary/[0.04] sm:pl-8"
                >
                  <span className="absolute left-0 top-7 hidden h-2.5 w-2.5 -translate-x-[18px] rounded-full border border-primary bg-[#0f0f0f] shadow-[0_0_12px_rgba(34,211,238,0.8)] sm:block" />
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h4 className="text-base font-medium text-zinc-100">
                      {item.name}
                    </h4>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </motion.div>
    </section>
  )
}
