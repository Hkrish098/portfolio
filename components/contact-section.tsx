"use client"

import * as React from "react"
import { Send } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/motion"
import { site } from "@/lib/site"

function VoxelTerrain() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 h-[46%] w-full"
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <rect x="0" y="260" width="180" height="160" fill="#071018" />
      <rect x="160" y="210" width="220" height="210" fill="#0a1620" />
      <rect x="340" y="170" width="160" height="250" fill="#08131c" />
      <rect x="480" y="230" width="240" height="190" fill="#0c1a24" />
      <rect x="700" y="150" width="200" height="270" fill="#07141d" />
      <rect x="860" y="200" width="180" height="220" fill="#0a1822" />
      <rect x="1020" y="240" width="220" height="180" fill="#08131c" />
      <rect x="1220" y="190" width="220" height="230" fill="#0c1c26" />
      <rect x="80" y="300" width="48" height="120" fill="#050d12" />
      <rect x="300" y="280" width="36" height="140" fill="#050d12" />
      <rect x="620" y="290" width="42" height="130" fill="#061016" />
      <rect x="980" y="310" width="32" height="110" fill="#050d12" />
      <rect x="1280" y="300" width="40" height="120" fill="#061016" />
      <rect x="0" y="360" width="1440" height="60" fill="#04080c" />
    </svg>
  )
}

function Fox3D({ active }: { active: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2"
      style={{ transformPerspective: 800, transformOrigin: "50% 100%" }}
      initial={false}
      animate={{
        y: active ? -86 : 42,
        scale: active ? 1.18 : 0.72,
        rotateX: active ? 6 : 22,
      }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute left-1/2 top-10 h-20 w-20 -translate-x-1/2 rounded-full bg-sky-200/35 blur-2xl" />
      <svg
        viewBox="0 0 160 150"
        className="relative h-28 w-28 drop-shadow-[0_18px_24px_rgba(0,0,0,0.55)] sm:h-32 sm:w-32"
        aria-hidden
      >
        <defs>
          <linearGradient id="fox-fur" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4a261" />
            <stop offset="45%" stopColor="#e07a3d" />
            <stop offset="100%" stopColor="#9a3b16" />
          </linearGradient>
          <linearGradient id="fox-fur-dark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c45c28" />
            <stop offset="100%" stopColor="#6b2410" />
          </linearGradient>
          <linearGradient id="fox-cream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7efe4" />
            <stop offset="100%" stopColor="#d4c4b0" />
          </linearGradient>
          <filter id="fox-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="b" />
            <feOffset dy="3" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.28 0" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#fox-soft)">
          <polygon points="18,62 36,8 62,58" fill="url(#fox-fur)" />
          <polygon points="142,62 124,8 98,58" fill="url(#fox-fur-dark)" />
          <polygon points="28,34 36,12 46,40" fill="#1c1410" />
          <polygon points="132,34 124,12 114,40" fill="#1c1410" />
          <ellipse cx="80" cy="78" rx="46" ry="38" fill="url(#fox-fur)" />
          <ellipse cx="96" cy="80" rx="22" ry="30" fill="url(#fox-fur-dark)" opacity="0.55" />
          <ellipse cx="80" cy="102" rx="26" ry="20" fill="url(#fox-cream)" />
          <ellipse cx="80" cy="108" rx="10" ry="7" fill="#1c1410" />
          <ellipse cx="62" cy="74" rx="8" ry="9" fill="#0b1220" />
          <ellipse cx="98" cy="74" rx="8" ry="9" fill="#0b1220" />
          <ellipse cx="64" cy="73" rx="3.2" ry="3.6" fill="#7dd3fc" />
          <ellipse cx="100" cy="73" rx="3.2" ry="3.6" fill="#7dd3fc" />
          <path d="M68 112 Q80 122 92 112" fill="none" stroke="#1c1410" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      </svg>
    </motion.div>
  )
}

export function ContactSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { amount: 0.35 })
  const [focused, setFocused] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "sent">("idle")
  const foxActive = inView || focused

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative isolate overflow-hidden bg-black px-6 py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="stars-square absolute inset-0 opacity-80" />
        <VoxelTerrain />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-xl pt-14"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <Fox3D active={foxActive} />

        <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/90 p-8 shadow-[0_0_80px_rgba(56,189,248,0.08)] backdrop-blur-xl sm:p-10">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.28em] text-sky-300">
            Get in touch
          </p>
          <h2 className="mt-3 text-center text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Let&apos;s Build AI Systems.
          </h2>
          <p className="mt-3 text-center text-sm leading-relaxed text-white/55">
            Open to roles, collaborations, and hard GenAI problems.
          </p>

          <form
            onSubmit={handleSubmit}
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setFocused(false)
              }
            }}
            className="mt-8 space-y-5"
          >
            <label className="block space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                Your name
              </span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ada Lovelace"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-sky-300/50"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                Email address
              </span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ada@analytical.engine"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-sky-300/50"
              />
            </label>
            <label className="block space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40">
                Message
              </span>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about the system you want to build..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-sky-300/50"
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-sky-300 text-sm font-semibold text-black transition hover:bg-sky-200"
            >
              {status === "sent" ? "Opening mail client" : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
