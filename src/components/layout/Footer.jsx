import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock, ArrowUpRight, Navigation } from 'lucide-react'
import { INSTITUTION, SOCIAL_LINKS } from '@/lib/constants'

// Official Footer Quick Links
const QUICK_LINKS = [
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'NIRF', href: '/nirf' },
  { label: 'Code of Conduct', href: 'https://apdch.in/wp-content/uploads/2022/10/Code-of-Conduct.pdf', external: true },
  { label: 'IQAC', href: '/iqac' },
  { label: 'HR Policy', href: '/governance/hr-policy' },
]

function SocialIcon({ name, className }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    className,
    'aria-hidden': true,
  }

  switch (name) {
    case 'facebook':
      return (
        <svg {...props}>
          <path d="M14 13.5h2.5l.5-3H14v-2c0-.8.2-1.3 1.4-1.3H17V4.1C16.7 4.1 15.7 4 14.5 4 11.9 4 10 5.6 10 8.4V10.5H7.5v3H10V20h4v-6.5z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg {...props}>
          <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z" />
          <path d="M16.9 6.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
          <path d="M12 2.2c-2.7 0-3 0-4.1.1-2.8.1-4.1 1.5-4.2 4.2C3.6 7.5 3.6 7.8 3.6 12s0 4.5.1 5.5c.1 2.8 1.5 4.1 4.2 4.2 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c2.8-.1 4.1-1.5 4.2-4.2.1-1 .1-1.4.1-5.5s0-4.5-.1-5.5c-.1-2.8-1.5-4.1-4.2-4.2-1.1-.1-1.4-.1-4.1-.1zm0 1.6c2.6 0 2.9 0 4 .1 1.9.1 2.8 1 2.9 2.9.1 1 .1 1.3.1 3.9s0 2.9-.1 4c-.1 1.9-1 2.8-2.9 2.9-1 .1-1.3.1-4 .1s-2.9 0-4-.1c-1.9-.1-2.8-1-2.9-2.9-.1-1-.1-1.3-.1-4s0-2.9.1-4c.1-1.9 1-2.8 2.9-2.9 1.1-.1 1.4-.1 4-.1z" />
        </svg>
      )
    case 'youtube':
      return (
        <svg {...props}>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...props}>
          <path d="M6.9 8.7H3.6V20h3.3V8.7zM5.3 4A1.9 1.9 0 1 0 5.3 7.8 1.9 1.9 0 0 0 5.3 4zM20.4 13.2c0-3-1.6-4.9-4.4-4.9-2 0-2.9 1.1-3.4 1.9V8.7H9.4c0 .8 0 11.3 0 11.3h3.3v-6.3c0-.3 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.6V20h3.3v-6.8z" />
        </svg>
      )
    default:
      return null
  }
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-footer text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_1.1fr] lg:gap-10">
          {/* Logo & Contact */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[3.6px] bg-white p-1.5">
                <img
                  src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                  alt="Adhiparasakthi Dental College and Hospital"
                  className="h-full w-full object-contain"
                />
              </span>
              <span>
                <span className="block font-display text-2xl leading-none">Adhiparasakthi</span>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                  Dental College and Hospital
                </span>
              </span>
            </Link>

            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {INSTITUTION.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${INSTITUTION.phone}`} className="transition-opacity hover:opacity-70">
                  {INSTITUTION.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  <span className="block font-medium text-white/90">{INSTITUTION.hoursLabel}</span>
                  <span className="block text-white/70">{INSTITUTION.hoursDays}</span>
                  <span className="block text-white/70">{INSTITUTION.hoursTime}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${INSTITUTION.email}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {INSTITUTION.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.6)] ${social.hoverClass}`}
                >
                  <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/50 transition-opacity hover:opacity-100 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 transition-opacity hover:opacity-100 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-white">Location</h4>
            <p className="mt-4 text-sm font-medium leading-snug text-white">
              Adhiparasakthi Dental College &amp; Hospital
            </p>
            <p className="mt-1 text-sm text-white/60">Melmaruvathur, Tamil Nadu 603319</p>
            <div className="relative mt-4 w-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] shadow-lg">
              <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-footer/90 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                APDCH Campus
              </div>
              <iframe
                title="APDCH campus location map"
                src={INSTITUTION.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[230px] w-full border-0 transition-opacity duration-300 hover:opacity-95"
                allowFullScreen
              />
              <div className="grid grid-cols-2 border-t border-white/15">
                <a
                  href={INSTITUTION.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-1.5 border-r border-white/15 bg-white/[0.04] px-2.5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <Navigation className="h-3.5 w-3.5 shrink-0 text-white/80 transition-transform group-hover:scale-110 group-hover:text-white" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
                <a
                  href={INSTITUTION.mapViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-1.5 bg-white/[0.04] px-2.5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/[0.12]"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-white/80 transition-transform group-hover:scale-110 group-hover:text-white" />
                  <span>Google Maps</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {INSTITUTION.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <a href="/#faqs" className="hover:text-white">
              Privacy
            </a>
            <a href="/#faqs" className="hover:text-white">
              Terms
            </a>
            <a href="/#faqs" className="hover:text-white">
              Accessibility
            </a>
            <Link to="/about" className="hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
