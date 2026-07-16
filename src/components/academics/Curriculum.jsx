import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CURRICULUM } from '@/lib/academicsConstants'

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Structure"
            title="Curriculum"
            description="A progressive design that moves from scientific foundations to confident clinical independence."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {CURRICULUM.map((block, i) => (
            <Reveal key={block.phase} delay={i * 0.1}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-80" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {block.phase} · {block.years}
                </span>
                <h3 className="mt-3 font-display text-2xl text-foreground md:text-3xl">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{block.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border/70 pt-5">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
