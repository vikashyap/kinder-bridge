"use client"

import {
  ScanFace,
  Video,
  ShieldCheck,
  Globe,
  Banknote,
  Heart,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const features = [
  {
    icon: ScanFace,
    title: "AI Identity Scan",
    description:
      "Passport, Emirates ID, and Thai ID scanning with liveness detection to ensure every profile is real.",
    span: "md:col-span-2",
  },
  {
    icon: Video,
    title: "Moderated Video Calls",
    description:
      "Our manager stays on the call to ensure safety, professionalism, and transparency for both parties.",
    span: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Police Character Verification",
    description:
      "Every caregiver receives a Digital Character Certificate based on official police clearance checks.",
    span: "md:col-span-1",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description:
      "From Berlin to Dubai to Bangkok. Our platform works across borders with local compliance built in.",
    span: "md:col-span-1",
  },
  {
    icon: Heart,
    title: "Senior Companionship",
    description:
      "Verified companions for your aging parents. Household help, appointment accompaniment, and a watchful, caring presence.",
    span: "md:col-span-1",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description:
      "Simple fees: a moderated video call for families and a match fee for the full dossier. No hidden costs.",
    span: "md:col-span-1",
  },
]

export function FeaturesBento() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Built on Trust, Powered by Technology
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Every feature is designed to create an unbreakable chain of trust
              between families and caregivers.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 100} className={feature.span}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
