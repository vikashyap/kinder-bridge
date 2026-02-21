"use client"

import { AnimatedSection } from "@/components/animated-section"
import { ShieldCheck, Users, Globe, Award } from "lucide-react"

const stats = [
  { icon: ShieldCheck, value: "100%", label: "Verified Profiles" },
  { icon: Users, value: "2,000+", label: "Families Served" },
  { icon: Globe, value: "30+", label: "Countries Covered" },
  { icon: Award, value: "4.9/5", label: "Trust Rating" },
]

export function TrustStrip() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <AnimatedSection
                  key={stat.label}
                  delay={i * 100}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
