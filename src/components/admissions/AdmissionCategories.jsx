import { Landmark, Building2 } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import {
  ADMISSION_CATEGORIES,
  ADMISSION_CATEGORIES_SECTION,
} from '@/lib/admissionsConstants'

const ICONS = { Landmark, Building2 }

export default function AdmissionCategories() {
  return (
    <section id="categories" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={ADMISSION_CATEGORIES_SECTION.eyebrow}
            title={ADMISSION_CATEGORIES_SECTION.title}
            description={ADMISSION_CATEGORIES_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ADMISSION_CATEGORIES.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group h-full rounded-[1.75rem] border border-border/80 bg-white p-8 shadow-brand-xs transition-all duration-500 hover:-translate-y-1.5 hover:shadow-brand-sm md:p-10">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-2xl text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
