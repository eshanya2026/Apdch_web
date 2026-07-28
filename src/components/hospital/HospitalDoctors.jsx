import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { HOSPITAL_DOCTORS, HOSPITAL_DOCTORS_SECTION } from '@/lib/hospitalConstants'

export default function HospitalDoctors() {
  return (
    <section id="doctors" className="bg-background px-5 py-24 md:px-8 md:py-32 overflow-hidden">
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {HOSPITAL_DOCTORS.map((doctor, i) => (
            <Reveal key={doctor.name} delay={i * 0.05}>
              <article className="group relative flex flex-col items-center pt-2 pb-2 transition-all duration-500 hover:-translate-y-2">
                {/* Clean Uniform Portrait Frame */}
                <div className="relative aspect-[4/4.8] w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-b from-surface-soft via-white to-slate-50 shadow-brand-sm transition-all duration-500 group-hover:border-primary/35 group-hover:shadow-brand-md">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* Floating Theme Banner Badge */}
                <div className="relative z-20 -mt-8 w-[92%] sm:w-[94%] rounded-2xl bg-gradient-to-r from-footer via-primary-dark to-primary p-4 shadow-xl border border-white/20 backdrop-blur-md transition-all duration-500 group-hover:shadow-brand-lg group-hover:border-white/35">
                  <h3 className="text-base md:text-lg font-bold tracking-tight text-white font-display">
                    {doctor.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-rose-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="uppercase tracking-wider text-[11px] text-accent/90">{doctor.role}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-white/80 font-medium truncate pl-3">
                    {doctor.specialty}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
