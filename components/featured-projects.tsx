"use client"

import * as React from "react"
import {
  ArrowUpRight,
  Cloud,
  Code2,
  DollarSign,
  LineChart,
  Package,
  Shield,
  Sparkles,
  TrendingUp,
  Truck,
} from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { SectionBanner } from "@/components/section-banner"
import { TiltCard } from "@/components/tilt-card"
import { ViewMoreButton } from "@/components/view-more-button"

type Project = {
  title: string
  description: string
  preview: "mirage" | "sentio" | "supply" | "oci"
  github: string
  live?: string
}

const projects: Project[] = [
  {
    title: "AI Procurement Price Intelligence",
    description:
      "Trained a Random Forest model (R2: 0.85, RMSE: $26.19) on 8,300+ supply chain records. MCP unifies weather, news, and financial APIs for Groq-driven market forecasting.",
    preview: "supply",
    github: "https://github.com/Hkrish098/supply-chain-price-prediction",
    live: "https://github.com/Hkrish098/supply-chain-price-prediction",
  },
  {
    title: "Mirage",
    description:
      "AI image protection using data poisoning, achieving 36.33 dB PSNR with blockchain-secured adversarial pipelines that disrupt unauthorized model training.",
    preview: "mirage",
    github: "https://github.com/Hkrish098/Mirage",
  },
  {
    title: "Sentio Bot",
    description:
      "RAG chatbot with 95% accuracy, 80% hallucination reduction, and a 98% retrieval hit rate on domain-specific knowledge bases.",
    preview: "sentio",
    github: "https://github.com/Hkrish098/NEXORA-DIGITAL-SENSIOBOT",
  },
  {
    title: "OCI Prompt Playground",
    description:
      "Interactive environment to test token efficiency and agentic prompt templates within OCI Generative AI.",
    preview: "oci",
    github: "https://github.com/Hkrish098/oci-prompt-playground",
  },
]

function Preview({ type }: { type: Project["preview"] }) {
  if (type === "supply") {
    return (
      <div className="relative h-64 overflow-hidden bg-[#120c04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.28),transparent_58%)]" />
        <motion.div
          className="absolute -right-6 top-8 text-orange-300/25"
          animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Truck className="h-24 w-24" strokeWidth={1} />
        </motion.div>
        <div className="absolute right-5 top-5 flex gap-2 text-orange-300/85">
          <TrendingUp className="h-5 w-5" />
          <Cloud className="h-5 w-5" />
          <DollarSign className="h-5 w-5" />
          <Package className="h-5 w-5" />
        </div>
        <div className="absolute inset-x-8 bottom-14 flex h-24 items-end gap-1.5">
          {[42, 58, 36, 74, 61, 90, 68, 96, 62, 82, 50, 88].map((height, index) => (
            <motion.span
              key={index}
              className="flex-1 rounded-sm bg-gradient-to-t from-orange-700 to-orange-300"
              animate={{ height: [`${height * 0.4}%`, `${height}%`, `${height * 0.52}%`] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.09, ease: "easeInOut" }}
            />
          ))}
        </div>
        <div className="relative z-10 p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-orange-300/70">
            // live market forecast
          </p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
            Procurement<span className="text-orange-400">_AI</span>
            <span className="ml-1 inline-block h-6 w-2 animate-pulse bg-orange-400" />
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-400/30 px-2.5 py-1 font-mono text-[10px] text-orange-200">
              <LineChart className="h-3 w-3" /> R² 0.85
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1 font-mono text-[10px] text-white/70">
              <Sparkles className="h-3 w-3" /> MCP + Groq
            </span>
          </div>
        </div>
      </div>
    )
  }

  if (type === "mirage") {
    return (
      <div className="relative h-64 overflow-hidden bg-[#07070c]">
        <img src="/clean-ai-image.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-90" />
        <motion.img
          src="/adversarial-poisoned-image.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ clipPath: ["inset(0 58% 0 0)", "inset(0 18% 0 0)", "inset(0 58% 0 0)"] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        <motion.div
          className="absolute right-5 top-5 text-sky-300"
          animate={{ rotate: [0, -12, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield className="h-7 w-7" />
        </motion.div>
        <div className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
          Clean
        </div>
        <div className="absolute right-14 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-sky-300/80">
          Poisoned
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-sky-300/80">
            // adversarial defense
          </p>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white">
            Mirage<span className="ml-1 inline-block h-6 w-2 animate-pulse bg-sky-400" />
          </p>
          <p className="mt-1 font-mono text-[11px] text-white/55">36.33 dB PSNR · data poisoning</p>
        </div>
      </div>
    )
  }

  const isSentio = type === "sentio"
  const lines = isSentio
    ? ["> sentio --query analyze", "> RAG pipeline ready", "> hit rate 98%"]
    : ["> oci_ai --prompt check", "> token efficiency 98.4%", "> execution: success"]

  return (
    <div className="relative h-64 overflow-hidden bg-[#05080a] p-6 font-mono text-[12px] text-emerald-300/90">
      <div className="mb-4 flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
      </div>
      <p className="text-white/40">{isSentio ? "// agentic support core" : "// oci genai lab"}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
        {isSentio ? "Sentio" : "OCI Play"}
        <span className="ml-1 inline-block h-6 w-2 animate-pulse bg-emerald-400" />
      </p>
      <div className="mt-6 space-y-1 text-sky-300/80">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard className="overflow-hidden rounded-[2rem] bg-[#141414]">
      <Preview type={project.preview} />
      <div className="space-y-4 p-6 sm:p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-white/55">{project.description}</p>
        <div className="flex flex-wrap gap-5 pt-1 text-sm text-white">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-sky-300"
            >
              <ArrowUpRight className="h-4 w-4" /> Live App
            </a>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-sky-300"
          >
            <Code2 className="h-4 w-4" /> Repo link
          </a>
        </div>
      </div>
    </TiltCard>
  )
}

export function FeaturedProjects() {
  const [open, setOpen] = React.useState(false)
  const primary = projects.slice(0, 2)
  const extra = projects.slice(2)

  return (
    <section id="work" className="scroll-mt-24 bg-black px-6 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionBanner
          title="Featured Projects"
          description="A mix of products, experiments, and client-style builds where I focus on practical AI workflows, clean engineering, and experiences that feel smooth in real use."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {primary.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
          {open
            ? extra.map((project) => (
                <div key={project.title}>
                  <ProjectCard project={project} />
                </div>
              ))
            : null}
        </div>

        <div className="mt-8 flex justify-center">
          <ViewMoreButton open={open} onClick={() => setOpen((value) => !value)} />
        </div>
      </motion.div>
    </section>
  )
}
