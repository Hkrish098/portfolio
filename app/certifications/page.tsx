"use client"

import * as React from "react"
import { ArrowLeft, ExternalLink, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const certificates = [
  {
    title: "Quantitative Research Job Simulation",
    issuer: "J.P. Morgan & Chase",
    image: "/certificates/JPmorganChase&Co.png", // Path to your image
    category: "Job Simulation",
    description: "Completed advanced simulations in quantitative analysis and mathematical modeling."
  },
  {
    title: "OCI 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    image: "/certificates/Oracle.png",
    category: "Professional Certification",
    description: "Expertise in deploying and managing GenAI solutions on Oracle Cloud Infrastructure."
  },
  {
    title: "Retrieval-Augmented Generation (RAG) Specialization",
    issuer: "Coursera / DeepLearning.AI",
    image: "/certificates/coursera.png",
    category: "Specialization",
    description: "Mastery in building robust RAG pipelines and vector database integration."
  },
  {
    title: "Robotic Process Automation (RPA) Developer",
    issuer: "UiPath Academy",
    image: "/certificates/UI_path.png",
    category: "Developer Training",
    description: "Certified in designing and implementing automated enterprise workflows."
  },
  {
    title: "Quantitative Research Job Simulation",
    issuer: "J.P. Morgan & Chase",
    image: "/certificates/Deloitte.png", // Path to your image
    category: "Job Simulation",
    description: "Completed advanced simulations in quantitative analysis and mathematical modeling."
  }
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 selection:bg-primary/30">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Navigation Header */}
        <div className="flex items-center justify-between border-b border-border/40 pb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-primary font-mono font-bold text-xl">
            <Award className="h-6 w-6" /> KRISHNA H.
          </div>
        </div>

        {/* Page Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Verified <span className="text-primary italic">Certifications</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl font-mono">
            A comprehensive collection of my professional credentials and technical specializations.
          </p>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {certificates.map((cert, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-border bg-muted/20 hover:border-primary/50 transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden bg-black/40">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 space-y-4 bg-gradient-to-t from-background to-transparent">
                <div className="flex justify-between items-start">
                  <Badge className="bg-primary/10 text-primary border-primary/20">{cert.category}</Badge>
                  <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{cert.title}</h3>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{cert.issuer}</p>
                <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}