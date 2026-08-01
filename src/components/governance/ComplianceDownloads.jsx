import { Download, FileText } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const DOCUMENTS = [
  {
    title: 'DCI Gazette Notification & Approval Orders',
    category: 'Statutory Recognition',
    fileSize: '2.4 MB PDF',
  },
  {
    title: 'The TN Dr. M.G.R. Medical University Affiliation Order',
    category: 'University Affiliation',
    fileSize: '1.8 MB PDF',
  },
  {
    title: 'Institutional Code of Ethics & Practice Guidelines',
    category: 'Code of Conduct',
    fileSize: '1.1 MB PDF',
  },
  {
    title: 'UGC & DCI Anti-Ragging Mandatory Declaration Form',
    category: 'Student Safety',
    fileSize: '850 KB PDF',
  },
  {
    title: 'Bio-Medical Waste Management Compliance Certificate',
    category: 'Environmental Safety',
    fileSize: '920 KB PDF',
  },
  {
    title: 'Institutional Ethics Committee (IEC) Standard Operating Manual',
    category: 'Research Ethics',
    fileSize: '3.2 MB PDF',
  },
]

export default function ComplianceDownloads() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Public Disclosures"
            title="Compliance Documents & Policy Portal"
            description="Download statutory approvals, public policy declarations, and regulatory certificates."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DOCUMENTS.map((doc, index) => (
            <Reveal key={doc.title} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-muted/20 px-3 py-1 text-[11px] font-semibold text-muted">
                      {doc.fileSize}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{doc.category}</span>
                  <h3 className="mt-2 font-display text-base font-bold text-foreground leading-snug">{doc.title}</h3>
                </div>

                <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault()
                      alert(`Downloading ${doc.title}...`)
                    }}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white shadow-brand-xs transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download Document
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
