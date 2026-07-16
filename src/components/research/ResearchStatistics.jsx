import { Reveal, SectionHeading, AnimatedCounter } from '@/components/shared/Reveal'
import { RESEARCH_STATS } from '@/lib/researchConstants'

export default function ResearchStatistics() {
  return (
    <section className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 glow-radial-br" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="At a glance"
            title="Statistics"
            description="Indicators that reflect scholarly activity across a decade of sustained enquiry."
          />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {RESEARCH_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l border-white/15 pl-5">
                <p className="font-display text-4xl text-white md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-white/55">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
