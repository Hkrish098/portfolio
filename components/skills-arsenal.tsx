"use client"

import { AreaChart, Container, GitBranch, Layers } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { staggerContainer, viewportOnce } from "@/lib/motion"
import { SectionBanner } from "@/components/section-banner"

const skills = [
  { name: "Python", src: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PyTorch", src: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
  { name: "TensorFlow", src: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "LangGraph", Icon: Layers },
  { name: "Scikit-Learn", src: "https://cdn.simpleicons.org/scikitlearn/F7931E" },
  { name: "NumPy", src: "https://cdn.simpleicons.org/numpy/4DABCF" },
  { name: "Pandas", src: "https://cdn.simpleicons.org/pandas/E70488" },
  { name: "Seaborn", Icon: AreaChart },
  { name: "Hugging Face", src: "https://cdn.simpleicons.org/huggingface/FFD21E" },
  { name: "Docker", Icon: Container },
  { name: "FastAPI", src: "https://cdn.simpleicons.org/fastapi/009688" },
  { name: "Git", Icon: GitBranch },
]

function SkillMark({ skill }: { skill: (typeof skills)[number] }) {
  return (
    <span className="flex flex-col items-center gap-2">
      {skill.Icon ? (
        <skill.Icon className="h-12 w-12 text-white/85 sm:h-14 sm:w-14" strokeWidth={1.4} />
      ) : (
        <img src={skill.src} alt="" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
      )}
      <span className="text-xs text-white/70 sm:text-sm">{skill.name}</span>
    </span>
  )
}

function VerticalColumn({
  items,
  reverse = false,
  duration = 22,
}: {
  items: typeof skills
  reverse?: boolean
  duration?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  const stack = (copy: number) => (
    <div key={copy} className="flex flex-col items-center gap-8 py-4">
      {items.map((skill) => (
        <span key={`${copy}-${skill.name}`}>
          <SkillMark skill={skill} />
        </span>
      ))}
    </div>
  )

  if (shouldReduceMotion) {
    return <div className="flex flex-col items-center gap-6">{stack(0)}</div>
  }

  return (
    <div className="relative h-[420px] overflow-hidden sm:h-[480px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black to-transparent" />
      <motion.div
        className="flex flex-col"
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {stack(0)}
        {stack(1)}
      </motion.div>
    </div>
  )
}

export function SkillsArsenal() {
  const colA = skills.slice(0, 4)
  const colB = skills.slice(4, 8)
  const colC = skills.slice(8)

  return (
    <section id="arsenal" className="scroll-mt-24 bg-black px-6 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionBanner
          title="Skills"
          description="The languages, models, and tools I reach for when shipping GenAI systems."
        />
        <div className="grid grid-cols-3 gap-4 sm:gap-10">
          <VerticalColumn items={colA} duration={20} />
          <VerticalColumn items={colB} reverse duration={24} />
          <VerticalColumn items={colC} duration={18} />
        </div>
      </motion.div>
    </section>
  )
}
