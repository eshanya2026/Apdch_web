import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { TESTIMONIALS } from '@/lib/constants'
import { TESTIMONIALS_HOME } from '@/lib/homeConstants'

const AUTO_MS = 5000

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const filled = rating >= i + 1
        const half = !filled && rating >= i + 0.5

        if (half) {
          return (
            <span key={i} className="relative inline-flex h-4 w-4">
              <Star className="absolute inset-0 h-4 w-4 text-amber-300/40" />
              <span className="absolute inset-0 w-1/2 overflow-hidden">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              </span>
            </span>
          )
        }

        return (
          <Star
            key={i}
            className={`h-4 w-4 ${
              filled ? 'fill-amber-400 text-amber-400' : 'text-amber-300/40'
            }`}
          />
        )
      })}
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)

  const count = TESTIMONIALS.length
  const item = TESTIMONIALS[index]

  const goTo = (next, dir = 1) => {
    setDirection(dir)
    setIndex(((next % count) + count) % count)
  }

  useEffect(() => {
    if (paused || count <= 1) return undefined
    const id = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % count)
    }, AUTO_MS)
    return () => clearInterval(id)
  }, [paused, count, index])

  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={TESTIMONIALS_HOME.eyebrow}
            title={TESTIMONIALS_HOME.title}
            description={TESTIMONIALS_HOME.description}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-14 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-8 shadow-brand-card md:min-h-[300px] md:p-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={item.name}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -48 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full flex-col"
                >
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex w-fit rounded-full bg-surface-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      {item.type}
                    </span>
                    <StarRating rating={item.rating} />
                  </div>
                  <Quote className="mb-4 h-8 w-8 text-accent" />
                  <p className="flex-1 font-display text-xl leading-snug text-foreground md:text-[1.45rem]">
                    “{item.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-3 border-t border-border/70 pt-5">
                    <span
                      aria-hidden
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white ring-2 ring-accent/40"
                    >
                      {(item.name.replace(/^Dr\.\s*/i, '').trim()[0] || '?').toUpperCase()}
                    </span>
                    <div>
                      <cite className="not-italic text-sm font-semibold text-foreground">
                        {item.name}
                      </cite>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i, i > index ? 1 : -1)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-7 bg-primary'
                      : 'w-2.5 bg-primary/25 hover:bg-primary/45'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
