import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { DEPARTMENTS_HERO } from '@/lib/departmentsConstants'

export default function DepartmentsHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[60svh] items-end overflow-hidden pb-16 pt-32 md:min-h-[68svh] md:items-center md:pb-24 will-change-[clip-path]"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={DEPARTMENTS_HERO.image}
          alt="Clinical departments at APDCH"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {DEPARTMENTS_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          Specialities that shape{' '}
          <span className="italic text-accent">exceptional</span> dentists
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {DEPARTMENTS_HERO.description}
        </motion.p>
      </motion.div>
    </motion.section>
  )
}
