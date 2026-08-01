import { Building, Award, BookOpen, HeartPulse } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const GOVERNING_BODIES = [
  {
    title: 'Governing Council / Board of Management',
    description: 'The supreme policy-making body responsible for overall strategic direction, financial stewardship, institutional expansion, and statutory governance of APDCH.',
    icon: Building,
    responsibilities: [
      'Institutional strategy & infrastructure growth',
      'Annual budget allocation & audit oversight',
      'Statutory compliance & regulatory alignment',
      'Faculty appointments & institutional leadership',
    ],
  },
  {
    title: 'Academic Council',
    description: 'Directs curriculum execution, academic standards, examination rigor, and clinical training quality in strict accordance with DCI and University regulations.',
    icon: BookOpen,
    responsibilities: [
      'Curriculum review & academic calendar approval',
      'Teaching methodology & clinical logbook monitoring',
      'Continuous internal evaluation & university exams',
      'Faculty development & continuing dental education (CDE)',
    ],
  },
  {
    title: 'Internal Quality Assurance Cell (IQAC)',
    description: 'Drives continuous quality enhancement across teaching-learning, patient care workflows, research output, and institutional infrastructure.',
    icon: Award,
    responsibilities: [
      'IQAC quality benchmarking & accreditation reporting',
      'Feedback collection from students, patients, & alumni',
      'Academic and administrative audits (AAA)',
      'Organizing quality workshops & NAAC readiness',
    ],
  },
  {
    title: 'Institutional Ethics Committee (IEC)',
    description: 'Independent committee registered with CDSCO / DHR ensuring all biomedical and clinical dental research adheres to strict ethical principles.',
    icon: HeartPulse,
    responsibilities: [
      'Reviewing research protocols for ICMR compliance',
      'Patient safety & informed consent verification',
      'Ethical oversight for PG thesis dissertations',
      'Monitoring clinical trials & research integrity',
    ],
  },
]

export default function GoverningBodies() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership & Administration"
            title="Governing Bodies & Apex Committees"
            description="Structure of administrative, academic, and ethical councils that guide institutional governance."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {GOVERNING_BODIES.map((body, index) => {
            const IconComponent = body.icon
            return (
              <Reveal key={body.title} delay={index * 0.1}>
                <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md md:p-9">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">{body.title}</h3>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-muted">{body.description}</p>

                  <div className="mt-6 border-t border-border/60 pt-6">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">Key Responsibilities</h4>
                    <ul className="space-y-2.5">
                      {body.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2.5 text-sm text-foreground/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
