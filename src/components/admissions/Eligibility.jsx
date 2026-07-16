import { CheckCircle2, GraduationCap, Stethoscope } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ELIGIBILITY } from '@/lib/admissionsConstants'

export default function Eligibility() {
  return (
    <section id="eligibility" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Who can apply"
            title="Eligibility"
            description="Academic and entrance requirements for undergraduate and postgraduate dental programmes."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[1.75rem] border border-border/80 bg-white p-8 shadow-brand-xs md:p-10">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </span>
              <h3 className="font-display text-3xl text-foreground">BDS Eligibility</h3>
              <ul className="mt-6 space-y-4">
                {ELIGIBILITY.bds.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="h-full rounded-[1.75rem] border border-white/10 bg-foreground p-8 md:p-10">
              <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                <Stethoscope className="h-6 w-6" />
              </span>
              <h3 className="font-display text-3xl text-white">MDS Eligibility</h3>
              <ul className="mt-6 space-y-4">
                {ELIGIBILITY.mds.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
