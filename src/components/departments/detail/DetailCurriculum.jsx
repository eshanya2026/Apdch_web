import { BookOpen } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function DetailCurriculum({ department }) {
  const curriculum = department.curriculum

  if (!curriculum?.length) return null

  return (
    <section className="relative overflow-hidden bg-[#faf7f8] px-5 py-16 md:px-8 md:py-24">
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={department.curriculumEyebrow ?? 'Course Curriculum'}
            title={department.curriculumTitle ?? 'Structured Clinical Learning Pathway'}
            description={department.curriculumDescription}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-primary/10 bg-white px-5 shadow-brand-card md:px-8">
            <Accordion type="single" collapsible defaultValue="curriculum-0">
              {curriculum.map((phase, index) => (
                <AccordionItem key={phase.title} value={`curriculum-${index}`} className="border-primary/10">
                  <AccordionTrigger className="gap-4 py-6 text-left hover:no-underline md:py-7">
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-lg font-semibold text-foreground md:text-xl">{phase.title}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pl-[3.75rem] pr-4 text-sm leading-7 text-muted md:text-base">
                    <span className="flex items-start gap-3">
                      <BookOpen className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span>{phase.description}</span>
                    </span>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
