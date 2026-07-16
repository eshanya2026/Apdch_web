import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/lib/constants'

export default function FAQs() {
  return (
    <section id="faqs" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQs"
            title="Answers before you ask"
            description="Clear guidance on admissions, clinical appointments, housing, and emergency care."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion type="single" collapsible defaultValue="item-0">
              {FAQS.map((faq, i) => (
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
