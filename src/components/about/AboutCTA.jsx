import { Link } from 'react-router-dom'
import { ArrowRight, Download, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { ABOUT_CTA } from '@/lib/aboutConstants'

export default function AboutCTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />
      <div className="pointer-events-none absolute -right-10 top-10 h-48 w-48 rounded-full border border-white/20 animate-[float_8s_ease-in-out_infinite]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            {ABOUT_CTA.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {ABOUT_CTA.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            {ABOUT_CTA.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
              <Link to="/contact">
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/admissions#brochure">
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                <GraduationCap className="h-4 w-4" />
                Contact Admissions
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
