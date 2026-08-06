import { Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CLINICAL_HOME } from '@/lib/homeConstants'

export default function ClinicalTrainingHome() {
  return (
    <section id="clinical" className="relative overflow-hidden bg-foreground px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-0 glow-radial-tr" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              light
              align="left"
              eyebrow={CLINICAL_HOME.eyebrow}
              title={CLINICAL_HOME.title}
              description={CLINICAL_HOME.description}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {CLINICAL_HOME.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85"
                >
                  <Check className="h-4 w-4 shrink-0 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={CLINICAL_HOME.image}
                alt="Clinical training at APDCH"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
