import { Link, useLocation } from 'react-router-dom'
import { Mail, MapPin, Phone, Clock, ArrowUpRight, Navigation, Compass } from 'lucide-react'
import { INSTITUTION, SOCIAL_LINKS } from '@/lib/constants'

// ==================================================
// 4-COLUMN MASONRY SITEMAP DATA
// ==================================================

// COLUMN 1: About, Admissions, Academics
const COLUMN_1_GROUPS = [
  {
    title: 'About',
    links: [
      { label: 'About APDCH', href: '/about' },
      { label: 'Campus Life', href: '/about/campus-life' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { label: 'Admissions Overview', href: '/admissions' },
      { label: 'Apply / Enquiry', href: '/contact' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Academic Programmes', href: '/academics' },
      { label: 'Learning Management System (LMS)', href: '/academics/lms' },
      { label: 'Central Library', href: '/academics/library' },
    ],
  },
]

// COLUMN 2: Departments
const COLUMN_2_GROUPS = [
  {
    title: 'Departments',
    links: [
      { label: 'Oral Medicine & Radiology', href: '/departments/oral-medicine' },
      { label: 'Conservative Dentistry & Endodontics', href: '/departments/conservative-dentistry' },
      { label: 'Oral & Maxillofacial Surgery', href: '/departments/oral-surgery' },
      { label: 'Orthodontics & Dentofacial Orthopaedics', href: '/departments/orthodontics' },
      { label: 'Prosthodontics & Crown & Bridge', href: '/departments/prosthodontics' },
      { label: 'Periodontics & Implantology', href: '/departments/periodontics' },
      { label: 'Pedodontics & Preventive Dentistry', href: '/departments/pedodontics' },
      { label: 'Public Health Dentistry', href: '/departments/public-health-dentistry' },
      { label: 'Oral & Maxillofacial Pathology', href: '/departments/oral-pathology' },
      { label: 'Department of Implantology', href: '/departments/implantology' },
    ],
  },
]

// COLUMN 3: Governance & Faculty
const COLUMN_3_GROUPS = [
  {
    title: 'Governance',
    links: [
      { label: 'Committees & Cells', href: '/governance/committees' },
      { label: 'IQAC', href: '/iqac' },
      { label: 'NIRF', href: '/nirf' },
      { label: 'Policies', href: '/governance/hr-policy' },
    ],
  },
  {
    title: 'Faculty',
    links: [
      { label: 'Faculty Details', href: '/faculty' },
      { label: 'PG Students Details', href: '/faculty/pg-students' },
    ],
  },
]

// COLUMN 4: Research, Hospital & Quick Access
const COLUMN_4_GROUPS = [
  {
    title: 'Research',
    links: [
      { label: 'Newsletter', href: '/research/newsletter' },
      { label: 'Magazine', href: '/research/magazine' },
      { label: 'Journal', href: 'https://review.jow.medknow.com/IJCDR', external: true },
    ],
  },
  {
    title: 'Hospital',
    links: [
      { label: 'Monthly OPD Details', href: '/hospital/opd-details-2026' },
    ],
  },
  {
    title: 'Quick Access',
    links: [
      { label: 'CIS Portal', href: 'https://cis.apdch.edu.in/index.php', external: true },
      { label: 'News & Events', href: '/news-events' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
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
    case 'whatsapp':
      return (
        <svg {...props}>
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
        </svg>
      )
    default:
      return null
  }
}

function NavGroup({ title, links }) {
  return (
    <div className="space-y-3">
      <div className="border-b border-white/10 pb-2">
        <h4 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent">
          {title}
        </h4>
      </div>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-white/65 transition-colors duration-200 hover:text-white group"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            ) : (
              <Link
                to={link.href}
                className="inline-block text-xs text-white/65 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer({ hideMap = false }) {
  const location = useLocation()
  const shouldHideMap = hideMap || location.pathname === '/contact'

  return (
    <footer className="border-t border-white/10 bg-footer text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        
        {/* ==================================================
            TOP SECTION: APDCH Info, Contact, WhatsApp & Location Map
            ================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 pb-14 border-b border-white/10">
          {/* Left: APDCH Brand, Contact Details, WhatsApp QR & Social Icons */}
          <div>
            <Link to="/" className="inline-flex min-w-0 items-center gap-3.5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[4px] bg-white p-1.5 shadow-sm">
                <img
                  src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                  alt="Adhiparasakthi Dental College and Hospitals"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xl font-bold leading-tight sm:text-2xl">
                  Adhiparasakthi
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                  Dental College &amp; Hospitals
                </span>
              </span>
            </Link>

            <p className="mt-3.5 text-xs leading-relaxed text-white/65 max-w-xl">
              {INSTITUTION.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs text-white/70">
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>{INSTITUTION.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <a
                    href={`tel:${INSTITUTION.phone}`}
                    className="transition-opacity hover:opacity-100 hover:text-white"
                  >
                    {INSTITUTION.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  <span>
                    <span className="font-semibold text-white/90">{INSTITUTION.hoursLabel}: </span>
                    <span className="text-white/65">{INSTITUTION.hours}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                  <a
                    href={`mailto:${INSTITUTION.email}`}
                    className="transition-opacity hover:opacity-100 hover:text-white"
                  >
                    {INSTITUTION.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-0.5 ${social.hoverClass}`}
                >
                  <SocialIcon name={social.icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Location & Google Map */}
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-accent">
                Campus Location
              </h4>
              <span className="text-[11px] text-white/50">Melmaruvathur, TN</span>
            </div>

            {shouldHideMap ? (
              <div className="mt-4 rounded-2xl border border-white/15 bg-white/[0.04] p-4 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Compass className="h-3.5 w-3.5" />
                  <span>Campus Access</span>
                </div>
                <ul className="mt-2.5 space-y-1.5 text-xs text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Direct GST Road / NH 45 connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>Melmaruvathur Railway Station (5 mins)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>24/7 Dental Emergency &amp; Trauma Care</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={INSTITUTION.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
                  >
                    <Navigation className="h-3 w-3" />
                    <span>Get Directions</span>
                    <ArrowUpRight className="h-3 w-3 opacity-70" />
                  </a>
                  <a
                    href={INSTITUTION.mapViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-white/20"
                  >
                    <MapPin className="h-3 w-3" />
                    <span>View Map</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative mt-4 w-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] shadow-lg">
                <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-footer/90 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md shadow-sm">
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
                  className="h-[180px] w-full border-0 transition-opacity duration-300 hover:opacity-95"
                  allowFullScreen
                />
                <div className="grid grid-cols-2 border-t border-white/15">
                  <a
                    href={INSTITUTION.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-1 border-r border-white/15 bg-white/[0.04] px-2 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <Navigation className="h-3 w-3 shrink-0 text-white/80 transition-transform group-hover:scale-110 group-hover:text-white" />
                    <span>Directions</span>
                    <ArrowUpRight className="h-3 w-3 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                  <a
                    href={INSTITUTION.mapViewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-1 bg-white/[0.04] px-2 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/[0.12]"
                  >
                    <MapPin className="h-3 w-3 shrink-0 text-white/80 transition-transform group-hover:scale-110 group-hover:text-white" />
                    <span>Google Maps</span>
                    <ArrowUpRight className="h-3 w-3 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ==================================================
            MASONRY SITEMAP SECTION (4 COLUMNS)
            ================================================== */}
        <div className="pt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-10">
            
            {/* COLUMN 1: About, Admissions, Academics */}
            <div className="space-y-8">
              {COLUMN_1_GROUPS.map((group) => (
                <NavGroup key={group.title} title={group.title} links={group.links} />
              ))}
            </div>

            {/* COLUMN 2: Departments */}
            <div className="space-y-8">
              {COLUMN_2_GROUPS.map((group) => (
                <NavGroup key={group.title} title={group.title} links={group.links} />
              ))}
            </div>

            {/* COLUMN 3: Governance, Faculty */}
            <div className="space-y-8">
              {COLUMN_3_GROUPS.map((group) => (
                <NavGroup key={group.title} title={group.title} links={group.links} />
              ))}
            </div>

            {/* COLUMN 4: Research, Hospital, Quick Access */}
            <div className="space-y-8">
              {COLUMN_4_GROUPS.map((group) => (
                <NavGroup key={group.title} title={group.title} links={group.links} />
              ))}
            </div>

          </div>
        </div>

        {/* ==================================================
            BOTTOM COPYRIGHT & LEGAL LINKS
            ================================================== */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {INSTITUTION.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-white/40">
            <a href="/#faqs" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/#faqs" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/#faqs" className="hover:text-white transition-colors">
              Accessibility
            </a>
            <Link to="/about" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
