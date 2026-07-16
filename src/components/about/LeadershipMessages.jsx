import { Quote } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CHAIRMAN, PRINCIPAL } from '@/lib/aboutConstants'
import { cn } from '@/lib/utils'

function LeadershipMessage({ person, reverse = false }) {
  return (
    <Reveal>
      <article
        className={cn(
          'grid items-center gap-8 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-card lg:grid-cols-[0.9fr_1.2fr] lg:gap-0',
          reverse && 'lg:grid-cols-[1.2fr_0.9fr]'
        )}
      >
        <div className={cn('relative h-72 overflow-hidden lg:h-full lg:min-h-[420px]', reverse && 'lg:order-2')}>
          <img
            src={person.image}
            alt={person.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-foreground/10" />
          <div className="absolute bottom-5 left-5 right-5 lg:hidden">
            <p className="font-display text-2xl text-white">{person.name}</p>
            <p className="text-sm text-accent">{person.role}</p>
          </div>
        </div>

        <div className={cn('p-7 md:p-10 lg:p-12', reverse && 'lg:order-1')}>
          <Quote className="mb-5 h-8 w-8 text-accent" />
          <div className="mb-6 hidden lg:block">
            <p className="font-display text-3xl text-foreground">{person.name}</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {person.role}
            </p>
          </div>
          <div className="space-y-4">
            {person.message.map((para) => (
              <p key={para.slice(0, 40)} className="text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
          {person.signOff && (
            <p className="mt-8 whitespace-pre-line text-sm font-semibold leading-relaxed text-foreground">
              {person.signOff}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export function ChairmanMessage() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Correspondent’s Message"
            description="A word from the guiding leadership of Adhiparasakthi Dental College and Hospital."
          />
        </Reveal>
        <div className="mt-12">
          <LeadershipMessage person={CHAIRMAN} />
        </div>
      </div>
    </section>
  )
}

export function PrincipalMessage() {
  return (
    <section className="bg-background px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Academic leadership"
            title="A Message from the Principal"
            description="Insights from the academic helm on learning, clinics, and student growth."
          />
        </Reveal>
        <div className="mt-12">
          <LeadershipMessage person={PRINCIPAL} reverse />
        </div>
      </div>
    </section>
  )
}
