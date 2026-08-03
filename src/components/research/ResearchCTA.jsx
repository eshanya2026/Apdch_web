import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'

export default function ResearchCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:px-8 md:py-28">
      <div className="absolute inset-0 cta-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_40%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
            Collaborate with us
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            Propose a study or join a lab team
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/75 md:text-lg">
            Faculty investigators and postgraduate mentors welcome carefully framed proposals aligned
            with ethics and clinical relevance.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95">
              <a href={`mailto:${INSTITUTION.email}?subject=Research%20Enquiry%20APDCH`}>
                <Mail className="h-4 w-4" />
                Contact research cell
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/faculty">
                Meet faculty
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
