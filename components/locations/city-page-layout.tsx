"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Users,
  Video,
  Globe,
  CheckCircle2,
  Heart,
  Baby,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface CityData {
  name: string
  slug: string
  country: string
  image: string
  heroTagline: string
  heroDescription: string
  stats: { label: string; value: string }[]
  neighborhoods: string[]
  services: string[]
  localInsight: string
  testimonial: {
    quote: string
    name: string
    role: string
  }
}

export function CityPageLayout({ city }: { city: CityData }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={city.image}
            alt={`${city.name} skyline`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary-foreground" />
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                {city.name}, {city.country}
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              {city.heroTagline}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80">
              {city.heroDescription}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/locations/${city.slug}/profiles`}
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
              >
                Find a Caregiver in {city.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/for-caregivers"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 px-8 py-4 text-base font-medium text-white transition-all hover:border-white/40"
              >
                Apply as a Caregiver
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-card py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {city.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <p className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services we provide */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <div className="flex flex-col gap-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Services in {city.name}
                </p>
                <h2 className="text-balance font-serif text-4xl font-semibold text-foreground">
                  What We Offer in Your City
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  {city.localInsight}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid gap-4 sm:grid-cols-2">
                {city.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Neighborhoods We Serve
              </h2>
              <p className="mt-4 text-muted-foreground">
                Caregivers are matched based on proximity and local familiarity.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {city.neighborhoods.map((n) => (
                <div
                  key={n}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{n}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works (condensed) */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
              How It Works in {city.name}
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                step: "01",
                title: "Browse Local Profiles",
                description: `View verified caregivers based in ${city.name}. Filter by language, experience, and service type.`,
              },
              {
                icon: Video,
                step: "02",
                title: "Book a Moderated Call",
                description: `A \u20AC30 video call moderated by our ${city.name} team. The caregiver earns \u20AC8 for their time.`,
              },
              {
                icon: ShieldCheck,
                step: "03",
                title: "Get the Full Dossier",
                description:
                  "Receive their police clearance, verified ID, references, and a legal hiring guide for your country.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 150}>
                <div className="relative flex flex-col gap-4 rounded-3xl border border-border bg-card p-8">
                  <span className="font-serif text-5xl font-bold text-secondary">
                    {item.step}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center md:p-14">
              <div className="flex justify-center gap-3">
                <Baby className="h-5 w-5 text-primary" />
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <blockquote className="mt-6 text-pretty font-serif text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
                {`\u201C${city.testimonial.quote}\u201D`}
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-foreground">{city.testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{city.testimonial.role}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center md:px-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary-foreground/5" />

              <div className="relative flex flex-col items-center gap-8">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary-foreground/60" />
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary-foreground/60">
                    {city.name}, {city.country}
                  </span>
                </div>
                <h2 className="max-w-2xl text-balance font-serif text-4xl font-semibold text-primary-foreground md:text-5xl">
                  Ready to Find Trusted Care in {city.name}?
                </h2>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={`/locations/${city.slug}/profiles`}
                    className="group flex items-center justify-center gap-2 rounded-2xl bg-primary-foreground px-8 py-4 text-base font-medium text-primary transition-all hover:opacity-90"
                  >
                    Find a Caregiver
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/for-caregivers"
                    className="flex items-center justify-center gap-2 rounded-2xl border-2 border-primary-foreground/20 px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:border-primary-foreground/40"
                  >
                    Join as a Caregiver
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
