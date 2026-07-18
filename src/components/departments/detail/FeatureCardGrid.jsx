import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, Medal, GraduationCap, Globe } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const ACHIEVEMENT_ICONS = {
  Trophy,
  Medal,
  GraduationCap,
  Globe,
}

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

export function DetailResearch({ department }) {
  const section = department.researchSection ?? {}
  return (
    <FeatureCardGrid
      eyebrow={section.eyebrow ?? 'Enquiry'}
      title={section.title ?? 'Research'}
      description={
        section.description ??
        'Scholarly themes pursued within the department — outcomes that improve practice.'
      }
      items={department.research}
      dark
      columns={2}
      ctaLabel={section.ctaLabel}
      ctaHref={section.ctaHref}
    />
  )
}

export function DetailAchievements({ department }) {
  const section = department.achievementsSection ?? {}
  const items = department.achievements ?? []
  const isHighlightStyle = items.some((item) => item.icon && !item.description)

  if (!isHighlightStyle) {
    return (
      <FeatureCardGrid
        eyebrow={section.eyebrow ?? 'Milestones'}
        title={section.title ?? 'Achievements'}
        description={
          section.description ??
          'Recognition earned through teaching quality, clinical volume, and community impact.'
        }
        items={items}
        columns={2}
        ctaLabel={section.ctaLabel}
        ctaHref={section.ctaHref}
      />
    )
  }

  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={section.eyebrow ?? 'Achievements'}
            title={section.title ?? 'Awards & Professional Recognition'}
            description={section.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ACHIEVEMENT_ICONS[item.icon] ?? Trophy
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group flex h-full flex-col items-center rounded-[1.5rem] border border-border/80 bg-white px-6 py-10 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-soft text-primary transition-all duration-400 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            )
          })}
        </div>

        {section.ctaLabel && section.ctaHref && (
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
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
