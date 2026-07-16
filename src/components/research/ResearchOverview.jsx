import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { RESEARCH_OVERVIEW } from '@/lib/researchConstants'

export default function ResearchOverview() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Research Overview"
              title={RESEARCH_OVERVIEW.lead}
              description={RESEARCH_OVERVIEW.paragraphs[0]}
            />
            <p className="mt-5 text-base leading-relaxed text-muted">
              {RESEARCH_OVERVIEW.paragraphs[1]}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {RESEARCH_OVERVIEW.pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-2xl border border-border/80 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-brand-xs"
                >
                  <h3 className="font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
