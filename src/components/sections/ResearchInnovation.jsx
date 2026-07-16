import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { RESEARCH_HOME } from '@/lib/homeConstants'

export default function ResearchInnovation() {
  return (
    <section id="research" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-bl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionHeading
            light
            eyebrow={RESEARCH_HOME.eyebrow}
            title={RESEARCH_HOME.title}
            description={RESEARCH_HOME.description}
          />
          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/research">
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
