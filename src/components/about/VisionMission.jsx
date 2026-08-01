import { Eye, Compass, Check, Award } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { VISION, MISSION, QUALITY_COMMITMENT, VISION_MISSION } from '@/lib/aboutConstants'

export default function VisionMission() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={VISION_MISSION.eyebrow}
            title={VISION_MISSION.title}
          />
        </Reveal>

        {/* Clean 3-Card Layout for Vision, Mission & Quality Commitment */}
        <div className="mt-14 grid gap-6 grid-cols-1 lg:grid-cols-3">
          {/* Card 1: Vision */}
          <Reveal>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-intense md:p-9">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/15" />
              <span className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-brand-icon">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="relative font-display text-2xl font-bold text-foreground md:text-3xl">
                {VISION.title}
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-muted">
                {VISION.description}
              </p>
            </article>
          </Reveal>

          {/* Card 2: Mission */}
          <Reveal delay={0.1}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-foreground p-8 text-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-strong md:p-9">
              <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-primary/40 blur-3xl" />
              <span className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent backdrop-blur">
                <Compass className="h-6 w-6" />
              </span>
              <h3 className="relative font-display text-2xl font-bold text-white md:text-3xl">
                {MISSION.title}
              </h3>
              <ul className="relative mt-6 space-y-3">
                {MISSION.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Card 3: Quality Commitment */}
          <Reveal delay={0.2}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-intense md:p-9">
              <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-accent/20 blur-2xl transition-opacity group-hover:bg-accent/30" />
              <span className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-icon">
                <Award className="h-6 w-6" />
              </span>
              <h3 className="relative font-display text-2xl font-bold text-foreground md:text-3xl">
                {QUALITY_COMMITMENT.title}
              </h3>
              <p className="relative mt-4 text-base leading-relaxed text-muted">
                {QUALITY_COMMITMENT.description}
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
