import { UserCheck, ShieldAlert, Heart, Activity, FileSpreadsheet } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const CELLS = [
  {
    name: 'Right to Information (RTI Cell)',
    officer: 'Public Information Officer',
    email: 'rti@apdch.edu.in',
    description: 'Ensures statutory transparency and handles public queries in accordance with RTI Act norms.',
    icon: FileSpreadsheet,
  },
  {
    name: 'Anti-Ragging Squad & Committee',
    officer: 'Nodal Officer & Squad Members',
    email: 'antiragging@apdch.edu.in',
    description: '24x7 vigil across college premises and student hostels ensuring a ragging-free campus.',
    icon: ShieldAlert,
    phone: 'Helpline: 044-27528082',
  },
  {
    name: 'Internal Complaints Committee (ICC / POSH)',
    officer: 'Presiding Officer',
    email: 'icc@apdch.edu.in',
    description: 'Receives and addresses grievances related to gender equity and workplace safety for women.',
    icon: Heart,
  },
  {
    name: 'Equal Opportunity & SC/ST Cell',
    officer: 'Cell Convener',
    email: 'scstcell@apdch.edu.in',
    description: 'Guarantees social inclusion, scholarship guidance, and equal rights for reserved categories.',
    icon: UserCheck,
  },
  {
    name: 'Hospital Infection Control Committee (HICC)',
    officer: 'Chief Infection Control Officer',
    email: 'hicc@apdch.edu.in',
    description: 'Oversees sterilisation protocols, personal protective gear compliance, and clinical hygiene audits.',
    icon: Activity,
  },
]

export default function ComplianceCells() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Statutory Nodal Cells"
            title="Compliance Cells & Nodal Officers"
            description="Dedicated institutional cells handling statutory inquiries, student welfare, and safety grievances."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CELLS.map((cell, index) => {
            const IconComponent = cell.icon
            return (
              <Reveal key={cell.name} delay={index * 0.08}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{cell.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{cell.officer}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{cell.description}</p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4 text-xs font-medium text-muted">
                    <p className="text-primary font-semibold">{cell.email}</p>
                    {cell.phone && <p className="mt-0.5 text-foreground">{cell.phone}</p>}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
