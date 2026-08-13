import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { DualMarquee } from "@/components/infinite-marquee"
import { GithubContributions } from "@/components/github-contributions"
import { SkillsArsenal } from "@/components/skills-arsenal"
import { CertificationsSection } from "@/components/certifications-section"
import { InsightsSection } from "@/components/insights-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { getGithubStats } from "@/lib/github"

export default async function HomePage() {
  const github = await getGithubStats()

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-black text-white">
      <SiteNav />
      <main>
        <HeroSection />
        <ExperienceSection />
        <FeaturedProjects />
        <DualMarquee placement="section" />
        <GithubContributions stats={github} />
        <SkillsArsenal />
        <CertificationsSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
