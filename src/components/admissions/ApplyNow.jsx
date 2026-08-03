import { ArrowRight, Phone, Mail, Sparkles, GraduationCap, Award } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

const ADMISSION_CONTACTS = [
  {
    type: 'Mobile Helpline 1',
    value: '8939839999',
    href: 'tel:8939839999',
    icon: Phone,
  },
  {
    type: 'Mobile Helpline 2',
    value: '7824069597',
    href: 'tel:7824069597',
    icon: Phone,
  },
  {
    type: 'Landline Desk',
    value: '044-27528082 / 83',
    href: 'tel:04427528082',
    icon: Phone,
  },
  {
    type: 'Official Email',
    value: 'admission@apdch.edu.in',
    href: 'mailto:admission@apdch.edu.in',
    icon: Mail,
  },
]

export default function ApplyNow() {
  return (
    <section id="apply" className="relative overflow-hidden px-5 py-24 text-white md:px-8 md:py-32">
      {/* Background Gradients & Glow Effects (Maroon Home Page Theme) */}
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-48 w-48 rounded-full border border-white/20 animate-[float_8s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Admissions Open Badge */}
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/40 bg-black/50 px-4.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-brand-xs backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-accent" />
              Admissions Open 2026–27
            </span>

            <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Start Your Admission Application
            </h2>

            <p className="mt-4 text-base text-white/80 md:text-lg leading-relaxed">
              The current APDCH application portal accepts BDS and MDS applications and lists official admission helpline details below.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="group bg-white text-primary hover:bg-white/95 font-extrabold px-8 py-6 text-base rounded-full shadow-brand-lg transition-all duration-300 hover:scale-105"
              >
                <a href="#bds" className="inline-flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span>Apply for BDS</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="group bg-white/10 text-white border border-white/25 hover:bg-white/20 font-extrabold px-8 py-6 text-base rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
              >
                <a href="#mds" className="inline-flex items-center gap-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span>Apply for MDS</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Admission Contact Cards */}
        <Reveal delay={0.15}>
          <div className="mt-16 border-t border-white/20 pt-12">
            <h3 className="text-center text-xs font-extrabold uppercase tracking-[0.25em] text-white mb-8 drop-shadow-sm">
              Official Admission Contact Details
            </h3>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {ADMISSION_CONTACTS.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.type}
                    href={item.href}
                    className="group flex flex-col items-center rounded-2xl border border-white/25 bg-white/15 p-6 text-center backdrop-blur-md shadow-brand-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/25"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary font-bold shadow-brand-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-slate-900">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="mt-4 text-[11px] font-extrabold uppercase tracking-wider text-accent drop-shadow-xs">
                      {item.type}
                    </span>
                    <span className="mt-1 text-base font-extrabold text-white tracking-wide transition-colors group-hover:text-white">
                      {item.value}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
