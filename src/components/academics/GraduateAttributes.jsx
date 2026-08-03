import { Award, ArrowRight, Sparkles, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

export default function GraduateAttributes() {
  return (
    <section id="graduate-attributes" className="mesh-bg px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-white p-8 md:p-12 shadow-brand-lg">
            {/* Background Accent Decorative Orbs */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-accent/15 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary shadow-brand-xs">
                <Sparkles className="h-3.5 w-3.5" />
                Learning Outcomes & Standards
              </span>

              <h2 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                Graduate Attributes
              </h2>

              <p className="mt-4 text-base text-muted md:text-lg leading-relaxed">
                Access the official graduate attributes outlining the expected competencies, professional values, clinical abilities, research orientation, and learning outcomes of APDCH graduates.
              </p>

              {/* Download / View Buttons */}
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-primary text-white hover:bg-primary/90 font-extrabold px-7 py-6 text-sm rounded-full shadow-brand-md transition-all duration-300 hover:scale-105"
                >
                  <a
                    href="https://apdch.in/wp-content/uploads/2022/09/Graduate-Attributes.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5"
                  >
                    <GraduationCap className="h-5 w-5 text-accent" />
                    <span>View Graduate Attributes – BDS</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="group border-primary/30 text-primary hover:bg-primary/5 font-extrabold px-7 py-6 text-sm rounded-full transition-all duration-300 hover:scale-105"
                >
                  <a
                    href="https://apdch.in/wp-content/uploads/2022/09/MDS.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5"
                  >
                    <Award className="h-5 w-5 text-primary" />
                    <span>View Graduate Attributes – MDS</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
