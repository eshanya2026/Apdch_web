import { useState } from 'react'
import {
  Presentation,
  Microscope,
  Cpu,
  Hospital,
  Theater,
  Trees,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CAMPUS_FACILITIES, CAMPUS_FACILITIES_SECTION } from '@/lib/campusLifeConstants'

const ICONS = { Presentation, Microscope, Cpu, Hospital, Theater, Trees }

export default function CampusLifeFacilities() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="facilities" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-br" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow={CAMPUS_FACILITIES_SECTION.eyebrow}
            title={CAMPUS_FACILITIES_SECTION.title}
            description={CAMPUS_FACILITIES_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {CAMPUS_FACILITIES.map((facility, i) => {
            const Icon = ICONS[facility.icon]
            const isActive = hovered === i
            return (
              <Reveal key={facility.title} delay={i * 0.05} className="h-full w-full">
                <button
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={`group flex h-full min-h-[9.5rem] w-full flex-col items-center justify-center rounded-2xl border p-6 text-center transition-all duration-300 ${
                    isActive
                      ? 'scale-[1.03] border-accent/40 bg-white/[0.12] text-white shadow-xl'
                      : 'border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <span className="mb-4 flex h-13 w-13 items-center justify-center rounded-xl bg-white/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-bold tracking-tight md:text-base">
                    {facility.title}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
