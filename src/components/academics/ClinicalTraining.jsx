import { Hospital, Cpu, MessagesSquare, MapPinned } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CLINICAL_TRAINING } from '@/lib/academicsConstants'

const ICONS = { Hospital, Cpu, MessagesSquare, MapPinned }

export default function ClinicalTraining() {
  return (
    <section id="clinical" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-tr" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Chairside mastery"
            title="Clinical Training"
            description="Learning happens where patients are — across specialty clinics, labs, conferences, and outreach."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CLINICAL_TRAINING.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:bg-white/10">
                  <Icon className="mb-4 h-6 w-6 text-accent transition-transform group-hover:scale-110" />
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
