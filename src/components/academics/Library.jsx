import {
  BookOpen,
  Newspaper,
  Monitor,
  MonitorPlay,
  Armchair,
  FlaskConical,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { LIBRARY } from '@/lib/academicsConstants'

const ICONS = { BookOpen, Newspaper, Monitor, MonitorPlay, Armchair, FlaskConical }

export default function Library() {
  return (
    <section id="library" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src={LIBRARY.image}
                alt="Central library at APDCH"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/20" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow={LIBRARY.eyebrow}
              title={LIBRARY.title}
              description={LIBRARY.description}
            />
            {LIBRARY.resourcesTitle && (
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {LIBRARY.resourcesTitle}
              </p>
            )}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {LIBRARY.features.map((f) => {
                const Icon = ICONS[f.icon]
                return (
                  <div
                    key={f.title}
                    className="group flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-brand-xs"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-semibold leading-snug text-foreground md:text-base">
                      {f.title}
                    </h3>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
