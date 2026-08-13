"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"
import { InteractiveHeading } from "@/components/interactive-heading"

interface SectionBannerProps {
  title: string
  description?: string
}

export function SectionBanner({ title, description }: SectionBannerProps) {
  return (
    <motion.div variants={fadeUp} className="mb-8 text-center">
      <InteractiveHeading
        text={title}
        className="text-4xl text-white sm:text-5xl md:text-6xl"
      />
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
