import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ACADEMICS_HERO } from '@/lib/academicsConstants'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'

export default function AcademicsHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[72svh] items-end overflow-hidden pb-20 pt-32 md:min-h-[80svh] md:items-center md:pb-28 will-change-[clip-path]"
    >
      <div className="absolute inset-0">
        <img
          src={ACADEMICS_HERO.image}
          alt="Academic learning at Adhiparasakthi Dental College"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

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
          className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          {ACADEMICS_HERO.title}
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
            <a href="#curriculum">
              <BookOpen className="h-4 w-4" />
              View Curriculum
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
