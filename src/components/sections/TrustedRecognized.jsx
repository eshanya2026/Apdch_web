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
              <div key={item.mark} className="flex flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/20 bg-white p-1.5 shadow-brand-sm md:h-28 md:w-28 md:p-2">
                  {item.image ? (
                    <div className="h-full w-full overflow-hidden rounded-full bg-white ring-1 ring-primary/10">
                      <img
                        src={item.image}
                        alt={item.imageAlt ?? item.line}
                        className="h-full w-full rounded-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-display text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                      {item.mark}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm font-medium text-foreground md:text-base">
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
