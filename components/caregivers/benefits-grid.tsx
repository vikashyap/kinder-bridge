"use client"

import {
  Banknote,
  CreditCard,
  FileText,
  Shield,
  Globe,
  TrendingUp,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const benefits = [
  {
    icon: Banknote,
    title: "Get Paid \u20AC8 Per Interview",
    description:
      "Get paid \u20AC8 even if you aren\u2019t hired \u2014 we respect your time. Unlike Care.com or Betreut.de, your expertise is compensated from the very first call.",
  },
  {
    icon: CreditCard,
    title: "Direct Bank Link",
    description:
      "Payments are sent directly to your Revolut, N26, or local bank account. No delays, no intermediaries.",
  },
  {
    icon: FileText,
    title: "Professional Dossier",
    description:
      "We build a verified professional portfolio for you, including your Digital Character Certificate and qualifications.",
  },
  {
    icon: Shield,
    title: "Protected Conversations",
    description:
      "Our manager is present on every video call. You never face uncomfortable situations alone.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Connect with families in Berlin, Dubai, Bangkok, and beyond. Your skills have no borders.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Build a reputation on the platform. Top-rated caregivers get priority matching and premium opportunities.",
  },
]

export function BenefitsGrid() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Your benefits
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Built for Professionals Like You
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              We believe caregivers are the backbone of our platform. Every
              feature is designed with your dignity and professional growth in
              mind.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.title} delay={i * 100}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
