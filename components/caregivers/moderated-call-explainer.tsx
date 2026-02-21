"use client"

import { CheckCircle2, ShieldCheck, Video, UserCheck } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const reasons = [
  {
    icon: ShieldCheck,
    text: "A trained Kindred Bridge manager moderates the entire call",
  },
  {
    icon: UserCheck,
    text: "You are introduced professionally to the family",
  },
  {
    icon: Video,
    text: "The call is structured with pre-approved questions",
  },
  {
    icon: CheckCircle2,
    text: "You receive \u20AC8 compensation regardless of the outcome",
  },
]

export function ModeratedCallExplainer() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Safety first
              </p>
              <h2 className="max-w-lg text-balance font-serif text-4xl font-semibold text-foreground">
                Why the Moderated Call is Safer for You
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Unlike other platforms where you are left alone with strangers,
                Kindred Bridge ensures every interaction is professional,
                structured, and safe. Our managers are trained to protect your
                interests.
              </p>
            </AnimatedSection>

            <div className="flex flex-col gap-4">
              {reasons.map((reason, i) => (
                <AnimatedSection key={reason.text} delay={150 + i * 80}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/30">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <reason.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-card-foreground">
                      {reason.text}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Visual illustration */}
          <AnimatedSection delay={200}>
            <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary" />
                <span className="text-sm font-medium text-card-foreground">
                  Live Moderated Session
                </span>
              </div>

              {/* Mock call interface */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 rounded-2xl bg-secondary p-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <span className="font-serif text-sm font-bold text-primary">
                      Family
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Johnson Family
                    </p>
                    <p className="text-xs text-muted-foreground">Berlin, Germany</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-secondary p-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <span className="font-serif text-sm font-bold text-primary">
                      You
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Caregiver Profile
                    </p>
                    <p className="text-xs text-muted-foreground">Verified Professional</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-primary/5 p-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
                    <span className="text-xs font-bold text-primary-foreground">
                      KB
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Kindred Bridge Manager
                    </p>
                    <p className="text-xs text-primary">Moderating this call</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-primary/5 p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Call duration: <span className="font-semibold text-foreground">30-45 min</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
