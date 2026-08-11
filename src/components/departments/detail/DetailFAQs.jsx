import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function DetailFAQs({ department }) {
  if (!department?.faqs?.length) return null

  return (
    <section className="bg-background px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="Questions"
            title="FAQs"
            description={`Common questions about care and training in ${department.name}.`}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Accordion type="single" collapsible defaultValue="item-0">
              {department.faqs.map((faq, i) => (
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
