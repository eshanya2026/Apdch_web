import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Monitor,
  Clock,
  GraduationCap,
} from 'lucide-react'

/* ── Hero stats ── */
const LMS_STATS = [
  { value: '24/7', label: 'Access', icon: Clock },
  { value: 'Digital', label: 'Course Content', icon: BookOpen },
  { value: 'MDS', label: 'Programme Covered', icon: GraduationCap },
  { value: 'Interactive', label: 'Learning Tools', icon: Monitor },
]

/* ── Department LMS portals ── */
const LMS_DEPARTMENTS = [
  { name: 'Oral Medicine and Radiology', href: '/academics/lms/oral-medicine-radiology', description: 'Diagnosis, imaging, and oral medicine learning resources.' },
  { name: 'Conservative Dentistry and Endodontics', href: '/academics/lms/conservative-dentistry-endodontics', description: 'Restorative dentistry and root canal education.' },
  { name: 'Oral & Maxillofacial Surgery', href: '/academics/lms/oral-maxillofacial-surgery', description: 'Surgical principles, trauma, and patient-care modules.' },
  { name: 'Orthodontics and Dentofacial Orthopedics', href: '/academics/lms/orthodontics', description: 'Occlusion, growth, diagnosis, and treatment planning.' },
  { name: 'Prosthodontics Crown and Bridge', href: '/academics/lms/prosthodontics-crown-bridge', description: 'Fixed, removable, implant, and maxillofacial prostheses.' },
  { name: 'Periodontics & Implantology', href: '/academics/lms/periodontics-implantology', description: 'Periodontal health, surgery, regeneration, and implants.' },
  { name: 'Pedodontics & Preventive Dentistry', href: '/academics/lms/pedodontics-preventive-dentistry', description: 'Preventive and clinical dental care for children.' },
  { name: 'Public Health Dentistry', href: '/academics/lms/public-health-dentistry', description: 'Epidemiology, prevention, and community oral health.' },
  { name: 'Oral Pathology & Microbiology', href: '/academics/lms/oral-pathology-microbiology', description: 'Tooth morphology, histology, and disease pathology.' },
]

export default function Lms() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      <Navbar />
      <main>
        {/* ─── HERO ─── */}
        <motion.section
          id="top"
          ref={ref}
          style={{ clipPath }}
          className="relative flex min-h-[72svh] items-end overflow-hidden pb-20 pt-32 md:min-h-[80svh] md:items-center md:pb-28 will-change-[clip-path]"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80&auto=format&fit=crop"
              alt="Digital learning platform at APDCH"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute right-10 top-32 h-36 w-36 rounded-full border border-accent/25 bg-accent/10 animate-[float_9s_ease-in-out_infinite]" />
            <div className="absolute bottom-28 left-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_1s_infinite]" />
          </div>

          <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
            >
              Academics → Learning Management System
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
            >
              Learning Management System
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              APDCH&apos;s digital learning platform providing course materials, lecture notes,
              assignments, assessments, and academic resources for BDS and MDS students.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <a href="#department-portals">
                  Explore Departments
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ─── Stats Strip ─── */}
        <section className="border-b border-border/60 bg-surface px-5 py-10 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LMS_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-brand-xs transition-all duration-300 hover:border-primary/30 hover:shadow-brand-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">{stat.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ─── Department LMS Portals ─── */}
        <section id="department-portals" className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#FDF8F9_50%,#ffffff_100%)] px-5 py-24 md:px-8 md:py-32">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32 lg:self-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-brand-xs">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Department Learning
                </span>
                <h2 className="mt-7 max-w-md font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
                  Department-wise Learning Resources
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                  Select your department to access curated video lessons and chapter-wise study materials.
                </p>
                <div className="mt-10 flex items-center gap-5 border-t border-border pt-6">
                  <span className="font-display text-5xl text-primary">09</span>
                  <span className="text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-muted">Specialty<br />workspaces</span>
                </div>
              </div>
            </Reveal>

            <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-white shadow-brand-card">
              {LMS_DEPARTMENTS.map((department, i) => (
                <Reveal key={department.href} delay={i * 0.035}>
                  <Link
                    to={department.href}
                    className="group grid min-h-32 grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-border/70 px-5 py-6 transition-all duration-300 last:border-b-0 hover:bg-primary/[0.045] sm:gap-7 sm:px-8"
                  >
                    <span className="font-display text-2xl text-primary/35 transition-colors group-hover:text-primary sm:text-3xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
                        {department.name}
                      </span>
                      <span className="mt-2 hidden text-sm leading-relaxed text-muted sm:block">
                        {department.description}
                      </span>
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface-soft text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/5 via-surface to-accent/5 p-10 text-center shadow-brand-card md:p-16">
                <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Start Learning Today
                  </p>
                  <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl tracking-tight text-foreground md:text-4xl">
                    Access the APDCH Learning Management System
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                    Log in with your institutional credentials to explore course materials,
                    complete assessments, and track your academic progress.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                      <a href="#department-portals">
                        <BookOpen className="h-4 w-4" />
                        Browse LMS Departments
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="soft">
                      <Link to="/academics">
                        <BookOpen className="h-4 w-4" />
                        Back to Academics
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
