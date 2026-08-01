import { Award, Download, FileCheck, Layers, Sparkles, CheckCircle } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const NAAC_QUALITY_INITIATIVES = [
  { num: 'Criterion I', title: 'Curricular Aspects', desc: 'Curriculum design, academic flexibility, enrichment programs & stakeholder feedback.' },
  { num: 'Criterion II', title: 'Teaching-Learning & Evaluation', desc: 'Student enrollment, teaching innovations, faculty quality & transparent evaluation.' },
  { num: 'Criterion III', title: 'Research, Innovations & Extension', desc: 'Research infrastructure, publications, patents, and community outreach programs.' },
  { num: 'Criterion IV', title: 'Infrastructure & Learning Resources', desc: 'Physical facilities, clinical phantom head labs, central library & IT infrastructure.' },
  { num: 'Criterion V', title: 'Student Support & Progression', desc: 'Student welfare, scholarship guidance, career placement & alumni engagement.' },
  { num: 'Criterion VI', title: 'Governance, Leadership & Management', desc: 'Visionary governance, faculty empowerment, financial management & IQAC initiatives.' },
  { num: 'Criterion VII', title: 'Institutional Values & Best Practices', desc: 'Environmental sustainability, bio-waste disposal, inclusivity & best dental practices.' },
]

export default function NaacSection() {
  return (
    <section id="naac" className="scroll-mt-24 bg-background px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Accreditation Standards"
            title="National Assessment and Accreditation Council (NAAC)"
            description="The institute is approaching the second cycle of NAAC after refining institutional standards and continuously upgrading academic quality, research, and dental education."
          />
        </Reveal>

        {/* 1. Accreditation Status & Reports (AQAR / SSR) */}
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1.8fr]">
              
              {/* Accreditation Status Card */}
              <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-7 text-center shadow-brand-sm">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-sm">
                  <Award className="h-8 w-8" />
                </div>
                <span className="rounded-full bg-primary/15 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                  Accreditation Status
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">NAAC Accredited</h3>
                <p className="mt-1 text-xs font-semibold text-accent">Peer Team Evaluated & Verified</p>
                <div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Valid Institutional Standing</span>
                </div>
              </div>

              {/* AQAR & SSR Reports Block */}
              <div className="space-y-5">
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">Dossiers & Statutory Filings</h4>
                  <p className="mt-1 text-xs text-muted">Official accreditation filings available for public access:</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* SSR Card */}
                  <div className="rounded-xl border border-border/80 bg-background p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <h5 className="font-display text-base font-bold text-foreground">SSR (Self-Study Report)</h5>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Comprehensive 7-criteria institutional self-evaluation dossier.
                    </p>
                    <a
                      href="#download-ssr"
                      onClick={(e) => {
                        e.preventDefault()
                        alert('Downloading NAAC Self-Study Report (SSR)...')
                      }}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white shadow-brand-xs hover:bg-accent hover:text-foreground"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download SSR (PDF)
                    </a>
                  </div>

                  {/* AQAR Card */}
                  <div className="rounded-xl border border-border/80 bg-background p-5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h5 className="font-display text-base font-bold text-foreground">AQAR Reports</h5>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Annual Quality Assurance Reports submitted by the IQAC.
                    </p>
                    <a
                      href="#download-aqar"
                      onClick={(e) => {
                        e.preventDefault()
                        alert('Downloading Latest AQAR Report...')
                      }}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border/80 bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-brand-xs hover:bg-muted/30"
                    >
                      <Download className="h-3.5 w-3.5 text-primary" />
                      Download AQAR (PDF)
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* 2. Quality Initiatives Grid (7 Criteria) */}
        <div className="mt-12">
          <div className="mb-6 flex items-center gap-2 text-primary">
            <Sparkles className="h-5 w-5" />
            <h4 className="font-display text-xl font-bold text-foreground">NAAC 7-Criteria Quality Initiatives</h4>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NAAC_QUALITY_INITIATIVES.map((crit, index) => (
              <Reveal key={crit.num} delay={index * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-brand-sm">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{crit.num}</span>
                    <h4 className="mt-1 font-display text-base font-bold text-foreground">{crit.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{crit.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
