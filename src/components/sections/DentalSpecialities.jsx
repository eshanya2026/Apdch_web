import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
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
            title="Clinical Excellence Across Every Specialty"
            description="Nine clinical departments and a dedicated Department of Implantology — specialized education, clinical expertise, and research that prepare students for modern dentistry."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS_HOME.map((name, i) => (
            <Reveal key={name} delay={i * 0.04}>
              <Link
                to="/departments"
                className="group relative flex min-h-[5.5rem] items-center gap-4 rounded-[1.25rem] border border-border/80 bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-brand-sm md:px-6"
              >
                <span className="shrink-0 font-display text-2xl font-medium tabular-nums text-[#B59A6A] md:text-[1.65rem]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 pr-6 text-[15px] font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary md:text-base">
                  {name}
                </span>
                <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 shrink-0 text-[#B59A6A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
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
