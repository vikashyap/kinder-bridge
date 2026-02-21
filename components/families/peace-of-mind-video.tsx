"use client"

import { useState } from "react"
import {
  Play,
  Lock,
  CheckCircle2,
  ShieldCheck,
  Eye,
  EyeOff,
  Users,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { PrivacyShieldModal } from "@/components/privacy-shield-modal"

const proofPoints = [
  "Authentic feedback from real employers",
  "Verified by our senior managers",
  "Zero-risk privacy for the referees",
]

const privacyPillars = [
  {
    icon: EyeOff,
    title: "Locked Until Booking",
    description:
      "References stay hidden until a family commits to a moderated video call, preventing casual browsing.",
  },
  {
    icon: Eye,
    title: "Verified Viewers Only",
    description:
      "Only families who pass our own verification can view caregiver references. No anonymous access.",
  },
  {
    icon: Users,
    title: "Mutual Protection",
    description:
      "Referee identities are cross-verified. Caregivers and families are both shielded by our privacy framework.",
  },
]

export function PeaceOfMindVideo() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - heading */}
            <div className="flex flex-col gap-6">
              <AnimatedSection>
                <p className="text-sm font-medium uppercase tracking-widest text-primary">
                  Video References
                </p>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <h2 className="max-w-md text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
                  {"We don\u2019t just vet; we verify."}
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
                  Every caregiver on Kindred Bridge can be backed by real video
                  references from families they have worked with. These are not
                  text reviews &mdash; these are face-to-camera testimonials
                  from verified parents.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <div className="flex flex-col gap-3 pt-2">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - featured video player */}
            <AnimatedSection delay={200}>
              <div className="relative overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/3] w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6B8F71]/30 via-secondary to-[#8B7355]/20" />
                  <div className="absolute inset-0 bg-[#2C2C2C]/20" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                    <div className="h-1 w-full rounded-full bg-card/10">
                      <div className="h-1 w-1/3 rounded-full bg-card/40" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                    <div className="glass rounded-3xl px-10 py-8 text-center">
                      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-foreground/20 bg-card/80">
                        <Play className="ml-1 h-8 w-8 text-foreground" />
                      </div>
                      <p className="mb-2 font-serif text-lg font-semibold text-foreground">
                        Watch Full Reference
                      </p>
                      <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 hover:shadow-xl"
                      >
                        <Lock className="h-4 w-4" />
                        {"\u20AC30 Booking Required"}
                      </button>
                      <p className="mt-3 text-xs text-muted-foreground">
                        Preview available after moderated call booking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* A Private Community of Trust */}
          <AnimatedSection delay={400}>
            <div className="mt-20 rounded-3xl border border-border bg-card p-10 md:p-14">
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
                    A Private Community of Trust
                  </h3>
                  <p className="mx-auto max-w-xl text-pretty leading-relaxed text-muted-foreground">
                    {"Video references on Kindred Bridge are not public content. They exist inside a privacy-first vault, visible only to verified families who have booked a moderated call. This protects everyone \u2014 the caregiver, the referee, and your family."}
                  </p>
                </div>
                <div className="grid w-full gap-6 pt-4 md:grid-cols-3">
                  {privacyPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="flex flex-col items-center gap-3 rounded-2xl bg-secondary/50 p-6"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                        <pillar.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="font-serif text-base font-semibold text-foreground">
                        {pillar.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <PrivacyShieldModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  )
}
