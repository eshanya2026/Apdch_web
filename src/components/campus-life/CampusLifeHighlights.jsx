import {
  MapPinned,
  Armchair,
  Building2,
  Microscope,
  Home,
  Wifi,
} from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { CAMPUS_HIGHLIGHTS } from '@/lib/campusLifeConstants'

const ICONS = { MapPinned, Armchair, Building2, Microscope, Home, Wifi }

export default function CampusLifeHighlights() {
  return (
    <section className="border-b border-border/60 bg-white px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl tracking-tight text-foreground md:text-4xl">
            {CAMPUS_HIGHLIGHTS.title}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {CAMPUS_HIGHLIGHTS.items.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.label} delay={i * 0.05}>
                <article className="group flex h-full flex-col items-center rounded-2xl border border-border/80 bg-surface-soft/50 px-4 py-6 text-center transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-brand-sm">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  {item.value ? (
                    <>
                      <p className="font-display text-2xl font-semibold text-primary md:text-3xl">
                        {item.value}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-snug text-foreground">
                        {item.label}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm font-semibold leading-snug text-foreground md:text-base">
                      {item.label}
                    </p>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
