import { Link } from 'react-router-dom'
import { Building2, Users } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

function isHeadOfDepartment(member) {
  return Boolean(member.isHod || /\bHOD\b/i.test(member.role || ''))
}

function ToothMark({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 7.2c-2.2 0-3.5-1.6-6.1-1.6-3.4 0-5.7 2.8-5.4 6.4.3 3.8 2.4 5.9 3.2 9.6.7 3.3 1.4 5.2 3.1 5.2 2 0 1.8-6.2 5.2-6.2s3.2 6.2 5.2 6.2c1.7 0 2.4-1.9 3.1-5.2.8-3.7 2.9-5.8 3.2-9.6.3-3.6-2-6.4-5.4-6.4-2.6 0-3.9 1.6-6.1 1.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function DetailFaculty({ department }) {
  const faculty = department.faculty ?? []

  if (!faculty.length) return null

  return (
    <section id="department-faculty" className="relative overflow-hidden bg-[#fdfcfc] px-5 py-16 md:px-8 md:py-20">
      <div className="pointer-events-none absolute -bottom-52 -left-40 h-[34rem] w-[44rem] rounded-[50%] bg-primary/[0.045]" />
      <div className="pointer-events-none absolute right-10 top-7 hidden grid-cols-6 gap-3 opacity-30 lg:grid">
        {Array.from({ length: 30 }, (_, i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary/40" />)}
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4 text-primary">
              <span className="h-px w-10 bg-primary/35" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-foreground">Our Faculty</span>
              <span className="h-px w-10 bg-primary/35" />
            </div>
            <div className="mt-2 flex items-center justify-center gap-3 text-primary">
              <span className="h-px w-14 bg-primary/20" />
              <ToothMark className="h-6 w-6" />
              <span className="h-px w-14 bg-primary/20" />
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
              Meet Our Expert Faculty
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Learn from experienced academicians and clinicians who are passionate about teaching, research and patient care.
            </p>
          </div>
        </Reveal>

        {faculty.length > 0 && (
          <div className={`mt-12 grid auto-rows-fr gap-5 ${faculty.length === 1 ? 'mx-auto max-w-3xl grid-cols-1' : 'md:grid-cols-2'}`}>
            {faculty.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.05} className="h-full w-full">
                <article className="group relative grid h-full min-h-[12rem] overflow-hidden rounded-[1.35rem] border border-primary/10 bg-white shadow-[0_10px_28px_rgba(52,32,37,0.09)] transition-colors duration-300 hover:border-primary/30 sm:min-h-[13.5rem] sm:grid-cols-[38%_1fr]">
                  <div className="relative min-h-64 overflow-hidden bg-slate-100 sm:h-full sm:min-h-[13.5rem]">
                    {/* <span className="absolute -left-12 -top-16 z-10 h-[150%] w-24 rotate-[14deg] bg-primary/75" /> */}
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                  </div>

                  <div className="relative flex min-w-0 items-center border-primary/10 px-5 py-6 sm:border-l sm:pl-10">
                    <span className="absolute left-0 top-1/2 z-20 hidden h-12 w-px -translate-x-1/2 -translate-y-1/2 bg-primary sm:block" />
                    <span className="absolute left-0 top-1/2 z-20 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-md ring-[3px] ring-white sm:flex">
                      <ToothMark className="h-6 w-6" />
                    </span>
                    <div className="w-full">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="line-clamp-2 font-display text-xl font-semibold leading-tight text-foreground md:text-2xl">{member.name}</h3>
                        {isHeadOfDepartment(member) && (
                          <span className="rounded-full bg-primary/8 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-primary">HOD</span>
                        )}
                      </div>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-primary md:text-xs">{member.role}</p>
                      {member.credentials && (
                        <p className="mt-1 text-xs font-medium leading-5 text-foreground/75">{member.credentials}</p>
                      )}
                      <span className="my-3 block h-px w-full bg-primary/15" />
                      <p className="flex items-start gap-2 text-xs leading-5 text-muted md:text-sm">
                        <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{member.experience ?? department.name}</span>
                      </p>
                      {member.credentials && member.focus && (
                        <p className="mt-2 text-xs leading-5 text-muted">{member.focus}</p>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.15} className={faculty.length === 1 ? 'mx-auto max-w-3xl' : undefined}>
          <div className="mt-5 flex justify-center md:mt-6">
            <Button asChild size="lg" className="rounded-full px-7 shadow-brand-sm">
              <Link to="/faculty">
                <Users className="h-4 w-4" />
                View All Faculty
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
