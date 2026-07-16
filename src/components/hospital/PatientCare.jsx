import { Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { PATIENT_CARE } from '@/lib/hospitalConstants'

export default function PatientCare() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-brand-xl">
                <img
                  src={PATIENT_CARE.image}
                  alt="Patient care at APDCH"
                  className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow={PATIENT_CARE.title}
              title={PATIENT_CARE.lead}
              description={PATIENT_CARE.description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PATIENT_CARE.points.map((point) => (
                <div
                  key={point.title}
                  className="rounded-2xl border border-border/70 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-brand-xs"
                >
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <Check className="h-4 w-4" />
                    <h3 className="font-semibold text-foreground">{point.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{point.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
