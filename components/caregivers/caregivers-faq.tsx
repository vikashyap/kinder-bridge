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
    question: "How do I earn the \u20AC8 Interview Reward?",
    answer:
      "You get paid for your time! If you attend a scheduled 15-minute video call and act professionally, you earn \u20AC8 \u2014 even if the family doesn\u2019t hire you. This is our way of respecting your expertise.",
  },
  {
    question: "When is the \u20AC8 Reward NOT paid?",
    answer:
      "Your reward is forfeited if: you are more than 5 minutes late; you are in an unprofessional environment (noisy street, bed, etc.); you behave rudely or refuse to answer the family\u2019s questions; or you attempt to share your private phone number during the moderated call.",
  },
  {
    question: 'What happens if I "Ghost" a family after being hired?',
    answer:
      "Kindred Bridge is an elite, high-standard community and we have a Zero-Tolerance Policy for no-shows. If you accept a match and fail to show up on Day 1 without a valid medical emergency (with documentation), you will be permanently banned from Kindred Bridge globally, your \u201CVerified\u201D status will be revoked, and the family will receive an immediate free replacement. We protect our families because that is how we protect you.",
  },
  {
    question: "Can I share my phone number in the video call?",
    answer:
      "No. Sharing personal contact details during the moderated call is strictly prohibited and will result in an immediate block of your profile. Once the family pays the consultancy fee, we will share all details officially.",
  },
  {
    question: "Is there a fee for me to join?",
    answer:
      "No. Joining Kindred Bridge is 100% Free for all caregivers. We only make money when we successfully find you a great family.",
  },
]

export function CaregiversFaq() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Common questions
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground">
              Caregiver FAQ
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
