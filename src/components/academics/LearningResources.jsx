import {
  Presentation,
  FlaskConical,
  Scan,
  MonitorPlay,
  Bone,
  Users,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { LEARNING_RESOURCES } from '@/lib/academicsConstants'

const ICONS = { Presentation, FlaskConical, Scan, MonitorPlay, Bone, Users }

export default function LearningResources() {
  return (
    <section id="resources" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-bl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Tools to excel"
            title="Learning Resources"
            description="Spaces, technology, and collections that make deliberate practice possible every day."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_RESOURCES.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-400 hover:-translate-y-1 hover:bg-white/10">
                  <Icon className="mb-4 h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
