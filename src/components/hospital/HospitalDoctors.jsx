import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { HOSPITAL_DOCTORS, HOSPITAL_DOCTORS_SECTION } from '@/lib/hospitalConstants'

export default function HospitalDoctors() {
  return (
    <section id="doctors" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={HOSPITAL_DOCTORS_SECTION.eyebrow}
              title={HOSPITAL_DOCTORS_SECTION.title}
              description={HOSPITAL_DOCTORS_SECTION.description}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="soft" size="lg">
              <Link to="/faculty">
                View All Faculty
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOSPITAL_DOCTORS.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-xs transition-all duration-500 hover:-translate-y-2 hover:shadow-brand-lg">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-xl text-white">{doctor.name}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                      {doctor.role}
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted">{doctor.specialty}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
