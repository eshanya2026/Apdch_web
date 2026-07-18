import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FACILITIES, FACILITIES_SECTION } from '@/lib/hospitalConstants'

export default function HospitalFacilities() {
  return (
    <section id="facilities" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={FACILITIES_SECTION.eyebrow}
            title={FACILITIES_SECTION.title}
            description={FACILITIES_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {FACILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-xs transition-all duration-500 hover:-translate-y-1 hover:shadow-brand-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                  <h3 className="absolute bottom-5 left-5 font-display text-2xl text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="p-6 text-sm leading-relaxed text-muted md:p-7">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
