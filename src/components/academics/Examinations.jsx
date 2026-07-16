import { ClipboardCheck } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { EXAMINATIONS } from '@/lib/academicsConstants'

export default function Examinations() {
  return (
    <section id="exams" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Assessment"
            title="Examinations"
            description="Transparent evaluation standards aligned with university and Dental Council requirements."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {EXAMINATIONS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <article className="group flex h-full gap-5 rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:shadow-brand-sm md:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
