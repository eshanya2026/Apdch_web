import { FileText, IdCard, ClipboardList, HeartPulse } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { REQUIRED_DOCUMENTS, REQUIRED_DOCUMENTS_SECTION } from '@/lib/admissionsConstants'

const ICONS = { FileText, IdCard, ClipboardList, HeartPulse }

export default function RequiredDocuments() {
  return (
    <section id="documents" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={REQUIRED_DOCUMENTS_SECTION.eyebrow}
            title={REQUIRED_DOCUMENTS_SECTION.title}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {REQUIRED_DOCUMENTS.map((group, i) => {
            const Icon = ICONS[group.icon]
            return (
              <Reveal key={group.title} delay={i * 0.08}>
                <article className="h-full rounded-[1.75rem] border border-border/80 bg-white p-7 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((doc) => (
                      <li
                        key={doc}
                        className="rounded-xl bg-background px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-surface-soft"
                      >
                        {doc}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
