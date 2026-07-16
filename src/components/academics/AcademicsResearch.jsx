import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { RESEARCH_ACADEMICS } from '@/lib/academicsConstants'

export default function AcademicsResearch() {
  return (
    <section id="research" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Scholarship"
              title="Research"
              description="Enquiry is woven into academic life — from student projects to faculty publications and CDE events."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {RESEARCH_ACADEMICS.map((item) => (
                <article
                  key={item.title}
                  className="group rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/20 hover:shadow-brand-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                    {item.metric}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
