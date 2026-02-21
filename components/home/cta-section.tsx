"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function CtaSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center md:px-16">
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary/10" />

            <div className="relative flex flex-col items-center gap-8">
              <h2 className="max-w-2xl text-balance font-serif text-4xl font-semibold text-background md:text-5xl">
                Ready to Find Your Perfect Match?
              </h2>
              <p className="max-w-lg text-pretty text-lg text-background/70">
                Whether you are a family seeking peace of mind or a caregiver
                ready to join an elite network, we are here for you.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/for-families"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
                >
                  Find a Caregiver
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/for-caregivers"
                  className="flex items-center justify-center gap-2 rounded-2xl border-2 border-background/20 px-8 py-4 text-base font-medium text-background transition-all hover:border-background/40"
                >
                  Apply as a Caregiver
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
