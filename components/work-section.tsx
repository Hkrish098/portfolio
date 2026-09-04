"use client"

import Image from "next/image"
import { Github, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { projects, reveal } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20 pt-12 sm:scroll-mt-24 sm:px-8 sm:pb-28 sm:pt-16 lg:px-10">
      <motion.div {...reveal}>
        <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl md:text-4xl">Featured Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
          <span className="md:hidden">Tap a project to open it.</span>
          <span className="hidden md:inline">Hover a project to read the details and open it.</span>
        </p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      {...reveal}
      className={cn(
        "glass-surface group relative overflow-hidden rounded-2xl border border-white/60 bg-secondary transition duration-500 md:rounded-[1.75rem] md:hover:-translate-y-1.5",
        project.wide && "md:col-span-2"
      )}
    >
      <div className={cn("relative w-full", project.wide ? "aspect-[16/10] md:aspect-[16/7]" : "aspect-[4/3]")}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.type}`}
          fill
          sizes={project.wide ? "(min-width: 768px) 1088px, 100vw" : "(min-width: 768px) 536px, 100vw"}
          className="object-cover transition duration-700 ease-out md:group-hover:scale-[1.04] md:group-hover:blur-[7px] md:group-hover:brightness-[.72]"
        />
      </div>

      <a href={project.demo} target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label={`View the ${project.title} project`} />

      <div className="glass-veil pointer-events-none absolute inset-0 z-20 transition duration-500 max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100" />

      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-5 transition duration-500 sm:p-6 md:p-10 max-md:opacity-100 md:opacity-0 md:group-hover:opacity-100">
        <div className="transition duration-500 max-md:translate-y-0 md:translate-y-3 md:group-hover:translate-y-0">
          <h3 className="max-w-xl text-balance text-xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-2xl md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/80 sm:text-[10px] md:text-[11px]">
            {project.type} · {project.metric}
          </p>
          <p className="mt-3 max-w-md text-xs leading-relaxed text-white/90 sm:text-sm">{project.text}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2.5 transition duration-500 max-md:translate-y-0 md:mt-0 md:translate-y-3 md:group-hover:translate-y-0 sm:gap-3">
          <span className="pill-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground sm:px-5 sm:py-2.5 sm:text-sm">
            View Project. <ArrowUpRight size={14} className="sm:h-[15px] sm:w-[15px]" />
          </span>
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="pill-outline pointer-events-auto relative z-40 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs text-white transition hover:bg-white/25 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <Github size={14} className="sm:h-[15px] sm:w-[15px]" /> Code
          </a>
        </div>
      </div>
    </motion.article>
  )
}
