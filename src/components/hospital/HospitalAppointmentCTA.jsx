import { Link } from 'react-router-dom'
import { CalendarDays, Phone, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'
import { APPOINTMENT_CTA } from '@/lib/hospitalConstants'

export default function HospitalAppointmentCTA() {
  return (
    <section id="appointment" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />
      <div className="pointer-events-none absolute -right-12 top-12 h-56 w-56 rounded-full border border-white/15 animate-[float_9s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {APPOINTMENT_CTA.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              {APPOINTMENT_CTA.title}
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
              {APPOINTMENT_CTA.description}
            </p>
            <ul className="mt-6 space-y-2.5">
              {APPOINTMENT_CTA.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
                <a href={`tel:${INSTITUTION.phone}`}>
                  <Phone className="h-4 w-4" />
                  Call to Book
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`mailto:${INSTITUTION.email}?subject=Hospital%20Appointment`}>
                  <CalendarDays className="h-4 w-4" />
                  Email Request
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/faculty">
                  Meet Doctors
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[1.75rem] border border-white/20 bg-white/10 p-7 backdrop-blur-md md:p-8">
              <h3 className="text-lg font-semibold text-white">Visit Desk</h3>
              <ul className="mt-6 space-y-4 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {INSTITUTION.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-accent" />
                  <a href={`tel:${INSTITUTION.phone}`} className="hover:text-white">
                    {INSTITUTION.phone}
                  </a>
                </li>
                <li className="rounded-xl bg-white/10 px-4 py-3 text-xs leading-relaxed text-white/70">
                  OPD: Mon–Sat · Specialty clinics by appointment · Walk-ins welcomed for triage
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
