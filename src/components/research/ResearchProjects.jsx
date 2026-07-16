import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { PROJECTS } from '@/lib/researchConstants'
import { cn } from '@/lib/utils'

export default function ResearchProjects() {
  return (
    <section id="projects" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Current work"
            title="Projects"
            description="Active and recent investigations spanning clinics, laboratories, and community field sites."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-surface-soft px-2.5 py-1 text-[11px] font-semibold text-primary">
                    {project.focus}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-1 text-[11px] font-semibold',
                      project.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-background text-muted'
                    )}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
