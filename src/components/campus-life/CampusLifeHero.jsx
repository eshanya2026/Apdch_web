import { motion, useTransform } from 'framer-motion'
import { ArrowRight, Building2 } from 'lucide-react'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { Button } from '@/components/ui/button'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'
import AboutHeroNav from '@/components/about/AboutHeroNav'
import { CAMPUS_LIFE_HERO } from '@/lib/campusLifeConstants'

export default function CampusLifeHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[72svh] items-end overflow-hidden pb-20 pt-32 will-change-[clip-path] md:min-h-[80svh] md:items-center md:pb-28"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={CAMPUS_LIFE_HERO.image}
          alt="APDCH campus life"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
      </motion.div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <AboutHeroNav />
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {CAMPUS_LIFE_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          {CAMPUS_LIFE_HERO.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {CAMPUS_LIFE_HERO.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <a href={CAMPUS_LIFE_HERO.ctaPrimary.href}>
              {CAMPUS_LIFE_HERO.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={CAMPUS_LIFE_HERO.ctaSecondary.href}>
              <Building2 className="h-4 w-4" />
              {CAMPUS_LIFE_HERO.ctaSecondary.label}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
