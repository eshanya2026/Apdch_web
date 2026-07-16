import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ACADEMIC_CALENDAR } from '@/lib/academicsConstants'

export default function AcademicCalendar() {
  return (
    <section id="calendar" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Year at a glance"
            title="Academic Calendar"
            description="An indicative rhythm of teaching, clinics, and examinations across the academic year."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACADEMIC_CALENDAR.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group h-full rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-brand-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  {item.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
