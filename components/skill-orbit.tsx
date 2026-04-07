"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Terminal, Code, Brain, Shield, Zap } from "lucide-react"

const skills = [
  { name: "Python", icon: Terminal, color: "text-primary" },
  { name: "TensorFlow", icon: Cpu, color: "text-primary" },
  { name: "PyTorch", icon: Brain, color: "text-primary" },
  { name: "RAG", icon: Database, color: "text-primary" },
  { name: "NLP", icon: Code, color: "text-secondary" }, // Replaced blockchain skills with NLP/ML core
  { name: "Computer Vision", icon: Shield, color: "text-secondary" },
  { name: "Agentic AI", icon: Zap, color: "text-primary" },
  { name: "Neural Networks", icon: Code, color: "text-secondary" },
]

export function SkillOrbit() {
  return (
    <div className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-primary/5 to-transparent pointer-events-none" />
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2
        const radius = 140
        return (
          <motion.div
            key={skill.name}
            className="absolute flex flex-col items-center gap-2 group cursor-pointer"
            initial={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
            }}
            animate={{
              x: [Math.cos(angle) * radius, Math.cos(angle + Math.PI * 2) * radius],
              y: [Math.sin(angle) * radius, Math.sin(angle + Math.PI * 2) * radius],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
          >
            <div
              className={`p-3 rounded-full bg-card border border-border group-hover:border-primary transition-colors shadow-lg shadow-black/50`}
            >
              <skill.icon className={`h-6 w-6 ${skill.color}`} />
            </div>
            <span className="text-xs font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 px-2 py-1 rounded border border-border">
              {skill.name}
            </span>
          </motion.div>
        )
      })}
      <div className="z-0 p-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-pulse">
        <Brain className="h-12 w-12 text-primary" />
      </div>
    </div>
  )
}
