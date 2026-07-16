import { FileBadge } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { PATENTS } from '@/lib/researchConstants'

export default function Patents() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Intellectual property"
            title="Patents"
            description="Filings and granted concepts emerging from clinical problem-solving on campus."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PATENTS.map((patent, i) => (
            <Reveal key={patent.title} delay={i * 0.08}>
              <article className="group h-full rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-brand-sm">
                <FileBadge className="mb-4 h-6 w-6 text-primary" />
                <div className="mb-3 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="rounded-full bg-surface-soft px-2.5 py-1 text-primary">
                    {patent.type}
                  </span>
                  <span className="rounded-full bg-background px-2.5 py-1 text-muted">
                    {patent.year} · {patent.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{patent.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{patent.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
