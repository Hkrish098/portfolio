"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { ContactFooter } from "@/components/contact-footer"
import { SiteHeader } from "@/components/site-header"
import {
  achievements,
  education,
  experience,
  resources,
  reveal,
  services,
  skills,
} from "@/lib/portfolio-data"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
            <motion.div {...reveal} className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-secondary">
                <Image
                  src="/krishna_professional.jpg"
                  alt="Krishna H"
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover object-top grayscale transition duration-700 hover:grayscale-0"
                />
              </div>
            </motion.div>

            <motion.div {...reveal}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">About</p>
              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">About Me</h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:mt-7 sm:space-y-5 sm:text-lg">
                <p>
                  I am a <span className="font-medium text-foreground">Machine Learning & Generative AI Engineer</span> based in Bengaluru, currently at{" "}
                  <span className="font-medium text-foreground">Tatvaops by EROEI Tech</span>, where I build production systems that people depend on day to day.
                </p>
                <p>
                  My work spans Generative AI, RAG architectures, and agentic workflows — from fleet optimization and retrieval-native assistants to vision pipelines and adversarial ML research.
                </p>
                <p>
                  I hold a <span className="font-medium text-foreground">CGPA of 9.01</span> in Computer Science, with supplementary experience in blockchain applications and full-stack deployment, always aiming for scalable, AI-driven solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <AboutBlock title="Experience">
            <div className="space-y-10">
              {experience.map((item) => (
                <div key={`${item.role}-${item.period}`}>
                  <h3 className="text-lg font-semibold tracking-tight">{item.company}</h3>
                  <p className="mt-1 text-muted-foreground">{item.role}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                    {item.period} · {item.location}
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AboutBlock>

          <AboutBlock title="Education">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{education.degree}</h3>
              <p className="mt-1 text-muted-foreground">{education.school}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                {education.period} · {education.score}
              </p>
            </div>
          </AboutBlock>

          <AboutBlock title="My Services">
            <div className="space-y-9">
              {services.map((service) => (
                <div key={service.title}>
                  <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{service.text}</p>
                </div>
              ))}
            </div>
          </AboutBlock>

          <AboutBlock title="My Toolkit">
            <div className="flex flex-wrap gap-x-5 gap-y-4">
              {skills.map(([skill, icon, color]) => (
                <a
                  key={skill}
                  href={`${site.github}/search?q=${encodeURIComponent(skill)}&type=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="skill-pill group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-3.5 py-2 text-sm transition hover:text-primary"
                >
                  <span className="flex size-5 items-center justify-center">
                    {icon ? (
                      <img src={`https://cdn.simpleicons.org/${icon}/${color}`} alt="" className="size-full object-contain" />
                    ) : (
                      <span className="font-mono text-[9px] font-semibold text-primary">AI</span>
                    )}
                  </span>
                  {skill}
                </a>
              ))}
            </div>
          </AboutBlock>

          <AboutBlock title="Achievements">
            <ul className="space-y-3 text-muted-foreground">
              {achievements.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </AboutBlock>

          <AboutBlock title="More to Explore" wide>
            <div className="grid gap-8 sm:grid-cols-3">
              {resources.map(({ icon: Icon, title, text, href }) => (
                <a key={title} href={href} className="group border-t border-border pt-5">
                  <Icon className="text-primary" size={22} />
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">
                    {title}
                    <ArrowUpRight className="ml-1.5 inline transition group-hover:-translate-y-1 group-hover:translate-x-1" size={16} />
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{text}</p>
                </a>
              ))}
            </div>
          </AboutBlock>
        </section>
      </main>
      <ContactFooter />
    </div>
  )
}

function AboutBlock({
  title,
  children,
  wide = false,
}: {
  title: string
  children: ReactNode
  wide?: boolean
}) {
  return (
    <motion.div
      {...reveal}
      className={cn(
        "mt-16 gap-6 border-t border-border pt-10 sm:mt-24 sm:gap-8 sm:pt-12 md:mt-28",
        wide ? "block" : "grid lg:grid-cols-[0.75fr_1fr] lg:gap-20"
      )}
    >
      <h2 className={cn("text-xl font-semibold tracking-[-0.03em] sm:text-2xl md:text-3xl", wide && "mb-8 sm:mb-10")}>{title}</h2>
      <div>{children}</div>
    </motion.div>
  )
}
