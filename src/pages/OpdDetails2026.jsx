import { ArrowRight, FileText, Hospital } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'

const REPORTS = [
  { month: 'April', file: '/opd-reports/april-2026.pdf' },
  { month: 'May', file: '/opd-reports/may-2026.pdf' },
]

export default function OpdDetails2026() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fdfafb]">
        <section className="relative overflow-hidden border-b border-primary/10 bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#fdfafb] px-5 pb-20 pt-36 md:px-8 md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                <Hospital className="h-4 w-4" /> Hospital Statistics
              </span>
              <h1 className="mt-6 font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Monthly OPD Details – 2026
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                View monthly outpatient department (OPD) reports of Adhiparasakthi Dental College &amp; Hospitals.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mb-9 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">2026 OPD Records</p>
                <h2 className="mt-2 font-display text-3xl text-foreground md:text-4xl">Monthly Details</h2>
              </div>
            </Reveal>

            <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
              {REPORTS.map((report, index) => (
                <Reveal key={report.month} delay={index * 0.08}>
                  <article className="group rounded-3xl border border-primary/10 bg-white p-6 shadow-[0_14px_35px_-28px_rgba(82,24,34,0.45)] transition-colors hover:border-primary/30 md:p-7">
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <FileText className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-xl uppercase tracking-wide text-foreground">{report.month} 2026</h3>
                        <p className="mt-1 text-sm text-muted">Monthly OPD Report</p>
                      </div>
                    </div>
                    <a
                      href={report.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/75"
                    >
                      View Report <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
