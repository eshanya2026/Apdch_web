import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { RECOGNITIONS } from '@/lib/aboutConstants'

export default function Recognitions() {
  return (
    <section className="bg-background px-5 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={RECOGNITIONS.eyebrow}
            title={RECOGNITIONS.title}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:gap-5">
          {RECOGNITIONS.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <article className="group flex flex-col items-center justify-center rounded-[1.5rem] border border-border/80 bg-white px-4 py-8 text-center shadow-sm transition-all duration-400 hover:-translate-y-1 hover:border-primary/25 hover:shadow-brand-sm md:py-10">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-border/80 bg-white p-2 shadow-brand-sm transition-transform duration-300 group-hover:scale-105 md:h-28 md:w-28 md:p-2.5">
                  {item.image ? (
                    <img src={item.image} alt={item.label} className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-base font-bold tracking-wider text-primary md:text-lg">
                      {item.label}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted md:text-[11px]">
                  {item.sub}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
