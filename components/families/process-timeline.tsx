"use client"

import { Search, Video, FileCheck } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Verified Profiles",
    description:
      "Every caregiver profile includes scanned passports, Emirates ID, or Thai ID. Browse confidently knowing every identity has been digitally verified through our AI-powered scanning system.",
    detail: "Free to browse",
  },
  {
    number: "02",
    icon: Video,
    title: "Book a Moderated Video Call",
    description:
      "For just \u20AC30, schedule a video call with your chosen caregiver. Our trained manager stays on the call throughout, ensuring professionalism, asking the right questions, and protecting both parties.",
    detail: "\u20AC30 per call",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Receive the Full Dossier",
    description:
      "For a \u20AC250 match fee, receive the complete professional dossier including the Digital Character Certificate, police clearance, professional references, qualifications, and direct contact details.",
    detail: "\u20AC250 match fee",
  },
]

export function ProcessTimeline() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Three simple steps
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              From Search to Certainty
            </h2>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border lg:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 150}>
                <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-12">
                  {/* Number & icon */}
                  <div className="relative flex shrink-0 items-start gap-4 lg:w-48">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                      <step.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="lg:hidden">
                      <span className="font-serif text-sm text-muted-foreground">
                        Step {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-4 rounded-3xl border border-border bg-card p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="hidden font-serif text-sm text-muted-foreground lg:inline">
                        Step {step.number}
                      </span>
                      <div className="rounded-full bg-primary/10 px-3 py-1">
                        <span className="text-xs font-medium text-primary">
                          {step.detail}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                      {step.title}
                    </h3>
                    <p className="max-w-xl leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
