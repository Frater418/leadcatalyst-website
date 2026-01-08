# CLAUDE.md

## Project Overview

LeadCatalyst is the main corporate website for a B2B lead generation holding company. The site showcases multiple industry verticals (Legal/MVA, Insurance) and serves as the central brand hub. The design follows a "Refined Catalyst" philosophy with a dark charcoal background, warm gold (#F5A623) accents, and Playfair Display serif typography for headlines.

**Current Status**: Website is live and ready for deployment. All sections have animations, mobile optimization is complete.

## Tech Stack

- **Build Tool**: Vite 7
- **Framework**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: wouter v3
- **Animations**: Framer Motion
- **Icons**: Lucide React + react-icons (brand icons)
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner (toast notifications)
- **Server**: Express (minimal API backend)
- **Package Manager**: pnpm

## Project Structure

```
├── client/src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (Radix-based)
│   │   │   └── ghl-modal.tsx # GoHighLevel modal component
│   │   ├── sections/        # Landing page sections
│   │   │   ├── HeroSection.tsx      # Hero with Live Activity Feed
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── ApproachSection.tsx  # 4-step methodology with color hierarchy
│   │   │   ├── WhyUsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── StickyCTA.tsx
│   ├── config/
│   │   └── ghl.ts           # GoHighLevel form/calendar URLs
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── TermsOfService.tsx
│   │   └── CookiePolicy.tsx
│   ├── App.tsx              # Routes and providers
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles and Tailwind config
├── client/public/
│   ├── images/              # All images in WebP format
│   ├── robots.txt
│   └── sitemap.xml
├── server/
│   └── index.ts             # Express server
└── package.json
```

## Development Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server (port 3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm check      # Type check
```

## Hosting & Deployment

**Host**: Hostinger (MCP integration configured locally in ~/.claude.json)

The Hostinger MCP server provides tools for:
- Domain management
- DNS configuration
- Hosting deployment

## Design System

### Colors
- **Primary Gold**: `#F5A623` (brand accent)
- **Dark Gold**: `#D4880F` (hover states)
- **Success Green**: `#22C55E`
- **Dark Background**: `oklch(0.12 0.015 250)` (charcoal)

### Animation Standards
- **Entrance**: 0.6s duration with easeOut
- **Stagger**: 0.08s between items
- **Hover**: 0.3s transitions
- **All animations use GPU-accelerated properties** (transform, opacity)

### Approach Section Color Hierarchy
The 4-step methodology uses progressive colors:
1. Gray (#6B7280) - Discovery
2. Dark Gold (#D4880F) - Strategy
3. Brand Gold (#F5A623) - Execution
4. Green (#22C55E) - Optimization

### Border Radius
- Cards: `rounded-xl`
- Containers: `rounded-2xl`

### Key UI Patterns
- `shadow-gold`: Gold glow effect
- `glass-dark`: Dark glassmorphism
- `hover-lift`: Subtle lift on hover
- Floating orbs in section backgrounds

## Key Integrations

### GoHighLevel (GHL) Modal
All CTA buttons open a GHL modal for lead capture.
- Config: `client/src/config/ghl.ts`
- Component: `client/src/components/ui/ghl-modal.tsx`
- Modes: form, calendar

### Integration Section (ApproachSection.tsx)
Shows CRM integrations with brand icons:
- Salesforce, HubSpot, GoHighLevel, Zapier, Custom API
- All have nofollow external links

### Active Verticals
1. **Legal/MVA**: https://legal.leadcatalyst.com
2. **Insurance**: https://insurance.leadcatalyst.com

## Mobile Optimization

- Responsive typography (text-3xl → text-6xl)
- Touch targets min 44x44px
- Container padding adjusts for <360px screens
- Live Activity Feed has responsive height

## Legal Information

- **Company**: Auranex, LLC (Delaware)
- **Address**: 131 Continental Dr, Suite 305, Newark, DE 19713
- **Contact**: privacy@auranex.ai / contact@leadcatalyst.com
- **Phone**: +1 (754) 209-2098

## Related Repositories

- `lead-catalyst-premium` - Premium vertical
- `lead-catalyst-insurance` - Insurance vertical subdomain
