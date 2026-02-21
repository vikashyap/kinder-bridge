"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"
import { Star } from "lucide-react"

export function CaregiversHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(107,143,113,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[500px]">
              <Image
                src="/images/caregiver-portrait.jpg"
                alt="A professional caregiver in a modern workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Rating card overlay */}
              <div className="absolute bottom-6 left-6 glass rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    Elite Network Member
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                For Caregivers
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="max-w-lg text-balance font-serif text-5xl font-semibold leading-tight text-foreground md:text-6xl">
                Work with Dignity
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                Join a platform that values you as a professional. Get
                compensated for every interview, build a verified dossier, and
                connect with families who respect your skills.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-primary/5 p-8">
                {/* Decorative accent */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10" />
                <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary">
                    <span className="font-serif text-2xl font-bold text-primary-foreground">
                      {"\u20AC8"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-serif text-xl font-bold text-foreground">
                      Per Interview Reward
                    </p>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {"Get paid \u20AC8 even if you aren\u2019t hired \u2014 we respect your time. Unlike other platforms, your expertise is valued from the very first call."}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
