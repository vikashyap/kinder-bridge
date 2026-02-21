"use client"

import {
  Heart,
  Home,
  CalendarCheck,
  ShieldCheck,
  Coffee,
  BookOpen,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const benefits = [
  {
    icon: Coffee,
    title: "Companionship & Mental Stimulation",
    description:
      "Reading, conversation, games, and daily engagement to keep your loved ones sharp, social, and happy.",
  },
  {
    icon: Home,
    title: "Household Support",
    description:
      "Grocery shopping, cooking healthy meals, light cleaning, sorting mail, and keeping the home organized.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Accompaniment",
    description:
      "Accompanying your parent to the doctor, pharmacy, or a cafe. Mobility support for walks and daily outings.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Safety & Peace of Mind",
    description:
      "Every companion is identity-verified and police-cleared. A watchful, caring presence so you never have to worry.",
  },
]

export function SeniorCareSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left: headline and context */}
          <div className="flex flex-col gap-8">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-primary">
                  Senior Companionship
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h2 className="max-w-lg text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
                Why Senior Companionship?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                {"You\u2019re the Sandwich Generation \u2014 caring for your children and your aging parents at the same time. We connect you with verified Everyday Companions (Alltagsbegleiter) who provide the support your parents need to stay independent, safe, and happy at home."}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <BookOpen className="h-8 w-8 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-card-foreground">
                    Not a nursing agency
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Our companions provide lifestyle support, not medical care. They help your loved ones live well, while nurses handle clinical needs.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: benefit cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <AnimatedSection key={item.title} delay={100 + i * 100}>
                <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
