import Link from "next/link"
import { Heart } from "lucide-react"

const footerLinks = {
  Platform: [
    { label: "For Families", href: "/for-families" },
    { label: "For Caregivers", href: "/for-caregivers" },
    { label: "Trust & Vetting", href: "/vetting-lab" },
  ],
  Locations: [
    { label: "Berlin", href: "/locations/berlin" },
    { label: "Dubai", href: "/locations/dubai" },
    { label: "Bangkok", href: "/locations/bangkok" },
  ],
  Support: [
    { label: "FAQ", href: "/vetting-lab#faq" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Kindred Bridge
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              The bridge between trust and care. Connecting families with
              verified, professional caregivers worldwide.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kindred Bridge. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="h-4 w-4 text-primary" /> for families worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
