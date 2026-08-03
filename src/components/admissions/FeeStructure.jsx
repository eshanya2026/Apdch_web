import { Clock, GraduationCap, Award, Download, ArrowRight, FileText } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { FEE_CARDS, FEE_STRUCTURE_SECTION } from '@/lib/admissionsConstants'

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
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {FEE_CARDS.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-8 shadow-brand-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-brand-xl"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-extrabold text-primary">
                      {card.badge === 'Undergraduate' ? (
                        <GraduationCap className="h-3.5 w-3.5" />
                      ) : (
                        <Award className="h-3.5 w-3.5" />
                      )}
                      {card.badge}
                    </span>
                    <FileText className="h-6 w-6 text-primary/30 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>

                  {/* Details List */}
                  <div className="mt-6 space-y-4 rounded-2xl bg-slate-50/80 p-5 border border-border/50">
                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted/80 block">Duration</span>
                        <span className="text-sm font-semibold text-foreground">{card.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted/80 block">Admission Qualification</span>
                        <span className="text-sm font-bold text-primary">{card.admission}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="mt-8 border-t border-border/60 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-primary text-white hover:bg-primary/90 font-bold shadow-brand-md transition-all duration-300 group-hover:shadow-brand-lg"
                  >
                    <a href={card.href} className="inline-flex items-center justify-center gap-2">
                      <Download className="h-4 w-4" />
                      <span>{card.btnText}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
