import {
  GraduationCap,
  CalendarDays,
  Stethoscope,
  Building2,
  MapPinned,
  Siren,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { QUICK_ACTIONS } from '@/lib/constants'

const ICONS = {
  GraduationCap,
  CalendarDays,
  Stethoscope,
  Building2,
  MapPinned,
  Siren,
}

export default function QuickActions() {
  return (
    <section className="relative z-20 -mt-8 px-5 md:-mt-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rounded-[1.75rem] border border-border/70 bg-white p-6 shadow-brand-lg md:p-10">
            <SectionHeading
              eyebrow="Start here"
              title="Everything you need, one step away"
              description="Admissions, appointments, specialists, and campus visits — designed for clarity and speed."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {QUICK_ACTIONS.map((action, i) => {
                const Icon = ICONS[action.icon]
                return (
                  <Reveal key={action.title} delay={i * 0.06}>
                    <a
                      href={action.href}
                      className="group flex items-start gap-4 rounded-2xl border border-transparent bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-surface-soft hover:shadow-brand-sm"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-medium text-foreground">{action.title}</span>
                          <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">
                          {action.description}
                        </span>
                      </span>
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
