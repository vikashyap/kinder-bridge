"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"

const faqs = [
  {
    question: "How long does the full verification process take?",
    answer:
      "The AI identity scan is completed in real-time (under 60 seconds). The police character check typically takes 5-14 business days depending on the country. Caregivers can begin appearing in search results once their identity scan passes, with their full badge set updating as each verification completes.",
  },
  {
    question: "Which countries' IDs do you support?",
    answer:
      "We currently support passport scanning from all countries, Emirates ID from the UAE, and Thai National ID. We are actively expanding to support additional national ID formats from across Asia, Europe, and the Americas.",
  },
  {
    question: "Is my personal data safe?",
    answer:
      "Absolutely. All personal data is encrypted at rest and in transit using AES-256 encryption. We are GDPR compliant and only share necessary information with matched families after they pay the match fee. Document images are stored in isolated, encrypted vaults.",
  },
  {
    question: "What if a police check comes back with issues?",
    answer:
      "If a police clearance reveals concerning records, we review the case internally. Depending on the nature and severity, the caregiver may be declined or asked to provide additional context. We maintain a zero-tolerance policy for violent offenses.",
  },
  {
    question: "Can families verify the authenticity of badges?",
    answer:
      "Yes. Each badge is linked to a verification timestamp and source. Families can click on any badge in a caregiver\u2019s profile to see when the check was performed, which authority or system provided the clearance, and the expiry date if applicable.",
  },
  {
    question: "How often are verifications renewed?",
    answer:
      "Identity verification is a one-time process unless the document expires. Police clearance checks are renewed annually. Professional certifications (First Aid, Childcare) are re-verified when they expire. This ensures ongoing trust and safety.",
  },
]

export function VettingFaq() {
  return (
    <section id="faq" className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Frequently asked questions
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground">
              Transparency is Our Policy
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`vetting-faq-${i}`}
                className="rounded-2xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-base font-semibold text-card-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
