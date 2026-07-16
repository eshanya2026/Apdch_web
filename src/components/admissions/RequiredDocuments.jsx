import { FileCheck2 } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { REQUIRED_DOCUMENTS } from '@/lib/admissionsConstants'

export default function RequiredDocuments() {
  return (
    <section id="documents" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Checklist"
            title="Required Documents"
            description="Keep originals and photocopies ready for verification at the time of reporting."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            { label: 'BDS Documents', items: REQUIRED_DOCUMENTS.bds },
            { label: 'MDS Documents', items: REQUIRED_DOCUMENTS.mds },
          ].map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <article className="h-full rounded-[1.75rem] border border-border/80 bg-white p-7 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-soft text-primary">
                    <FileCheck2 className="h-5 w-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">{group.label}</h3>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
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
          ))}
        </div>
      </div>
    </section>
  )
}
