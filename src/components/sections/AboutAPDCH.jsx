import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { ABOUT_HOME } from '@/lib/homeConstants'

export default function AboutAPDCH() {
  return (
    <section id="about" className="mesh-bg px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="group overflow-hidden rounded-[1.75rem] shadow-brand-lg">
              <img
                src={ABOUT_HOME.image}
                alt="About Adhiparasakthi Dental College and Hospitals"
                className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow={ABOUT_HOME.eyebrow}
              title={ABOUT_HOME.title}
              description={ABOUT_HOME.description}
            />
            <div className="mt-8">
              <Button asChild>
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
