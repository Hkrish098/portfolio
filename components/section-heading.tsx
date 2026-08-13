"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  description?: string
}

export function SectionHeading({
  index,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div variants={fadeUp} className="mb-12 max-w-2xl space-y-4">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
        {index} — {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
