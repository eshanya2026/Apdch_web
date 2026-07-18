import {
  BookOpen,
  Newspaper,
  Monitor,
  Armchair,
  FlaskConical,
  Library,
} from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { LIBRARY_SECTION } from '@/lib/campusLifeConstants'

const ICONS = { BookOpen, Newspaper, Monitor, Armchair, FlaskConical, Library }

export default function CampusLifeLibrary() {
  return (
    <section id="library" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={LIBRARY_SECTION.image}
                alt="APDCH library"
                className="aspect-[5/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/50 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {LIBRARY_SECTION.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
                {LIBRARY_SECTION.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {LIBRARY_SECTION.description}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {LIBRARY_SECTION.features.map((feature, i) => {
                const Icon = ICONS[feature.icon]
                return (
                  <Reveal key={feature.title} delay={i * 0.06}>
                    <article className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-4 py-4 transition-all duration-400 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-brand-sm">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-medium leading-snug text-foreground md:text-base">
                        {feature.title}
                      </p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
