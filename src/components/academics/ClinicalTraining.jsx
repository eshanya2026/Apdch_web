import {
  Target,
  Bone,
  Sparkles,
  Smile,
  Leaf,
  Baby,
  ScanSearch,
  UsersRound,
  FlaskConical,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CLINICAL_TRAINING, CLINICAL_TRAINING_SECTION } from '@/lib/academicsConstants'

const ICONS = {
  Target,
  Bone,
  Sparkles,
  Smile,
  Leaf,
  Baby,
  ScanSearch,
  UsersRound,
  FlaskConical,
}

export default function ClinicalTraining() {
  return (
    <section id="clinical" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-tr" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow={CLINICAL_TRAINING_SECTION.eyebrow}
            title={CLINICAL_TRAINING_SECTION.title}
            description={CLINICAL_TRAINING_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLINICAL_TRAINING.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.05}>
                <article className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-sm font-semibold leading-snug text-white md:text-base">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
