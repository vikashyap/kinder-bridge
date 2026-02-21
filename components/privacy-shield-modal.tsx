"use client"

import Link from "next/link"
import { ShieldCheck, Lock, CheckCircle2, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog"

interface PrivacyShieldModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const includes = [
  "Access to the full Video Reference Library",
  "15-minute moderated video call with the caregiver",
  "Our manager present throughout for your safety",
]

export function PrivacyShieldModal({
  open,
  onOpenChange,
}: PrivacyShieldModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        {/* Heavy blur overlay */}
        <DialogOverlay className="bg-black/40 backdrop-blur-md" />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 sm:max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[#FDFBF7] p-8 shadow-2xl md:p-10">
            {/* Close button */}
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Decorative rings */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary/[0.06]" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full border border-primary/[0.06]" />

            <div className="relative flex flex-col items-center gap-6 text-center">
              {/* Shield + Lock icon */}
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10">
                  <ShieldCheck className="h-10 w-10 text-primary" />
                </div>
                <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-md">
                  <Lock className="h-4 w-4 text-primary-foreground" />
                </div>
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-2">
                <DialogTitle className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  A Private Community of Trust
                </DialogTitle>
              </div>

              {/* Body */}
              <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
                At Kindred Bridge, we protect our families as fiercely as they
                protect their homes. The video references you see here are
                shared by parents who have personally experienced the care of
                our companions. To honor their privacy and ensure these stories
                are only seen by serious families, full video access is reserved
                for our verified members.
              </p>

              {/* Pricing badge */}
              <div className="rounded-2xl border border-border bg-secondary/60 px-6 py-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  One-time access includes
                </p>
                <div className="flex flex-col gap-2">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-left text-sm text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex w-full flex-col gap-3">
                <button
                  type="button"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25 hover:shadow-xl"
                >
                  <Lock className="h-4 w-4" />
                  {"Unlock & Book Interview \u2014 \u20AC30"}
                </button>

                <Link
                  href="/vetting-lab"
                  onClick={() => onOpenChange(false)}
                  className="inline-flex w-full items-center justify-center rounded-full border border-border bg-transparent px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Learn more about our Vetting Process
                </Link>
              </div>

              {/* Trust footnote */}
              <p className="text-xs text-muted-foreground">
                Your payment is protected by our 100% Money-Back Guarantee.
              </p>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}
