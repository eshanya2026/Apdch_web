import { Siren, Phone, MapPin, Clock } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { EMERGENCY_CONTACT } from '@/lib/hospitalConstants'
import { INSTITUTION } from '@/lib/constants'

export default function EmergencyContact() {
  return (
    <section id="emergency" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-center" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md md:p-12">
            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-pill">
                  <Siren className="h-6 w-6" />
                </span>
                <SectionHeading
                  light
                  align="left"
                  eyebrow="When every minute matters"
                  title={EMERGENCY_CONTACT.title}
                  description={EMERGENCY_CONTACT.description}
                />
              </div>
              <div className="w-full max-w-sm space-y-4 rounded-[1.5rem] border border-white/15 bg-white/5 p-6">
                <div className="flex items-start gap-3 text-sm text-white/80">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/45">
                      {EMERGENCY_CONTACT.phoneLabel}
                    </p>
                    <a
                      href={`tel:${INSTITUTION.emergency}`}
                      className="mt-1 block text-lg font-semibold text-white hover:text-accent"
                    >
                      {INSTITUTION.emergency}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {EMERGENCY_CONTACT.hours}
                </div>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {EMERGENCY_CONTACT.addressHint}
                </div>
                <Button asChild className="mt-2 w-full" size="lg">
                  <a href={`tel:${INSTITUTION.emergency}`}>Call emergency now</a>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <a href={`tel:${INSTITUTION.phone}`}>OPD desk {INSTITUTION.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
