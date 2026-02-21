"use client"

import {
  ShieldCheck,
  Globe,
  Star,
  Play,
  Upload,
  CheckCircle2,
  MapPin,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function ProfileLevelUp() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Mock profile card */}
          <AnimatedSection>
            <div className="relative mx-auto max-w-sm">
              {/* Profile card */}
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
                {/* Header banner */}
                <div className="relative h-28 bg-gradient-to-r from-primary/80 to-primary/50">
                  <div className="absolute -bottom-10 left-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-card bg-secondary">
                      <span className="font-serif text-2xl font-bold text-foreground">
                        MA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-14">
                  <h3 className="font-serif text-xl font-semibold text-card-foreground">
                    Maria A.
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    Manila, Philippines
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Professional nanny with 8 years of experience. Certified in
                    First Aid & Early Childhood Development.
                  </p>

                  {/* Badges row */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      ID Verified
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Police Cleared
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <Globe className="h-3.5 w-3.5" />
                      English B2
                    </span>
                  </div>

                  {/* VIDEO REFERENCE BADGE - Gold highlighted */}
                  <div className="mt-4 relative">
                    {/* Gold ring highlight */}
                    <div className="absolute -inset-1.5 rounded-2xl border-2 border-dashed border-amber-400/60" />
                    <div className="relative flex items-center gap-3 rounded-xl bg-amber-50 p-3 ring-2 ring-amber-400">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400">
                        <Play className="ml-0.5 h-5 w-5 text-card" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-amber-900">
                          Video Reference
                        </p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-secondary p-2.5 text-center">
                      <p className="font-serif text-lg font-bold text-foreground">
                        8yr
                      </p>
                      <p className="text-xs text-muted-foreground">Exp.</p>
                    </div>
                    <div className="rounded-xl bg-secondary p-2.5 text-center">
                      <p className="font-serif text-lg font-bold text-foreground">
                        12
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Families
                      </p>
                    </div>
                    <div className="rounded-xl bg-secondary p-2.5 text-center">
                      <p className="font-serif text-lg font-bold text-foreground">
                        5x
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Faster
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - copy */}
          <div className="flex flex-col gap-6">
            <AnimatedSection delay={100}>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                Your Competitive Edge
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h2 className="max-w-md text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Level Up Your Profile
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                Caregivers with video references are{" "}
                <strong className="font-semibold text-foreground">
                  5x more likely to be matched within their first week.
                </strong>{" "}
                A video reference is your ticket to premium families in Berlin,
                Dubai, Vienna, and beyond.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
                Ask a previous employer to record a short video about your
                work. We verify their identity, and your profile gets the
                coveted gold Video Reference badge &mdash; the single most
                powerful trust signal on the platform.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={500}>
              <button
                type="button"
                className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Upload className="h-4 w-4" />
                Upload Your First Reference
              </button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
