import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FACILITIES } from '@/lib/hospitalConstants'

export default function HospitalFacilities() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Spaces"
            title="Facilities"
            description="Architecture and amenities designed for clinical excellence and patient calm."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {FACILITIES.map((facility, i) => (
            <Reveal key={facility.title} delay={i * 0.07}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-brand-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-display text-2xl text-white md:text-3xl">{facility.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/75">{facility.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
