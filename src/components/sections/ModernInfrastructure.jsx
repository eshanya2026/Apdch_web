import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FACILITIES_HOME } from '@/lib/homeConstants'

export default function ModernInfrastructure() {
  return (
    <section id="infrastructure" className="mesh-bg px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Facilities"
            title="Built to Inspire Learning and Innovation"
            description="Our campus combines modern educational spaces with advanced clinical infrastructure to create an engaging environment for academic and professional development."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES_HOME.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-[1.5rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
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
