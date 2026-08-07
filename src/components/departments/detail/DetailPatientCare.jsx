import { HeartPulse, Check, ArrowDown } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailPatientCare({ department }) {
  const careItems = department.patientCareItems
  const isJourney = department.patientCareVariant === 'training-journey'

  return (
    <section className="bg-background px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-card lg:grid lg:grid-cols-2">
            <div className="relative flex min-h-[240px] flex-col justify-center cta-gradient p-8 text-white md:p-10 lg:p-12">
              <HeartPulse className="mb-6 h-10 w-10 text-accent" />
              <SectionHeading
                light
                align="left"
                eyebrow={department.patientCareEyebrow ?? 'Patient Care'}
                title={department.patientCareTitle ?? 'Patient Care'}
                description={
                  department.patientCareDescription ??
                  (careItems?.length || department.patientCareBodyOnly
                    ? undefined
                    : department.patientCare ||
                      'Human-centred pathways that protect dignity at every step.')
                }
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
              {careItems?.length ? (
                <ul className={isJourney ? 'space-y-2' : 'space-y-4'}>
                  {careItems.map((item, index) => (
                    <li
                      key={item}
                      className={isJourney ? 'text-base font-semibold text-foreground' : 'flex items-start gap-3 text-base font-medium text-foreground'}
                    >
                      {isJourney ? (
                        <>
                          <div className="flex items-center gap-4 rounded-2xl border border-primary/10 bg-[#faf7f8] px-5 py-3.5">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <span>{item}</span>
                          </div>
                          {index < careItems.length - 1 && <ArrowDown className="mx-auto my-1 h-4 w-4 text-primary/55" />}
                        </>
                      ) : (
                        <>
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </span>
                          {item}
                        </>
                      )}
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
