import { Quote, Star } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { HOSPITAL_TESTIMONIALS, HOSPITAL_TESTIMONIALS_SECTION } from '@/lib/hospitalConstants'

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = i < full || (i === full && half)
        return (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${filled ? 'fill-primary text-primary' : 'text-border'}`}
          />
        )
      })}
    </div>
  )
}

export default function HospitalTestimonials() {
  return (
    <section id="testimonials" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={HOSPITAL_TESTIMONIALS_SECTION.eyebrow}
            title={HOSPITAL_TESTIMONIALS_SECTION.title}
            description={HOSPITAL_TESTIMONIALS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {HOSPITAL_TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-xs transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <Quote className="h-7 w-7 text-accent" />
                  <StarRating rating={item.rating} />
                </div>
                <p className="flex-1 font-display text-lg leading-snug text-foreground">
                  “{item.quote}”
                </p>
                <footer className="mt-7 flex items-center gap-3 border-t border-border/70 pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white"
                  >
                    {(item.name.trim()[0] || '?').toUpperCase()}
                  </span>
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
