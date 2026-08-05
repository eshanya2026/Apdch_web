import { Link } from 'react-router-dom'
import { motion, useTransform } from 'framer-motion'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { Button } from '@/components/ui/button'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'
import { ABOUT_HERO } from '@/lib/aboutConstants'

export default function AboutHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[70svh] items-end overflow-hidden pb-20 pt-32 will-change-[clip-path] md:min-h-[78svh] md:items-center md:pb-28"
    >
      <div className="absolute inset-0">
        <img
          src={ABOUT_HERO.image}
          alt="Adhiparasakthi Dental College and Hospital campus"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 glow-radial-accent" />
      </div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {ABOUT_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          A Legacy of Excellence in Dental Education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {ABOUT_HERO.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <Link to="/academics">
              Explore Academics
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/admissions">
              <GraduationCap className="h-4 w-4" />
              Contact Admissions
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
