"use client"

import * as React from "react"
import { Github, FileText, ChevronDown, Award, GraduationCap, Linkedin, ExternalLink, BookOpen, Mail, Phone, MapPin, Code2, BrainCircuit, Database, Cpu, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectCard } from "@/components/project-card"
import { LogicGateTimeline } from "@/components/logic-gate-timeline"
import { motion } from "framer-motion"

export default function Portfolio() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 overflow-x-hidden">
      
      {/* --- UPDATED FLOATING NAV BAR --- */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <nav className="flex items-center gap-1 sm:gap-2 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2 shadow-2xl">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Interns", id: "internships" },
            { name: "Projects", id: "lab" },
            { name: "Timeline", id: "timeline" },
            { name: "Certs", id: "certifications" },
            { name: "Papers", id: "publications" },
            { name: "Contact", id: "contact" }
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className="px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/70 transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg active:scale-95"
            >
              {item.name}
            </button>
          ))}
          
          <div className="w-px h-4 bg-white/20 mx-1 sm:mx-2 hidden xs:block" />

          <a 
            href="/Krishna_resume.pdf" 
            target="_blank" 
            className="px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-primary text-primary-foreground transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] active:scale-95"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--glow-ai)_0%,_transparent_70%)] opacity-5 pointer-events-none" />
        
        {/* Framer Motion Parent Container */}
        <motion.div 
          className="space-y-6 max-w-4xl z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Time between each element animating in
                delayChildren: 0.1,
              }
            }
          }}
        >
          {/* Badge Animation */}
          <motion.div variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}>
            <Badge className="bg-primary/10 text-primary border-primary/40 px-4 py-1.5 rounded-full mb-4 font-mono">
              Gen AI Intern @ Tatvaops • Full Stack AI/ML Developer
            </Badge>
          </motion.div>

          {/* Headline Animation */}
          <motion.h1 
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            I build <span className="text-primary italic">Generative AI</span> <br />
            that is <span className="text-secondary">Secured & Scalable</span>
          </motion.h1>

          {/* Subtext Animation */}
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl mx-auto pt-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            Machine Learning & Generative AI Engineer specializing in RAG systems, Agentic AI, and enterprise-level logistics architectures.
          </motion.p>

          {/* Buttons Animation */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4 pt-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            <Button asChild className="bg-primary text-primary-foreground h-12 px-8 font-bold rounded-none group">
              <a href="https://github.com/Hkrish098" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" /> View GitHub 
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 font-bold rounded-none bg-transparent group hover:bg-[#0077B5] hover:text-white transition-colors duration-300">
              <a href="https://linkedin.com/in/krishna-h-AIML" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" /> LinkedIn 
              </a>
            </Button>
            <Button asChild variant="outline" className="h-12 px-8 font-bold rounded-none bg-transparent hover:bg-white hover:text-black transition-colors duration-300">
              <a href="/Krishna_resume.pdf" download="Krishna_H_Resume.pdf">
                <FileText className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator Animation */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Initialize Scroll</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </motion.div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-muted/20 relative group glow-ai">
              <img src="/krishna_professional.jpg" alt="Krishna H." className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/10 border border-primary/20 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <span className="text-primary font-bold text-2xl">Gen AI</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Engineer</span>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
                About <span className="text-primary italic">Me</span>
              </h2>
              <div className="h-1 w-24 bg-primary" />
            </div>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
              <p>
                I'm <span className="text-foreground font-semibold">Krishna H.</span>, a Generative AI & Machine Learning Intern bridging the gap between theoretical models and real-world impact. Currently driving AI initiatives at Tatvaops, I leverage a strong <span className="text-primary">Computer Science</span> foundation to architect intelligent systems that scale.
              </p>
              <p>
                My expertise lies in designing robust RAG pipelines and autonomous agentic workflows that solve complex, domain-specific challenges and transforming raw data into actionable, automated intelligence.
              </p>
              <div className="flex items-center gap-6 pt-4 font-mono">
                <div>
                  <span className="text-foreground font-bold text-2xl">Tatvaops</span><br/>Gen AI Intern
                </div>
                <div className="w-px h-10 bg-border" />
                <div>
                  <span className="text-foreground font-bold text-2xl">SIH</span><br/>Finalist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 border-t border-border/40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Technical <span className="text-primary italic">Arsenal</span></h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group">
              <BrainCircuit className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">AI & GenAI</h4>
              <div className="flex flex-wrap gap-2">
                {["RAG Systems", "Agentic AI", "Prompt Eng.", "LLMs"].map(skill => (
                  <Badge key={skill} variant="secondary" className="font-mono text-[10px] bg-primary/5 text-primary border-primary/20">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="p-6 border border-border bg-muted/20 rounded-xl hover:border-secondary transition-all group">
              <Cpu className="h-8 w-8 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">ML/DL Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face"].map(skill => (
                  <Badge key={skill} variant="secondary" className="font-mono text-[10px] bg-secondary/5 text-secondary border-secondary/20">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="p-6 border border-border bg-muted/20 rounded-xl hover:border-accent transition-all group">
              <Database className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">Data Science</h4>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Matplotlib", "OpenCV"].map(skill => (
                  <Badge key={skill} variant="secondary" className="font-mono text-[10px] bg-accent/5 text-accent border-accent/20">{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group">
              <Code2 className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold mb-4 uppercase tracking-tight">Languages & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "C++", "SQL", "Git", "VS Code"].map(skill => (
                  <Badge key={skill} variant="secondary" className="font-mono text-[10px] bg-primary/5 text-primary border-primary/20">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

{/* --- INTERNSHIPS SECTION --- */}
      <section id="internships" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 border-t border-border/40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Professional <span className="text-primary italic">Experience</span></h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tatvaops (EROEI Tech) - Current */}
            <div className="p-8 border border-primary/40 bg-primary/10 rounded-2xl relative overflow-hidden transition-all group flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Briefcase className="h-24 w-24 text-primary" />
              </div>
              <div className="relative z-10">
                <Badge className="bg-primary text-primary-foreground mb-4">Current Role: Since Feb 2026</Badge>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-1">Gen AI / ML Intern</h3>
                <h4 className="text-lg text-primary font-mono mb-4">Tatvaops (EROEI Tech Pvt. Ltd.)</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Developing and integrating Generative AI solutions within the technical team, focusing on agentic architectures and a scalable logistics and fleet optimization platform.
                </p>
              </div>
              <a 
                href="/Internship Letter - Krishna Honnikhere.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:underline mt-4 relative z-10 w-fit"
              >
                View Offer Letter <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </div>

            {/* Neuricorn Syndicate */}
            <div className="p-8 border border-border bg-muted/20 rounded-2xl relative overflow-hidden transition-all hover:border-accent/50 group flex flex-col justify-between">
              <div>
                <Badge variant="outline" className="mb-4">Nov 2024 - Jan 2025</Badge>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground mb-1">Unicorn Intern</h3>
                <h4 className="text-lg text-accent font-mono mb-4">Neuricorn Syndicate</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Completed an immersive internship program, contributing to technical initiatives and gaining foundational industry experience.
                </p>
              </div>
              <a 
                href="/Krishna-JOINING_CERTIFICATE.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent hover:underline mt-4 w-fit"
              >
                View Certificate <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* --- CERTIFICATIONS SECTION --- */}
      <section id="certifications" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 border-t border-border/40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Verified <span className="text-primary italic">Certifications</span></h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/certificates/JPMorganChase&Co.png" target="_blank" rel="noopener noreferrer" className="p-6 border border-primary/20 bg-primary/5 rounded-xl hover:border-primary transition-all group block">
              <div className="flex justify-between mb-4">
                <Badge className="bg-primary/20 text-primary">Job Simulation</Badge>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">Quantitative Research</h4>
              <p className="text-sm text-muted-foreground font-mono">J.P. Morgan & Chase</p>
            </a>
            <a href="/certificates/Oracle.png" target="_blank" rel="noopener noreferrer" className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group block">
              <div className="flex justify-between mb-4">
                <Badge variant="outline">GenAI Professional</Badge>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">OCI 2025 Certified</h4>
              <p className="text-sm text-muted-foreground font-mono">Oracle</p>
            </a>
            <a href="/certificates/coursera.png" target="_blank" rel="noopener noreferrer" className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group block">
              <div className="flex justify-between mb-4">
                <Badge variant="outline">Specialization</Badge>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">RAG Specialist</h4>
              <p className="text-sm text-muted-foreground font-mono">Coursera / DeepLearning.AI</p>
            </a>
            <a href="/certificates/Deloitte.png" target="_blank" rel="noopener noreferrer" className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group block">
              <div className="flex justify-between mb-4">
                <Badge variant="outline">Internship</Badge>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">STEM Job Simulation</h4>
              <p className="text-sm text-muted-foreground font-mono">Deloitte</p>
            </a>
            <a href="/certificates/UI_path.png" target="_blank" rel="noopener noreferrer" className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group block">
              <div className="flex justify-between mb-4">
                <Badge variant="outline">Automation</Badge>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">RPA Developer</h4>
              <p className="text-sm text-muted-foreground font-mono">UI Path</p>
            </a>
            <a href="/certificates/Zscalar.png" target="_blank" rel="noopener noreferrer" className="p-6 border border-border bg-muted/20 rounded-xl hover:border-primary transition-all group block">
              <div className="flex justify-between mb-4">
                <Badge variant="outline">Virtual Internship</Badge>
                <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-bold mb-1">Cloud Security</h4>
              <p className="text-sm text-muted-foreground font-mono">Zscaler / EduSkills (AICTE)</p>
            </a>
          </div>
        </div>
      </section>

      {/* --- LAB / PROJECTS SECTION --- */}
      <section id="lab" className="bg-card/30 border-y border-border/40 py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-4 mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              The <span className="text-primary italic">Lab</span>
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto lg:mx-0" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <a href="https://github.com/Hkrish098/Mirage" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
              <ProjectCard 
                title="Mirage" 
                description="AI Image Protection using data poisoning achieving 36.33 dB PSNR." 
                type="mirage" 
                metrics="Blockchain Secured" 
              />
            </a>
            <a href="https://github.com/Hkrish098/NEXORA-DIGITAL-SENSIOBOT" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
              <ProjectCard 
                title="Sentio Bot" 
                description="RAG chatbot with 95% accuracy and 98% retrieval hit rate." 
                type="sentio" 
                metrics="GenAI Powered" 
              />
            </a>
            <a href="https://github.com/Hkrish098/supply-chain-price-prediction" target="_blank" rel="noopener noreferrer" className="block cursor-pointer h-full">
              <div className="group relative project-card-container overflow-hidden rounded-2xl border border-orange-500/30 bg-[#0a0500] p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] flex flex-col justify-between">
                <div className="absolute top-0 right-0 h-32 w-32 bg-orange-500/10 blur-[80px] group-hover:bg-orange-500/30 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/40 px-3 py-1">Predictive Analytics</Badge>
                    <ExternalLink className="h-5 w-5 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-orange-400 transition-all" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-foreground">Supply Chain Prediction</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                    ML-driven forecasting model achieving 92% accuracy in inventory optimization and demand spikes using time-series analysis.
                  </p>
                  <div className="h-32 w-full bg-orange-500/5 rounded-lg border border-orange-500/10 flex items-center justify-center relative overflow-hidden mt-4">
                     <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_25%,rgba(249,115,22,0.4)_50%,transparent_75%)] bg-[length:200%_100%] animate-shimmer" />
                     <span className="text-orange-500/40 font-mono text-[10px] uppercase tracking-widest">Live Forecast Stream</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-orange-500/10 mt-6 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Performance</span>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Cost Optimized</span>
                </div>
              </div>
            </a>
            <a href="https://github.com/Hkrish098/oci-prompt-playground" target="_blank" rel="noopener noreferrer" className="block cursor-pointer h-full">
              <div className="group relative project-card-container glitch-hover overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#000a0a] p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)] flex flex-col justify-between">
                <div className="absolute top-0 right-0 h-32 w-32 bg-cyan-500/10 blur-[80px] group-hover:bg-cyan-500/30 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/40 px-3 py-1">Oracle Cloud (OCI)</Badge>
                    <ExternalLink className="h-5 w-5 text-muted-foreground opacity-40 group-hover:opacity-100 group-hover:text-cyan-400 transition-all" />
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-foreground">OCI Prompt Playground</h3>
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                    Interactive environment built with React Native and Node.js to test token efficiency and agentic prompt templates within OCI Generative AI.
                  </p>
                  <div className="h-32 w-full bg-[#050f0f] rounded-lg border border-cyan-500/10 p-4 font-mono text-[10px] text-cyan-400/70 mt-4">
                    <div className="flex gap-1.5 mb-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500/40"/>
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/40"/>
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500/40"/>
                    </div>
                    <p className="animate-pulse">{'>'} oci_ai --query "Analyze prompt efficiency"</p>
                    <p className="mt-1 text-cyan-200">Execution: Success [98.4% Efficient]</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-cyan-500/10 mt-6 relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Performance</span>
                  <span className="text-xs font-bold text-cyan-500 uppercase tracking-widest">Token Efficient</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- PUBLICATIONS & BLOG SECTION --- */}
      <section id="publications" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 border-b border-border/40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              Insights & <span className="text-primary italic">Research</span>
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="/research_paper.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-8 border border-border bg-muted/10 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <BookOpen className="h-24 w-24" />
              </div>
              <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                Published • 2025 
              </Badge>
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">
                AI Image Protection using Data Poisoning
              </h3>
              <p className="text-muted-foreground mb-6 font-mono text-sm leading-relaxed">
                A study on adversarial machine learning and protecting digital assets 
                using blockchain-secured PSNR methodologies.
              </p>
              <div className="flex items-center text-primary font-bold hover:underline">
                Read Paper <ExternalLink className="ml-2 h-4 w-4" />
              </div>
            </a>

            <a 
              href="https://nexora-sentiobot.hashnode.dev/the-agentic-gauntlet-from-amnesia-to-autonomy-in-llm-chatbots" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-8 border border-border bg-muted/10 rounded-2xl relative overflow-hidden group hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText className="h-24 w-24" />
              </div>
              <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
               Technical Blog • 2025 
              </Badge>
              <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">
                The Agentic Gauntlet
              </h3>
              <p className="text-muted-foreground mb-6 font-mono text-sm leading-relaxed">
                Chronicling the journey from a master librarian retrieval core to active, 
                problem-solving concierge agents in LLM chatbots.
              </p>
              <div className="flex items-center text-blue-400 font-bold hover:underline">
                Read on Hashnode <ExternalLink className="ml-2 h-4 w-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* --- TIMELINE & EDUCATION SECTION --- */}
      <section id="timeline" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-bold uppercase tracking-tight flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_var(--glow-ml)]" /> 
              Hackathon Timeline
            </h3>
            <LogicGateTimeline />
          </div>
          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-accent" /> Education
              </h3>
              <div className="p-6 border border-accent/20 bg-accent/5 rounded-xl glow-academic">
                <h4 className="font-bold text-lg text-foreground">AMC Engineering College</h4>
                <p className="text-sm text-muted-foreground mb-1">Computer Science & Engineering</p>
                <p className="text-xs text-muted-foreground mb-4">VTU University</p>
                <Badge className="bg-accent/20 text-accent rounded-full font-mono text-[10px]">Batch of 2026 (Expected)</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DISTINCTIONS SECTION --- */}
      <section id="distinctions" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 border-t border-border/40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              Key <span className="text-primary italic">Distinctions</span>
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 border border-purple-500/20 bg-purple-500/5 rounded-2xl transition-all hover:bg-purple-500/10 hover:border-purple-500/40">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest bg-purple-500/10 px-2 py-1 rounded">Ranked</span>
              </div>
              <h4 className="text-xl font-bold text-foreground uppercase mb-2">Smart India Hackathon</h4>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                National Finalist in the AI/ML Innovation track, recognized among 50,000+ applicants for technical excellence.
              </p>
            </div>
            <div className="group p-8 border border-primary/20 bg-primary/5 rounded-2xl transition-all hover:bg-primary/10 hover:border-primary/40">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">Research</span>
              </div>
              <h4 className="text-xl font-bold text-foreground uppercase mb-2">Technical Sovereignty</h4>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                Achieved 85% AI model disruption and 40+ dB PSNR in facial data poisoning research.
              </p>
            </div>
            <div className="group p-8 border border-accent/20 bg-accent/5 rounded-2xl transition-all hover:bg-accent/10 hover:border-accent/40">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest bg-accent/10 px-2 py-1 rounded">Academic</span>
              </div>
              <h4 className="text-xl font-bold text-foreground uppercase mb-2">Merit Scholar</h4>
              <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                Maintaining a consistent 9.01 CGPA with a focus on Computer Science and Generative AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24 border-t border-border/40">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
              Get In <span className="text-primary italic">Touch</span>
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Interested in collaboration or have an opportunity? Reach out via any of the channels below or use the form.
              </p>
              <div className="space-y-6">
                <a href="mailto:honnikherek.098@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/20 hover:border-primary transition-all">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email</p>
                    <p className="font-bold font-mono text-sm sm:text-base">honnikherek.098@gmail.com</p>
                  </div>
                </a>
                <a href="tel:+917795429685" className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/20 hover:border-secondary transition-all">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Phone</p>
                    <p className="font-bold font-mono text-sm sm:text-base">+91 77954 29685</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted/20">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Location</p>
                    <p className="font-bold text-sm sm:text-base">Bengaluru, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 border border-border bg-muted/10 rounded-2xl space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Full Name</label>
                <input type="text" className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors font-mono" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Email Address</label>
                <input type="email" className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors font-mono" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea className="w-full bg-background border border-border rounded-lg p-3 outline-none focus:border-primary transition-colors h-32 resize-none font-mono" placeholder="Tell me about your project..."></textarea>
              </div>
              <Button className="w-full h-12 font-bold uppercase tracking-widest group rounded-none">
                Send Transmission <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-border/40 text-center">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-muted-foreground text-xs font-mono uppercase tracking-[0.2em]">
          <p>© 2026 KRISHNA H. • ENGINEERED FOR THE FUTURE</p>
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/krishna-h-AIML" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <button onClick={() => scrollTo("contact")} className="hover:text-primary cursor-pointer transition-colors uppercase">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  )
}