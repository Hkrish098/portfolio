"use client"

import { ContactFooter } from "@/components/contact-footer"
import { HeroIntro } from "@/components/hero-intro"
import { SiteHeader } from "@/components/site-header"
import { WorkSection } from "@/components/work-section"

export function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader dark />
      <main>
        <HeroIntro />
        <WorkSection />
      </main>
      <ContactFooter />
    </div>
  )
}
