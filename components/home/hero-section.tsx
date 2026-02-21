"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Baby, Heart, Users } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,143,113,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(107,143,113,0.05),transparent_50%)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row lg:px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-primary">
                Trusted by 2,000+ families globally
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="max-w-2xl text-balance font-serif text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              The Only Nanny &amp; Companion You Will Ever Trust
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Baby, label: "Nannies & Mannies" },
                { icon: Heart, label: "Senior Companions" },
                { icon: Users, label: "Household Support" },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
                >
                  <cat.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {cat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              {"Whether you\u2019re searching for a nanny for your children or a companion for your aging parents \u2014 you\u2019re the Sandwich Generation, and we built this for you. Every caregiver is AI-verified, police-cleared, and matched through moderated video calls."}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/for-families"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                I need a Companion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-caregivers"
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/20 bg-background px-8 py-4 text-base font-medium text-foreground transition-all hover:border-primary/40 hover:bg-secondary"
              >
                I want to provide Care
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Right image */}
        <AnimatedSection delay={200} className="flex-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/5" />
            <div className="relative h-[500px] overflow-hidden rounded-3xl lg:h-[600px]">
              <Image
                src="/images/hero-family.jpg"
                alt="A caregiver engaging warmly with a child in a modern, bright living room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Glassmorphism overlay card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                    <span className="text-sm font-bold text-primary-foreground">98%</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Match satisfaction</p>
                    <p className="text-xs text-muted-foreground">
                      Based on verified family reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
