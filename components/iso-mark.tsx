export function IsoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-0.5 ${className}`} aria-hidden>
      <span className="block h-4 w-4 origin-bottom -skew-x-12 bg-sky-300/80" />
      <span className="block h-6 w-4 origin-bottom -skew-x-12 bg-white/70" />
      <span className="block h-3 w-4 origin-bottom -skew-x-12 bg-zinc-500" />
    </span>
  )
}
