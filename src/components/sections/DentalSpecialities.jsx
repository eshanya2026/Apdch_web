import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { DEPARTMENTS_HOME } from '@/lib/homeConstants'

export default function DentalSpecialities() {
  return (
    <section id="specialities" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Academic Departments"
            title="Nine Specialties. One Commitment to Excellence."
            description="Each department provides specialized education, clinical expertise, and research opportunities to prepare students for every aspect of modern dentistry."
          />
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS_HOME.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <Link
                to="/departments"
                className="group flex items-center justify-between gap-3 rounded-[1.25rem] border border-border/80 bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-brand-sm"
              >
                <span className="font-medium text-foreground group-hover:text-primary">{name}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button asChild>
              <Link to="/departments">
                View All Departments
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
