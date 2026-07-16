import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/** Bottom ellipse clip that bends slightly as the hero scrolls out */
export function useHeroOvalClip() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['ellipse(135% 100% at 50% 0%)', 'ellipse(118% 92% at 50% 0%)']
  )

  return { ref, clipPath, scrollYProgress }
}
