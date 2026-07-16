import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { STUDENT_LIFE_HOME } from '@/lib/homeConstants'

export default function StudentExperience() {
  return (
    <section id="experience" className="bg-primary px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-card lg:grid-cols-2">
          <Reveal>
            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={STUDENT_LIFE_HOME.image}
                alt="Campus life at APDCH"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-8 md:p-10 lg:p-12">
              <SectionHeading
                align="left"
                eyebrow={STUDENT_LIFE_HOME.eyebrow}
                title={STUDENT_LIFE_HOME.title}
                description={STUDENT_LIFE_HOME.description}
              />
              <div className="mt-8">
                <Button asChild>
                  <Link to="/about">
                    Explore Campus Life
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
