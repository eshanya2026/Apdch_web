import { Link } from 'react-router-dom'
import { ArrowRight, Download, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'
import { CTA_HOME } from '@/lib/homeConstants'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 glow-cta-overlay" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {CTA_HOME.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            {CTA_HOME.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
              <Link to="/admissions">
                <GraduationCap className="h-4 w-4" />
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={`mailto:${INSTITUTION.email}?subject=Request%20Admissions%20Brochure`}
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
