import { Link } from 'react-router-dom'
import { motion, useTransform } from 'framer-motion'
import {
  ShieldCheck,
  Download,
  ArrowRight,
  FileText,
  Phone,
  ChevronRight,
  Layers,
} from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'

// --- Governance Overview Pillars (3 Main Governance Sections) ---
const GOVERNANCE_PILLARS = [
  {
    id: 'iqac',
    title: 'Internal Quality Assurance Cell (IQAC)',
    desc: 'The quality working standards of the institution are continuously monitored through the IQAC. The IQAC Coordinator convenes meetings with the Principal as Chairperson, providing a common platform where representatives from academic and non-academic departments participate in institutional quality initiatives and decision-making.',
    icon: ShieldCheck,
  },
  {
    id: 'policies',
    title: 'Administration Policies',
    desc: 'Administration is effectively planned every year by the Principal and Heads of Departments. Institutional and departmental objectives are reviewed periodically in line with the Vision and Mission. HOD meetings and departmental staff meetings ensure decentralization, quality implementation, and continuous review of institutional objectives.',
    icon: FileText,
  },
  {
    id: 'structure',
    title: 'Organizational Structure',
    desc: 'The functional organizational structure promotes decentralization and participative decision-making. Departments and committees function autonomously under institutional policies, with periodic monitoring through HOD meetings, committee reviews, and Management Review Meetings (MRM).',
    icon: Layers,
  },
]

// --- Documents / Downloads Data ---
const DOCUMENTS_DATA = [
  {
    id: 'doc-1',
    title: 'List of Committees',
    size: 'PDF · 2.4 MB',
    desc: 'Complete list of statutory and non-statutory committees functioning within the institution.',
    fileName: 'List_of_committee_2022.pdf',
    url: 'https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf',
  },
  {
    id: 'doc-2',
    title: 'Roles & Responsibilities',
    size: 'PDF · 3.8 MB',
    desc: 'Detailed responsibilities, objectives, and scope of every institutional committee.',
    fileName: '6.1.2_roles_and_responsibility_of_each_committees.pdf',
    url: 'https://apdch.in/wp-content/uploads/2022/09/6.1.2_roles_and_responsibility_of_each_committees.pdf',
  },
]

export default function Committees() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <>
      <Navbar />
      <main>
        {/* ==================================================
            1. HERO SECTION
            ================================================== */}
        <motion.section
          id="top"
          ref={ref}
          style={{ clipPath }}
          className="relative flex min-h-[70svh] items-end overflow-hidden pb-20 pt-32 will-change-[clip-path] md:min-h-[78svh] md:items-center md:pb-28"
        >
          <motion.div style={{ scale }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80&auto=format&fit=crop"
              alt="Adhiparasakthi Dental College governance and administration building"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute inset-0 glow-radial-accent" />
          </motion.div>

          <FloatingHeroIcons />

          <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
            {/* Breadcrumb Nav */}
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-accent" />
              <Link to="/about" className="hover:text-white transition-colors">Governance</Link>
              <ChevronRight className="h-3 w-3 text-accent" />
              <span className="text-accent">Committees & Cells</span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
            >
              INSTITUTIONAL GOVERNANCE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
            >
              Committees & Cells
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              The institute has a hierarchical organization structure that executes the work by delegating responsibilities to the committees. Several statutory and non-statutory committees function for the effective management of academic, patient care, and administrative activities while promoting the overall well-being and development of staff and students.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg">
                <a href="#documents">
                  View Committee Documents
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md transition-all"
              >
                <a
                  href="https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Download Committee List
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ==================================================
            2. GOVERNANCE OVERVIEW (IQAC, Administration Policies, Organizational Structure)
            ================================================== */}
        <section id="governance-overview" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="GOVERNANCE OVERVIEW"
                title="Building Excellence Through Collaborative Leadership"
                description="The institution follows a participative governance model where academic and administrative committees work together to achieve institutional goals."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GOVERNANCE_PILLARS.map((pillar, i) => {
                const IconComponent = pillar.icon
                return (
                  <Reveal key={pillar.id} delay={i * 0.08} className="h-full">
                    <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-xs transition-all duration-400 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white mb-5">
                          <IconComponent className="h-6 w-6 stroke-[1.75]" />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-xs md:text-sm leading-relaxed text-muted">
                          {pillar.desc}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            3. COMMITTEE DOCUMENTS & DOWNLOADS
            ================================================== */}
        <section id="documents" className="bg-background px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="RESOURCES & DOWNLOADS"
                title="Committee Documents & Downloads"
                description="Access official committee lists, administrative guidelines, roles, and institutional governance documentation."
              />
            </Reveal>

            <div className="mt-14 max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
              {DOCUMENTS_DATA.map((doc, i) => (
                <Reveal key={doc.id} delay={i * 0.06}>
                  <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-xs transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-brand-md">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <FileText className="h-5.5 w-5.5 stroke-[1.75]" />
                        </div>
                        <span className="text-xs font-bold text-muted font-mono">{doc.size}</span>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        📄 {doc.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-muted leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Button
                        asChild
                        variant="soft"
                        className="w-full justify-between rounded-full text-xs font-semibold"
                      >
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={doc.fileName}
                        >
                          <span>Download PDF</span>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            4. CALL TO ACTION (CTA)
            ================================================== */}
        <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
          <div className="absolute inset-0 cta-gradient" />
          <div className="absolute inset-0 glow-cta-radial" />

          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                GOVERNANCE EXCELLENCE
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                Working Together for Institutional Excellence
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Through effective governance, quality assurance, and collaborative leadership, APDCH's Committees & Cells contribute to academic excellence, student welfare, research, and the institution's continuous growth.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-md">
                  <a href="mailto:principal@apdch.edu.in">
                    <Phone className="h-4 w-4" />
                    Contact Administration
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md"
                >
                  <a
                    href="https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" />
                    Download Committee List
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}
