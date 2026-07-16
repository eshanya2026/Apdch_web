import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { INSTITUTION, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

/** Routes with a dark full-bleed hero — nav uses white text until scroll */
function hasDarkHero(pathname) {
  if (pathname === '/') return true
  if (pathname.startsWith('/departments/')) return true
  return ['/about', '/admissions', '/academics', '/departments', '/hospital', '/research'].includes(
    pathname
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)

  const darkHero = hasDarkHero(pathname)
  const solid = scrolled || open || !darkHero

  useEffect(() => {
    lastY.current = window.scrollY
    setHidden(false)
    setScrolled(window.scrollY > 40)

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      const pastHero = y > window.innerHeight * 0.75

      setScrolled(y > 40)

      // Always show near the top / over the hero
      if (y < 80) {
        setHidden(false)
      } else if (pastHero && delta > 6) {
        // Scrolling down past hero → hide
        setHidden(true)
      } else if (delta < -6) {
        // Scrolling up → show
        setHidden(false)
      }

      lastY.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setOpen(false)
    setHidden(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Keep header visible while the mobile menu is open
  const visible = open || !hidden

  const linkClass = (active = false) =>
    cn(
      'rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors xl:px-3',
      solid
        ? active
          ? 'bg-primary/10 text-primary'
          : 'text-foreground/75 hover:bg-black/5 hover:text-primary'
        : active
          ? 'bg-white/15 text-white'
          : 'text-white/85 hover:bg-white/10 hover:text-white'
    )

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={false}
        animate={{
          y: !visible ? -120 : scrolled || open ? 12 : 60,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto mx-auto w-[calc(100%-1.5rem)] max-w-7xl sm:w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]"
      >
        <div
          className={cn(
            'flex h-16 items-center justify-between gap-3 rounded-full px-3 transition-all duration-500 sm:px-4 md:h-[4.75rem] md:px-5',
            solid
              ? 'border border-border/50 bg-white/85 shadow-[0_12px_40px_-16px_rgba(17,24,39,0.25)] backdrop-blur-[55px]'
              : 'border border-white/15 bg-black/[0.08] shadow-[0_12px_40px_-20px_rgba(0,0,0,0.45)] backdrop-blur-[55px]'
          )}
        >
          <Link to="/" className="group flex min-w-0 items-center gap-3 shrink-0 sm:gap-3.5">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.03] sm:h-[3.25rem] sm:w-[3.25rem] md:h-14 md:w-14 md:p-1.5">
              <img
                src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                alt="Adhiparasakthi Dental College and Hospital"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span
                className={cn(
                  'font-display text-base tracking-tight transition-colors md:text-lg',
                  solid ? 'text-foreground' : 'text-white'
                )}
              >
                Adhiparasakthi
              </span>
              <span
                className={cn(
                  'hidden text-[10px] font-medium uppercase tracking-[0.18em] sm:block',
                  solid ? 'text-muted' : 'text-white/70'
                )}
              >
                Dental College & Hospital
              </span>
            </span>
          </Link>

          <nav className="hidden items-center lg:flex">
            {NAV_LINKS.map((link) =>
              link.type === 'route' ? (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {link.label}
                </NavLink>
              ) : (
                <a key={link.href} href={link.href} className={linkClass()}>
                  {link.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
            <a
              href={`tel:${INSTITUTION.phone}`}
              className={cn(
                'inline-flex items-center gap-1.5 text-sm font-medium',
                solid ? 'text-muted hover:text-primary' : 'text-white/80 hover:text-white'
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">{INSTITUTION.phone}</span>
            </a>
            <Button asChild size="sm" className="rounded-full">
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full lg:hidden',
              solid ? 'bg-surface-soft text-foreground' : 'bg-white/15 text-white'
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="mt-2 overflow-hidden rounded-[1.75rem] border border-border/50 bg-white/95 shadow-[0_20px_50px_-24px_rgba(17,24,39,0.35)] backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {NAV_LINKS.map((link) =>
                  link.type === 'route' ? (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface-soft"
                    >
                      {link.label}
                    </NavLink>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-surface-soft"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <a
                  href={`tel:${INSTITUTION.phone}`}
                  className="mt-1 inline-flex items-center gap-2 rounded-xl px-3 py-3 text-base font-medium text-muted"
                >
                  <Phone className="h-4 w-4" />
                  {INSTITUTION.phone}
                </a>
                <Button asChild className="mt-2 w-full rounded-full">
                  <Link to="/admissions" onClick={() => setOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  )
}
