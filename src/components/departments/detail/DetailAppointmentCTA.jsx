import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Phone } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'

export default function DetailAppointmentCTA({ department }) {
  return (
    <section id="appointment" className="relative overflow-hidden px-5 py-28 text-white md:px-8 md:py-36">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Book a visit
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
            Appointments for {department.name}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            Schedule a consultation with our {department.name} team, or speak with the hospital desk
            for the next available clinic slot.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
              <a href={`tel:${INSTITUTION.phone}`}>
                <Phone className="h-4 w-4" />
                Call to book
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={`mailto:${INSTITUTION.email}?subject=${encodeURIComponent(
                  `Appointment — ${department.name}`
                )}`}
              >
                <CalendarDays className="h-4 w-4" />
                Email request
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/academics">
                Explore academics
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
