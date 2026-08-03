import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { WHY_APDCH_ABOUT, WHY_APDCH_SECTION } from '@/lib/aboutConstants'

export default function WhyAPDCH() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={WHY_APDCH_SECTION.eyebrow}
            title={WHY_APDCH_SECTION.title}
            description={WHY_APDCH_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_APDCH_ABOUT.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group h-full rounded-3xl border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-brand-sm md:p-7">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface-soft text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <ArrowRight className="mt-4 h-4 w-4 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
