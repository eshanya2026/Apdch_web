import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { CAMPUS_OVERVIEW } from '@/lib/aboutConstants'

export default function CampusOverview() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={CAMPUS_OVERVIEW.eyebrow}
            title={CAMPUS_OVERVIEW.title}
            description={CAMPUS_OVERVIEW.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CAMPUS_OVERVIEW.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" variant="soft">
              <Link to="/about/campus-life">
                Explore Campus Life
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
