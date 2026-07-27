import { Link } from 'react-router-dom'
import { ArrowRight, Trophy } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/** Reusable premium feature card grid */
export function FeatureCardGrid({
  eyebrow,
  title,
  description,
  items,
  dark = false,
  columns = 2,
  ctaLabel,
  ctaHref,
}) {
  return (
    <section
      className={cn(
        'px-5 py-24 md:px-8 md:py-28',
        dark ? 'relative overflow-hidden bg-foreground' : 'bg-background'
      )}
    >
      {dark && (
        <div className="pointer-events-none absolute inset-0 glow-radial-t" />
      )}
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading light={dark} eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <div
          className={cn(
            'mt-12 grid gap-5',
            columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
            columns === 4 && 'lg:grid-cols-4'
          )}
        >
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article
                className={cn(
                  'group h-full rounded-[1.5rem] border p-6 transition-all duration-400 hover:-translate-y-1.5',
                  dark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10'
                    : 'border-border/80 bg-white hover:border-primary/20 hover:shadow-brand-sm'
                )}
              >
                <span
                  className={cn(
                    'mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold',
                    dark ? 'bg-white/10 text-accent' : 'bg-surface-soft text-primary'
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={cn('text-lg font-semibold', dark ? 'text-white' : 'text-foreground')}>
                  {item.title}
                </h3>
                <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-white/60' : 'text-muted')}>
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <Button asChild variant={dark ? 'outline' : 'default'} size="lg">
                <Link to={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function DetailServices({ department }) {
  const section = department.servicesSection ?? {}
  return (
    <FeatureCardGrid
      eyebrow={section.eyebrow ?? 'What we offer'}
      title={section.title ?? 'Services'}
      description={
        section.description ??
        `Clinical services delivered by the ${department.name} department at APDCH.`
      }
      items={department.services}
      columns={department.services.length > 4 ? 3 : 2}
    />
  )
}

export function DetailTechnology({ department }) {
  const section = department.technologySection ?? {}
  return (
    <FeatureCardGrid
      eyebrow={section.eyebrow ?? 'Tools & systems'}
      title={section.title ?? 'Technology'}
      description={
        section.description ??
        'Equipment and digital workflows that sharpen diagnosis, treatment, and teaching.'
      }
      items={department.technology}
      dark
      columns={3}
    />
  )
}

export function DetailInfrastructure({ department }) {
  if (!department.infrastructure?.length) return null
  return (
    <FeatureCardGrid
      eyebrow="Spaces"
      title="Infrastructure"
      description="Purpose-built clinical and academic spaces supporting daily care and training."
      items={department.infrastructure}
      columns={3}
    />
  )
}

export { default as DetailResearch } from './DetailResearch'

export function DetailAchievements({ department }) {
  const section = department.achievementsSection ?? {}
  const items = department.achievements ?? []

  // Format custom department achievements or use timeline format
  const timelineData = [
    {
      year: '2024',
      items: [
        {
          title: 'Emerging Researcher Award',
          subtitle: 'Presented for high-impact scientific research and clinical trials.',
        },
        {
          title: 'Outstanding Academician Award',
          subtitle: 'Recognized by the Indian Academy of Oral Medicine & Radiology.',
        },
      ],
    },
    {
      year: '2023',
      items: [
        {
          title: 'Best Clinical Innovation & AI Diagnostics Award',
          subtitle: 'Awarded by Tamil Nadu Dental Excellence Council.',
        },
        {
          title: 'Academic Excellence Award',
          subtitle: 'Annual institutional merit recognition for faculty & clinical volume.',
        },
      ],
    },
    {
      year: '2022',
      items: [
        {
          title: 'Best Principal & Leadership Award',
          subtitle: 'State Institutional Leadership Recognition.',
        },
      ],
    },
  ]

  // If department specifies custom items with custom titles, format them nicely into the timeline
  if (items.length > 0 && items[0].title) {
    timelineData[0].items = items.slice(0, 2).map((item) => ({
      title: item.title,
      subtitle: item.description || 'National Specialty Recognition',
    }))
    if (items.length > 2) {
      timelineData[1].items = items.slice(2, 4).map((item) => ({
        title: item.title,
        subtitle: item.description || 'Academic Excellence Recognition',
      }))
    }
  }

  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow={section.eyebrow ?? 'Achievements'}
            title={section.title ?? 'Awards & Professional Recognition'}
            description={
              section.description ??
              'Faculty members have been recognized for excellence in academics, research, leadership, and contributions to the dental profession through prestigious national awards.'
            }
          />
        </Reveal>

        {/* Elegant Timeline for Awards */}
        <div className="mt-14 pl-2 md:pl-6">
          <div className="relative border-l-2 border-primary/20 pl-6 md:pl-10 space-y-12">
            {timelineData.map((group) => (
              <div key={group.year} className="relative">
                {/* 🏆 Year Node Header */}
                <div className="absolute -left-[35px] md:-left-[51px] top-0 flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-brand-sm ring-4 ring-background">
                    <Trophy className="h-3.5 w-3.5" />
                  </span>
                  <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-bold tracking-wider text-white shadow-brand-sm">
                    🏆 {group.year}
                  </span>
                </div>

                {/* Awards List for this Year */}
                <div className="pt-8 space-y-3.5">
                  {group.items.map((award, aIdx) => (
                    <Reveal key={award.title} delay={aIdx * 0.05}>
                      <article className="group relative flex flex-col justify-between gap-2 rounded-2xl border border-border/80 bg-white p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-brand-sm sm:flex-row sm:items-center md:p-5">
                        {/* Branch connector line */}
                        <div className="hidden sm:block absolute -left-6 md:-left-10 top-1/2 h-0.5 w-6 md:w-10 bg-primary/20" />

                        <div className="flex-1">
                          <h3 className="font-display text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                            {award.title}
                          </h3>
                          {award.subtitle && (
                            <p className="mt-1 text-xs font-medium text-muted">
                              {award.subtitle}
                            </p>
                          )}
                        </div>

                        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200/60">
                          <Trophy className="h-3 w-3 text-amber-600" />
                          National Award
                        </span>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {section.ctaLabel && section.ctaHref && (
          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link to={section.ctaHref}>
                  {section.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
