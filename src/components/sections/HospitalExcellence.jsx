import { HeartPulse, Microscope, Scan, Clock, ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { HOSPITAL_PILLARS, INSTITUTION } from '@/lib/constants'

const ICONS = { HeartPulse, Microscope, Scan, Clock }

export default function HospitalExcellence() {
  return (
    <section id="hospital" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-dual" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow={INSTITUTION.hospital}
            title="Hospital excellence that shapes every graduate"
            description="Patients receive tertiary dental care from faculty who also teach — so every appointment advances both healing and education."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {HOSPITAL_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon]
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/8">
                  <div className="grid md:grid-cols-[1.1fr_1fr]">
                    <div className="relative h-48 overflow-hidden md:h-full md:min-h-[220px]">
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent" />
                    </div>
                    <div className="p-6 md:p-7">
                      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <a href="#cta">
                Book a clinical visit
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <p className="text-sm text-white/55">
              Emergency line:{' '}
              <a href={`tel:${INSTITUTION.emergency}`} className="text-accent hover:underline">
                {INSTITUTION.emergency}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
