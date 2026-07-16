import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { PUBLICATIONS } from '@/lib/researchConstants'

export default function Publications() {
  return (
    <section id="publications" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-t" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Scholarly record"
            title="Publications"
            description="Selected faculty and student outputs — indicative of the college’s research voice."
          />
        </Reveal>
        <div className="mt-12 divide-y divide-white/10 rounded-[1.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm">
          {PUBLICATIONS.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 0.05}>
              <article className="grid gap-3 px-6 py-6 transition-colors hover:bg-white/[0.04] md:grid-cols-[72px_1fr] md:gap-6 md:px-8">
                <p className="font-display text-2xl text-accent">{pub.year}</p>
                <div>
                  <h3 className="text-base font-semibold leading-snug text-white md:text-lg">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm italic text-white/55">{pub.journal}</p>
                  <p className="mt-1 text-sm text-white/70">{pub.authors}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
