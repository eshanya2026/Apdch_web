import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { OUTREACH_SECTION } from '@/lib/campusLifeConstants'

export default function CampusLifeOutreach() {
  return (
    <section id="outreach" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {OUTREACH_SECTION.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
                {OUTREACH_SECTION.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {OUTREACH_SECTION.description}
              </p>
            </Reveal>

            <ul className="mt-8 space-y-3">
              {OUTREACH_SECTION.initiatives.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <li className="flex items-center gap-3 rounded-2xl border border-border/80 bg-white px-5 py-4 transition-all duration-300 hover:border-primary/20 hover:shadow-brand-xs">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-foreground md:text-base">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={OUTREACH_SECTION.image}
                alt="Community outreach"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-80" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
