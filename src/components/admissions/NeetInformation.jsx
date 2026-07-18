import { BookOpen, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { NEET_INFO, NEET_INFO_SECTION } from '@/lib/admissionsConstants'

export default function NeetInformation() {
  return (
    <section id="neet" className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-tl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow={NEET_INFO_SECTION.eyebrow}
            title={NEET_INFO_SECTION.title}
            description={NEET_INFO_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {NEET_INFO.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.1}>
              <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-400 hover:bg-white/[0.08] md:p-9">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{block.title}</h3>
                </div>
                {block.description ? (
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {block.description}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {block.points?.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
