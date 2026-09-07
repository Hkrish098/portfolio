import { notFound } from "next/navigation"
import { DocumentViewer } from "@/components/document-viewer"
import { certifications, getCertification } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return certifications.map((cert) => ({ slug: cert.slug }))
}

export default async function CertificationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cert = getCertification(slug)
  if (!cert) notFound()

  const fileName = cert.image.split("/").pop() ?? "certificate.png"

  return (
    <DocumentViewer
      backHref="/certifications"
      backLabel="Back to certifications"
      eyebrow={cert.tag}
      title={cert.title}
      description={`${cert.description} Issued by ${cert.issuer}.`}
      src={cert.image}
      downloadName={fileName}
      kind="image"
    />
  )
}
