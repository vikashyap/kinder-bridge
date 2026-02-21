"use client"

import {
  ShieldCheck,
  Fingerprint,
  FileText,
  Languages,
  Star,
  Lock,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const dossierFields = [
  { label: "Full Legal Name", value: "Maria S. ********" },
  { label: "Nationality", value: "Philippines" },
  { label: "Date of Birth", value: "** / ** / 1992" },
  { label: "Passport Number", value: "P****8721" },
]

const dossierBadges = [
  { icon: Fingerprint, label: "ID Verified" },
  { icon: ShieldCheck, label: "Police Cleared" },
  { icon: Languages, label: "English C1" },
  { icon: Star, label: "Top Rated" },
]

export function SampleDossier() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: description */}
          <div className="flex flex-col gap-6">
            <AnimatedSection>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                What you receive
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <h2 className="max-w-md text-balance font-serif text-4xl font-semibold text-foreground md:text-5xl">
                {"The Full Dossier"}
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                {"When you pay the \u20AC250 Consultancy Fee, you don\u2019t get a name and phone number. You receive a complete, verified professional file \u2014 everything you need to hire with confidence."}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <ul className="flex flex-col gap-3">
                {[
                  "Verified identity documents (Passport / National ID)",
                  "Official Police Character Certificate",
                  "Professional references (contacted & confirmed)",
                  'Country-specific "Legal Hiring 1-Pager"',
                  "Caregiver contact details (phone, email, WhatsApp)",
                  "Language proficiency assessment results",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          {/* Right: visual mock dossier */}
          <AnimatedSection delay={200}>
            <div className="relative mx-auto max-w-md">
              {/* Blurred background layer for depth */}
              <div className="absolute inset-4 rounded-3xl bg-primary/10 blur-2xl" />

              {/* Dossier card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                {/* Header with gold accent */}
                <div className="flex items-center justify-between border-b border-border bg-secondary px-8 py-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <div>
                      <p className="font-serif text-lg font-bold text-foreground">
                        Caregiver Dossier
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Kindred Bridge Verified Document
                      </p>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-6 p-8">
                  {/* Profile section - blurred for privacy */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                      <div className="h-10 w-10 rounded-full bg-muted-foreground/20" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-serif text-lg font-semibold text-foreground">
                        Maria S. ********
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Professional Nanny &bull; 6 years experience
                      </p>
                    </div>
                  </div>

                  {/* Badges row */}
                  <div className="flex flex-wrap gap-2">
                    {dossierBadges.map((badge) => (
                      <div
                        key={badge.label}
                        className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5"
                      >
                        <badge.icon className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-semibold text-primary">
                          {badge.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Data fields - partially redacted */}
                  <div className="grid grid-cols-2 gap-4">
                    {dossierFields.map((field) => (
                      <div key={field.label} className="flex flex-col gap-1">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {field.label}
                        </p>
                        <p className="text-sm font-semibold text-foreground">
                          {field.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Redacted documents section */}
                  <div className="flex flex-col gap-3 rounded-2xl bg-secondary p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Attached Documents
                    </p>
                    {[
                      "Passport_Scan_Verified.pdf",
                      "Police_Clearance_PH.pdf",
                      "References_Verified.pdf",
                    ].map((doc) => (
                      <div
                        key={doc}
                        className="flex items-center gap-3 rounded-xl bg-card p-3"
                      >
                        <FileText className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-xs text-foreground blur-[2px]">
                          {doc}
                        </span>
                        <Lock className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer seal */}
                <div className="flex items-center justify-center gap-2 border-t border-border bg-secondary px-8 py-4">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                    Verified &amp; Sealed by Kindred Bridge
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
