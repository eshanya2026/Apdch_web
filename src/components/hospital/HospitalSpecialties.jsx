import { Link } from 'react-router-dom'
import {
  Scan,
  Activity,
  AlignCenter,
  Leaf,
  Heart,
  Gem,
  Plus,
  Microscope,
  Users,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { HOSPITAL_SPECIALTIES, HOSPITAL_SPECIALTIES_SECTION } from '@/lib/hospitalConstants'

const ICONS = {
  Scan,
  Activity,
  AlignCenter,
  Leaf,
  Heart,
  Gem,
  Plus,
  Microscope,
  Users,
}

export default function HospitalSpecialties() {
  return (
    <section id="specialities" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={HOSPITAL_SPECIALTIES_SECTION.eyebrow}
            title={HOSPITAL_SPECIALTIES_SECTION.title}
            description={HOSPITAL_SPECIALTIES_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOSPITAL_SPECIALTIES.map((item, i) => {
            const Icon = ICONS[item.icon] || Plus
            return (
              <Reveal key={item.title} delay={i * 0.04}>
                <Link
                  to={item.href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-brand-sm"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
