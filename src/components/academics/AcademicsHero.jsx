import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ACADEMICS_HERO } from '@/lib/academicsConstants'

export default function AcademicsHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[72svh] items-end overflow-hidden pb-20 pt-32 md:min-h-[80svh] md:items-center md:pb-28 will-change-[clip-path]"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={ACADEMICS_HERO.image}
          alt="Academic learning at Adhiparasakthi Dental College"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-10 top-32 h-36 w-36 rounded-full border border-accent/25 bg-accent/10 animate-[float_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-28 left-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_1s_infinite]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {ACADEMICS_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.35rem]"
        >
          Where science meets the{' '}
          <span className="italic text-accent">chairside</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {ACADEMICS_HERO.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <a href="#programs">
              Explore Programmes
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#calendar">
              <CalendarDays className="h-4 w-4" />
              Academic Calendar
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
