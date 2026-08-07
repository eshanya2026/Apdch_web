import { Eye, Target, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailVisionMission({ department }) {
  if (!department.vision || !department.mission?.length) return null

  return (
    <section className="bg-background px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Our Direction"
            title="Vision & Mission"
            description="The principles guiding excellence in implant care, professional education, and innovation."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="h-full rounded-[1.75rem] border border-primary/10 bg-primary p-7 text-white shadow-brand-card md:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-accent">
                <Eye className="h-6 w-6" />
              </span>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-accent">Vision</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-tight md:text-3xl">A Centre of Excellence</h3>
              <p className="mt-5 text-base leading-7 text-white/75">{department.vision}</p>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="h-full">
            <article className="h-full rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-9">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Target className="h-6 w-6" />
              </span>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-primary">Mission</p>
              <ul className="mt-5 space-y-3">
                {department.mission.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl bg-primary/[0.045] px-4 py-3 text-sm font-medium text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
