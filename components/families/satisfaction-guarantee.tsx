"use client"

import {
  ShieldCheck,
  RefreshCw,
  PhoneOff,
  Lock,
  CheckCircle2,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const guarantees = [
  {
    icon: ShieldCheck,
    title: "No-Show Protection",
    description:
      "If your selected nanny or companion fails to start their first day as agreed, you receive a full refund of the \u20AC250 Consultancy Fee or a priority replacement for free.",
  },
  {
    icon: RefreshCw,
    title: "30-Day Fit Guarantee",
    description:
      "Not the right chemistry? If the match doesn\u2019t work out within the first 30 days, we restart your search immediately at zero extra cost.",
  },
  {
    icon: PhoneOff,
    title: "The \u20AC30 Call Guarantee",
    description:
      "If a caregiver misses their scheduled video interview, your \u20AC30 is refunded instantly to your original payment method.",
  },
]

export function SatisfactionGuarantee() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Giant hero-sized guarantee banner */}
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 md:px-16 md:py-28 lg:py-36">
            {/* Decorative concentric shield rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[500px] w-[500px] rounded-full border border-primary-foreground/[0.04] md:h-[700px] md:w-[700px]" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[350px] w-[350px] rounded-full border border-primary-foreground/[0.06] md:h-[500px] md:w-[500px]" />
            </div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[200px] w-[200px] rounded-full border border-primary-foreground/[0.08] md:h-[300px] md:w-[300px]" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
              {/* Giant shield icon with vault-like ring */}
              <div className="relative">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary-foreground/20 bg-primary-foreground/10 md:h-36 md:w-36">
                  <ShieldCheck className="h-14 w-14 text-primary-foreground md:h-18 md:w-18" />
                </div>
                {/* Lock accent in corner */}
                <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground shadow-lg md:h-12 md:w-12">
                  <Lock className="h-5 w-5 text-primary md:h-6 md:w-6" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                  Our Promise to Every Family
                </p>
                <h2 className="text-balance font-serif text-4xl font-bold text-primary-foreground md:text-6xl lg:text-7xl">
                  100% Money-Back Guarantee
                </h2>
              </div>

              <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
                {"Your \u20AC250 sits in a safe box until you\u2019re satisfied. We don\u2019t just sell contact details \u2014 we deliver successful connections. If we don\u2019t, you pay nothing."}
              </p>

              {/* Seal of Trust badge - prominent */}
              <div className="mt-2 inline-flex items-center gap-3 rounded-full border-2 border-primary-foreground/25 bg-primary-foreground/10 px-8 py-3.5">
                <CheckCircle2 className="h-6 w-6 text-primary-foreground" />
                <span className="text-base font-bold tracking-wide text-primary-foreground">
                  Kindred Bridge Seal of Trust
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Three guarantee cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {guarantees.map((item, i) => (
            <AnimatedSection key={item.title} delay={100 + i * 100}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Fine print */}
        <AnimatedSection delay={400}>
          <p className="mt-10 text-center text-xs leading-relaxed text-muted-foreground">
            Refunds are valid if the caregiver fails to meet the terms of the agreed match. Refunds do not apply if the
            family decides they no longer need a caregiver after the match has been successfully made.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
