import { FileText, ShieldAlert, HeartHandshake, Recycle, Lock, GraduationCap } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const POLICIES = [
  {
    title: 'Code of Ethics & Professional Conduct',
    description: 'Mandatory ethical guidelines governing clinical procedures, academic integrity, faculty-student conduct, and patient care standard operating procedures.',
    icon: FileText,
    category: 'Institutional Ethics',
  },
  {
    title: 'Anti-Ragging Policy & UGC Directives',
    description: 'Zero-tolerance policy towards ragging in compliance with Supreme Court mandates and UGC/DCI anti-ragging regulations, enforced by 24x7 squads.',
    icon: ShieldAlert,
    category: 'Student Safety',
  },
  {
    title: 'POSH & Gender Sensitivity Policy',
    description: 'Prevention of Sexual Harassment (POSH) cell establishing a secure, non-discriminatory environment for women staff, students, and patients.',
    icon: HeartHandshake,
    category: 'Gender Safety',
  },
  {
    title: 'Bio-Medical Waste Management',
    description: 'Strict adherence to Pollution Control Board directives for safe segregation, sterilization, and disposal of hazardous clinical dental waste.',
    icon: Recycle,
    category: 'Environmental & Hospital Safety',
  },
  {
    title: 'Patient Rights & Informed Consent',
    description: 'Comprehensive patient rights charter guaranteeing informed consent, privacy, treatment transparency, and ethical clinical care.',
    icon: Lock,
    category: 'Patient Care',
  },
  {
    title: 'Research Integrity & Anti-Plagiarism Policy',
    description: 'Guidelines for ethical scientific publications, thesis preparation, mandatory Turnitin anti-plagiarism screening, and IP protection.',
    icon: GraduationCap,
    category: 'Academic Research',
  },
]

export default function InstitutionalPolicies() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Rules & Guidelines"
            title="Institutional Policies & Code of Conduct"
            description="Core policy frameworks safeguarding institutional integrity, student welfare, patient safety, and research ethics."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map((policy, index) => {
            const IconComponent = policy.icon
            return (
              <Reveal key={policy.title} delay={index * 0.07}>
                <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{policy.category}</span>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">{policy.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{policy.description}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="text-xs font-semibold text-primary">Enforced & Monitored</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
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
