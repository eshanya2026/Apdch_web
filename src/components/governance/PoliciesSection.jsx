import { FileText, Coins, Laptop, Users, Award, Download } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const POLICIES = [
  {
    title: 'Code of Conduct',
    icon: FileText,
    badge: 'Academic & Conduct',
    badgeStyle: 'border-primary/20 bg-primary/10 text-primary',
    description: 'Mandatory ethical guidelines and professional behavior standards governing faculty, students, and clinical staff.',
  },
  {
    title: 'E-Governance Policy',
    icon: Laptop,
    badge: 'Administration & IT',
    badgeStyle: 'border-blue-300 bg-blue-50 text-blue-800',
    description: 'Digital governance procedures covering ERP integration, online student portals, e-learning LMS, and digital clinical records.',
  },
  {
    title: 'Resource Mobilization & Utilization Policy',
    icon: Coins,
    badge: 'Finance',
    badgeStyle: 'border-emerald-300 bg-emerald-50 text-emerald-800',
    description: 'Framework for transparent fund allocation, research grants utilization, capital expansion, and financial audits.',
  },
  {
    title: 'HR Policy',
    icon: Users,
    badge: 'Administration & Staff',
    badgeStyle: 'border-amber-300 bg-amber-50 text-amber-800',
    description: 'Comprehensive service rules, recruitment criteria, promotion policies, performance appraisal, and staff welfare benefits.',
  },
  {
    title: 'Quality Policy',
    icon: Award,
    badge: 'Quality & Governance',
    badgeStyle: 'border-purple-300 bg-purple-50 text-purple-800',
    description: 'Institutional commitment to continuous quality improvement, academic benchmarks, patient safety, and regulatory compliance.',
  },
]

export default function PoliciesSection() {
  return (
    <section id="policies" className="scroll-mt-24 bg-background px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Rules & Regulatory Frameworks"
            title="Institutional Policies"
            description="Official institutional policies establishing the framework for effective governance, academic administration, ethical practices, resource management, and quality standards."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map((policy, index) => {
            const IconComponent = policy.icon
            return (
              <Reveal key={policy.title} delay={index * 0.07}>
                <article className="group flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-md md:p-7">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-xs font-bold ${policy.badgeStyle}`}>
                        {policy.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-foreground">{policy.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{policy.description}</p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-4">
                    <a
                      href="#downloads"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-accent"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download Policy PDF</span>
                    </a>
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
