import { ContactFooter } from "@/components/contact-footer"
import { SiteHeader } from "@/components/site-header"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <ContactFooter />
    </div>
  )
}
