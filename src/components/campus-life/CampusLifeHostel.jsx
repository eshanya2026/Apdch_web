import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Home } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { HOSTEL_SECTION } from '@/lib/campusLifeConstants'

export default function CampusLifeHostel() {
  const [active, setActive] = useState(0)
  const features = HOSTEL_SECTION.features

  return (
    <section id="hostel" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src={HOSTEL_SECTION.image}
                alt="APDCH hostel"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Home className="h-3.5 w-3.5" />
                  Residential Life
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {HOSTEL_SECTION.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
                {HOSTEL_SECTION.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
                {HOSTEL_SECTION.description}
              </p>
            </Reveal>

            <div className="mt-8 space-y-2">
              {features.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.05}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      active === i
                        ? 'border-primary/30 bg-primary text-white shadow-brand-sm'
                        : 'border-border/80 bg-white hover:border-primary/20 hover:shadow-brand-xs'
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        active === i ? 'bg-white/20' : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </span>
                    <span
                      className={`text-sm font-medium md:text-base ${
                        active === i ? 'text-white' : 'text-foreground'
                      }`}
                    >
                      {feature.title}
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-6 rounded-2xl bg-surface-soft px-5 py-4 text-sm leading-relaxed text-muted"
              >
                {features[active].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
