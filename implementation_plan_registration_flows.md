# Implementation Plan: Kindred Bridge Registration Flows

This plan outlines the steps to implement the "Family" and "Caregiver" registration paths, focusing on high-end aesthetics, psychological triggers, and frictionless authentication.

## 1. Directory Structure
Create the following new page routes:
- `app/register/family/step-1/page.tsx`
- `app/register/caregiver/step-1/page.tsx`

## 2. Flow A: Family Path (/register/family/step-1)
- **Layout**: 50/50 split-screen.
- **Visuals**:
    - Left side: High-quality blurred image (`/images/family-together.jpg`) with a subtle overlay.
    - Right side: Clean white form with generous padding and vertical centering.
- **Components**:
    - **Navigation**: Minimal header with 'Kindred Bridge' logo (linking back) and a 'Step 1 of 3' progress indicator using a Sage Green line.
    - **Headline**: Serif font, "Let’s find your perfect match."
    - **Authentication**: 3xl rounded buttons for Passkey (prioritized), Google, and Apple.
    - **Micro-copy**: Biometric security reassurance text.
    - **Fallback**: Minimalist 'Magic Link' email input.
    - **Interactivity**: 'Lift' and 'Glow' animations on button hover.

## 3. Flow B: Caregiver Path (/register/caregiver/step-1)
- **Layout**: Single-column "Focus Mode" (contained width, centered).
- **Visuals**: Ultra-clean professional aesthetic, lots of white space.
- **Components**:
    - **Navigation**: Full-width progress bar at the top (Step 1 of 5).
    - **Headline**: "Begin your Professional Application."
    - **Subtext**: Elite messaging (top 1% caregivers).
    - **Authentication**: High-priority social/biometric buttons.
    - **Trust Factor**: Small boxed section with a security icon.
    - **The "Hook"**: A side notification or non-intrusive toast: "Most caregivers complete this step in under 45 seconds."

## 4. Updates to Entry Page (/register/page.tsx)
- Update "Join as a Family" button link to `/register/family/step-1`.
- Update "Apply to Join" button link to `/register/caregiver/step-1`.

## 5. Technical Details
- **Styling**: Tailwind CSS (v4) following the design tokens in `globals.css` (Warm Cream `#FDFBF7`, Sage Green `#8BA889`).
- **Icons**: Lucide-react (Fingerprint, Google, Apple, Mail, Shield).
- **Animations**: Framer Motion or simple CSS transitions for "Anti-gravity" lift effects.

---
**Next Step**: Once approved, I will proceed to create the files and update the links.
