import { Link } from 'react-router-dom'
import { Phone, Users, Mail } from 'lucide-react'
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
            Get In Touch
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {department.ctaTitle ?? `Appointments for ${department.name}`}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            {department.ctaDescription ||
              `Book an appointment or learn more about the department's clinical and academic services.`}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-brand-md px-6 py-6">
              <a href={`tel:${INSTITUTION.phone}`}>
                <Phone className="h-4 w-4" />
                <span>Book Appointment</span>
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary transition-colors font-bold px-6 py-6">
              <Link to="/faculty">
                <Users className="h-4 w-4" />
                <span>Meet Our Faculty</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary transition-colors font-bold px-6 py-6">
              <a
                href={`mailto:${INSTITUTION.email}?subject=${encodeURIComponent(
                  `Department Enquiry — ${department.name}`
                )}`}
              >
                <Mail className="h-4 w-4" />
                <span>Contact Department</span>
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
