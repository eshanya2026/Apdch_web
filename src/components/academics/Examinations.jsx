import { ClipboardCheck, FileText, Stethoscope, MessagesSquare } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { EXAMINATIONS } from '@/lib/academicsConstants'

const ICONS = { ClipboardCheck, FileText, Stethoscope, MessagesSquare }

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

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMINATIONS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col items-center rounded-[1.5rem] border border-border/80 bg-white p-7 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold leading-snug tracking-tight text-foreground md:text-lg">
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
