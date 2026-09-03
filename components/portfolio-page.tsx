"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Check, Copy, FileText, Github, Link2, Linkedin, Mail, Menu, Phone, X, Youtube } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { site } from "@/lib/site"

const projects = [
  { title: "AI Procurement Price Intelligence", type: "ML / Forecasting", text: "A Random Forest system trained on 8,300+ supply chain records, paired with MCP-connected market signals for practical procurement decisions.", metric: "R² 0.85", href: "https://github.com/Hkrish098/supply-chain-price-prediction", demo: "https://supply-chain-price-prediction.vercel.app" },
  { title: "Mirage", type: "Responsible AI", text: "An adversarial image protection pipeline using data poisoning and blockchain-secured workflows to disrupt unauthorized model training.", metric: "36.33 dB PSNR", href: "https://github.com/Hkrish098/Mirage", demo: "https://mirage-ai.vercel.app" },
  { title: "Sentio Bot", type: "RAG / Conversational AI", text: "A retrieval-native assistant for domain knowledge, tuned for high-confidence answers with strict prompt engineering and measurable retrieval quality.", metric: "98% hit rate", href: "https://github.com/Hkrish098/NEXORA-DIGITAL-SENSIOBOT", demo: "https://nexora-sentiobot.vercel.app" },
  { title: "OCI Prompt Playground", type: "Generative AI", text: "An interactive lab for testing token efficiency, prompt patterns, and agentic workflows with OCI Generative AI.", metric: "Agentic workflows", href: "https://github.com/Hkrish098/oci-prompt-playground", demo: "https://oci-prompt-playground.vercel.app" },
]

