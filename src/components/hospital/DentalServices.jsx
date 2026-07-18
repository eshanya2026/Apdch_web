import { Smile, Sparkles, Shield, Scissors, Baby, Siren } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { DENTAL_TREATMENTS, DENTAL_TREATMENTS_SECTION } from '@/lib/hospitalConstants'

const ICONS = { Smile, Sparkles, Shield, Scissors, Baby, Siren }

export default function DentalServices() {
  return (
    <section id="treatments" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={DENTAL_TREATMENTS_SECTION.eyebrow}
            title={DENTAL_TREATMENTS_SECTION.title}
            description={DENTAL_TREATMENTS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DENTAL_TREATMENTS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand-lg">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-400 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
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
