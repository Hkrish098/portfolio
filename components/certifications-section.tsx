"use client"

import * as React from "react"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { SectionBanner } from "@/components/section-banner"

const certifications = [
  {
    tag: "Job Simulation",
    title: "Quantitative Research",
    issuer: "J.P. Morgan & Chase",
    href: "/certificates/JPMorganChase%26Co.png",
    tilt: -3.2,
  },
  {
    tag: "GenAI Professional",
    title: "OCI 2025 Certified",
    issuer: "Oracle",
    href: "/certificates/Oracle.png",
    tilt: 2.4,
  },
  {
    tag: "Specialization",
    title: "RAG Specialist",
    issuer: "Coursera / DeepLearning.AI",
    href: "/certificates/coursera.png",
    tilt: -1.6,
  },
  {
    tag: "Internship",
    title: "STEM Job Simulation",
    issuer: "Deloitte",
    href: "/certificates/Deloitte.png",
    tilt: 1.8,
  },
  {
    tag: "Automation",
    title: "RPA Developer",
    issuer: "UiPath",
    href: "/certificates/UI_path.png",
    tilt: -2.6,
  },
  {
    tag: "Virtual Internship",
    title: "Cloud Security",
    issuer: "Zscaler / EduSkills (AICTE)",
    href: "/certificates/Zscalar.png",
    tilt: 2.1,
  },
]

const shelves = [certifications.slice(0, 3), certifications.slice(3)]

function ShelfPlank() {
  return (
    <div className="relative mt-1">
      <div
        className="h-2.5 origin-bottom rounded-sm bg-gradient-to-b from-zinc-400/50 via-zinc-600/40 to-zinc-800"
        style={{ transform: "perspective(180px) rotateX(52deg)" }}
      />
      <div className="h-3.5 rounded-b-[3px] bg-gradient-to-b from-[#2a2a2a] to-[#0c0c0c] shadow-[0_18px_28px_rgba(0,0,0,0.7)] ring-1 ring-white/10" />
      <div className="pointer-events-none absolute inset-x-10 -bottom-2 h-4 bg-primary/15 blur-md" />
    </div>
  )
}

function CertificateFrame({
  cert,
}: {
  cert: (typeof certifications)[number]
}) {
  return (
    <a
      href={cert.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-[min(100%,240px)] flex-col items-center"
    >
      <div
        className="cert-lean w-full"
        style={{ ["--tilt" as string]: `${cert.tilt}deg` }}
      >
        <div className="overflow-hidden rounded-[4px] border border-white/15 bg-[#0a0a0a] shadow-[0_22px_36px_rgba(0,0,0,0.55),0_2px_0_rgba(255,255,255,0.06)] ring-1 ring-black/40">
          <div className="relative aspect-[5/4]">
            <img
              src={cert.href}
              alt={cert.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                {cert.tag}
              </p>
              <p className="mt-1 text-sm font-semibold leading-tight text-white">
                {cert.title}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 transition group-hover:text-white/70">
          {cert.issuer}
        </p>
      </div>
      <ExternalLink className="absolute -right-1 -top-1 h-3.5 w-3.5 text-white/0 transition group-hover:text-primary" />
    </a>
  )
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 bg-black px-6 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionBanner
          title="Verified Certifications"
          description="Credentials that sit behind the work — cloud, retrieval, automation, and applied research."
        />

        <div className="space-y-14">
          {shelves.map((row, shelfIndex) => (
            <motion.div key={shelfIndex} variants={fadeUp} className="relative">
              <div className="flex items-end justify-center gap-6 px-2 pb-1 sm:gap-10">
                {row.map((cert) => (
                  <CertificateFrame key={cert.title} cert={cert} />
                ))}
              </div>
              <ShelfPlank />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
