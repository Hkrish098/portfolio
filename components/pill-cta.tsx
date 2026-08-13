"use client"

import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PillCtaProps {
  href: string
  label: string
  external?: boolean
  className?: string
  onClick?: () => void
}

export function PillCta({ href, label, external, className, onClick }: PillCtaProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex items-center overflow-hidden rounded-full bg-white py-1.5 pl-6 pr-1.5 text-black",
        className
      )}
    >
      <span className="relative z-10 pr-4 text-sm font-semibold">{label}</span>
      <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-sky-300 text-black transition-colors duration-300 group-hover:bg-white">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  )
}
