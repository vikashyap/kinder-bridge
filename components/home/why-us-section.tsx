"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const reasons = [
  "Nannies, mannies, and senior companions \u2014 all on one platform",
  "Every caregiver is identity-verified with government-issued IDs",
  "Police character certificates included in every dossier",
  "Moderated video calls with our managers present",
  "Built for the Sandwich Generation: childcare and elder care, solved",
  "Global coverage across 30+ countries",
]

export function WhyUsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[500px]">
              <Image
                src="/images/family-together.jpg"
                alt="A family gathered together, sharing a warm moment with their caregiver"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Why Kindred Bridge
              </p>
              <h2 className="max-w-lg text-balance font-serif text-4xl font-semibold text-foreground">
                Peace of Mind, Guaranteed
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                We built Kindred Bridge because hiring a caregiver should never
                feel like a gamble. Our triple-verification process ensures that
                every person who enters your home has been thoroughly vetted.
              </p>
            </AnimatedSection>

            <ul className="flex flex-col gap-4">
              {reasons.map((reason, i) => (
                <AnimatedSection key={reason} delay={150 + i * 50}>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">{reason}</span>
                  </li>
                </AnimatedSection>
              ))}
            </ul>

            <AnimatedSection delay={400}>
              <Link
                href="/vetting-lab"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore our vetting process
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
