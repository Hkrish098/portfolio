import { PageShell } from "@/components/page-shell"
import { CollectionPageIntro, GlossyCollectionGrid } from "@/components/glossy-collection"
import { certifications } from "@/lib/portfolio-data"

export default function CertificationsPage() {
  const items = certifications.map((cert) => ({
    title: cert.title,
    tag: `${cert.tag} · ${cert.issuer}`,
    description: cert.description,
    image: cert.image,
    href: `/certifications/${cert.slug}`,
    wide: cert.wide,
    cta: "View certificate",
  }))

  return (
    <PageShell>
      <CollectionPageIntro
        backHref="/about"
        backLabel="Back to about"
        eyebrow="Credentials"
        title="Verified Certifications"
        description="Cloud, retrieval, automation, and applied research credentials — opened inside the portfolio with download support."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-10">
        <GlossyCollectionGrid
          items={items}
          hintDesktop="Hover a certificate to preview it, then open the full credential."
          hintMobile="Tap a certificate to open it inside the portfolio."
        />
      </section>
    </PageShell>
  )
}
