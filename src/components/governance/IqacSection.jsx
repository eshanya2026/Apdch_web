import { Award, CheckCircle2, ShieldCheck, Globe2, Eye, Target, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function IqacSection() {
  return (
    <section id="iqac" className="scroll-mt-24 mesh-bg px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Institutional Engine of Excellence"
            title="Internal Quality Assurance Cell (IQAC)"
            description="Our perseverance to excel and exalt has fetched us ISO certification and the honour of being the first dental college in South India to be accredited with NABH for quality patient care services. Recognition by the Sri Lankan Medical Council is another milestone in our commitment towards providing quality dental education."
          />
        </Reveal>

        {/* Prominent Quality & Governance Layout */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-6 shadow-brand-card md:p-10">
            <div className="grid items-stretch gap-8 lg:grid-cols-[1.25fr_1.75fr] md:gap-10">

              {/* Enlarged Left IQAC Card (15-20% larger, high visual prominence) */}
              <div className="flex flex-col justify-between rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 text-center shadow-brand-sm md:p-10">
                <div>
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-md">
                    <Award className="h-10 w-10" />
                  </div>
                  <span className="rounded-full bg-primary/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary">
                    Internal Quality Assurance Cell
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-extrabold text-foreground md:text-4xl">
                    IQAC Directorate
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-accent">
                    Institutional Engine of Continuous Quality Improvement
                  </p>

                  <p className="mt-6 text-xs font-medium leading-relaxed text-muted">
                    Established in strict compliance with NAAC guidelines to benchmark, monitor, and elevate institutional quality across all dental departments.
                  </p>
                </div>

                {/* Key Quality Milestones Badges */}
                <div className="mt-8 space-y-2.5 border-t border-primary/20 pt-6 text-left text-xs font-bold text-foreground">
                  <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/90 p-3 shadow-brand-xs">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                    <span>ISO Certified Quality Management System</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/90 p-3 shadow-brand-xs">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>NABH Accredited Hospital Patient Care</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/90 p-3 shadow-brand-xs">
                    <Globe2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Sri Lankan Medical Council Recognized</span>
                  </div>
                </div>

                <div className="mt-6 border-t border-primary/20 pt-4 text-xs font-medium text-muted">
                  Official IQAC Contact: <span className="font-bold text-primary">iqac@apdch.edu.in</span>
                </div>
              </div>

              {/* Right Side: Split into Vision, Objectives, and Key Functions */}
              <div className="flex flex-col justify-between space-y-6">

                {/* 1. Vision Block */}
                <div className="rounded-2xl border border-border/80 bg-background p-6 shadow-brand-xs">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Eye className="h-5 w-5" />
                    <h4 className="font-display text-lg font-bold text-foreground">Vision</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    To embed a pervasive institutional culture of quality, academic innovation, ethical scientific research, and compassionate clinical patient care across all undergraduate and postgraduate dental programs.
                  </p>
                </div>

                {/* 2. Objectives Block */}
                <div className="rounded-2xl border border-border/80 bg-background p-6 shadow-brand-xs">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Target className="h-5 w-5" />
                    <h4 className="font-display text-lg font-bold text-foreground">Objectives</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    To establish robust academic benchmarks, perform periodic Academic & Administrative Audits (AAA), collect structured stakeholder feedback, and ensure seamless institutional development in accordance with statutory guidelines.
                  </p>
                </div>

                {/* 3. Key Functions Block */}
                <div className="rounded-2xl border border-border/80 bg-background p-6 shadow-brand-xs">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Sparkles className="h-5 w-5" />
                    <h4 className="font-display text-lg font-bold text-foreground">Key Functions</h4>
                  </div>
                  <div className="grid gap-2.5 sm:grid-cols-2 text-xs font-medium text-foreground">
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-border/60">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Curriculum Enrichment & CDE Credits</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-border/60">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>NABH Patient Safety Audits</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-border/60">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>NAAC SSR & AQAR Reporting</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-white p-2.5 border border-border/60">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>Stakeholder Feedback Analysis</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
