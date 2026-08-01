import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Award, FileText, ShieldCheck, ArrowRight, Building, ExternalLink, Download, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const NIRF_STATS = [
  { value: '8 Years', label: 'Verified Reports', icon: Calendar },
  { value: 'MoE India', label: 'Ministry Evaluation', icon: Building },
  { value: 'Dental', label: 'Discipline Category', icon: Award },
  { value: '100%', label: 'Public Transparency', icon: ShieldCheck },
]

const NIRF_YEARS = [
  {
    year: '2026',
    title: 'NIRF Data Submission 2026',
    tag: 'Latest Submission',
    badgeStyle: 'bg-primary text-white',
    link: 'https://apdch.in/wp-content/uploads/2026/04/NIRF-2026.pdf',
    featured: true,
  },
  {
    year: '2025',
    title: 'NIRF Data Submission 2025',
    tag: 'Official Report',
    badgeStyle: 'bg-accent/20 text-primary border border-accent/40',
    link: 'https://apdch.in/wp-content/uploads/2025/01/NIRF-2025.pdf',
    featured: true,
  },
  {
    year: '2024',
    title: 'NIRF Data Submission 2024',
    tag: 'Official Report',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    link: 'https://apdch.in/wp-content/uploads/2024/03/NIRF-2024.pdf',
  },
  {
    year: '2023',
    title: 'NIRF Data Submission 2023',
    tag: 'Official Report',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    link: 'https://apdch.in/wp-content/uploads/2023/02/ADHIPARASAKTHI-DENTAL-COLLEGE-AND-HOSPITAL-Inst.-Code-197-KANCHEEPURAM20230106-.pdf',
  },
  {
    year: '2022',
    title: 'NIRF Data Submission 2022',
    tag: 'Official Report',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    link: 'https://apdch.in/wp-content/uploads/2023/02/nirf_2022.pdf',
  },
  {
    year: '2021',
    title: 'NIRF Data Submission 2021',
    tag: 'Official Report',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    link: 'https://apdch.in/wp-content/uploads/2023/02/nirf_2021.pdf',
  },
  {
    year: '2020',
    title: 'NIRF Data Submission 2020',
    tag: 'Official Report',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    link: 'https://apdch.in/wp-content/uploads/2023/02/nirf_2020.pdf',
  },
  {
    year: '2019',
    title: 'NIRF Data Submission 2019',
    tag: 'Official Report',
    badgeStyle: 'bg-primary/10 text-primary border border-primary/20',
    link: 'https://apdch.in/wp-content/uploads/2023/02/nirf_2019.pdf',
  },
]

export default function Nirf() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* 1. Glassmorphism Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-background pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-brand-xs backdrop-blur-md">
                  <Award className="h-4 w-4 text-primary" />
                  Ministry of Education • Government of India
                </div>
                <h1 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                  NIRF Disclosures
                </h1>
                <p className="mt-4 font-display text-xl font-bold text-primary md:text-2xl">
                  National Institutional Ranking Framework
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg lg:text-xl max-w-3xl mx-auto">
                  Demonstrating institutional excellence, academic rigor, research impact, and healthcare infrastructure at Adhiparasakthi Dental College & Hospital as evaluated under NIRF guidelines.
                </p>
              </Reveal>
            </div>

            {/* Hero Stats */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {NIRF_STATS.map((stat, index) => {
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

        {/* 2. Elevated Interactive Year Cards Section */}
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Annual Submissions"
                title="NIRF Annual Data Reports (2019 – 2026)"
                description="Explore official data submission documents submitted by APDCH to the Ministry of Education for each academic year."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {NIRF_YEARS.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.06}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-border/80 bg-white p-6 shadow-brand-card transition-all duration-300 hover:border-primary hover:shadow-brand-md"
                  >
                    <div>
                      {/* Top Bar with Icon & Tag */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-brand-xs group-hover:bg-primary group-hover:text-white transition-colors">
                          <FileText className="h-6 w-6" />
                        </div>
                        <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider ${item.badgeStyle}`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Display Year */}
                      <div className="mt-6">
                        <span className="font-display text-4xl font-extrabold tracking-tight text-primary">
                          {item.year}
                        </span>
                        <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-muted">
                          Official Dental Category Data Submission PDF
                        </p>
                      </div>
                    </div>

                    {/* Download Button Action */}
                    <div className="mt-8 border-t border-border/60 pt-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between rounded-xl bg-background border border-border/80 px-4 py-3 text-xs font-bold text-foreground shadow-brand-xs transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                      >
                        <span className="flex items-center gap-2">
                          <Download className="h-4 w-4 text-primary group-hover:text-white" />
                          <span>View PDF</span>
                        </span>
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-primary group-hover:text-white">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>



        {/* 4. High-Impact CTA Banner */}
        <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
          <div className="absolute inset-0 cta-gradient" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent backdrop-blur-md">
                Official Ministry Portal
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Official NIRF India Portal
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg max-w-2xl mx-auto">
                Visit the official NIRF India portal to explore national institution rankings, methodology guidelines, and statutory ranking parameters.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-brand-md px-8 py-6 text-base">
                  <a href="https://www.nirfindia.org/" target="_blank" rel="noopener noreferrer">
                    <span>Visit NIRF India Portal</span>
                    <ExternalLink className="h-5 w-5" />
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
