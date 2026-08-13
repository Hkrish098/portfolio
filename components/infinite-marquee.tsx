"use client"

import { motion, useReducedMotion } from "framer-motion"

const STRIP_A = [
  "Large Language Models (LLMs)",
  "Retrieval-Augmented Generation (RAG)",
  "Agentic Workflows",
  "Machine Learning",
  "Vector Databases",
  "Prompt Engineering",
]

const STRIP_B = [
  "Deep Learning",
  "Generative AI",
  "Model Fine-tuning",
  "PyTorch",
  "LangGraph",
  "Neural Networks",
]

function MarqueeTrack({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item) => (
        <span key={item} className="flex items-center gap-8">
          <span className="whitespace-nowrap font-mono text-xs uppercase tracking-[0.22em] text-white sm:text-sm">
            {item}
          </span>
          <span className="text-white/50" aria-hidden>
            •
          </span>
        </span>
      ))}
    </div>
  )
}

function MarqueeStrip({
  items,
  reverse = false,
  duration = 32,
}: {
  items: string[]
  reverse?: boolean
  duration?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="overflow-hidden border-y border-white/30 bg-black/70 py-3.5 backdrop-blur-md sm:py-4">
      {shouldReduceMotion ? (
        <div className="flex flex-wrap items-center justify-center gap-x-6 px-6">
          {items.map((item) => (
            <span
              key={item}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/80"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex w-max"
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ duration, ease: "linear", repeat: Infinity }}
        >
          <MarqueeTrack items={items} />
          <MarqueeTrack items={items} />
        </motion.div>
      )}
    </div>
  )
}

function Strips() {
  return (
    <div className="flex w-[145%] flex-col gap-3 -translate-x-[15%]">
      <div className="-rotate-[4deg]">
        <MarqueeStrip items={STRIP_A} duration={34} />
      </div>
      <div className="rotate-[3deg]">
        <MarqueeStrip items={STRIP_B} reverse duration={38} />
      </div>
    </div>
  )
}

export function DualMarquee({
  placement = "overlay",
}: {
  placement?: "overlay" | "section"
}) {
  if (placement === "section") {
    return (
      <div className="relative overflow-hidden bg-black py-8 sm:py-10">
        <Strips />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 overflow-hidden py-3">
      <Strips />
    </div>
  )
}
