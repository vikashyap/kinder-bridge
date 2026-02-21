"use client"

import {
  ScanFace,
  FileSearch,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const stages = [
  {
    icon: ScanFace,
    title: "Document Upload & OCR",
    description:
      "Caregivers upload their government-issued ID (Passport, Emirates ID, or Thai ID). Our AI extracts data using optical character recognition and cross-references it with the information provided during registration.",
    checks: [
      "Photo extraction and comparison",
      "MRZ code validation",
      "Document expiry check",
      "Hologram/watermark detection",
    ],
  },
  {
    icon: FileSearch,
    title: "Liveness Detection",
    description:
      "A real-time selfie video is captured and analyzed using AI to ensure the person holding the ID is the same person in the document. This prevents identity fraud and impersonation.",
    checks: [
      "Facial biometric matching",
      "Anti-spoofing detection",
      "Real-time video analysis",
      "3D depth sensing",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Police Character Check",
    description:
      "We initiate an official police clearance request in the caregiver's country of origin. The resulting certificate is digitized and stored as part of their verified profile.",
    checks: [
      "Criminal record database query",
      "International warrant check",
      "Certificate authenticity verification",
      "Digital certificate issuance",
    ],
  },
]

export function IdScanBreakdown() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              The process
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              API-Based Identity Verification
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Our three-stage verification pipeline ensures every caregiver is
              exactly who they claim to be.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {stages.map((stage, i) => (
            <div key={stage.title}>
              <AnimatedSection delay={i * 150}>
                <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left */}
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary">
                          <stage.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Stage {i + 1}
                          </p>
                          <h3 className="font-serif text-2xl font-semibold text-card-foreground">
                            {stage.title}
                          </h3>
                        </div>
                      </div>
                      <p className="leading-relaxed text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>

                    {/* Right - checks */}
                    <div className="flex flex-col gap-3">
                      {stage.checks.map((check) => (
                        <div
                          key={check}
                          className="flex items-center gap-3 rounded-xl bg-secondary p-3"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-card-foreground">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <AnimatedSection delay={i * 150 + 75}>
                  <div className="flex justify-center py-4">
                    <ArrowDown className="h-6 w-6 text-primary/40" />
                  </div>
                </AnimatedSection>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
