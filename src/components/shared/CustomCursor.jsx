import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [dragging, setDragging] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const springX = useSpring(mouseX, { stiffness: 500, damping: 35, mass: 0.4 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 35, mass: 0.4 })

  const dragX = useMotionValue(-100)
  const dragY = useMotionValue(-100)
  const dragTarget = useRef({ x: -100, y: -100 })
  const rafId = useRef(0)
  const lastT = useRef(0)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const updateEnabled = () => setEnabled(finePointer.matches)
    updateEnabled()
    finePointer.addEventListener('change', updateEnabled)
    return () => finePointer.removeEventListener('change', updateEnabled)
  }, [])

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('cursor-none-site')

    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      dragTarget.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const isInteractive = (el) =>
      Boolean(
        el?.closest?.(
          'a, button, [role="button"], input, textarea, select, label, .cursor-pointer'
        )
      )

    const onOver = (e) => setHovering(isInteractive(e.target))
    const onOut = (e) => {
      if (!isInteractive(e.relatedTarget)) setHovering(false)
    }

    const onDown = () => setDragging(true)
    const onUp = () => setDragging(false)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown, { passive: true })
    window.addEventListener('mouseup', onUp, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    window.addEventListener('blur', onUp)

    return () => {
      document.documentElement.classList.remove('cursor-none-site')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('blur', onUp)
    }
  }, [enabled, mouseX, mouseY])

  useEffect(() => {
    if (!enabled) return

    if (!dragging) {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = 0
      lastT.current = 0
      return
    }

    // Seed drag mode with current spring position to avoid a jump.
    dragX.set(springX.get())
    dragY.set(springY.get())

    const speed = 2.4 // px per ms (constant velocity)
    const step = (t) => {
      if (!lastT.current) lastT.current = t
      const dt = t - lastT.current
      lastT.current = t

      const curX = dragX.get()
      const curY = dragY.get()
      const tx = dragTarget.current.x
      const ty = dragTarget.current.y

      const dx = tx - curX
      const dy = ty - curY
      const dist = Math.hypot(dx, dy)

      if (dist < 0.5) {
        dragX.set(tx)
        dragY.set(ty)
      } else {
        const maxStep = speed * dt
        const k = Math.min(1, maxStep / dist)
        dragX.set(curX + dx * k)
        dragY.set(curY + dy * k)
      }

      rafId.current = requestAnimationFrame(step)
    }

    rafId.current = requestAnimationFrame(step)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
      rafId.current = 0
      lastT.current = 0
    }
  }, [dragging, enabled, dragX, dragY, springX, springY])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{
        x: dragging ? dragX : springX,
        y: dragging ? dragY : springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="rounded-full border-2 border-white bg-white/20"
        animate={{
          width: hovering ? 36 : 16,
          height: hovering ? 36 : 16,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      />
    </motion.div>
  )
}
