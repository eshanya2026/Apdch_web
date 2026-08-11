import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Trophy,
  Scan,
  Cpu,
  Microscope,
  Activity,
  Zap,
  ShieldCheck,
  Camera,
  Radio,
  Layers,
  Sliders,
  Truck,
  Clock3,
  Stethoscope,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Helper function to match technology/equipment items with line icons
function getEquipmentIcon(item, index) {
  if (item.icon && typeof item.icon === 'function') {
    return item.icon
  }

  const text = `${item.title || ''} ${item.description || ''}`.toLowerCase()

  if (text.includes('microscope') || text.includes('histopath') || text.includes('slide') || text.includes('tissue') || text.includes('pathology') || text.includes('pentahead')) {
    return Microscope
  }
  if (text.includes('laser') || text.includes('piezo') || text.includes('electric') || text.includes('obturation') || text.includes('curing') || text.includes('diode')) {
    return Zap
  }
  if (text.includes('cbct') || text.includes('rvg') || text.includes('opg') || text.includes('radiograph') || text.includes('x-ray') || text.includes('imaging') || text.includes('scan') || text.includes('intraoral camera')) {
    return Scan
  }
  if (text.includes('cad/cam') || text.includes('digital') || text.includes('software') || text.includes('computer') || text.includes('tablet') || text.includes('processor')) {
    return Cpu
  }
  if (text.includes('sedation') || text.includes('monitor') || text.includes('vital') || text.includes('sialendoscopy') || text.includes('ultrasound') || text.includes('survey')) {
    return Activity
  }
  if (text.includes('3d') || text.includes('printer') || text.includes('milling') || text.includes('aligner') || text.includes('furnace') || text.includes('model') || text.includes('facebow')) {
    return Layers
  }
  if (text.includes('camera') || text.includes('photo') || text.includes('slide')) {
    return Camera
  }
  if (text.includes('fluoroscopy') || text.includes('c-arm') || text.includes('carm') || text.includes('radio')) {
    return Radio
  }
  if (text.includes('steriliz') || text.includes('autoclave') || text.includes('disinfect') || text.includes('safety') || text.includes('infection') || text.includes('clean')) {
    return ShieldCheck
  }
  if (text.includes('mobile') || text.includes('portable') || text.includes('unit') || text.includes('van') || text.includes('transport')) {
    return Truck
  }
  if (text.includes('scaler') || text.includes('motor') || text.includes('locator') || text.includes('centrifuge') || text.includes('tester') || text.includes('kit') || text.includes('apex')) {
    return Sliders
  }

  const fallbacks = [Scan, Cpu, Zap, Microscope, Activity, Layers, Sliders, ShieldCheck]
  return fallbacks[index % fallbacks.length]
}

