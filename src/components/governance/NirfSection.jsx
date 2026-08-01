import { BarChart3, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const NIRF_SUBMITTED_DATA = [
  { label: 'Sanctioned Student Intake', detail: '100 BDS Seats & MDS Specialty Seats' },
  { label: 'Faculty Qualification & Ph.D', detail: '100% Recognized PG Guides & Professors' },
  { label: 'Financial Expenditure Audits', detail: 'Capital & Operational Infrastructure Audits' },
  { label: 'Graduation & Placement Stats', detail: 'University Pass Rates & PG Admissions' },
]

const NIRF_REPORTS = [
  { title: 'NIRF 2025 Submission Data (Dental)', size: '1.4 MB PDF', year: '2025' },
  { title: 'NIRF 2024 Submission Data (Dental)', size: '1.2 MB PDF', year: '2024' },
  { title: 'NIRF 2023 Submission Data (Dental)', size: '1.1 MB PDF', year: '2023' },
]

export default function NirfSection() {
  return (
    <section id="nirf" className="scroll-mt-24 mesh-bg px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="National Institutional Ranking Framework"
            title="NIRF Framework & Submissions"
            description="The institute is taking efforts to obtain ranking under the National Institutional Ranking Framework (NIRF) and is in the process of strengthening institutional performance through continuous quality improvement."
          />
        </Reveal>

        {/* NIRF Dashboard Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          
          {/* 1. Benchmark & Ranking Framework */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                  <BarChart3 className="h-4 w-4" />
                  Ranking Framework & Benchmarks
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  MoE Parameter Benchmarks
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Systematic data tracking under the 5 national ranking parameters defined by the Ministry of Education, Govt. of India:
                </p>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl border border-border/70 bg-background p-3.5">
                    <span className="text-xs font-bold text-primary">TLR — Teaching, Learning & Resources</span>
                    <p className="text-xs text-muted">Student-faculty ratio, lab infrastructure, and financial resources.</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background p-3.5">
                    <span className="text-xs font-bold text-primary">RP — Research & Professional Practice</span>
                    <p className="text-xs text-muted">Scopus indexed dental publications, citations, and patents.</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background p-3.5">
                    <span className="text-xs font-bold text-primary">GO — Graduation Outcomes</span>
                    <p className="text-xs text-muted">University examination pass percentages and PG progression.</p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background p-3.5">
                    <span className="text-xs font-bold text-primary">OI & PR — Outreach, Inclusivity & Perception</span>
                    <p className="text-xs text-muted">Social inclusion metrics, female intake, and peer academic reputation.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2. Submitted Data & Reports */}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-8">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-800">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Submitted Data & Reports
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Verified Institutional Data
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Audited data disclosures submitted directly to the NIRF portal:
                </p>

                {/* Submitted Data Points */}
                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {NIRF_SUBMITTED_DATA.map((item) => (
                    <div key={item.label} className="rounded-xl border border-border/70 bg-background p-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="mt-1 text-[11px] text-muted">{item.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Download Reports Sub-block */}
                <div className="mt-6 border-t border-border/60 pt-5">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">Download NIRF Reports</h4>
                  <div className="space-y-2">
                    {NIRF_REPORTS.map((rep) => (
                      <div key={rep.year} className="flex items-center justify-between rounded-xl border border-border/70 bg-white p-3 hover:border-primary/40">
                        <div className="flex items-center gap-2.5">
                          <FileText className="h-4 w-4 text-primary shrink-0" />
                          <span className="text-xs font-bold text-foreground">{rep.title}</span>
                        </div>
                        <a
                          href="#download"
                          onClick={(e) => {
                            e.preventDefault()
                            alert(`Downloading ${rep.title}...`)
                          }}
                          className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-white shadow-brand-xs hover:bg-accent hover:text-foreground"
                        >
                          <Download className="h-3 w-3" />
                          <span>PDF</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
