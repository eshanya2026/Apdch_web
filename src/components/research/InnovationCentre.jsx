import { Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { INNOVATION_CENTRE } from '@/lib/researchConstants'

export default function InnovationCentre() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-[1.75rem] border border-border/60 shadow-brand-lg">
              <img
                src={INNOVATION_CENTRE.image}
                alt="Innovation Centre"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Prototype to practice"
              title={INNOVATION_CENTRE.title}
              description={INNOVATION_CENTRE.description}
            />
            <ul className="mt-8 space-y-4">
              {INNOVATION_CENTRE.features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{f.title}</p>
                    <p className="mt-1 text-sm text-muted">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
