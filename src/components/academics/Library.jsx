import { BookOpen } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { LIBRARY } from '@/lib/academicsConstants'

export default function Library() {
  return (
    <section id="library" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src={LIBRARY.image}
                alt="Central library at APDCH"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/20" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Knowledge hub"
              title={LIBRARY.title}
              description={LIBRARY.description}
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {LIBRARY.features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-border/80 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-brand-xs"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-surface-soft text-primary">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{f.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
