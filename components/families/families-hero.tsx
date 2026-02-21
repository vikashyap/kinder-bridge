"use client"

import Image from "next/image"
import { Baby, Heart } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function FamiliesHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(107,143,113,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                For Families
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="max-w-lg text-balance font-serif text-5xl font-semibold leading-tight text-foreground md:text-6xl">
                Nannies, Mannies &amp; Senior Companions
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                  <Baby className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Childcare</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Senior Companionship</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                {"You\u2019re the Sandwich Generation \u2014 caring for your children and your aging parents. We built Kindred Bridge so you never have to choose. Every caregiver is scanned, verified, and police-cleared before you ever see their profile."}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary/10"
                    >
                      <span className="text-xs font-medium text-primary">
                        {String.fromCharCode(64 + i)}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">2,000+</span>{" "}
                  families trust us
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={200}>
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[500px]">
              <Image
                src="/images/hero-family.jpg"
                alt="A family enjoying quality time with their caregiver"
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
