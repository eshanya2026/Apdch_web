import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Bone, GraduationCap, Microscope, ShieldPlus } from 'lucide-react'

const HIGHLIGHT_ICONS = [GraduationCap, ShieldPlus, Bone, Microscope]

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
              eyebrow={department.aboutEyebrow ?? 'Overview'}
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
            {department.departmentHighlights?.length ? (
              <div className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-brand-xs md:p-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Department Highlights</p>
                <div className="space-y-3">
                  {department.departmentHighlights.map((item, index) => {
                    const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length]
                    return (
                      <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-primary/[0.045] p-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
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
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
