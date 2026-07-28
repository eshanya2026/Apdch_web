import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

function isHeadOfDepartment(member) {
  return Boolean(member.isHod || /\bHOD\b/i.test(member.role || ''))
}

export default function DetailFaculty({ department }) {
  const faculty = department.faculty ?? []
  const hod = faculty.find(isHeadOfDepartment)
  const members = faculty.filter((m) => m !== hod).slice(0, 5)

  return (
    <section className="mesh-bg px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="People"
            title="Faculty"
            description={`Experienced clinicians and teachers leading ${department.name} at APDCH.`}
          />
        </Reveal>

        {hod && (
          <Reveal delay={0.05}>
            <article className="group mt-12 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-lg lg:grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                <img
                  src={hod.image}
                  alt={hod.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-foreground/10" />
              </div>
              <div className="flex flex-col justify-center p-7 md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Head of Department
                </p>
                <h3 className="mt-3 font-display text-3xl tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary md:text-4xl">
                  {hod.name}
                </h3>
                <p className="mt-2 text-base font-medium text-primary">{hod.role}</p>
                {hod.focus ? (
                  <p className="mt-4 text-sm leading-relaxed text-muted">{hod.focus}</p>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Leading academic excellence, clinical care, and research in {department.name}.
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        )}

        {members.length > 0 && (
          <>
            <Reveal delay={0.08}>
              <h3 className="mt-14 text-lg font-semibold tracking-tight text-foreground md:text-xl">
                Faculty Members
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {members.map((member, i) => (
                <Reveal key={member.name} delay={i * 0.06} className="h-full w-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-xs transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md">
                    <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h4 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:text-lg">
                          {member.name}
                        </h4>
                        <p className="mt-1 text-xs font-semibold text-primary uppercase tracking-wider">{member.role}</p>
                        {member.focus ? (
                          <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted">{member.focus}</p>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        )}

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" variant="soft">
              <Link to="/faculty">
                View All Faculty
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
