import { ArrowRight, Phone } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'
import { APPLY_NOW_SECTION } from '@/lib/admissionsConstants'

export default function ApplyNow() {
  return (
    <section id="apply" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full border border-white/20 animate-[float_8s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {APPLY_NOW_SECTION.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {APPLY_NOW_SECTION.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            {APPLY_NOW_SECTION.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
              <a href={`mailto:${INSTITUTION.email}?subject=Admissions%20Enquiry%20APDCH`}>
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${INSTITUTION.phone}`}>
                <Phone className="h-4 w-4" />
                Contact Admissions
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
