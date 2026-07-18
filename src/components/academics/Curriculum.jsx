import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Stethoscope } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CURRICULUM, CURRICULUM_CRRI, CURRICULUM_SECTION } from '@/lib/academicsConstants'

export default function Curriculum() {
  const [active, setActive] = useState(0)
  const current = CURRICULUM[active]

  return (
    <section id="curriculum" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={CURRICULUM_SECTION.eyebrow}
            title={CURRICULUM_SECTION.title}
            description={CURRICULUM_SECTION.description}
          />
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-2">
          {CURRICULUM.map((block, i) => (
            <button
              key={block.title}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? 'bg-primary text-white shadow-brand-pill'
                  : 'bg-white text-foreground/70 ring-1 ring-border/80 hover:text-primary'
              }`}
            >
              {block.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-8 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white"
          >
            <div className="border-b border-border/70 bg-surface-soft/60 px-6 py-5 md:px-8 md:py-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-display text-4xl font-semibold text-primary/20 md:text-5xl">
                    {current.year}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {current.title}
                  </h3>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Focus: {current.focus}
                </span>
              </div>
            </div>

            <ul className="grid gap-3 p-6 sm:grid-cols-2 md:gap-4 md:p-8">
              {current.subjects.map((subject) => (
                <li
                  key={subject}
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3.5 text-sm leading-relaxed text-foreground/80 transition-colors hover:border-primary/20 hover:bg-white"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {subject}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1}>
          <article className="mt-6 flex gap-4 rounded-[1.75rem] border border-primary/15 bg-gradient-to-br from-primary to-primary-dark p-6 text-white md:gap-5 md:p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <Stethoscope className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {CURRICULUM_CRRI.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                {CURRICULUM_CRRI.description}
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
