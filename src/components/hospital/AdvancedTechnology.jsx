import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ADVANCED_TECH } from '@/lib/hospitalConstants'

export default function AdvancedTechnology() {
  return (
    <section className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-tr" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Precision tools"
            title="Advanced Technology"
            description="Imaging, microscopy, and digital dentistry selected for accuracy — never spectacle."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANCED_TECH.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:bg-white/[0.09]">
                <p className="font-display text-3xl text-accent/80">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
