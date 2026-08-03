import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Award, GraduationCap, CheckCircle2, BadgeCheck } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

const ACCREDITATIONS = [
  {
    mark: 'DCI',
    title: 'DCI Approved',
    subtitle: 'Dental Council of India',
    tag: 'Statutory Body',
    image: '/dci.png',
    imageAlt: 'Dental Council of India logo',
    icon: ShieldCheck,
    accentGradient: 'from-amber-500/20 via-primary/5 to-transparent',
    glowColor: 'group-hover:shadow-amber-500/10',
    ringColor: 'group-hover:ring-amber-500/40',
  },
  {
    mark: 'NAAC',
    title: 'NAAC Accredited',
    subtitle: 'Assessment & Accreditation',
    tag: 'Quality Excellence',
    image: '/naac.png',
    imageAlt: 'NAAC logo',
    icon: Award,
    accentGradient: 'from-rose-500/20 via-primary/5 to-transparent',
    glowColor: 'group-hover:shadow-rose-500/10',
    ringColor: 'group-hover:ring-rose-500/40',
  },
  {
    mark: 'MGR',
    title: 'MGR University',
    subtitle: 'The Tamil Nadu Dr. M.G.R. Med. Univ.',
    tag: 'Affiliated University',
    image: '/mgr logo.png',
    imageAlt: 'MGR University logo',
    icon: GraduationCap,
    accentGradient: 'from-emerald-500/20 via-primary/5 to-transparent',
    glowColor: 'group-hover:shadow-emerald-500/10',
    ringColor: 'group-hover:ring-emerald-500/40',
  },
  {
    mark: 'ISO',
    title: 'ISO 9001:2015',
    subtitle: 'Global Quality Management',
    tag: 'Certified Institution',
    image: '/iso.png',
    imageAlt: 'ISO 9001:2015 logo',
    icon: CheckCircle2,
    accentGradient: 'from-blue-500/20 via-primary/5 to-transparent',
    glowColor: 'group-hover:shadow-blue-500/10',
    ringColor: 'group-hover:ring-blue-500/40',
  },
]

export default function TrustedRecognized() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-slate-50/50 to-background py-20 md:py-28">
      {/* Glow Orbs */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary">
              <BadgeCheck className="h-4 w-4" />
              Recognitions &amp; Affiliations
            </div>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
              Trusted &amp; Recognized
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted md:text-lg">
              Committed to maintaining full compliance with statutory authorities and international quality standards.
            </p>
          </div>
        </Reveal>

        {/* Accredited Partners Badge Cards */}
        <Reveal delay={0.1}>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACCREDITATIONS.map((item) => {
              const IconComponent = item.icon
              return (
                <div
                  key={item.mark}
                  className={`group relative flex flex-col items-center justify-between rounded-3xl border border-border/70 bg-white p-6 text-center shadow-brand-card transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-xl ring-1 ring-black/5 ${item.ringColor}`}
                >
                  {/* Subtle Background Glow */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${item.accentGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  <div className="relative z-10 flex w-full flex-col items-center">
                    {/* Floating Emblem Avatar */}
                    <div className="relative flex h-28 w-full items-center justify-center rounded-2xl bg-slate-50/80 p-4 transition-all duration-300 group-hover:bg-white group-hover:shadow-brand-xs">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.imageAlt ?? item.title}
                          className="h-full max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <span className="font-display text-2xl font-black text-primary">
                          {item.mark}
                        </span>
                      )}
                    </div>

                    {/* Title & Badge */}
                    <div className="mt-6 flex flex-col items-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider text-primary/80">
                        <IconComponent className="h-3.5 w-3.5" />
                        {item.tag}
                      </span>
                      <h3 className="mt-2 font-display text-lg font-extrabold text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Verification Indicator */}
                  <div className="relative z-10 mt-6 flex items-center justify-center w-full border-t border-border/50 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                      Verified Compliance
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button
              asChild
              size="lg"
              className="group bg-primary text-white hover:bg-primary/90 font-bold px-8 py-6 text-base rounded-full shadow-brand-md transition-all duration-300 hover:shadow-brand-lg hover:scale-105"
            >
              <Link to="/about" className="inline-flex items-center gap-2">
                <span>Explore Institutional Overview</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
