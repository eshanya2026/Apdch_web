import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Siren } from 'lucide-react'
import { INSTITUTION, FOOTER_COLUMNS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-footer text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 shadow-sm">
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
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              {INSTITUTION.description}
            </p>
            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-accent/90">
              {INSTITUTION.tagline}
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {INSTITUTION.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${INSTITUTION.phone}`} className="hover:text-white">
                  {INSTITUTION.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Siren className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${INSTITUTION.emergency}`} className="hover:text-white">
                  Emergency {INSTITUTION.emergency}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${INSTITUTION.email}`} className="hover:text-white">
                  {INSTITUTION.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Explore</h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link to="/" className="text-sm text-white/50 transition-colors hover:text-accent">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    About APDCH
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about/campus-life"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Campus Life
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academics"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Academics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/departments"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Departments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faculty"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hospital"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    Hospital
                  </Link>
                </li>
              </ul>
            </div>
            {FOOTER_COLUMNS.slice(0, 3).map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold tracking-wide text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="/#cta"
                        className="text-sm text-white/50 transition-colors hover:text-accent"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
