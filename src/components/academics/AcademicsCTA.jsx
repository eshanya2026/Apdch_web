import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

export default function AcademicsCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent mb-4">
            Next Step
          </p>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Ready to Study at APDCH?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            Explore admissions pathways for BDS and MDS, or speak with our academic office about
            curriculum and clinical opportunities.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold">
              <Link to="/admissions">
                <GraduationCap className="h-4 w-4" />
                Go to Admissions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <Link to="/about">About the College</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
