import { ArrowRight, BookOpen, HeartHandshake, Microscope, Stethoscope, Users } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { INSTITUTION } from '@/lib/constants'

const CAREER_AREAS = [
  { title: 'Academic Faculty', description: 'Teaching, mentoring, clinical supervision, and academic leadership across dental specialties.', icon: BookOpen },
  { title: 'Clinical Services', description: 'Patient-centred clinical roles supporting quality oral healthcare and specialty services.', icon: Stethoscope },
  { title: 'Research', description: 'Research, laboratory, publication, and academic project opportunities across dentistry and healthcare.', icon: Microscope },
  { title: 'Administration & Support', description: 'Professional roles supporting students, patients, faculty, and institutional operations.', icon: Users },
]

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdfafb]">
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#fdfafb] px-5 pb-20 pt-36 md:px-8 md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                <HeartHandshake className="h-4 w-4" /> Join APDCH
              </span>
              <h1 className="mt-6 font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">Careers at APDCH</h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Build a meaningful career in dental education, clinical care, research, and institutional service.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Career Opportunities</p>
                <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Grow with our academic community</h2>
                <p className="mt-4 leading-relaxed text-muted">APDCH welcomes committed professionals who value academic excellence, compassionate patient care, ethical practice, and continuous learning.</p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CAREER_AREAS.map((area, index) => {
                const Icon = area.icon
                return (
                  <Reveal key={area.title} delay={index * 0.06}>
                    <article className="h-full rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_14px_35px_-28px_rgba(82,24,34,0.45)]">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                      <h3 className="mt-6 font-display text-xl text-foreground">{area.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{area.description}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>

            <Reveal>
              <div className="mt-14 rounded-[2rem] bg-primary px-6 py-10 text-center text-white shadow-brand-button md:px-12 md:py-12">
                <h2 className="font-display text-3xl md:text-4xl">Interested in joining APDCH?</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">Share your profile and area of interest with the institution. Applications are considered according to current requirements and eligibility.</p>
                <a href={`mailto:${INSTITUTION.email}?subject=Career Application - APDCH`} className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90">
                  Submit Your Profile <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
