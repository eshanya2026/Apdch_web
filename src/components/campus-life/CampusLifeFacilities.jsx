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

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {CAMPUS_FACILITIES.map((facility, i) => {
            const Icon = ICONS[facility.icon]
            const isActive = hovered === i
            return (
              <Reveal key={facility.title} delay={i * 0.05}>
                <button
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  className={`group flex h-full min-h-[9.5rem] w-full flex-col items-center justify-center rounded-[3.6px] border p-5 text-center transition-[transform,background-color,border-color,color] duration-300 ${
                    isActive
                      ? 'scale-[1.03] border-white/25 bg-white/[0.08] text-white'
                      : 'border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.08]'
                  }`}
                >
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-[3.6px] bg-white/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-snug md:text-base">
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
