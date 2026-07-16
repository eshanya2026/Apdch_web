import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { RESEARCH_LABS } from '@/lib/researchConstants'

export default function ResearchLabs() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Spaces for discovery"
            title="Research Labs"
            description="Dedicated suites supporting materials science, pathology, clinical trials coordination, and field research."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {RESEARCH_LABS.map((lab, i) => (
            <Reveal key={lab.title} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{lab.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{lab.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
