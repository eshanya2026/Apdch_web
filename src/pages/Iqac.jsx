import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { ShieldCheck, Award, FileText, Sparkles, ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const IQAC_STATS = [
  { value: 'Statutory', label: 'Quality Framework', icon: ShieldCheck },
  { value: 'AQAR', label: 'Annual Quality Reports', icon: FileText },
  { value: 'NAAC & DCI', label: 'Compliance Standards', icon: Award },
  { value: 'Continuous', label: 'Institutional Audits', icon: Sparkles },
]

const IQAC_MEMBERS_DOCUMENTS = [
  {
    year: '2024',
    title: 'IQAC Members Document 2024',
    status: 'Official Document',
    size: 'Official PDF',
    link: 'https://apdch.in/wp-content/uploads/2024/12/2024-IQAC.pdf',
  },
  {
    year: '2023',
    title: 'IQAC Members Document 2023',
    status: 'Official Document',
    size: 'Official PDF',
    link: 'https://apdch.in/wp-content/uploads/2024/12/2023-IQAC.pdf',
  },
  {
    year: '2022',
    title: 'IQAC Members Document 2022',
    status: 'Official Document',
    size: 'Official PDF',
    link: 'https://apdch.in/wp-content/uploads/2024/12/2022-IQAC.pdf',
  },
  {
    year: 'Roster',
    title: 'IQAC Committee Composition & Member List',
    status: 'Statutory List',
    size: 'Official PDF',
    link: 'https://www.apdch.edu.in/download/downloads/1103221301023303.pdf',
  },
]

const MINUTES_REPORTS = [
  { year: '2020 – 2021', title: 'IQAC Minutes of Meeting & Action Taken Report 2020–21', size: '1.5 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/IQAC_MOM_2020-21.pdf' },
  { year: '2019 – 2020', title: 'IQAC Minutes of Meeting & Action Taken Report 2019–20', size: '1.5 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/IQAC_MOM_2019-20.pdf' },
  { year: '2018 – 2019', title: 'IQAC Minutes of Meeting & Action Taken Report 2018–19', size: '1.4 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/IQAC_MOM_2018-19.pdf' },
  { year: '2017 – 2018', title: 'IQAC Minutes of Meeting & Action Taken Report 2017–18', size: '1.3 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/IQAC_MOM_2017-18.pdf' },
  { year: '2016 – 2017', title: 'IQAC Minutes of Meeting & Action Taken Report 2016–17', size: '1.2 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/IQAC_MOM_2016-17.pdf' },
]

const AQAR_REPORTS = [
  { year: '2022 – 2023', title: 'Annual Quality Assurance Report (AQAR 2022–23)', status: 'Approved', size: '2.5 MB PDF', link: 'https://apdch.in/wp-content/uploads/2024/11/AQAR-Report-2022-2023.pdf' },
  { year: '2021 – 2022', title: 'Annual Quality Assurance Report (AQAR 2021–22)', status: 'Approved', size: '2.4 MB PDF', link: 'https://apdch.in/wp-content/uploads/2024/10/AQAR-21-22.pdf' },
  { year: '2019 – 2020', title: 'Annual Quality Assurance Report (AQAR 2019–20)', status: 'Approved', size: '2.2 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/AQAR_Report_2019-2020.pdf' },
  { year: '2018 – 2019', title: 'Annual Quality Assurance Report (AQAR 2018–19)', status: 'Approved', size: '2.1 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/AQAR_Report_2018-2019.pdf' },
  { year: '2017 – 2018', title: 'Annual Quality Assurance Report (AQAR 2017–18)', status: 'Approved', size: '2.0 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/AQAR_Report_2017-2018.pdf' },
  { year: '2016 – 2017', title: 'Annual Quality Assurance Report (AQAR 2016–17)', status: 'Approved', size: '1.9 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/AQAR_Report_2016-2017.pdf' },
  { year: '2015 – 2016', title: 'Annual Quality Assurance Report (AQAR 2015–16)', status: 'Approved', size: '1.8 MB PDF', link: 'https://www.apdch.edu.in/download/downloads/AC2021/AQAR_Report_2015-2016.pdf' },
]

export default function Iqac() {
  const [activeTab, setActiveTab] = useState('members')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* 1. Glassmorphism Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-background pb-16 pt-36 md:pb-20 md:pt-44">
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-brand-xs backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Quality Assurance & Excellence
                </div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  Internal Quality Assurance Cell
                </h1>
                <p className="mt-4 font-display text-xl font-bold text-primary md:text-2xl">
                  IQAC — APDCH
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg lg:text-xl max-w-3xl mx-auto">
                  Fostering a culture of continuous quality enhancement in academic performance, clinical training, research, and administrative governance as mandated by NAAC.
                </p>
              </Reveal>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {IQAC_STATS.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Reveal key={stat.label} delay={index * 0.08}>
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-white p-5 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-brand-md md:p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-3xl">
                          {stat.value}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted group-hover:text-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* 2. Red Tab Bar Navigation (IQAC Members | IQAC Minutes & ATR | AQAR) */}
        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">

            {/* Red Container Bar Matching User Screenshot */}
            <Reveal>
              <div className="overflow-hidden rounded-xl bg-primary p-1.5 shadow-brand-md">
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3">
                  
                  {/* Tab 1: IQAC Members */}
                  <button
                    onClick={() => setActiveTab('members')}
                    className={`relative flex items-center justify-center rounded-lg px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                      activeTab === 'members'
                        ? 'bg-primary text-white border-2 border-white shadow-brand-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>IQAC Members</span>
                  </button>

                  {/* Tab 2: IQAC Minutes & ATR */}
                  <button
                    onClick={() => setActiveTab('minutes')}
                    className={`relative flex items-center justify-center rounded-lg px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                      activeTab === 'minutes'
                        ? 'bg-primary text-white border-2 border-white shadow-brand-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>IQAC Minutes &amp; ATR</span>
                  </button>

                  {/* Tab 3: AQAR */}
                  <button
                    onClick={() => setActiveTab('aqar')}
                    className={`relative flex items-center justify-center rounded-lg px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 ${
                      activeTab === 'aqar'
                        ? 'bg-primary text-white border-2 border-white shadow-brand-sm'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>AQAR</span>
                  </button>

                </div>
              </div>
            </Reveal>

            {/* Tab Content Display Area */}
            <div className="mt-10">
              <AnimatePresence mode="wait">

                {/* TAB 1 CONTENT: IQAC Members */}
                {activeTab === 'members' && (
                  <motion.div
                    key="tab-members"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-b border-border/80 pb-6 mb-8">
                      <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl">
                        IQAC Committee Members &amp; Structure Documents
                      </h2>
                      <p className="mt-1 text-sm text-muted">
                        Official composition documents and member lists for the Internal Quality Assurance Cell at APDCH across academic years.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {IQAC_MEMBERS_DOCUMENTS.map((doc) => (
                        <div
                          key={doc.title}
                          className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-brand-md"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xl font-extrabold text-primary">
                                {doc.year}
                              </span>
                              <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-extrabold text-primary">
                                {doc.status}
                              </span>
                            </div>
                            <h4 className="mt-4 font-display text-base font-bold text-foreground">
                              {doc.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted">
                              {doc.size}
                            </p>
                          </div>

                          <div className="mt-6 border-t border-border/60 pt-4">
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-brand-xs transition-colors hover:bg-primary/90"
                            >
                              <Download className="h-4 w-4" />
                              <span>Download PDF</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 2 CONTENT: IQAC Minutes & ATR */}
                {activeTab === 'minutes' && (
                  <motion.div
                    key="tab-minutes"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-b border-border/80 pb-6 mb-8">
                      <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl">
                        IQAC Minutes of Meeting &amp; Action Taken Reports
                      </h2>
                      <p className="mt-1 text-sm text-muted">
                        Official minutes of meetings and Action Taken Reports (ATR) recorded for recent academic years.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {MINUTES_REPORTS.map((doc) => (
                        <div
                          key={doc.year}
                          className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-brand-md"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xl font-extrabold text-primary">
                                {doc.year}
                              </span>
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText className="h-5 w-5" />
                              </div>
                            </div>
                            <h4 className="mt-4 font-display text-base font-bold text-foreground">
                              {doc.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted">
                              {doc.size}
                            </p>
                          </div>

                          <div className="mt-6 border-t border-border/60 pt-4">
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-brand-xs transition-colors hover:bg-primary/90"
                            >
                              <Download className="h-4 w-4" />
                              <span>Download PDF</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 3 CONTENT: AQAR */}
                {activeTab === 'aqar' && (
                  <motion.div
                    key="tab-aqar"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="border-b border-border/80 pb-6 mb-8">
                      <h2 className="font-display text-2xl font-extrabold text-foreground md:text-3xl">
                        Annual Quality Assurance Reports (AQAR)
                      </h2>
                      <p className="mt-1 text-sm text-muted">
                        Official Annual Quality Assurance Reports submitted by APDCH to NAAC in compliance with quality guidelines.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      {AQAR_REPORTS.map((doc) => (
                        <div
                          key={doc.year}
                          className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-brand-md"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-display text-xl font-extrabold text-primary">
                                {doc.year}
                              </span>
                              <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-extrabold text-primary">
                                {doc.status}
                              </span>
                            </div>
                            <h4 className="mt-4 font-display text-base font-bold text-foreground">
                              {doc.title}
                            </h4>
                            <p className="mt-1 text-xs text-muted">
                              {doc.size}
                            </p>
                          </div>

                          <div className="mt-6 border-t border-border/60 pt-4">
                            <a
                              href={doc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-brand-xs transition-colors hover:bg-primary/90"
                            >
                              <Download className="h-4 w-4" />
                              <span>Download AQAR</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* 3. High-Impact CTA Banner */}
        <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
          <div className="absolute inset-0 cta-gradient" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent backdrop-blur-md">
                Continuous Quality Improvement
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Commitment to Quality Education
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg max-w-2xl mx-auto">
                APDCH IQAC continuously strives to elevate academic, clinical, research, and governance standards in alignment with NAAC and DCI mandates.
              </p>
              <div className="mt-9 flex justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-brand-md px-8 py-6 text-base">
                  <a href="/governance/committees">
                    <span>View Committees &amp; Cells</span>
                    <ArrowRight className="h-5 w-5" />
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
