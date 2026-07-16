import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { HOSPITAL_SPECIALTIES } from '@/lib/hospitalConstants'

export default function HospitalSpecialties() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Specialist pathways"
            title="Specialties"
            description="Nine clinical departments under one refined hospital campus — expertise without fragmentation."
          />
        </Reveal>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {HOSPITAL_SPECIALTIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <Link
                to={item.href}
                className="group flex items-start justify-between gap-4 rounded-[1.35rem] border border-border/70 bg-white px-5 py-5 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-brand-sm"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
