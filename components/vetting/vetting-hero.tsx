"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Lock } from "lucide-react"

export function VettingHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(107,143,113,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <Lock className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">
                  Multi-Layer Verification
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="max-w-lg text-balance font-serif text-5xl font-semibold leading-tight text-foreground md:text-6xl">
                The Vetting Lab
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                A deep dive into how we verify every caregiver on our platform.
                From AI-powered identity scanning to official police clearance
                checks, we leave nothing to chance.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200}>
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[500px]">
              <Image
                src="/images/verification-docs.jpg"
                alt="Verification documents and digital identity scanning process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
