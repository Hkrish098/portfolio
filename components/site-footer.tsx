import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
          © {new Date().getFullYear()} {site.name} · Digital Craftsman
        </p>
        <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={site.resume}
            download="Krishna_H_Resume.pdf"
            className="transition hover:text-primary"
          >
            Resume Download
          </a>
        </div>
      </div>
    </footer>
  )
}
