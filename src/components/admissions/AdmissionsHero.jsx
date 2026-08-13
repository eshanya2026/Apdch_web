import { Link } from 'react-router-dom'
import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { ArrowRight, Download, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ADMISSIONS_HERO } from '@/lib/admissionsConstants'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'

export default function AdmissionsHero() {
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
          src={ADMISSIONS_HERO.image}
          alt="Students at Adhiparasakthi Dental College"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-7xl px-5 text-white md:px-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {ADMISSIONS_HERO.eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {ADMISSIONS_HERO.title}
        </h1>
        <p
          className="mt-6 max-w-2xl text-base text-white/80 md:text-lg"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}
        >
          {ADMISSIONS_HERO.description}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <Link to="/contact">
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#brochure">
              <Download className="h-4 w-4" />
              Download Prospectus
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">
              <Phone className="h-4 w-4" />
              Contact Admissions
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
