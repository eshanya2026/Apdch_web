import { Trophy, HeartHandshake, Landmark, FlaskConical } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { SCHOLARSHIPS } from '@/lib/admissionsConstants'

const ICONS = { Trophy, HeartHandshake, Landmark, FlaskConical }

export default function Scholarships() {
  return (
    <section id="scholarships" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Financial aid"
            title="Scholarships"
            description="Merit, need, and government pathways that help talented students pursue dental education."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCHOLARSHIPS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group h-full rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-brand-icon transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
