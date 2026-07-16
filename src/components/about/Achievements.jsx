import {
  GraduationCap,
  Stethoscope,
  FlaskConical,
  HeartHandshake,
  BookOpen,
  Users,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ACHIEVEMENTS, ACHIEVEMENTS_SECTION } from '@/lib/aboutConstants'

const ICONS = {
  GraduationCap,
  Stethoscope,
  FlaskConical,
  HeartHandshake,
  BookOpen,
  Users,
}

export default function Achievements() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={ACHIEVEMENTS_SECTION.eyebrow}
            title={ACHIEVEMENTS_SECTION.title}
            description={ACHIEVEMENTS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group h-full rounded-[1.5rem] border border-border/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand-intense">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft text-primary transition-all duration-400 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
