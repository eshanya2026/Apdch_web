import { HeartPulse, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailPatientCare({ department }) {
  const careItems = department.patientCareItems

  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-card lg:grid lg:grid-cols-2">
            <div className="relative flex min-h-[240px] flex-col justify-center cta-gradient p-8 text-white md:p-10 lg:p-12">
              <HeartPulse className="mb-6 h-10 w-10 text-accent" />
              <SectionHeading
                light
                align="left"
                eyebrow="Patient Care"
                title={department.patientCareTitle ?? 'Patient Care'}
                description={
                  careItems?.length
                    ? undefined
                    : department.patientCare ||
                      'Human-centred pathways that protect dignity at every step.'
                }
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              {careItems?.length ? (
                <ul className="space-y-4">
                  {careItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base font-medium text-foreground"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p className="text-base leading-relaxed text-muted">{department.patientCare}</p>
                  {department.highlights?.length > 0 && (
                    <ul className="mt-8 space-y-3">
                      {department.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-foreground/80">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          Focus area: {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
