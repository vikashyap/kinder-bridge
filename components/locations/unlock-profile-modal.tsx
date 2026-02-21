"use client"

import { ShieldCheck, Lock, Video, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

interface UnlockProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  caregiverName?: string
}

export function UnlockProfileModal({
  open,
  onOpenChange,
  caregiverName,
}: UnlockProfileModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl border-0 bg-card p-0 shadow-2xl sm:rounded-3xl [&>button]:hidden">
        {/* Top accent bar */}
        <div className="rounded-t-3xl bg-primary px-8 pt-10 pb-8 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary-foreground/20 bg-primary-foreground/10">
            <ShieldCheck className="h-8 w-8 text-primary-foreground" />
          </div>
          <DialogTitle className="text-balance font-serif text-2xl font-bold text-primary-foreground">
            Unlock This Professional Profile
          </DialogTitle>
        </div>

        <div className="flex flex-col gap-6 px-8 pt-6 pb-8">
          <p className="text-center text-pretty leading-relaxed text-muted-foreground">
            To protect our families and caregivers, full bios and video
            references are reserved for verified members. Pay a one-time
            booking fee to unlock the full library and schedule your moderated
            interview.
          </p>

          {/* What you get */}
          <div className="flex flex-col gap-3 rounded-2xl bg-secondary/70 px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {"What\u2019s included"}
            </p>
            {[
              { icon: Video, text: "Watch verified video references" },
              {
                icon: ShieldCheck,
                text: "View full bio, skills & certifications",
              },
              {
                icon: Lock,
                text: "30-min moderated video interview",
              },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/for-families"
            className="group flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-primary/25 hover:shadow-xl"
          >
            {"Book Interview & Unlock Profiles \u2014 \u20AC30"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Maybe later
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
