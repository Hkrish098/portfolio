"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import type { GithubStats } from "@/lib/github"
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion"
import { SectionBanner } from "@/components/section-banner"
import { site } from "@/lib/site"

const LEVEL_COLORS = [
  "bg-[#161b22]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
]

function lastThreeMonths(days: GithubStats["days"]) {
  const cutoff = new Date()
  cutoff.setMonth(cutoff.getMonth() - 3)
  cutoff.setHours(0, 0, 0, 0)

  let filtered = days.filter((day) => new Date(`${day.date}T00:00:00`) >= cutoff)

  while (filtered.length >= 7 && filtered.slice(0, 7).every((day) => day.count === 0)) {
    filtered = filtered.slice(7)
  }
  while (filtered.length >= 7 && filtered.slice(-7).every((day) => day.count === 0)) {
    filtered = filtered.slice(0, -7)
  }

  return filtered
}

function weeksFrom(days: GithubStats["days"]) {
  const cells = lastThreeMonths(days)
  const weeks: GithubStats["days"][] = []
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7))
  }
  return weeks
}

export function GithubContributions({ stats }: { stats: GithubStats }) {
  const recent = lastThreeMonths(stats.days)
  const weeks = weeksFrom(stats.days)
  const total = recent.reduce((sum, day) => sum + day.count, 0)

  return (
    <section id="contributions" className="scroll-mt-24 bg-black px-6 py-12 sm:py-16">
      <motion.div
        className="mx-auto max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SectionBanner
          title="Contributions & Skills"
          description="Real-time open-source activity, codebase intelligence, and core engineering toolkits."
        />

        <motion.div variants={fadeUp} className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-14">
          <img
            src="/Cool%20Github%20GIF.gif"
            alt="GitHub activity animation"
            className="aspect-[16/9] w-full rounded-2xl object-cover ring-1 ring-white/10"
          />

          <div className="flex min-h-full flex-col">
            <p className="mb-4 flex items-center gap-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Last 3 months
            </p>
            {weeks.length > 0 ? (
              <>
                <div className="inline-flex gap-[3px]">
                  {weeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {week.map((day) => (
                        <div
                          key={day.date}
                          title={`${day.date}: ${day.count} contributions`}
                          className={`h-3 w-3 rounded-[2px] sm:h-3.5 sm:w-3.5 ${LEVEL_COLORS[day.level]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex max-w-md flex-wrap items-center justify-between gap-3 text-[11px] text-white/40">
                  <span>{total} contributions in the last 3 months.</span>
                  <span className="flex items-center gap-1.5">
                    Less
                    {LEVEL_COLORS.map((color) => (
                      <span key={color} className={`h-2.5 w-2.5 rounded-[2px] ${color}`} />
                    ))}
                    More
                  </span>
                </div>
              </>
            ) : (
              <p className="text-sm text-white/40">
                Contribution data will appear here once GitHub is reachable.
              </p>
            )}

            <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-10">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:border-white hover:text-white"
              >
                <Github className="h-4 w-4" />
                @{stats.username}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <div className="text-right">
                <p className="flex items-center justify-end gap-2 text-[11px] uppercase tracking-[0.2em] text-white/45">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Total Commits (Last 3 Months)
                </p>
                <p className="mt-1 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {total > 0 ? `${total}+` : "—"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
