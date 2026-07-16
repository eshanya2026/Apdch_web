import { Smile, Sparkles, Shield, Scissors, Baby, Siren } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { DENTAL_SERVICES } from '@/lib/hospitalConstants'

const ICONS = { Smile, Sparkles, Shield, Scissors, Baby, Siren }

export default function DentalServices() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="What we offer"
            title="Dental Services"
            description="A complete spectrum of hospital dentistry — preventive, restorative, aesthetic, surgical, and emergency."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DENTAL_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon]
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <article className="group h-full rounded-[1.5rem] border border-border/70 bg-white/90 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-brand-icon transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
