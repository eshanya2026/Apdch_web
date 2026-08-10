import { BookOpen, FileText, Library, PenLine } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const journalAreas = [
  {
    icon: FileText,
    title: 'Journal Articles',
    description: 'Access scholarly articles and academic contributions published through the institutional journal.',
  },
  {
    icon: Library,
    title: 'Issues & Archive',
    description: 'Browse current and previous journal issues from one organized digital archive.',
  },
  {
    icon: PenLine,
    title: 'For Authors',
    description: 'Find submission information, manuscript requirements, and author guidance.',
  },
]

export default function Journal() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-foreground px-5 pb-16 pt-32 text-white md:px-8 md:pb-20">
          <div className="pointer-events-none absolute inset-0 glow-radial-t opacity-70" />
          <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative mx-auto w-full max-w-7xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-accent backdrop-blur-sm">
              <BookOpen className="h-7 w-7" />
            </div>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.28em] text-accent">Research · Journal</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              APDCH Research Journal
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              A dedicated space for scholarly publications, journal issues, academic contributions, and author information.
            </p>
          </div>
        </section>

        <section className="bg-background px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 md:grid-cols-3">
              {journalAreas.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-[1.5rem] border border-primary/10 bg-white p-7 shadow-brand-xs">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/[0.08] text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[1.75rem] bg-primary px-7 py-8 text-white md:px-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Journal Updates</p>
                <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">Issues and submission details</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                  Journal editions, downloadable articles, and detailed author guidelines can be published here as they become available.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
