"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, ExternalLink, ShieldCheck } from "lucide-react"

interface ProjectProps {
  title: string
  description: string
  type: "mirage" | "sentio"
  metrics: string
}

export function ProjectCard({ title, description, type, metrics }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [sliderPos, setSliderPos] = useState(50)

  return (
    <Card
      className={`relative overflow-hidden border-2 transition-all duration-500 bg-card/50 backdrop-blur-md ${
        type === "mirage" ? "hover:border-primary/50 glow-ai" : "hover:border-secondary/50 glow-ml"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <Badge
            variant="outline"
            className={type === "mirage" ? "text-primary border-primary/20" : "text-secondary border-secondary/20"}
          >
            {type === "mirage" ? "AI Security" : "RAG Agent"}
          </Badge>
          <ExternalLink className="h-4 w-4 opacity-50" />
        </div>

        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>

        <div className="relative h-48 rounded-lg overflow-hidden border border-border bg-black/40 group">
          <AnimatePresence mode="wait">
            {type === "mirage" ? (
              <div
                className="relative h-full w-full"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width) * 100
                  setSliderPos(x)
                }}
              >
                {/* Before: Clean Image */}
                <div className="absolute inset-0 bg-[url('/clean-ai-image.jpg')] bg-cover bg-center" />
                {/* After: Poisoned Image */}
                <div
                  className="absolute inset-0 bg-[url('/adversarial-poisoned-image.jpg')] bg-cover bg-center"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                />
                {/* Slider Handle */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-primary z-10" style={{ left: `${sliderPos}%` }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background flex items-center justify-center shadow-lg">
                    <ShieldCheck className="h-2 w-2 text-background" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4 font-mono text-xs text-secondary/80 space-y-2 h-full overflow-hidden">
                <div className="flex items-center gap-2 text-secondary">
                  <Terminal className="h-3 w-3" />
                  <span>sentio_agent --query "Analyze project metrics"</span>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: isHovered ? 1 : 0.4 }} className="space-y-1">
                  <p className="text-secondary/60">{">"} Initializing RAG pipeline...</p>
                  <p className="text-secondary/60">{">"} Context retrieved from 14 source documents.</p>
                  <p className="text-emerald-400">
                    {">"} Response: Based on current PSNR values, Sentio achieves {metrics} across all validation sets.
                  </p>
                  <p className="animate-pulse">_</p>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Performance</span>
          <span className={`text-sm font-bold ${type === "mirage" ? "text-primary" : "text-secondary"}`}>
            {metrics}
          </span>
        </div>
      </div>
    </Card>
  )
}
