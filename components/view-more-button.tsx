"use client"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function ViewMoreButton({
  open = false,
  onClick,
  className,
}: {
  open?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-5 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:border-white/50 hover:text-white",
        className
      )}
    >
      {open ? "View less" : "View more"}
      <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
    </button>
  )
}
