"use client"

import { ScanFace, ShieldCheck, Play, CheckCircle2 } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const layers = [
  {
    icon: ScanFace,
    title: "ID Scan",
    subtitle: "Stripe Identity API",
    description:
      "Bank-grade AI scans the caregiver's Passport or National ID. We extract biometric data, validate document authenticity, and run liveness detection to prevent fraud.",
    checks: [
      "OCR data extraction",
      "Biometric facial match",
      "Anti-spoofing liveness",
      "Hologram verification",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Police Clearance",
    subtitle: "Government Seal Verified",
    description:
      "An official police character certificate is obtained from the caregiver's home country. We digitize it, verify its seal, and store it securely in their profile for families to access.",
    checks: [
      "Criminal record database",
      "International warrant check",
      "Certificate authenticity",
      "Digital seal verification",
    ],
  },
  {
    icon: Play,
    title: "Video References",
    subtitle: "Manually Audited",
    description:
      "Our video references are manually audited for authenticity. We cross-verify the parent's identity before their video is allowed on our platform. This creates a circle of trust that protects everyone.",
    checks: [
      "Parent identity verified",
      "Manual content review",
      "Cross-referenced employers",
      "Tamper-proof storage",
    ],
    highlighted: true,
  },
]

export function MultiLayerVerification() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Triple-layer security
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Multi-Layer Verification
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Three independent verification systems working together to create
              an unbreakable chain of trust.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <AnimatedSection key={layer.title} delay={i * 150}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 transition-all hover:shadow-lg ${
                  layer.highlighted
                    ? "border-amber-400/50 bg-amber-50/50"
                    : "border-border bg-card"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                    layer.highlighted ? "bg-amber-400" : "bg-primary"
                  }`}
                >
                  <layer.icon
                    className={`h-7 w-7 ${
                      layer.highlighted
                        ? "text-card"
                        : "text-primary-foreground"
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {layer.title}
                </h3>
                <p
                  className={`mt-1 text-xs font-medium uppercase tracking-wider ${
                    layer.highlighted
                      ? "text-amber-700"
                      : "text-muted-foreground"
                  }`}
                >
                  {layer.subtitle}
                </p>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {layer.description}
                </p>

                {/* Checks */}
                <div className="mt-6 flex flex-col gap-2.5">
                  {layer.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 ${
                          layer.highlighted
                            ? "text-amber-600"
                            : "text-primary"
                        }`}
                      />
                      <span className="text-sm text-foreground">{check}</span>
                    </div>
                  ))}
                </div>

                {/* Highlighted badge for video */}
                {layer.highlighted && (
                  <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-amber-400/20 px-4 py-2">
                    <Play className="h-4 w-4 text-amber-700" />
                    <span className="text-xs font-semibold text-amber-800">
                      Circle of Trust
                    </span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
