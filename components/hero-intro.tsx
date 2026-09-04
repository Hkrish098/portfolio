"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, FileText } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { focusAreas, projects } from "@/lib/portfolio-data"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const collage = [
  { project: projects[0], className: "left-[8%] top-[6%] z-20 w-[42%] -rotate-[4deg]" },
  { project: projects[1], className: "right-[4%] top-[14%] z-30 w-[34%] rotate-[3deg]" },
  { project: projects[2], className: "left-[18%] bottom-[10%] z-10 w-[30%] rotate-[2deg]" },
  { project: projects[3], className: "right-[10%] bottom-[4%] z-20 w-[44%] -rotate-[2deg]" },
] as const

export function HeroIntro() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="intro" className="hero-dark relative min-h-[100dvh] overflow-hidden text-white">
      <div className="hero-noise pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(31,107,92,0.12),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-gradient-to-l from-black/20 via-transparent to-transparent lg:block" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center gap-10 px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:grid lg:min-h-[100dvh] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10 lg:px-10 lg:pb-20 lg:pt-24">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-xl"
        >
          <h1 className="text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            {site.name}
          </h1>
          <p className="mt-3 text-lg text-white/72 sm:text-xl md:text-2xl">
            Machine Learning & Generative AI Engineer
          </p>

          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-white/58 sm:mt-8 sm:text-base md:text-[1.05rem]">
            I specialize in Generative AI, RAG architectures, and agentic workflows — building intelligent systems
            with Python and modern ML stacks, with a focus on prompt engineering, adversarial ML, and production
            deployment.
          </p>

          <div className="mt-8 sm:mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/38 sm:text-[11px]">
              What I work in
            </p>
            <ul className="mt-3 space-y-1.5 text-base font-semibold tracking-tight sm:mt-4 sm:space-y-2 sm:text-lg md:text-xl">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#0f1412] transition hover:gap-3 sm:w-auto sm:py-3"
            >
              View Projects <ArrowUpRight size={16} />
            </Link>
            <Link
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white/88 transition hover:border-white/45 hover:text-white sm:w-auto sm:py-3"
            >
              View Resume <FileText size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden min-h-[520px] lg:block"
          aria-hidden
        >
          {collage.map(({ project, className }, index) => (
            <div
              key={project.title}
              className={cn(
                "hero-collage-item absolute overflow-hidden rounded-2xl border border-white/10 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.85)]",
                className
              )}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <Image
                src={project.image}
                alt=""
                width={640}
                height={420}
                className="aspect-[4/3] h-full w-full object-cover brightness-[0.82] saturate-[0.65] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative z-10 -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-[78%] shrink-0 snap-center overflow-hidden rounded-xl border border-white/10 sm:min-w-[52%]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={480}
                height={320}
                className="aspect-[4/3] w-full object-cover brightness-[0.78] saturate-[0.6]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
