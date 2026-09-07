import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export function DocumentViewer({
  backHref = "/about",
  backLabel = "Back to about",
  eyebrow,
  title,
  description,
  src,
  downloadName,
  kind = "pdf",
}: {
  backHref?: string
  backLabel?: string
  eyebrow: string
  title: string
  description: string
  src: string
  downloadName: string
  kind?: "pdf" | "image"
}) {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-24 sm:px-8 sm:pb-12 sm:pt-28 lg:px-10">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-primary"
        >
          <ArrowLeft size={16} />
          {backLabel}
        </Link>

        <div className="mt-8 max-w-3xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary sm:text-xs">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_13rem] lg:items-start lg:gap-6">
          <div className="glass-surface order-2 overflow-hidden rounded-2xl border border-white/60 bg-secondary shadow-sm lg:order-1 lg:rounded-[1.75rem]">
            {kind === "pdf" ? (
              <iframe
                src={`${src}#toolbar=0&navpanes=0&view=FitH`}
                title={title}
                className="h-[min(78vh,920px)] w-full bg-white"
              />
            ) : (
              <div className="relative min-h-[420px] bg-[#0b0d0c]">
                <Image
                  src={src}
                  alt={title}
                  width={1400}
                  height={980}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            )}
          </div>

          <aside className="order-1 flex flex-row gap-3 lg:order-2 lg:flex-col">
            <a
              href={src}
              download={downloadName}
              className="pill-glass inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground transition hover:gap-3 lg:flex-none"
            >
              <Download size={16} />
              Download {kind === "pdf" ? "PDF" : "file"}
            </a>
            {kind === "pdf" ? (
              <a
                href={src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-border px-5 py-3 text-sm text-muted-foreground transition hover:border-primary/30 hover:text-primary lg:flex-none"
              >
                Open in new tab
              </a>
            ) : null}
          </aside>
        </div>
      </section>
    </PageShell>
  )
}
