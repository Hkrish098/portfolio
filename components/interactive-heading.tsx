"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function InteractiveHeading({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <h2 className={cn("flex flex-wrap justify-center font-semibold tracking-tight", className)}>
      {text.split("").map((char, index) =>
        char === " " ? (
          <span key={`space-${index}`} className="inline-block w-[0.28em]" aria-hidden>
            {"\u00A0"}
          </span>
        ) : (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block origin-center cursor-default"
            whileHover={{ scaleX: 1.16 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            {char}
          </motion.span>
        )
      )}
    </h2>
  )
}
