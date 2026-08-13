import { site } from "@/lib/site"

export type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type GithubStats = {
  username: string
  total: number
  days: ContributionDay[]
}

function emptyStats(): GithubStats {
  return { username: site.githubUser, total: 0, days: [] }
}

export async function getGithubStats(): Promise<GithubStats> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${site.githubUser}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      return emptyStats()
    }

    const data = (await response.json()) as {
      total?: Record<string, number>
      contributions?: { date: string; count: number; level: number }[]
    }

    const days: ContributionDay[] = (data.contributions ?? []).map((day) => ({
      date: day.date,
      count: day.count,
      level: Math.max(0, Math.min(4, day.level)) as ContributionDay["level"],
    }))

    const year = String(new Date().getFullYear())
    const total =
      data.total?.[year] ??
      Object.values(data.total ?? {}).reduce((sum, value) => sum + value, 0)

    return { username: site.githubUser, total, days }
  } catch {
    return emptyStats()
  }
}
