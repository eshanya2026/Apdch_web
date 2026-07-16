import { HeartPulse, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailPatientCare({ department }) {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-card lg:grid lg:grid-cols-[0.9fr_1.2fr]">
            <div className="relative min-h-[240px] cta-gradient p-8 text-white md:p-10">
              <HeartPulse className="mb-6 h-10 w-10 text-accent" />
              <SectionHeading
                light
                align="left"
                eyebrow="Compassion in practice"
                title="Patient Care"
                description="Human-centred pathways that protect dignity at every step."
              />
            </div>
            <div className="p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted">{department.patientCare}</p>
              <ul className="mt-8 space-y-3">
                {department.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    Focus area: {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
