import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FEE_STRUCTURE } from '@/lib/admissionsConstants'

export default function FeeStructure() {
  return (
    <section id="fees" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Investment"
            title="Fee Structure"
            description="Indicative fee components for the academic year. Final schedules are released in official circulars."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-border/80 bg-surface-soft/80">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Programme
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Category
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_STRUCTURE.map((row) => (
                    <tr
                      key={`${row.programme}-${row.category}`}
                      className="border-b border-border/60 transition-colors last:border-0 hover:bg-background/80"
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-foreground">
                        {row.programme}
                      </td>
                      <td className="px-6 py-5 text-sm text-foreground/80">{row.category}</td>
                      <td className="px-6 py-5 text-sm font-medium text-primary">{row.amount}</td>
                      <td className="px-6 py-5 text-sm text-muted">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-border/70 bg-background/50 px-6 py-4 text-xs text-muted">
              Fees are subject to regulatory revisions. Contact the Admissions Office for the latest
              official circular.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
