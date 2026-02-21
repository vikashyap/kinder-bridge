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
    question: "How do I know the caregiver is who they say they are?",
    answer:
      "We use bank-grade AI identity verification. Every caregiver must scan their Passport or National ID (Emirates ID, Thai ID, etc.) via our secure API. We also manually verify their Police Character Certificate to ensure they have no criminal record.",
  },
  {
    question: "Why do I have to pay \u20AC30 for a video call?",
    answer:
      "This fee ensures only serious families book our caregivers\u2019 time. It covers the moderation of the call by our staff and pays the caregiver \u20AC8 for their professional time. This prevents \u201Cghosting\u201D and ensures a high-quality interview.",
  },
  {
    question: "What is included in the \u20AC250 Consultancy Fee?",
    answer:
      "Once you find your match, this fee unlocks the Full Dossier: the caregiver\u2019s contact details, verified ID copies, Police Clearance documents, and our \u201CLegal Hiring 1-Pager\u201D for your specific country.",
  },
  {
    question: "What if the nanny/companion doesn\u2019t show up on Day 1?",
    answer:
      "We offer a 100% Satisfaction Guarantee. If your match ghosts or doesn\u2019t work out within the first 30 days, we will provide a Free Priority Replacement or a full refund of your consultancy fee.",
  },
  {
    question: "Are you the employer?",
    answer:
      "No. Kindred Bridge is a Consultancy & Matchmaking Platform. You hire the caregiver directly. This allows you to save money on agency markups while we provide the safety and vetting.",
  },
]

export function FamiliesFaq() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Common questions
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground">
              Everything You Need to Know
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
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
