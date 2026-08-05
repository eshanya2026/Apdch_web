import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

function isHeadOfDepartment(member) {
  return Boolean(member.isHod || /\bHOD\b/i.test(member.role || ''))
}

export default function DetailFaculty({ department }) {
  const faculty = department.faculty ?? []

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

        {faculty.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.06} className="h-full w-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-xs transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md">
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    {isHeadOfDepartment(member) && (
                      <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-sm">
                        HOD
                      </span>
                    )}
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
