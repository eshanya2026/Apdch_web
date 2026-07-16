import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { HOSPITAL_TESTIMONIALS } from '@/lib/hospitalConstants'

export default function HospitalTestimonials() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Trusted voices"
            title="Testimonials"
            description="Patients describe the calm, clarity, and clinical craft of APDCH Teaching Hospital."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {HOSPITAL_TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-white/95 p-7 shadow-brand-card transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                <Quote className="mb-4 h-8 w-8 text-accent" />
                <p className="flex-1 font-display text-xl leading-snug text-foreground md:text-[1.35rem]">
                  “{item.quote}”
                </p>
                <footer className="mt-8 flex items-center gap-3 border-t border-border/60 pt-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40"
                  />
                  <div>
                    <cite className="not-italic text-sm font-semibold text-foreground">
                      {item.name}
                    </cite>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
