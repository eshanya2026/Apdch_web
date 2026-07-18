import { Clock, CalendarDays } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { OP_TIMINGS, OP_TIMINGS_SECTION } from '@/lib/hospitalConstants'
import { cn } from '@/lib/utils'

export default function OPTimings() {
  return (
    <section id="op-timings" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow={OP_TIMINGS_SECTION.eyebrow}
              title={OP_TIMINGS_SECTION.title}
              description={OP_TIMINGS_SECTION.description}
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              {OP_TIMINGS_SECTION.note}
            </p>
          </Reveal>

          <div className="space-y-3">
            {OP_TIMINGS.map((row, i) => {
              const isEmergency = row.tag === 'Always Open'
              return (
                <Reveal key={row.day} delay={i * 0.06}>
                  <article
                    className={cn(
                      'flex flex-col gap-3 rounded-2xl border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6',
                      isEmergency
                        ? 'border-primary/30 bg-primary text-white shadow-brand-button'
                        : 'border-border/80 bg-white'
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'flex h-10 w-10 items-center justify-center rounded-xl',
                          isEmergency ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary'
                        )}
                      >
                        {isEmergency ? (
                          <Clock className="h-5 w-5" />
                        ) : (
                          <CalendarDays className="h-5 w-5" />
                        )}
                      </span>
                      <div>
                        <h3
                          className={cn(
                            'font-semibold',
                            isEmergency ? 'text-white' : 'text-foreground'
                          )}
                        >
                          {row.day}
                        </h3>
                        <p
                          className={cn(
                            'text-xs font-medium uppercase tracking-wider',
                            isEmergency ? 'text-white/70' : 'text-primary'
                          )}
                        >
                          {row.tag}
                        </p>
                      </div>
                    </div>
                    <p
                      className={cn(
                        'text-sm font-medium sm:text-base',
                        isEmergency ? 'text-white' : 'text-foreground/80'
                      )}
                    >
                      {row.hours}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
