import { DocumentViewer } from "@/components/document-viewer"

export default function ResumePage() {
  return (
    <DocumentViewer
      backHref="/"
      backLabel="Back to work"
      eyebrow="Resume"
      title="Krishna H — Machine Learning & Generative AI Engineer"
      description="Production GenAI systems, retrieval-native assistants, applied machine learning, and full-stack deployment."
      src="/krishna_resume.pdf"
      downloadName="Krishna_H_Resume.pdf"
      kind="pdf"
    />
  )
}
