import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { TRUSTED_RECOGNIZED } from '@/lib/homeConstants'

export default function TrustedRecognized() {
  return (
    <section className="bg-background px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading title={TRUSTED_RECOGNIZED.title} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 md:gap-6">
            {TRUSTED_RECOGNIZED.items.map((item) => (
              <div key={item.mark} className="group flex flex-col items-center text-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-2xl border border-border/80 bg-white p-2.5 shadow-brand-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-primary/30 group-hover:shadow-brand-md md:h-40 md:w-40 md:p-3">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.imageAlt ?? item.line}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="font-display text-2xl font-bold tracking-tight text-primary transition-transform duration-300 group-hover:scale-105 md:text-3xl">
                      {item.mark}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary md:text-base">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Button asChild size="lg" variant="soft">
              <Link to={TRUSTED_RECOGNIZED.ctaHref}>
                {TRUSTED_RECOGNIZED.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
