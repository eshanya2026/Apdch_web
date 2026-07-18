import { Clock, Users, ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { BDS_ADMISSION, BDS_ADMISSION_SECTION, MDS_ADMISSION, MDS_ADMISSION_SECTION } from '@/lib/admissionsConstants'
import { cn } from '@/lib/utils'

function ProgrammeCard({ data, dark = false }) {
  return (
    <article
      className={cn(
        'group grid overflow-hidden rounded-[1.75rem] border transition-all duration-500 hover:-translate-y-1 lg:grid-cols-2',
        dark
          ? 'border-white/10 bg-foreground text-white hover:shadow-brand-cta'
          : 'border-border/80 bg-white hover:shadow-brand-xl'
      )}
    >
      <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[360px]">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={cn(
            'absolute inset-0',
            dark ? 'bg-gradient-to-r from-foreground/30 to-transparent' : 'bg-gradient-to-t from-primary/25 to-transparent'
          )}
        />
      </div>
      <div className="flex flex-col p-7 md:p-9">
        <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wider">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
              dark ? 'bg-white/10 text-accent' : 'bg-surface-soft text-primary'
            )}
          >
            <Clock className="h-3.5 w-3.5" />
            {data.duration}
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
              dark ? 'bg-white/10 text-white/70' : 'bg-background text-muted'
            )}
          >
            <Users className="h-3.5 w-3.5" />
            {data.seats}
          </span>
        </div>
        <h3 className={cn('font-display text-3xl md:text-4xl', dark ? 'text-white' : 'text-foreground')}>
          {data.title}
        </h3>
        {data.description && (
          <p className={cn('mt-4 text-sm leading-relaxed md:text-base', dark ? 'text-white/65' : 'text-muted')}>
            {data.description}
          </p>
        )}
        {data.highlightsTitle && (
          <p
            className={cn(
              'mt-6 text-xs font-semibold uppercase tracking-[0.18em]',
              dark ? 'text-accent' : 'text-primary'
            )}
          >
            {data.highlightsTitle}
          </p>
        )}
        <ul className={cn('space-y-2.5', data.highlightsTitle ? 'mt-4' : 'mt-6')}>
          {data.highlights.map((h) => (
            <li
              key={h}
              className={cn('text-sm', dark ? 'text-white/80' : 'text-foreground/80')}
            >
              <span className={cn('mr-2', dark ? 'text-accent' : 'text-primary')}>▸</span>
              {h}
            </li>
          ))}
        </ul>
        {data.specialities && (
          <div className="mt-6">
            {data.specialitiesTitle && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {data.specialitiesTitle}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {data.specialities.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto pt-8">
          <Button asChild variant={dark ? 'outline' : 'soft'} size="sm">
            <a href="#apply">
              Start application
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}

export function BdsAdmission() {
  return (
    <section id="bds" className="mesh-bg px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={BDS_ADMISSION_SECTION.eyebrow}
            title={BDS_ADMISSION_SECTION.title}
            description={BDS_ADMISSION_SECTION.description}
          />
        </Reveal>
        <div className="mt-12">
          <Reveal>
            <ProgrammeCard data={BDS_ADMISSION} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function MdsAdmission() {
  return (
    <section id="mds" className="bg-background px-5 pt-20 pb-24 md:px-8 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={MDS_ADMISSION_SECTION.eyebrow}
            title={MDS_ADMISSION_SECTION.title}
            description={MDS_ADMISSION_SECTION.description}
          />
        </Reveal>
        <div className="mt-12">
          <Reveal>
            <ProgrammeCard data={MDS_ADMISSION} dark />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
