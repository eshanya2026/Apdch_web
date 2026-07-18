import {
  BookOpen,
  Stethoscope,
  Sparkles,
  FlaskConical,
  Award,
  HeartHandshake,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import {
  PROFESSIONAL_DEVELOPMENT,
  PROFESSIONAL_DEVELOPMENT_SECTION,
} from '@/lib/admissionsConstants'

const ICONS = {
  BookOpen,
  Stethoscope,
  Sparkles,
  FlaskConical,
  Award,
  HeartHandshake,
}

export default function ProfessionalDevelopment() {
  return (
    <section id="professional-development" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={PROFESSIONAL_DEVELOPMENT_SECTION.eyebrow}
            title={PROFESSIONAL_DEVELOPMENT_SECTION.title}
            description={PROFESSIONAL_DEVELOPMENT_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL_DEVELOPMENT.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group flex h-full items-center gap-4 rounded-2xl border border-border/80 bg-white px-5 py-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-brand-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
