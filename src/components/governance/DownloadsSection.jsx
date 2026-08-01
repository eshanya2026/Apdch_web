import { useState } from 'react'
import { Download, FileText } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  'All',
  'Committees & Roles',
  'IQAC Documents',
  'NAAC Documents',
  'NIRF Documents',
  'Institutional Policies',
  'Organization Chart',
]

const DOWNLOAD_FILES = [
  // Committees & Roles
  { title: 'List of Official Committees', category: 'Committees & Roles', fileSize: '1.2 MB PDF', date: '2025–2026', fileUrl: '/organogram.png' },
  { title: 'Roles & Responsibilities of Committees', category: 'Committees & Roles', fileSize: '1.8 MB PDF', date: '2025–2026', fileUrl: '/organogram.png' },

  // IQAC Documents
  { title: 'IQAC Annual Report & Quality Minutes', category: 'IQAC Documents', fileSize: '3.1 MB PDF', date: '2025', fileUrl: '/organogram.png' },
  { title: 'IQAC Stakeholder Feedback Analysis', category: 'IQAC Documents', fileSize: '1.5 MB PDF', date: '2024', fileUrl: '/organogram.png' },

  // NAAC Documents
  { title: 'NAAC Self-Study Report (SSR)', category: 'NAAC Documents', fileSize: '4.8 MB PDF', date: 'Second Cycle', fileUrl: '/organogram.png' },
  { title: 'NAAC Institutional Quality Certificate', category: 'NAAC Documents', fileSize: '1.1 MB PDF', date: 'Accreditation', fileUrl: '/organogram.png' },

  // NIRF Documents
  { title: 'NIRF Institutional Data Submission Report', category: 'NIRF Documents', fileSize: '1.4 MB PDF', date: '2025', fileUrl: '/organogram.png' },

  // Institutional Policies
  { title: 'Code of Conduct Policy', category: 'Institutional Policies', fileSize: '1.4 MB PDF', date: 'Policy Document', fileUrl: '/organogram.png' },
  { title: 'E-Governance Policy', category: 'Institutional Policies', fileSize: '1.1 MB PDF', date: 'Policy Document', fileUrl: '/organogram.png' },
  { title: 'Resource Mobilization & Utilization Policy', category: 'Institutional Policies', fileSize: '1.2 MB PDF', date: 'Policy Document', fileUrl: '/organogram.png' },
  { title: 'HR Policy', category: 'Institutional Policies', fileSize: '1.6 MB PDF', date: 'Policy Document', fileUrl: '/organogram.png' },
  { title: 'Quality Policy', category: 'Institutional Policies', fileSize: '950 KB PDF', date: 'Policy Document', fileUrl: '/organogram.png' },

  // Organization Chart
  { title: 'APDCH Institutional Organization Chart (Organogram)', category: 'Organization Chart', fileSize: '670 KB PNG', date: 'Official Chart', fileUrl: '/organogram.png' },
]

export default function DownloadsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFiles = selectedCategory === 'All'
    ? DOWNLOAD_FILES
    : DOWNLOAD_FILES.filter((file) => file.category === selectedCategory)

  return (
    <section id="downloads" className="scroll-mt-24 bg-background px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Official Documentation"
            title="Governance Downloads & Reports"
            description="Access official committee rosters, quality reports, accreditation dossiers, institutional policies, and the organization chart."
          />
        </Reveal>

        {/* Categorized Filter Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 border-b border-border/60 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'rounded-xl px-4 py-2 text-xs font-bold transition-all',
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-brand-xs'
                    : 'bg-white text-muted hover:bg-muted/40 hover:text-foreground border border-border/70'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Download Grid Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFiles.map((file, index) => (
            <Reveal key={file.title} delay={index * 0.05}>
              <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-5 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md">
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-muted/30 px-2.5 py-0.5 text-[10px] font-bold text-muted">
                      {file.date}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                    {file.category}
                  </span>
                  <h4 className="mt-1 font-display text-base font-bold text-foreground leading-snug">
                    {file.title}
                  </h4>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3">
                  <span className="text-xs font-medium text-muted">{file.fileSize}</span>
                  <a
                    href={file.fileUrl}
                    download={file.title.replace(/\s+/g, '_')}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
