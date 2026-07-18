import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { ABOUT_NAV_LINKS } from '@/lib/constants'

const HERO_LABELS = {
  '/about': 'About',
  '/about/campus-life': 'Campus Life',
}

export default function AboutHeroNav() {
  const { pathname } = useLocation()

  return (
    <nav aria-label="About section" className="mb-5 flex flex-wrap items-center gap-1.5 md:mb-6">
      {ABOUT_NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            'rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300',
            pathname === link.href
              ? 'bg-white text-primary shadow-lg'
              : 'bg-white/15 text-white/85 hover:bg-white/25 hover:text-white'
          )}
        >
          {HERO_LABELS[link.href] ?? link.label}
        </Link>
      ))}
    </nav>
  )
}
