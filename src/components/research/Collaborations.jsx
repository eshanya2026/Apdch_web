import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { COLLABORATIONS } from '@/lib/researchConstants'

export default function Collaborations() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Networks"
            title="Collaborations"
            description="Partnerships that extend laboratory reach, ethics capacity, and community impact."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {COLLABORATIONS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="flex gap-5 rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-brand-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {String(i + 1).padStart(2, '0')}
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
