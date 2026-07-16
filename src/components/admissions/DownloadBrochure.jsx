import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { BROCHURE } from '@/lib/admissionsConstants'

export default function DownloadBrochure() {
  return (
    <section id="brochure" className="bg-background px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-8 shadow-brand-card md:flex md:items-center md:justify-between md:gap-10 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-brand-icon">
                <FileText className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  {BROCHURE.title}
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                  {BROCHURE.description}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-primary">
                  {BROCHURE.fileLabel}
                </p>
              </div>
            </div>
            <div className="relative mt-8 shrink-0 md:mt-0">
              <Button asChild size="lg">
                <a href={`mailto:admissions@apdch.edu.in?subject=Request%20Admissions%20Brochure`}>
                  <Download className="h-4 w-4" />
                  Request Brochure
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