const skills = ["Python", "SQL", "FastAPI", "Node.js", "TypeScript", "C++", "Streamlit", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenCV", "RAG", "Agentic AI", "Prompt Engineering", "LangChain", "LangGraph", "Vector Databases", "Memory Engineering", "MLOps", "Git", "GitHub Actions", "Docker", "CI/CD", "VS Code", "Jupyter Notebook", "Google Colab", "UiPath"]

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <button aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="fixed left-5 top-5 z-50 flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
      {menuOpen ? <motion.div>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-label="Close menu overlay" onClick={() => setMenuOpen(false)} className="fixed inset-0 z-30 cursor-default bg-foreground/10 backdrop-blur-md" />
        <motion.aside initial={{ opacity: 0, scale: .92, x: -40, y: -24 }} animate={{ opacity: 1, scale: 1, x: 0, y: 0 }} exit={{ opacity: 0, scale: .94, x: -24, y: -16 }} transition={{ type: "spring", stiffness: 240, damping: 24 }} role="dialog" aria-modal="true" className="fixed left-4 top-4 z-40 flex max-h-[calc(100dvh-2rem)] w-[min(88vw,23rem)] flex-col overflow-hidden rounded-[2.5rem] border border-white/60 bg-background/75 px-8 pb-10 pt-28 shadow-2xl shadow-foreground/15 backdrop-blur-2xl sm:left-6 sm:top-6">
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
      </motion.div> : null}
      </AnimatePresence>

      <main>
        <section id="about" className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-20 pt-24 sm:px-10 lg:px-16">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">AI Engineer · Applied ML</p>
              <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]"><span className="hero-word">Building</span> <span className="hero-word">useful</span> <span className="hero-word">intelligence</span> <span className="hero-word">for the</span> <span className="hero-word">real world.</span></h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">I&apos;m Krishna H, an AI Engineer focused on making machine learning systems reliable, understandable, and ready to ship.</p>
              <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:gap-3">Explore my work <ArrowUpRight size={16} /></a><a href={site.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium underline decoration-border underline-offset-8 hover:text-primary">View resume <FileText size={16} /></a></div>
              <div className="mt-16 flex gap-8 border-t border-border pt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"><span>Bengaluru, India</span><span>Open to opportunities</span></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] border border-primary/20" /><div className="relative overflow-hidden rounded-[1.5rem] bg-secondary"><Image src="/krishna_professional.jpg" alt="Krishna H, software engineer specializing in machine learning" width={900} height={1100} priority className="aspect-[4/5] w-full object-cover object-top grayscale-[20%] transition duration-700 hover:scale-[1.03]" /></div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="border-t border-border bg-secondary/40 px-6 py-28 sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><SectionLabel text="01 / Experience" /><div className="mt-12 grid gap-10 lg:grid-cols-[.35fr_1fr]"><div><p className="font-mono text-sm text-primary">Jul 2026 — Present</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">AI Engineer</h2><p className="mt-2 text-muted-foreground">Tatvaops by EROEI Tech Pvt Ltd</p><p className="mt-2 text-sm text-muted-foreground">Previously AI/ML (GenAI) Intern · Feb — Jul 2026</p><p className="mt-1 text-sm text-muted-foreground">Bengaluru, KA</p></div><div className="max-w-2xl border-l border-border pl-6 sm:pl-10"><p className="text-xl leading-relaxed text-foreground/80">As an AI Engineer, I build and ship production GenAI systems across fleet optimization, conversational calculation, vision, and data analysis. My work includes TatvaConnect, SAM object detection, MCP API integrations, VLM-driven quotation analysis, Supabase pipelines, cron jobs, and GitHub Actions deployments across Vercel and Render.</p></div></div></div></section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-28 sm:px-10 lg:px-16"><SectionLabel text="02 / Selected projects" /><div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">{projects.map((project, index) => <motion.div whileHover={{ y: -6 }} transition={{ duration: .25 }} key={project.title} className="group border-t border-border pt-5"><div className="flex items-start justify-between gap-4"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">0{index + 1} · {project.type}</p><h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3></div><ArrowUpRight className="text-muted-foreground transition group-hover:text-primary" /></div><p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">{project.text}</p><div className="mt-6 flex flex-wrap items-center gap-4"><p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/60">{project.metric}</p><span className="ml-auto flex items-center gap-3"><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`} className="text-foreground transition hover:text-primary"><Github size={18} /></a><a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`} className="text-primary transition hover:text-foreground"><Link2 size={18} /></a></span></div></motion.div>)}</div></section>

        <section id="skills" className="border-y border-border bg-secondary/40 px-6 py-24 sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><SectionLabel text="03 / Skills & GitHub" /><div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">{skills.map((skill, index) => <a key={skill} href={`${site.github}/search?q=${encodeURIComponent(skill)}&type=repositories`} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm transition hover:text-primary"><span className="font-mono text-[10px] tracking-[0.12em] text-primary/70">{String(index + 1).padStart(2, "0")}</span><span className="size-1.5 rounded-full bg-border transition group-hover:bg-primary" />{skill}</a>)}</div><a href={site.github} target="_blank" rel="noreferrer" className="mt-12 flex max-w-xl items-center justify-between border-t border-border pt-5 text-lg font-medium transition hover:text-primary"><span><Github className="mr-3 inline" size={19} />See my open-source work</span><ArrowUpRight size={19} /></a></div></section>

        <section id="research" className="mx-auto max-w-6xl px-6 py-28 sm:px-10 lg:px-16"><SectionLabel text="04 / More to explore" /><div className="mt-12 grid gap-8 md:grid-cols-3"><Resource icon={<BriefcaseBusiness />} title="Certifications" text="Credentials across cloud, AI, and modern engineering practice." href="/certifications" /><Resource icon={<FileText />} title="Technical papers" text="Research and experiments exploring responsible, secure machine learning." href="/research_paper.pdf" /><Resource icon={<BookOpen />} title="Notes & blog" text="Writing about models, systems, and the lessons between them." href="/notes" /></div></section>

        <section id="contact" className="bg-primary px-6 py-24 text-primary-foreground sm:px-10 lg:px-16"><div className="mx-auto max-w-6xl"><p className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">05 / Contact</p><h2 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-7xl">Let&apos;s build something thoughtful.</h2><div className="mt-10 flex flex-wrap items-center gap-5"><span className="inline-flex items-center gap-3 border-b border-primary-foreground/40 pb-2 text-lg"><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-primary-foreground/80"><Mail size={18} />{site.email}</a><button type="button" onClick={copyEmail} aria-label={copied ? "Email copied" : "Copy email address"} title={copied ? "Copied" : "Copy email"} className="text-primary-foreground/70 transition hover:text-primary-foreground">{copied ? <Check size={16} /> : <Copy size={16} />}</button></span><a href="tel:+917795429685" className="inline-flex items-center gap-2 border-b border-primary-foreground/40 pb-2 text-lg hover:text-primary-foreground/80"><Phone size={18} />{site.phone}</a></div></div></section>
      </main>
      <footer className="flex flex-col gap-5 bg-foreground px-6 py-8 text-background sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"><span className="font-semibold">Krishna H</span><span className="text-sm opacity-60">Designed and built with care · 2026</span><div className="flex gap-5"><a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={site.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="transition hover:text-primary"><Youtube size={18} /></a></div></footer>
    </div>
  )
}

function SectionLabel({ text }: { text: string }) { return <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{text}</p> }
function Resource({ icon, title, text, href }: { icon: ReactNode; title: string; text: string; href?: string }) {
  const content = <><div className="text-primary">{icon}</div><h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}{href && <ArrowUpRight className="ml-2 inline transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></>
  return href ? <a href={href} className="group border-t border-border pt-5">{content}</a> : <div className="group border-t border-border pt-5">{content}</div>
}
