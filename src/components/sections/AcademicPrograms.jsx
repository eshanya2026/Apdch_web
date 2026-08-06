import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { PROGRAMS_HOME } from '@/lib/homeConstants'

export default function AcademicPrograms() {
  return (
    <section id="programs" className="mesh-bg px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Programs"
            title="Choose Your Program"
            description="Choose from comprehensive undergraduate and postgraduate programs designed to develop skilled, ethical, and innovative dental professionals."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PROGRAMS_HOME.map((program, i) => (
            <Reveal key={program.short} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-lg md:flex-row">
                <div className="relative h-52 shrink-0 overflow-hidden md:h-auto md:w-[42%]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary">
                    {program.short}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">
                    {program.description}
                  </p>
                  <div className="mt-6">
                    <Button asChild variant="soft">
                      <Link to={program.href}>
                        {program.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
