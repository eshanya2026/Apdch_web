import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { FEE_STRUCTURE, FEE_STRUCTURE_SECTION } from '@/lib/admissionsConstants'

export default function FeeStructure() {
  return (
    <section id="fees" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={FEE_STRUCTURE_SECTION.eyebrow}
            title={FEE_STRUCTURE_SECTION.title}
            description={FEE_STRUCTURE_SECTION.description}
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-brand-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-border/80 bg-surface-soft/80">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Program
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Admission
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Intake
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_STRUCTURE.map((row) => (
                    <tr
                      key={row.programme}
                      className="border-b border-border/60 transition-colors last:border-0 hover:bg-background/80"
                    >
                      <td className="px-6 py-5 text-sm font-semibold text-foreground">
                        {row.programme}
                      </td>
                      <td className="px-6 py-5 text-sm text-foreground/80">{row.duration}</td>
                      <td className="px-6 py-5 text-sm font-medium text-primary">
                        {row.admission}
                      </td>
                      <td className="px-6 py-5 text-sm text-muted">{row.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-border/70 bg-background/50 px-6 py-4 text-xs leading-relaxed text-muted">
              {FEE_STRUCTURE_SECTION.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
