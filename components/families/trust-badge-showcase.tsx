"use client"

import {
  ShieldCheck,
  Fingerprint,
  BadgeCheck,
  Languages,
  GraduationCap,
  HeartPulse,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const badges = [
  {
    icon: Fingerprint,
    label: "Identity Verified",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    label: "Criminal Record Cleared",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Languages,
    label: "English Proficiency: C1",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    label: "Childcare Certified",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: HeartPulse,
    label: "First Aid Trained",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BadgeCheck,
    label: "References Verified",
    color: "bg-primary/10 text-primary",
  },
]

export function TrustBadgeShowcase() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Sample certificate */}
          <AnimatedSection>
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    Digital Character Certificate
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Sample Verification Badge
                  </p>
                </div>
              </div>

              <div className="mb-6 rounded-2xl bg-secondary p-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Full Name</span>
                    <span className="text-sm font-medium text-card-foreground">
                      Maria Santos
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Nationality</span>
                    <span className="text-sm font-medium text-card-foreground">
                      Portuguese
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">ID Verification</span>
                    <span className="text-sm font-medium text-primary">
                      Passport Scanned
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Police Clearance</span>
                    <span className="text-sm font-medium text-primary">
                      Cleared
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {badges.slice(0, 4).map((badge) => (
                  <div
                    key={badge.label}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 ${badge.color}`}
                  >
                    <badge.icon className="h-3.5 w-3.5" />
                    <span className="text-xs font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Description */}
          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
                Trust badges
              </p>
              <h2 className="max-w-lg text-balance font-serif text-4xl font-semibold text-foreground">
                Every Profile Tells a Verified Story
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Our Digital Character Certificate is more than a badge. It is a
                comprehensive verification that parents can trust. Each badge
                represents a real check performed by our team or automated
                systems.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, i) => (
                <AnimatedSection key={badge.label} delay={150 + i * 50}>
                  <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/30">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${badge.color}`}>
                      <badge.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-card-foreground">
                      {badge.label}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
