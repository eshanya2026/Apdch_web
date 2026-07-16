import { Reveal } from '@/components/shared/Reveal'
import { COLLEGE_HISTORY } from '@/lib/aboutConstants'

export default function CollegeHistory() {
  return (
    <section className="mesh-bg px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {COLLEGE_HISTORY.eyebrow}
            </p>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground md:text-4xl">
              {COLLEGE_HISTORY.title}
            </h2>
            <div className="mt-5 space-y-3.5">
              {COLLEGE_HISTORY.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-muted md:text-base">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-[1.5rem] bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 blur-lg" />
              <div className="relative overflow-hidden rounded-[1.35rem] border border-border/60 shadow-brand-sm">
                <img
                  src={COLLEGE_HISTORY.image}
                  alt="Adhiparasakthi Dental College campus"
                  className="aspect-[16/11] w-full object-cover"
                />
              </div>
              <div className="relative z-10 -mt-6 grid grid-cols-2 gap-2.5 px-3 sm:px-4">
                {COLLEGE_HISTORY.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/70 bg-white px-3 py-3 shadow-md"
                  >
                    <p className="font-display text-base font-semibold text-primary md:text-lg">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
