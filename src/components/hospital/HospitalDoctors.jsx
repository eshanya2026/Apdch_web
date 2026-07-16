import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { HOSPITAL_DOCTORS } from '@/lib/hospitalConstants'

export default function HospitalDoctors() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Our clinicians"
              title="Doctors"
              description="Faculty specialists who practise and teach at the highest standard of dental hospital care."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="soft">
              <Link to="/faculty">
                View all faculty
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HOSPITAL_DOCTORS.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-[1.5rem] border border-border/70 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {doctor.role}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">{doctor.name}</h3>
                    <p className="mt-1 text-sm text-white/70">{doctor.specialty}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
