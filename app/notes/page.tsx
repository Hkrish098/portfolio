import { PageShell } from "@/components/page-shell"
import { CollectionPageIntro, GlossyCollectionGrid } from "@/components/glossy-collection"
import { notes } from "@/lib/portfolio-data"

export default function NotesPage() {
  const items = notes.map((note) => ({
    title: note.title,
    tag: note.type,
    description: note.description,
    image: note.image,
    href: note.href,
    wide: note.wide,
    external: true,
    cta: "Read note",
  }))

  return (
    <PageShell>
      <CollectionPageIntro
        backHref="/about"
        backLabel="Back to about"
        eyebrow="Field notes"
        title="Notes & blog"
        description="Ideas, experiments, and practical lessons from building intelligent software — presented in the same visual language as the rest of the portfolio."
      />
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:px-10">
        <GlossyCollectionGrid
          items={items}
          hintDesktop="Hover a note to read the summary, then open the full article."
          hintMobile="Tap a note to read the article."
        />
      </section>
    </PageShell>
  )
}
