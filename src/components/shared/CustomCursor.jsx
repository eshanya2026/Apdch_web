import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const visibleRef = useRef(false)
  const rafRef = useRef(0)

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

    const apply = () => {
      rafRef.current = 0
      const el = dotRef.current
      if (!el) return
      const { x, y } = pos.current
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
    }

    const schedule = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(apply)
    }

    const setDotVisible = (visible) => {
      if (visibleRef.current === visible) return
      visibleRef.current = visible
      if (ringRef.current) {
        ringRef.current.style.opacity = visible ? '1' : '0'
      }
    }

    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      setDotVisible(true)
      schedule()
    }

    const onLeave = () => setDotVisible(false)
    const onEnter = () => setDotVisible(true)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.documentElement.classList.remove('cursor-none-site')
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform mix-blend-difference"
      style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
    >
      <div
        ref={ringRef}
        className="rounded-full border-2 border-white bg-white/20 opacity-0"
        style={{
          width: 16,
          height: 16,
          transition: 'opacity 0.15s ease-out',
        }}
      />
    </div>
  )
}
