import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { APPROVALS, APPROVALS_SECTION } from '@/lib/aboutConstants'

export default function Approvals() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={APPROVALS_SECTION.eyebrow}
            title={APPROVALS_SECTION.title}
            description={APPROVALS_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {APPROVALS.map((item, i) => (
            <Reveal key={item.short} delay={i * 0.07}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-sm md:p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-sm font-bold tracking-wider text-white shadow-brand-icon">
                  {item.short}
                </div>
                <h3 className="text-lg font-semibold text-foreground md:text-xl">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-5 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
