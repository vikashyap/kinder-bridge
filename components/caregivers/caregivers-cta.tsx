"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function CaregiversCta() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center md:px-16">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-foreground/10" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary-foreground/5" />

            <div className="relative flex flex-col items-center gap-8">
              <h2 className="max-w-2xl text-balance font-serif text-4xl font-semibold text-primary-foreground md:text-5xl">
                Ready to Join the Elite Network?
              </h2>
              <p className="max-w-lg text-pretty text-lg text-primary-foreground/80">
                Start building your verified professional profile today. It
                takes less than 15 minutes to begin your journey.
              </p>
              <Link
                href="#"
                className="group flex items-center gap-2 rounded-2xl bg-background px-8 py-4 text-base font-medium text-foreground transition-all hover:opacity-90"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
