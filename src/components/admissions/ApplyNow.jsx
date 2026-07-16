import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'

export default function ApplyNow() {
  return (
    <section id="apply" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full border border-white/20 animate-[float_8s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.9fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Apply Now
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Ready to join APDCH?
            </h2>
            <p className="mt-5 max-w-xl text-base text-white/75 md:text-lg">
              Connect with our Admissions Office for counselling guidance, document checklists, and
              the latest seat availability updates.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
                <a href={`mailto:${INSTITUTION.email}?subject=Admissions%20Enquiry%20APDCH`}>
                  Email Admissions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${INSTITUTION.phone}`}>Call Helpline</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-7 backdrop-blur-md md:p-8">
              <h3 className="text-lg font-semibold text-white">Admissions Office</h3>
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
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-accent" />
                  <a href={`mailto:${INSTITUTION.email}`} className="hover:text-white">
                    {INSTITUTION.email}
                  </a>
                </li>
              </ul>
              <p className="mt-6 rounded-xl bg-white/10 px-4 py-3 text-xs leading-relaxed text-white/65">
                Working hours: Monday–Saturday, 9:00 AM – 5:00 PM. Bring allotment documents when
                reporting for enrolment.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
