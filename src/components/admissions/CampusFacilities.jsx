import { Home, BookOpen, FlaskConical, Hospital, Trophy, Bus } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { CAMPUS_FACILITIES, CAMPUS_FACILITIES_SECTION } from '@/lib/admissionsConstants'

const ICONS = { Home, BookOpen, FlaskConical, Hospital, Trophy, Bus }

export default function CampusFacilities() {
  return (
    <section
      id="campus-facilities"
      className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 glow-radial-tl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:gap-16 lg:items-start">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {CAMPUS_FACILITIES_SECTION.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-[3.1rem]">
              {CAMPUS_FACILITIES_SECTION.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
              {CAMPUS_FACILITIES_SECTION.description}
            </p>
            <div className="mt-8 h-px w-16 bg-accent/60" />
          </Reveal>

          <div className="space-y-0 divide-y divide-white/10 rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm">
            {CAMPUS_FACILITIES.map((item, i) => {
              const Icon = ICONS[item.icon]
              return (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="group flex gap-5 px-6 py-6 transition-colors duration-300 hover:bg-white/[0.05] md:px-8 md:py-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-brand-pill transition-transform duration-400 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-lg font-semibold tracking-tight text-white">
                          {item.title}
                        </h3>
                        <span className="hidden text-xs font-medium text-white/30 sm:inline">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
