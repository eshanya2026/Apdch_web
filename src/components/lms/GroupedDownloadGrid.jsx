import { Download, FileText, Presentation } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'

export default function GroupedDownloadGrid({ items, getGroup, format = 'pptx' }) {
  const groups = items.reduce((result, item, index) => {
    const label = getGroup(index)
    const current = result.at(-1)

    if (current?.label === label) {
      current.items.push({ item, index })
    } else {
      result.push({ label, items: [{ item, index }] })
    }

    return result
  }, [])

  const MaterialIcon = format === 'pdf' ? FileText : Presentation
  const fileType = format === 'pdf' ? 'PDF document' : 'PowerPoint'

  return (
    <div className="mt-14 space-y-14">
      {groups.map((group) => (
        <section key={group.label}>
          <Reveal>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <h3 className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {group.label}
              </h3>
              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map(({ item: [title, documentId, fileSize], index }) => (
              <Reveal key={`${documentId}-${title}`} delay={(index % 6) * 0.03}>
                <a
                  href={`https://docs.google.com/presentation/d/${documentId}/export/${format}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-border/80 bg-white p-5 shadow-brand-xs transition-colors hover:border-primary/30"
                >
                  <span className="flex w-full items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <MaterialIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-[0.12em] text-primary">
                        Chapter {index + 1}
                      </span>
                      <span className="mt-2 block text-base font-bold leading-snug text-foreground">
                        {title}
                      </span>
                    </span>
                  </span>

                  <span className="mt-6 flex w-full flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
                    <span className="text-xs font-semibold text-muted">
                      {fileType}{fileSize ? ` · ${fileSize}` : ''}
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-primary">
                      <Download className="h-4 w-4" />
                      Download
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