/** Reusable premium feature card grid */
export function FeatureCardGrid({
  id,
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
      id={id}
      className={cn(
        'px-5 py-16 md:px-8 md:py-24',
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
          {items.map((item, i) => {
            const IconComponent = getEquipmentIcon(item, i)

            return (
              <Reveal key={item.title} delay={i * 0.06} className="h-full w-full">
                <article
                  className={cn(
                    'group h-full rounded-[1.5rem] border p-6 transition-all duration-400 hover:-translate-y-1.5',
                    dark
                      ? 'border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10 hover:shadow-lg hover:shadow-primary/10'
                      : 'border-border/80 bg-white hover:border-primary/25 hover:shadow-brand-sm'
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Equipment Line Icon Badge */}
                    <div
                      className={cn(
                        'flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110',
                        dark
                          ? 'border-accent/30 bg-accent/10 text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-white'
                          : 'border-primary/20 bg-primary/5 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white'
                      )}
                    >
                      <IconComponent className="h-5.5 w-5.5 stroke-[1.75]" />
                    </div>

                    {/* Number Badge */}
                    <span
                      className={cn(
                        'text-xs font-bold tracking-wider opacity-60',
                        dark ? 'text-white/50' : 'text-muted'
                      )}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className={cn('text-lg font-bold tracking-tight', dark ? 'text-white' : 'text-foreground')}>
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className={cn('mt-2 text-sm leading-relaxed', dark ? 'text-white/70' : 'text-muted')}>
                      {item.description}
                    </p>
                  )}
                  {item.list && item.list.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {item.list.map((listItem) => (
                        <li key={listItem} className={cn('flex items-start gap-2 leading-snug', dark ? 'text-white/80' : 'text-foreground/80')}>
                          <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', dark ? 'bg-accent' : 'bg-primary')} />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.actionLabel && item.actionHref && (
                    <Link
                      to={item.actionHref}
                      className={cn(
                        'mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors',
                        dark ? 'text-accent hover:text-white' : 'text-primary hover:text-primary/75'
                      )}
                    >
                      {item.actionLabel}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                </article>
              </Reveal>
            )
          })}
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

function PeriodonticsServices({ department }) {
  return (
    <section className="relative overflow-hidden bg-[#faf7f7] px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-7 border-b border-primary/15 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Services Offered</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">Periodontal Treatment Services</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{department.servicesDescription}</p>
            </div>
            <div className="flex w-fit items-center gap-4 rounded-2xl bg-primary px-5 py-4 text-white shadow-brand-md">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15"><Clock3 className="h-5 w-5" /></span>
              <span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">OPD Hours</span>
                <span className="mt-1 block text-base font-semibold">8:30 AM–3:30 PM</span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-5 lg:columns-2">
          {department.services.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06} className="mb-5 w-full break-inside-avoid">
              <article className="overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white shadow-[0_12px_35px_rgba(52,32,37,0.07)]">
                <div className="flex items-center gap-4 border-b border-primary/10 px-5 py-5 md:px-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.08] text-primary"><Stethoscope className="h-5 w-5" /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary/60">Treatment Group {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-1 text-base font-bold text-foreground md:text-lg">{item.title.replace(/^\d+\.\s*/, '')}</h3>
                  </div>
                  <span className="font-display text-3xl font-light text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <ul className="grid gap-2.5 p-5 md:p-6">
                  {item.list.map((entry) => {
                    const label = typeof entry === 'string' ? entry : entry.label
                    const displayLabel = label.replace(/^\d+\.\s*/, '')
                    const highlighted = typeof entry === 'object' && entry.highlight
                    return (
                      <li key={label} className={cn('flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm leading-5', highlighted ? 'bg-primary text-white shadow-sm' : 'bg-[#faf8f8] text-foreground/75')}>
                        <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', highlighted ? 'bg-white' : 'bg-primary')} />
                        <span>{displayLabel}</span>
                      </li>
                    )
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DetailServices({ department }) {
  if (department.servicesVariant === 'periodontics-opd') {
    return <PeriodonticsServices department={department} />
  }

  if (!department?.services?.length) return null

  const section = department.servicesSection ?? {}
  return (
    <FeatureCardGrid
      id="department-services"
      eyebrow={department.servicesEyebrow ?? section.eyebrow ?? 'Services Offered'}
      title={department.servicesTitle ?? section.title ?? 'Services Offered'}
      description={
        department.servicesDescription ??
        section.description ??
        `Clinical services delivered by the ${department.name} department at APDCH.`
      }
      items={department.services}
      columns={department.services?.length > 4 ? 3 : 2}
    />
  )
}

export function DetailTechnology({ department }) {
  if (!department?.technology?.length) return null

  const section = department.technologySection ?? {}
  return (
    <FeatureCardGrid
      eyebrow={department.technologyEyebrow ?? section.eyebrow ?? 'Laboratory & Equipment'}
      title={department.technologyTitle ?? section.title ?? 'Laboratory & Equipment'}
      description={
        department.technologyDescription ??
        section.description ??
        'Advanced equipment, digital systems, and specialized academic infrastructure.'
      }
      items={department.technology}
      dark
      columns={department.technology?.length > 4 ? 4 : 3}
    />
  )
}

export function DetailInfrastructure({ department }) {
  const items = department.advancedServices?.length
    ? department.advancedServices
    : department.infrastructure

  if (!items?.length) return null

  return (
    <FeatureCardGrid
      eyebrow={department.advancedServicesEyebrow ?? department.infrastructureEyebrow ?? 'Facilities & Equipment'}
      title={department.advancedServicesTitle ?? department.infrastructureTitle ?? 'Facilities & Equipment'}
      description={
        department.advancedServicesDescription ??
        department.infrastructureDescription ??
        'Purpose-built clinical and academic spaces supporting daily care and training.'
      }
      items={items}
      columns={department.infrastructureColumns ?? 3}
    />
  )
}

export { default as DetailResearch } from './DetailResearch'

export function DetailAchievements({ department }) {
  const section = department.achievementsSection ?? {}
  const items = department.achievements ?? []

  if (!items.length) return null

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
    <section className="bg-background px-5 py-16 md:px-8 md:py-24">
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
