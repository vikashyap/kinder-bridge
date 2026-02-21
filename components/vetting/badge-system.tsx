"use client"

import {
  Fingerprint,
  ShieldCheck,
  Languages,
  GraduationCap,
  HeartPulse,
  BadgeCheck,
  Star,
  Clock,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const badgeTiers = [
  {
    tier: "Core Badges",
    description: "Required for all caregivers on the platform",
    badges: [
      {
        icon: Fingerprint,
        name: "Verified Identity",
        description: "Government-issued ID scanned and verified through AI",
      },
      {
        icon: ShieldCheck,
        name: "Criminal Record Cleared",
        description: "Official police clearance obtained and validated",
      },
      {
        icon: BadgeCheck,
        name: "References Verified",
        description: "At least 2 professional references contacted and confirmed",
      },
    ],
  },
  {
    tier: "Professional Badges",
    description: "Earned through qualifications and assessments",
    badges: [
      {
        icon: Languages,
        name: "English Proficiency",
        description: "Assessed at B2, C1, or C2 level through our testing partner",
      },
      {
        icon: GraduationCap,
        name: "Childcare Certified",
        description: "Holds recognized childcare or early education qualification",
      },
      {
        icon: HeartPulse,
        name: "First Aid Trained",
        description: "Current first aid and CPR certification on file",
      },
    ],
  },
  {
    tier: "Elite Badges",
    description: "Awarded based on platform performance",
    badges: [
      {
        icon: Star,
        name: "Top Rated",
        description: "Consistently receives 5-star ratings from matched families",
      },
      {
        icon: Clock,
        name: "Veteran Caregiver",
        description: "Has been active on the platform for over 12 months",
      },
    ],
  },
]

export function BadgeSystem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Badge system
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Trust at a Glance
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Our badge system makes it easy to understand a caregiver's
              qualifications, verification status, and platform reputation
              instantly.
            </p>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-12">
          {badgeTiers.map((tier, tierIndex) => (
            <AnimatedSection key={tier.tier} delay={tierIndex * 100}>
              <div>
                <div className="mb-6 flex flex-col gap-1">
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {tier.badges.map((badge, i) => (
                    <AnimatedSection
                      key={badge.name}
                      delay={tierIndex * 100 + i * 80}
                    >
                      <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                            <badge.icon className="h-6 w-6 text-primary" />
                          </div>
                          <h4 className="font-serif text-lg font-semibold text-card-foreground">
                            {badge.name}
                          </h4>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {badge.description}
                        </p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
