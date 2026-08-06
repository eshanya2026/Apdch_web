import { useState } from 'react'
import {
  Target,
  Circle,
  Feather,
  Gamepad2,
  Trees,
  Dumbbell,
} from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { SPORTS, SPORTS_SECTION } from '@/lib/campusLifeConstants'

const ICONS = { Target, Circle, Feather, Gamepad2, Trees, Dumbbell }

export default function CampusLifeSports() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="sports" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-tl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {SPORTS_SECTION.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              {SPORTS_SECTION.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
              {SPORTS_SECTION.description}
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10">
              <img
                src={SPORTS_SECTION.image}
                alt="Sports at APDCH"
                className="aspect-video w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {SPORTS.map((sport, i) => {
              const Icon = ICONS[sport.icon]
              const isActive = hovered === i
              return (
                <Reveal key={sport.title} delay={i * 0.05} className="h-full w-full">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setHovered((current) => (current === i ? null : i))}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered(null)}
                    className={`group flex h-full w-full flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all duration-300 ${
                      isActive
                        ? 'scale-[1.03] border-accent/40 bg-white/[0.12] text-white shadow-xl'
                        : 'border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]'
                    }`}
                  >
                    <span className="mb-4 flex h-13 w-13 items-center justify-center rounded-xl bg-white/10 text-accent transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="text-sm font-bold tracking-tight md:text-base">{sport.title}</span>
                  </button>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
