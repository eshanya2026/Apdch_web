import { GraduationCap, Award, ScrollText, BookOpenCheck, ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ACADEMIC_PROGRAMS } from '@/lib/academicsConstants'

const ICONS = { GraduationCap, Award, ScrollText, BookOpenCheck }

export default function AcademicPrograms() {
  return (
    <section id="programs" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Programmes"
            title="Academic Programs"
            description="Pathways from foundational dentistry to specialty mastery and lifelong learning."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {ACADEMIC_PROGRAMS.map((program, i) => {
            const Icon = ICONS[program.icon]
            return (
              <Reveal key={program.short} delay={i * 0.07}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand-intense md:p-8">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-brand-icon transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-semibold text-primary">
                      {program.duration}
                    </span>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {program.short}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {program.topics.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#curriculum"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    View curriculum
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
