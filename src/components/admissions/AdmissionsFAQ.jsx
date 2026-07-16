import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ADMISSION_FAQS } from '@/lib/admissionsConstants'

export default function AdmissionsFAQ() {
  return (
    <section id="faq" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="Admissions FAQ"
            description="Straight answers on NEET, counselling, fees, housing, and reporting."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion type="single" collapsible defaultValue="item-0">
              {ADMISSION_FAQS.map((faq, i) => (
                <AccordionItem key={faq.question} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
