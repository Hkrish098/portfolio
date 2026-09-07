import { DocumentViewer } from "@/components/document-viewer"

export default function ResearchPage() {
  return (
    <DocumentViewer
      backHref="/about"
      backLabel="Back to about"
      eyebrow="Technical paper"
      title="AI Image Protection Using Data Poisoning"
      description="A study on adversarial machine learning and protecting digital assets using blockchain-secured PSNR methodologies."
      src="/research_paper.pdf"
      downloadName="Krishna_H_Research_Paper.pdf"
      kind="pdf"
    />
  )
}
