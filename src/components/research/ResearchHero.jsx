import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { RESEARCH_HERO } from '@/lib/researchConstants'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'

export default function ResearchHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 110])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[70svh] items-end overflow-hidden pb-20 pt-32 md:min-h-[78svh] md:items-center md:pb-28 will-change-[clip-path]"
    >
      <div className="absolute inset-0">
        <img
          src={RESEARCH_HERO.image}
          alt="Research at APDCH"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {RESEARCH_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          Inquiry that improves the{' '}
          <span className="italic text-accent">chairside</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {RESEARCH_HERO.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <a href="#projects">
              Explore projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#publications">
              <BookOpen className="h-4 w-4" />
              Publications
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
