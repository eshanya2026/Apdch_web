import { FileText, Stethoscope, MessagesSquare, FileCheck } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { EXAMINATIONS, EXAMINATIONS_SECTION } from '@/lib/academicsConstants'

const ICONS = { FileText, Stethoscope, MessagesSquare, FileCheck }

export default function Examinations() {
  return (
    <section id="exams" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={EXAMINATIONS_SECTION.eyebrow}
            title={EXAMINATIONS_SECTION.title}
            description={EXAMINATIONS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMINATIONS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col rounded-3xl border border-border/80 bg-white p-7 text-left transition-all duration-400 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
