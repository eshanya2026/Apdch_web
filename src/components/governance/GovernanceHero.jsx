import { ShieldCheck, Award, FileCheck, Building2 } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'

const GOVERNANCE_STATS = [
  { value: '25+', label: 'Institutional Committees', icon: Building2 },
  { value: 'ISO', label: 'Certified Institution', icon: FileCheck },
  { value: 'NABH', label: 'Accredited Hospital', icon: Award },
  { value: '20+', label: 'Governance Documents', icon: ShieldCheck },
]

export default function GovernanceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Main Hero Header */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Governance & Compliance
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
              APDCH follows a structured governance framework supported by statutory and non-statutory committees, institutional quality assurance initiatives, and regulatory compliance to promote academic excellence, patient care, research, and institutional development.
            </p>
          </Reveal>
        </div>

        {/* 4 Prominent Statistics Row */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE_STATS.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-brand-md">
                  <div>
                    <span className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-foreground/90">{stat.label}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
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
