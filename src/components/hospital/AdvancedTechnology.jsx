import { Scan, Cpu, Microscope, Monitor, Zap, ShieldCheck } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ADVANCED_TECH, ADVANCED_TECH_SECTION } from '@/lib/hospitalConstants'

const ICONS = { Scan, Cpu, Microscope, Monitor, Zap, ShieldCheck }

export default function AdvancedTechnology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-tl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow={ADVANCED_TECH_SECTION.eyebrow}
            title={ADVANCED_TECH_SECTION.title}
            description={ADVANCED_TECH_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANCED_TECH.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.08]">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-brand-pill transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
