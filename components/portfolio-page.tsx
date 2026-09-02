"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { ArrowUpRight, BookOpen, BriefcaseBusiness, FileText, Github, Linkedin, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { site } from "@/lib/site"

const projects = [
  { title: "AI Procurement Price Intelligence", type: "ML / Forecasting", text: "A Random Forest system trained on 8,300+ supply chain records, paired with MCP-connected market signals for practical procurement decisions.", metric: "R² 0.85", href: "https://github.com/Hkrish098/supply-chain-price-prediction" },
  { title: "Mirage", type: "Responsible AI", text: "An adversarial image protection pipeline using data poisoning and blockchain-secured workflows to disrupt unauthorized model training.", metric: "36.33 dB PSNR", href: "https://github.com/Hkrish098/Mirage" },
  { title: "Sentio Bot", type: "RAG / Conversational AI", text: "A retrieval-native assistant for domain knowledge, tuned for high-confidence answers with strict prompt engineering and measurable retrieval quality.", metric: "98% hit rate", href: "https://github.com/Hkrish098/NEXORA-DIGITAL-SENSIOBOT" },
  { title: "OCI Prompt Playground", type: "Generative AI", text: "An interactive lab for testing token efficiency, prompt patterns, and agentic workflows with OCI Generative AI.", metric: "Agentic workflows", href: "https://github.com/Hkrish098/oci-prompt-playground" },
]

const skills = ["Python", "PyTorch", "Scikit-learn", "LangChain", "RAG", "LLMs", "Computer Vision", "MLOps", "FastAPI", "Supabase", "Docker", "GitHub Actions"]

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <button aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="fixed left-5 top-5 z-50 flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <div className="fixed right-6 top-7 z-40 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground sm:block">Krishna H / AIML Engineer</div>
      {menuOpen && <>
        <button aria-label="Close menu overlay" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-30 bg-foreground/10 backdrop-blur-sm" />
        <motion.aside initial={{ x: -320 }} animate={{ x: 0 }} exit={{ x: -320 }} className="fixed inset-y-0 left-0 z-40 flex w-[min(88vw,22rem)] flex-col border-r border-border bg-card px-8 pb-10 pt-28 shadow-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Navigate</p>
          <nav className="mt-8 flex flex-col gap-4 text-2xl font-medium tracking-tight">
            {["About", "Experience", "Projects", "Skills", "Research", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="transition hover:text-primary">{item}</a>)}
          </nav>
          <div className="mt-auto flex flex-col gap-4 border-t border-border pt-6 text-sm">
            <a href={site.resume} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><FileText size={17} /> Resume</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Linkedin size={17} /> LinkedIn</a>
            <a href={site.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Github size={17} /> GitHub</a>
          </div>
        </motion.aside>
      </>}

      <main>
        <section id="about" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Software Engineer · Applied ML</p>
              <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">Building useful intelligence for the real world.</h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">I&apos;m Krishna H, an AIML engineer focused on making machine learning systems reliable, understandable, and ready to ship.</p>
              <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:gap-3">Explore my work <ArrowUpRight size={16} /></a><a href={site.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-8 hover:text-primary">View resume <FileText size={16} /></a></div>
              <div className="mt-16 flex gap-8 border-t border-border pt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"><span>Bengaluru, India</span><span>Open to opportunities</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] border border-primary/20" /><div className="relative overflow-hidden rounded-[1.5rem] bg-secondary"><Image src="/krishna_professional.jpg" alt="Krishna H, software engineer specializing in machine learning" width={900} height={1100} priority className="aspect-[4/5] w-full object-cover object-top grayscale-[20%] transition duration-700 hover:scale-[1.03]" /></div><p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Curiosity in, systems out.</p>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="border-t border-border bg-secondary/40 px-6 py-28 sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><SectionLabel text="01 / Experience" /><div className="mt-12 grid gap-10 lg:grid-cols-[.35fr_1fr]"><div><p className="font-mono text-sm text-primary">Feb 2026 — Present</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">AI/ML (GenAI) Intern</h2><p className="mt-2 text-muted-foreground">Tatvaops by EROEI Tech</p><p className="mt-1 text-sm text-muted-foreground">Bengaluru, KA</p></div><div className="max-w-2xl border-l border-border pl-6 sm:pl-10"><p className="text-xl leading-relaxed text-foreground/80">I work across production-grade AI systems, from fleet optimization and conversational calculations to vision models, MCP integrations, and automated delivery pipelines.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{["Production GenAI", "Computer Vision", "CI / CD"].map((item) => <div key={item} className="border-t border-primary pt-3 text-sm font-medium">{item}</div>)}</div></div></div></div></section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-28 sm:px-10 lg:px-16"><SectionLabel text="02 / Selected projects" /><div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">{projects.map((project, index) => <motion.a whileHover={{ y: -6 }} transition={{ duration: .25 }} href={project.href} target="_blank" rel="noreferrer" key={project.title} className="group border-t border-border pt-5"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">0{index + 1} · {project.type}</p><h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3></div><ArrowUpRight className="text-muted-foreground transition group-hover:text-primary" /></div><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{project.text}</p><p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-foreground/60">{project.metric}</p></motion.a>)}</div></section>

        <section id="skills" className="border-y border-border bg-secondary/40 px-6 py-24 sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><SectionLabel text="03 / Skills & GitHub" /><div className="mt-10 flex flex-wrap gap-3">{skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-background px-4 py-2 text-sm transition hover:border-primary hover:text-primary">{skill}</span>)}</div><a href={site.github} target="_blank" rel="noreferrer" className="mt-12 flex max-w-xl items-center justify-between border-t border-border pt-5 text-lg font-medium transition hover:text-primary"><span><Github className="mr-3 inline" size={19} />See my open-source work</span><ArrowUpRight size={19} /></a></div></section>

        <section id="research" className="mx-auto max-w-6xl px-6 py-28 sm:px-10 lg:px-16"><SectionLabel text="04 / More to explore" /><div className="mt-12 grid gap-8 md:grid-cols-3"><Resource icon={<BriefcaseBusiness />} title="Certifications" text="Credentials across cloud, AI, and modern engineering practice." /><Resource icon={<FileText />} title="Technical papers" text="Research and experiments exploring responsible, secure machine learning." href="/research_paper.pdf" /><Resource icon={<BookOpen />} title="Notes & blog" text="Writing about models, systems, and the lessons between them." /></div></section>

        <section id="contact" className="bg-primary px-6 py-24 text-primary-foreground sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">05 / Contact</p><h2 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl">Let&apos;s build something thoughtful.</h2><a href={`mailto:${site.email}`} className="mt-10 inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-2 text-lg hover:border-primary-foreground">{site.email} <ArrowUpRight size={18} /></a></div></section>
      </main>
      <footer className="flex flex-col gap-5 bg-foreground px-6 py-8 text-background sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"><span className="font-semibold">Krishna H</span><span className="text-sm opacity-60">Designed and built with care · {new Date().getFullYear()}</span><div className="flex gap-5"><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a></div></footer>
    </div>
  )
}

function SectionLabel({ text }: { text: string }) { return <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{text}</p> }
function Resource({ icon, title, text, href }: { icon: ReactNode; title: string; text: string; href?: string }) {
  const content = <><div className="text-primary">{icon}</div><h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}{href && <ArrowUpRight className="ml-2 inline transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></>
  return href ? <a href={href} className="group border-t border-border pt-5">{content}</a> : <div className="group border-t border-border pt-5">{content}</div>
}
