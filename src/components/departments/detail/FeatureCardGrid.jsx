import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { cn } from '@/lib/utils'

/** Reusable premium feature card grid */
export function FeatureCardGrid({
  eyebrow,
  title,
  description,
  items,
  dark = false,
  columns = 2,
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
      </div>
    </section>
  )
}

export function DetailServices({ department }) {
  return (
    <FeatureCardGrid
      eyebrow="What we offer"
      title="Services"
      description={`Clinical services delivered by the ${department.name} department at APDCH.`}
      items={department.services}
      columns={2}
    />
  )
}

export function DetailTechnology({ department }) {
  return (
    <FeatureCardGrid
      eyebrow="Tools & systems"
      title="Technology"
      description="Equipment and digital workflows that sharpen diagnosis, treatment, and teaching."
      items={department.technology}
      dark
      columns={3}
    />
  )
}

export function DetailInfrastructure({ department }) {
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
  return (
    <FeatureCardGrid
      eyebrow="Enquiry"
      title="Research"
      description="Scholarly themes pursued within the department — outcomes that improve practice."
      items={department.research}
      dark
      columns={2}
    />
  )
}

export function DetailAchievements({ department }) {
  return (
    <FeatureCardGrid
      eyebrow="Milestones"
      title="Achievements"
      description="Recognition earned through teaching quality, clinical volume, and community impact."
      items={department.achievements}
      columns={2}
    />
  )
}
