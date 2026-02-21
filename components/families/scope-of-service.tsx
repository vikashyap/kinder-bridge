"use client"

import { CheckCircle2, XCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const weProvide = [
  "Companionship: reading, games, conversation, and mental stimulation",
  "Mobility support: walks, doctor visits, cafe outings",
  "Household help: grocery shopping, cooking, and light cleaning",
  "Organization: sorting mail, appointment reminders, and scheduling",
  "Medication reminders (reminding them to take it, not administering it)",
  "A watchful, caring presence to ensure safety at home",
]

const weDoNot = [
  "Medical nursing care (bandages, injections, or IVs)",
  "Hygiene care (showering, bathing, or toilet assistance)",
  "Medication administration (physically giving pills or preparing pill boxes)",
  "Night nursing or professional medical monitoring",
]

export function ScopeOfService() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Senior Companionship
            </p>
            <h2 className="text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
              Scope of Service
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Our companions are Everyday Companions (Alltagsbegleiter), not
              nurses. Here is exactly what they can and cannot do.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Green column: What We Provide */}
          <AnimatedSection delay={100}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-primary/30 bg-primary/5 p-8 lg:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  What We Provide
                </h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Everyday lifestyle support to keep your loved ones independent,
                social, and happy at home.
              </p>
              <ul className="flex flex-col gap-4">
                {weProvide.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Red column: Medical Disclaimer */}
          <AnimatedSection delay={200}>
            <div className="flex h-full flex-col rounded-3xl border-2 border-destructive/20 bg-destructive/5 p-8 lg:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive">
                  <XCircle className="h-5 w-5 text-destructive-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Medical Disclaimer
                </h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                We are not a medical nursing agency. The following activities
                require a licensed nurse (Pflegekraft) and are strictly outside
                our scope.
              </p>
              <ul className="flex flex-col gap-4">
                {weDoNot.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Legal note */}
              <div className="mt-8 rounded-2xl border border-destructive/15 bg-background p-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Legal notice:
                  </span>{" "}
                  Kindred Bridge is a consultancy and matchmaking platform. All
                  companions operate as independent Everyday Companions
                  (Alltagsbegleiter) under applicable local law. Families hire
                  caregivers directly.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
