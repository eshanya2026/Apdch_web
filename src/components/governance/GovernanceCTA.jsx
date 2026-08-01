import { Mail, Phone, MapPin, Clock, Download, PhoneCall } from 'lucide-react'
import { INSTITUTION } from '@/lib/constants'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

export default function GovernanceCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28 lg:py-32">
      {/* Home Page Matching CTA Gradient */}
      <div className="absolute inset-0 cta-gradient" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                GOVERNANCE SUPPORT
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                Need Governance Information?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                For committee details, quality assurance initiatives, institutional policies, and governance-related documents, please contact the college administration or download the available official documents.
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 shadow-brand-sm font-bold">
                  <a href={`mailto:${INSTITUTION.email}`}>
                    <PhoneCall className="h-4 w-4" />
                    Contact Administration
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary transition-colors font-bold">
                  <a href="#downloads">
                    <Download className="h-4 w-4" />
                    Download Documents
                  </a>
                </Button>
              </div>
            </div>

            {/* Structured Contact Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* 1. Office Hours */}
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 shadow-brand-xs">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-brand-xs">
                  <Clock className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Office Hours</span>
                <p className="mt-1 text-sm font-semibold leading-snug text-white">
                  {INSTITUTION.hoursDays}<br />
                  <span className="text-xs text-white/80">{INSTITUTION.hoursTime}</span>
                </p>
              </div>

              {/* 2. Official Email */}
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 shadow-brand-xs">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-brand-xs">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Official Email</span>
                <p className="mt-1 text-sm font-semibold text-white truncate" title={INSTITUTION.email}>
                  {INSTITUTION.email}
                </p>
              </div>

              {/* 3. Phone */}
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 shadow-brand-xs">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-brand-xs">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">College Phone</span>
                <p className="mt-1 text-sm font-semibold text-white">
                  {INSTITUTION.phone}
                </p>
              </div>

              {/* 4. Location */}
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 shadow-brand-xs">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-brand-xs">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Location</span>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-white">
                  College Administration & Secretariat, APDCH, Melmaruvathur
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
