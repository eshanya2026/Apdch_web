import { GraduationCap, Users, Presentation, BookOpen } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { RESEARCH_ACADEMICS, RESEARCH_ACADEMICS_SECTION } from '@/lib/academicsConstants'

const ICONS = { GraduationCap, Users, Presentation, BookOpen }

export default function AcademicsResearch() {
  return (
    <section id="research" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={RESEARCH_ACADEMICS_SECTION.eyebrow}
            title={RESEARCH_ACADEMICS_SECTION.title}
            description={RESEARCH_ACADEMICS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESEARCH_ACADEMICS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col items-center rounded-[1.5rem] border border-border/80 bg-white p-7 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
