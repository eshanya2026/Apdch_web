import { BookOpen, Download, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function PublicationPage({ eyebrow, title, description, editionLabel, editions = [] }) {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-foreground px-5 pb-16 pt-32 text-white md:px-8 md:pb-20">
          <div className="pointer-events-none absolute inset-0 glow-radial-t opacity-70" />
          <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative mx-auto w-full max-w-7xl">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-accent backdrop-blur-sm">
              <BookOpen className="h-7 w-7" />
            </span>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">{description}</p>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            {editions.length > 0 ? (
              <div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Publication Archive</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">Explore All Editions</h2>
                </div>
                <div className={`mt-8 grid gap-5 ${editions.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 md:grid-cols-3'}`}>
                  {editions.map((edition, index) => (
                    <article key={edition.year} className="group overflow-hidden rounded-[1.5rem] border border-primary/10 bg-white shadow-brand-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-brand-sm">
                      <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-foreground p-6 text-white">
                        <span className="absolute right-5 top-4 font-display text-5xl text-white/10">{String(index + 1).padStart(2, '0')}</span>
                        <div className="text-center">
                          <BookOpen className="mx-auto h-10 w-10 text-accent" />
                          <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-white/60">APDCH {editionLabel || 'Publication'}</p>
                          <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">{edition.title}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{edition.year} Edition</p>
                        <div className="mt-5 flex flex-wrap gap-3">
                          <a href={edition.pdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary-dark">
                            View PDF <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <a href={edition.pdf} download className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary/[0.06]">
                            Download <Download className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-10 rounded-[1.75rem] border border-primary/10 bg-[#faf7f8] px-7 py-9 text-center md:px-10">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Archive Ready</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">Editions will be published here</h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
                  This page is prepared for cover images, publication dates, summaries, and PDF download links.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
