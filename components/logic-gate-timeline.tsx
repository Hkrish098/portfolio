"use client"

import { motion } from "framer-motion"
import { Award, Zap, ChevronRight } from "lucide-react"

const events = [
  {
    title: "Smart India Hackathon",
    description: "National Finalist - AI/ML Innovation Track",
    status: "Finalist",
    color: "text-primary",
    glow: "glow-ai",
  },
  {
    title: "HackFest 2024",
    description: "Advanced Rounds - Computer Vision & Generative AI",
    status: "Advanced",
    color: "text-secondary",
    glow: "glow-ml",
  },
]

export function LogicGateTimeline() {
  return (
    <div className="relative py-8 pl-12 space-y-12">
      {/* The Logic Gate Line */}
      <div className="absolute left-[20px] top-0 bottom-0 w-px bg-border">
        <motion.div
          className="absolute top-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      {events.map((event, index) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative group"
        >
          {/* Logic Gate Node */}
          <div className="absolute -left-[44px] top-0 h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center z-10 group-hover:border-primary transition-colors">
            {index % 2 === 0 ? (
              <Zap className={`h-5 w-5 ${event.color}`} />
            ) : (
              <Award className={`h-5 w-5 ${event.color}`} />
            )}

            {/* Logic Branch */}
            <div className="absolute left-full w-4 h-px bg-border group-hover:bg-primary transition-colors" />
          </div>

          <div
            className={`p-6 rounded-xl bg-card/40 border border-border backdrop-blur-sm group-hover:border-opacity-50 transition-all ${event.glow}`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-bold tracking-tight">{event.title}</h4>
              <div className="flex items-center text-xs font-mono uppercase tracking-tighter text-muted-foreground">
                <ChevronRight className="h-3 w-3 mr-1" /> {event.status}
              </div>
            </div>
            <p className="text-muted-foreground text-sm">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
