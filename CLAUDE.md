# CLAUDE.md

## Project Overview

LeadCatalyst is the main corporate website for a B2B lead generation holding company. The site showcases multiple industry verticals (Legal/MVA, Insurance) and serves as the central brand hub. The design follows a "Refined Catalyst" philosophy with a dark charcoal background, warm gold (#F5A623) accents, and Playfair Display serif typography for headlines.

## Tech Stack

- **Build Tool**: Vite 7
- **Framework**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: wouter v3
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner (toast notifications)
- **Server**: Express (minimal API backend)
- **Package Manager**: pnpm

## Project Structure

```
├── client/src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (Radix-based)
│   │   ├── sections/        # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── ApproachSection.tsx
│   │   │   ├── WhyUsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── StickyCTA.tsx
│   ├── config/
│   │   └── ghl.ts           # GoHighLevel form/calendar URLs
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   └── CookiePolicy.tsx
│   ├── App.tsx              # Routes and providers
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and Tailwind config
├── server/
│   └── index.ts             # Express server
├── shared/
│   └── const.ts             # Shared constants
└── package.json
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (port 3000)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Type check
pnpm check

# Format code
pnpm format
```

## Path Aliases

- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`

```typescript
import { Button } from "@/components/ui/button";
```

## Design System

### Colors
- **Primary Gold**: `#F5A623` (brand accent)
- **Dark Background**: Dark charcoal theme
- **Muted Foreground**: Gray tones for secondary text

### Typography
- **Headlines**: Playfair Display (serif, italic emphasis)
- **Body**: System sans-serif

### Key UI Patterns
- `shadow-gold`: Gold glow effect for elevated elements
- `glass-dark`: Dark glassmorphism effect
- `animate-fade-up`, `animate-pulse-glow`: Custom animations
- `hover-lift`: Subtle lift on hover

### Button Variants
- `amber`: Solid gold button
- `amber-outline`: Gold outline button
- `hero`: Large hero CTA button
- `hero-secondary`: Secondary hero button

## Key Integrations

### GoHighLevel (GHL) Modal
All CTA buttons open a GHL modal for lead capture. Configuration in `client/src/config/ghl.ts`:
- Form mode: Contact form iframe
- Calendar mode: Booking calendar iframe

Modal component: `client/src/components/ui/ghl-modal.tsx`

### Active Verticals
Two verticals are currently active with dedicated subdomains:
1. **Legal/MVA**: https://legal.leadcatalyst.com
2. **Insurance**: https://insurance.leadcatalyst.com

## Code Conventions

- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS utility classes; custom utilities in `index.css`
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Always use `@/` path alias for client/src imports
- **Sections**: Each landing page section is a self-contained component with its own animations

## Legal Pages

Legal policy pages use Auranex, LLC company information:
- **Company**: Auranex, LLC (Delaware)
- **Address**: 131 Continental Dr, Suite 305, Newark, DE 19713
- **Contact**: privacy@auranex.ai

## Related Repositories

- `lead-catalyst-premium` - Premium vertical (design reference for effects/animations)
- `lead-catalyst-insurance` - Insurance vertical subdomain
