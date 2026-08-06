import { useState } from 'react'
import {
  Stethoscope,
  GraduationCap,
  Presentation,
  Music,
  HeartHandshake,
  Briefcase,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { STUDENT_CLUBS, CLUBS_SECTION } from '@/lib/campusLifeConstants'

const ICONS = {
  Stethoscope,
  GraduationCap,
  Presentation,
  Music,
  HeartHandshake,
  Briefcase,
}

export default function CampusLifeClubs() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="clinical-learning" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={CLUBS_SECTION.eyebrow}
            title={CLUBS_SECTION.title}
            description={CLUBS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STUDENT_CLUBS.map((club, i) => {
            const Icon = ICONS[club.icon]
            return (
              <Reveal key={club.title} delay={i * 0.06} className="h-full w-full">
                <button
                  type="button"
                  aria-label={`${club.title}: show details`}
                  aria-pressed={activeCard === i}
                  onClick={() => setActiveCard((current) => (current === i ? null : i))}
                  className="group relative block h-52 w-full overflow-hidden rounded-[1.75rem] text-left [perspective:1000px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                >
                  <div
                    className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${
                      activeCard === i ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    {/* Front */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-between rounded-[1.75rem] bg-gradient-to-br ${club.color} p-6 text-white [backface-visibility:hidden]`}
                    >
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold">{club.title}</h3>
                        <p className="mt-2 text-xs text-white/70">
                          <span className="md:hidden">Tap to learn more</span>
                          <span className="hidden md:inline">Hover or click to learn more</span>
                        </p>
                      </div>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 flex flex-col justify-center rounded-[1.75rem] border border-border/80 bg-white p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <h3 className="text-lg font-semibold text-foreground">{club.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{club.description}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
