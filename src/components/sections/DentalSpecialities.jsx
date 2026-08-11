import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ScanSearch,
  Activity,
  ShieldPlus,
  ScanFace,
  Gem,
  CircleDot,
  Baby,
  HeartHandshake,
  Microscope,
  Sparkles,
} from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { DEPARTMENTS_NAV_LINKS } from '@/lib/constants'
import { DEPARTMENTS } from '@/lib/departmentsConstants'

const DEPARTMENT_ICONS = [
  ScanSearch,
  Activity,
  ShieldPlus,
  ScanFace,
  Gem,
  CircleDot,
  Baby,
  HeartHandshake,
  Microscope,
  Sparkles,
]

function getDepartmentDetails(link) {
  const id = link.href.split('/').at(-1)
  return DEPARTMENTS.find((department) => department.id === id)
}

export default function DentalSpecialities() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="specialities" className="relative overflow-hidden bg-[#f3f5f6] px-5 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                <span className="relative h-px w-8 bg-primary">
                  <span className="absolute -left-0.5 -top-1 h-2 w-1 rounded-full bg-primary" />
                </span>
                Academic Departments
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Expertise Across Every Dental Specialty
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg lg:pb-2">
              Explore specialized departments combining academic excellence, advanced clinical care,
              modern technology, and patient-centred learning at APDCH.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS_NAV_LINKS.map((dept, i) => {
            const details = getDepartmentDetails(dept)
            const Icon = DEPARTMENT_ICONS[i] ?? Sparkles
            const isActive = activeIndex === i

            return (
              <Reveal key={dept.href} delay={i * 0.035} className="h-full">
                <Link
                  to={dept.href}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                  onPointerDown={() => setActiveIndex(i)}
                  className={`group relative flex min-h-[12.5rem] h-full flex-col overflow-hidden rounded-[1.2rem] border p-5 transition-[transform,box-shadow,border-color,color] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 ${isActive
                    ? 'border-primary/30 text-white shadow-brand-md -translate-y-1'
                    : 'border-white bg-white text-foreground shadow-brand-xs hover:-translate-y-1 hover:border-primary/20 hover:shadow-brand-sm'
                    }`}
                >
                  {details?.image && (
                    <>
                      <img
                        style={{ "filter": "brightness(0.5)" }}
                        src={details.image}
                        alt=""
                        aria-hidden="true"
                        className={`absolute inset-0 z-0 h-full w-full object-cover transition-[transform,opacity,filter] duration-700 ${isActive ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                          }`}
                      />

                    </>
                  )}

                  <span className="relative z-20 flex items-start justify-between gap-4">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${isActive
                        ? 'border-white/25 bg-accent text-white shadow-lg'
                        : 'border-primary/10 bg-primary text-white shadow-brand-sm'
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span
                      className={`font-display text-2xl font-medium tabular-nums transition-colors ${isActive ? 'text-white/75' : 'text-primary/20'
                        }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>

                  <span className="relative z-20 mt-auto pt-5">
                    <span className={`block font-display text-lg font-semibold leading-snug tracking-tight ${isActive ? 'drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)]' : ''}`}>
                      {dept.label}
                    </span>
                    <span className={`mt-2 line-clamp-2 block text-xs leading-relaxed ${isActive ? 'text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)]' : 'text-muted'}`}>
                      {details?.overview ?? 'Specialized education, clinical expertise, and patient care.'}
                    </span>
                    <span
                      className={`mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors ${isActive ? 'text-white' : 'text-primary'
                        }`}
                    >
                      Explore Department
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>

                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <p className="text-sm font-semibold text-foreground">
              Ten departments. One commitment to excellent dental education and patient care.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
