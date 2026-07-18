import { Siren, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { EMERGENCY_CARE } from '@/lib/hospitalConstants'
import { INSTITUTION } from '@/lib/constants'

export default function EmergencyContact() {
  return (
    <section id="emergency" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-dual" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-pill">
              <Siren className="h-6 w-6" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              {EMERGENCY_CARE.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl">
              {EMERGENCY_CARE.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {EMERGENCY_CARE.description}
            </p>
            <ul className="mt-7 space-y-3">
              {EMERGENCY_CARE.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.06] p-7 backdrop-blur-md md:p-8">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/45">Emergency Line</p>
                    <a
                      href={`tel:${INSTITUTION.emergency}`}
                      className="mt-1 block text-xl font-semibold text-white hover:text-accent"
                    >
                      {INSTITUTION.emergency}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {EMERGENCY_CARE.hours}
                </div>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {EMERGENCY_CARE.location}
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Button asChild size="lg" className="w-full">
                  <a href={`tel:${INSTITUTION.emergency}`}>Call Emergency Now</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={`tel:${INSTITUTION.phone}`}>OPD Desk {INSTITUTION.phone}</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
