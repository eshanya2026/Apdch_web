import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailOverview({ department }) {
  const title = department.aboutTitle ?? `About ${department.name}`
  const paragraphs =
    department.aboutParagraphs?.length > 0
      ? department.aboutParagraphs
      : [department.details, department.overviewExtra].filter(Boolean)

  return (
    <section className="mesh-bg px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={title}
              description={paragraphs[0]}
            />
            {paragraphs.slice(1).map((para) => (
              <p key={para.slice(0, 48)} className="mt-5 text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {department.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/80 bg-white p-5 shadow-brand-xs"
                >
                  <p className="font-display text-3xl text-primary">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
