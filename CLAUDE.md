# CLAUDE.md

## Project Overview

LeadCatalyst is the main corporate website for a B2B lead generation holding company. The site showcases multiple industry verticals (Legal/MVA, Insurance) and serves as the central brand hub. The design follows a "Refined Catalyst" philosophy with a dark charcoal background, warm gold (#F5A623) accents, and Playfair Display serif typography for headlines.

**Current Status**: Website is live and ready for deployment. All sections have animations, mobile optimization is complete.

**Brand Compliance Status**: ✅ Fully Compliant (January 2026)
- Complete Brand Kit audit performed
- All 9 deviations fixed (Dark Gold, gradients, easing functions, letter spacing)
- Validated against `/home/frater418/Lead Catalyst Brand Kit/`

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

---

# Brand Kit (Single Source of Truth)

**Version 1.0 | January 2025**
**Source**: `/home/frater418/Lead Catalyst Brand Kit/`

This section consolidates all brand guidelines from the official Brand Kit. All design decisions must align with these specifications.

---

## Brand Essence

### Mission
Transform how businesses acquire customers by combining data-driven strategies with human expertise, delivering measurable results that accelerate growth and maximize ROI.

### Vision
To become the most trusted partner for businesses seeking sustainable, scalable lead generation solutions across all industries.

### Brand Personality
| Trait | Description |
|-------|-------------|
| **Confident** | Bold statements, clear value propositions, data-backed claims |
| **Approachable** | Conversational tone, clear explanations, welcoming language |
| **Innovative** | Modern design, forward-thinking messaging, tech-savvy approach |
| **Trustworthy** | Transparent communication, honest expectations, proven track record |
| **Results-Oriented** | Metrics-driven language, ROI focus, performance emphasis |

### Brand Values
- **Excellence** — Highest standards in everything
- **Integrity** — Complete transparency
- **Partnership** — True client partnerships
- **Innovation** — Continuously evolving strategies
- **Accountability** — Ownership of results

---

## Primary Tagline

> **The Growth Engine for Modern Business**

### Alternative Taglines
| Context | Tagline |
|---------|---------|
| Lead Gen Focus | Qualified Leads. Accelerated Growth. |
| Partnership Focus | Your Strategic Growth Partner |
| Results Focus | Where Strategy Meets Results |
| Industry Focus | Vertical Expertise. Horizontal Impact. |

---

## Color System (OFFICIAL)

### Primary Palette
| Color | HEX | RGB | Usage |
|-------|-----|-----|-------|
| **Catalyst Gold** | `#F5A623` | 245, 166, 35 | Primary accent, CTAs, emphasis |
| **Charcoal Black** | `#0D1117` | 13, 17, 23 | Primary backgrounds |
| **Pure White** | `#FFFFFF` | 255, 255, 255 | Text on dark backgrounds |

### Secondary Palette
| Color | HEX | Usage |
|-------|-----|-------|
| **Deep Charcoal** | `#161B22` | Cards, elevated surfaces |
| **Warm Gray** | `#8B949E` | Secondary text, captions |
| **Light Gold** | `#FFD93D` | Hover states, highlights |
| **Dark Gold** | `#C4841D` | Pressed states, depth accents |

### Functional Colors
| Color | HEX | Usage |
|-------|-----|-------|
| **Success Green** | `#22C55E` | Success messages, completed states |
| **Warning Orange** | `#F59E0B` | Warnings, attention needed |
| **Error Red** | `#EF4444` | Errors, destructive actions |
| **Info Blue** | `#3B82F6` | Information, links |

### Color Ratios
- **Charcoal Black:** 60% (backgrounds)
- **White:** 25% (text, content)
- **Catalyst Gold:** 10% (accents, CTAs)
- **Secondary colors:** 5% (supporting elements)

### Gradient Specifications
```css
/* Hero gradient */
background: linear-gradient(135deg, #0D1117 0%, #161B22 50%, #1C2128 100%);

/* Gold accent gradient */
background: linear-gradient(135deg, #F5A623 0%, #FFD93D 100%);

/* Card gradient */
background: linear-gradient(180deg, #161B22 0%, #0D1117 100%);

/* Overlay gradient (for images) */
background: linear-gradient(180deg, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.9) 100%);
```

### Sub-Brand Color Accents
| Vertical | Accent Color | HEX |
|----------|--------------|-----|
| Legal | Justice Blue | `#2563EB` |
| Insurance | Shield Teal | `#0D9488` |
| Wealth | Prosperity Green | `#059669` |
| Real Estate | Property Amber | `#D97706` |
| Health | Vitality Cyan | `#06B6D4` |

---

## Typography System (OFFICIAL)

### Font Families
| Font | Purpose | Source |
|------|---------|--------|
| **Playfair Display** | Headlines, hero text, emphasis | Google Fonts |
| **Inter** | Body text, UI elements, navigation | Google Fonts |

### Type Scale (Desktop)
| Level | Size | Line Height | Weight | Font |
|-------|------|-------------|--------|------|
| Display XL | 72px (4.5rem) | 1.1 | 700 | Playfair |
| Display L | 56px (3.5rem) | 1.15 | 700 | Playfair |
| H1 | 48px (3rem) | 1.2 | 700 | Playfair |
| H2 | 40px (2.5rem) | 1.25 | 700 | Playfair |
| H3 | 32px (2rem) | 1.3 | 500 | Playfair |
| H4 | 24px (1.5rem) | 1.35 | 500 | Playfair |
| H5 | 20px (1.25rem) | 1.4 | 600 | Inter |
| H6 | 18px (1.125rem) | 1.4 | 600 | Inter |
| Body Large | 18px | 1.6 | 400 | Inter |
| Body | 16px | 1.6 | 400 | Inter |
| Body Small | 14px | 1.5 | 400 | Inter |
| Caption | 12px | 1.4 | 500 | Inter |

### Responsive Typography (Mobile < 768px)
| Level | Size |
|-------|------|
| Display XL | 40px |
| Display L | 36px |
| H1 | 32px |
| H2 | 28px |
| H3 | 24px |
| Body | 16px |

### Signature Style: Italic Emphasis
Key words in headlines use **italic Playfair Display in gold (#F5A623)**:
```html
<h1>The Growth <em>Engine</em> for Modern Business</h1>
```
```css
h1 em {
  font-style: italic;
  color: #F5A623;
}
```

### Letter Spacing
| Element | Letter Spacing |
|---------|----------------|
| Display Headlines | -0.02em |
| Headlines (H1-H4) | -0.01em |
| Body Text | 0 |
| Buttons | 0.02em |
| Labels/Badges | 0.05em |
| Overlines | 0.1em |

---

## Website Style Specifications

### CSS Variables (Required)
```css
:root {
  /* Primary */
  --color-gold: #F5A623;
  --color-gold-light: #FFD93D;
  --color-gold-dark: #C4841D;

  /* Backgrounds */
  --color-bg-primary: #0D1117;
  --color-bg-secondary: #161B22;
  --color-bg-elevated: #1C2128;

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #8B949E;
  --color-text-muted: #6E7681;

  /* Borders */
  --color-border: rgba(139, 148, 158, 0.2);
  --color-border-gold: rgba(245, 166, 35, 0.3);

  /* Fonts */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Layout System
| Breakpoint | Container Max-Width | Padding |
|------------|---------------------|---------|
| Mobile (<768px) | 100% | 16px |
| Tablet (768-1024px) | 100% | 24px |
| Desktop (>1024px) | 1280px | 32px |

### Spacing Scale
| Token | Value | Use |
|-------|-------|-----|
| xs | 4px | Tight spacing, icon gaps |
| sm | 8px | Related elements |
| md | 16px | Default spacing |
| lg | 24px | Section padding |
| xl | 32px | Major sections |
| 2xl | 48px | Section gaps |
| 3xl | 64px | Hero padding |
| 4xl | 96px | Major section breaks |

### Animation Timing
| Type | Duration | Use |
|------|----------|-----|
| Micro | 150ms | Hover states |
| Short | 200ms | Button presses |
| Medium | 300ms | Card hovers |
| Long | 500ms | Page transitions |

### Easing Functions
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

---

## Component Specifications

### Primary Button (Gold)
```css
.btn-primary {
  background-color: #F5A623;
  color: #0D1117;
  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  padding: 14px 28px;
  border-radius: 8px;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background-color: #FFD93D;
  transform: translateY(-1px);
}
.btn-primary:active {
  background-color: #C4841D;
}
```

### Secondary Button (Outline)
```css
.btn-secondary {
  background-color: transparent;
  color: #FFFFFF;
  border: 1px solid rgba(139, 148, 158, 0.2);
  /* Same sizing as primary */
}
.btn-secondary:hover {
  border-color: #F5A623;
  color: #F5A623;
}
```

### Cards
```css
.card {
  background: linear-gradient(180deg, #161B22 0%, #0D1117 100%);
  border: 1px solid rgba(139, 148, 158, 0.2);
  border-radius: 16px;
  padding: 32px;
}
.card:hover {
  border-color: rgba(245, 166, 35, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

### Navigation
```css
.nav {
  position: fixed;
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(139, 148, 158, 0.2);
}
.nav-link {
  font-family: Inter;
  font-weight: 500;
  font-size: 14px;
  color: #8B949E;
}
.nav-link:hover { color: #FFFFFF; }
.nav-link.active { color: #F5A623; }
```

---

## Tone of Voice

### Voice Characteristics
- **Confident, Not Arrogant** — Authority without diminishing others
- **Professional, Not Stuffy** — Approachable while maintaining professionalism
- **Clear, Not Simplistic** — Explain complex concepts clearly
- **Results-Focused, Not Hyperbolic** — Data-backed claims, no "10x overnight"

### Writing Guidelines
- Lead with benefit or outcome
- Keep sentences concise (15-20 words average)
- Use active voice
- Use "you" and "your" to address reader directly
- Keep paragraphs to 3-4 sentences maximum

### CTA Copy Examples
- "Start Your Growth Journey"
- "Get Qualified Leads"
- "Schedule a Strategy Call"
- "See How We Can Help"
- "Accelerate Your Pipeline"

---

## Messaging Pillars

### Pillar 1: Quality Over Quantity
> "We don't just generate leads—we deliver qualified prospects ready to convert."

### Pillar 2: Data-Driven Strategy
> "Every campaign is built on insights, optimized by data, and measured by results."

### Pillar 3: Industry Expertise
> "Deep vertical knowledge means strategies tailored to your market's unique dynamics."

### Pillar 4: Partnership Approach
> "We succeed when you succeed—that's why we invest in understanding your business."

---

## Logo Usage Rules

### Logo Versions
| Version | Use Case |
|---------|----------|
| Primary (Dark BG) | Dark backgrounds, primary applications |
| Primary (Light BG) | Light backgrounds, print materials |
| Icon Only (Gold) | Favicons, app icons, small applications |
| Icon Only (White) | Dark backgrounds, monochrome needs |

### Minimum Size
- **Digital:** 120px width minimum
- **Print:** 1 inch (25mm) width minimum

### Logo Don'ts
- Do not stretch or distort
- Do not change colors outside approved versions
- Do not add effects (shadows, gradients, outlines)
- Do not place on busy backgrounds
- Do not rotate or flip

---

## Accessibility Requirements

### Color Contrast (WCAG 2.1 AA)
| Combination | Contrast Ratio | Rating |
|-------------|----------------|--------|
| White on Charcoal | 16.75:1 | AAA |
| Gold on Charcoal | 8.59:1 | AAA |
| Warm Gray on Charcoal | 5.23:1 | AA |

### Focus States
```css
*:focus-visible {
  outline: 2px solid #F5A623;
  outline-offset: 2px;
}
```

### Touch Targets
- Minimum 44x44px on mobile

---

## Brand Kit Assets Location

```
/home/frater418/Lead Catalyst Brand Kit/
├── README.md                    # Overview
├── brand-guidelines/            # Full brand guidelines
├── brand-story/                 # Brand narrative & taglines
├── colors/                      # Color palette specs
├── typography/                  # Typography system
├── website-style-guide/         # Web implementation
├── icons/                       # Custom icon set (PNG)
├── email-templates/             # HTML email templates
└── social-media/
    ├── profile-pictures/
    ├── cover-images/
    ├── post-templates/
    └── story-templates/
```

---

## Brand Compliance Reference

**Last Updated**: January 2026 | **Status**: Fully Compliant

This section provides quick reference values for brand-compliant implementations. All values are derived from the official Brand Kit and must be used exactly as specified.

### Color Values (Exact Specifications)

| Color Name | HEX | OKLCH | RGB | Usage |
|------------|-----|-------|-----|-------|
| Catalyst Gold | #F5A623 | oklch(0.78 0.15 75) | 245, 166, 35 | Primary accent, CTAs, emphasis |
| Light Gold | #FFD93D | oklch(0.85 0.12 75) | 255, 217, 61 | Hover states, highlights |
| Dark Gold | #C4841D | oklch(0.60 0.14 75) | 196, 132, 29 | Pressed states, depth accents |
| Charcoal Black | #0D1117 | oklch(0.12 0.015 250) | 13, 17, 23 | Primary background |
| Deep Charcoal | #161B22 | oklch(0.16 0.015 250) | 22, 27, 34 | Cards, elevated surfaces |
| Pure White | #FFFFFF | oklch(0.95 0.005 250) | 255, 255, 255 | Primary text on dark |
| Warm Gray | #8B949E | oklch(0.65 0.01 250) | 139, 148, 158 | Secondary text, borders |
| Success Green | #22C55E | oklch(0.65 0.2 145) | 34, 197, 94 | Success states |

### Letter Spacing Values

| Element | Letter Spacing | CSS Class | Usage |
|---------|----------------|-----------|-------|
| Display Headlines | -0.02em | `.tracking-display` | Hero text, large displays |
| Headlines (H1-H4) | -0.01em | `.tracking-headline` | Section headlines |
| Body Text | 0 | default | All body content |
| Buttons | 0.02em | `.tracking-button` | All button text |
| Labels/Badges | 0.05em | `.tracking-label` | Uppercase labels |
| Overlines | 0.1em | `.tracking-overline` | Small overline text |

### Animation Timing Standards

| Type | Duration | CSS Variable | Usage |
|------|----------|--------------|-------|
| Micro | 150ms (0.15s) | N/A | Hover states, small UI changes |
| Short | 200ms (0.2s) | N/A | Button presses, toggles |
| Medium | 300ms (0.3s) | N/A | Card hovers, reveals |
| Long | 500ms (0.5s) | N/A | Page transitions, modals |

### Easing Functions (Brand-Approved)

```css
/* Use these exact values in animations */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

**Implementation:**
```css
/* Correct */
transition: all 0.3s var(--ease-out);
animation: fadeUp 0.6s var(--ease-out) forwards;

/* Incorrect */
transition: all 0.3s ease-out; /* Do not use generic ease-out */
```

### Gradient Definitions

```css
/* Hero Background Gradient (135deg, not 180deg!) */
background: linear-gradient(135deg, #0D1117 0%, #161B22 50%, #1C2128 100%);

/* Gold Accent Gradient */
background: linear-gradient(135deg, #F5A623 0%, #FFD93D 100%);

/* Card Gradient */
background: linear-gradient(180deg, #161B22 0%, #0D1117 100%);

/* Text Gradient Gold */
background: linear-gradient(135deg,
  oklch(0.85 0.12 75),
  oklch(0.78 0.15 75),
  oklch(0.60 0.14 75)
);
```

### Border & Shadow Specifications

```css
/* Standard Border */
border: 1px solid rgba(139, 148, 158, 0.2);

/* Gold Border */
border: 1px solid rgba(245, 166, 35, 0.3);

/* Gold Shadow Effect */
box-shadow:
  0 0 0 1px oklch(0.78 0.15 75 / 0.2),
  0 4px 24px 0 oklch(0.78 0.15 75 / 0.25),
  0 12px 48px -8px oklch(0.78 0.15 75 / 0.3);
```

---

## Brand Compliance Checkpoints

Use these checkpoints when creating or modifying any branded content:

### CSS/Styling Changes
- [ ] All colors use exact HEX/OKLCH values from Brand Kit
- [ ] Dark Gold is #C4841D (NOT #D4880F)
- [ ] Hero gradient uses 135deg (NOT 180deg)
- [ ] Animation timing uses specified durations (150ms, 200ms, 300ms, 500ms)
- [ ] Easing functions use CSS variables (--ease-out, --ease-in-out)
- [ ] Letter spacing applied where appropriate

### Component Development
- [ ] Buttons use Catalyst Gold (#F5A623) with Dark Gold hover (#C4841D)
- [ ] Border radius: 8px (buttons), 16px (cards)
- [ ] Typography uses Playfair Display (headlines) + Inter (body)
- [ ] Italic emphasis in gold for key headline words
- [ ] Touch targets minimum 44x44px on mobile

### Color Usage Validation
- [ ] Background colors are dark-first (Charcoal Black #0D1117)
- [ ] Gold accent used sparingly (maximum 10% of surface area)
- [ ] Text contrast meets WCAG 2.1 AA standards
- [ ] Secondary text uses Warm Gray (#8B949E)
- [ ] Borders use rgba(139, 148, 158, 0.2)

### Typography Validation
- [ ] Headlines use Playfair Display with proper letter spacing
- [ ] Body text uses Inter font family
- [ ] Responsive typography scales correctly
- [ ] Emphasis words in headlines are italic + gold

---

## When to Invoke Brand Guardian Agent

The Brand Guardian Agent (@Brand Guardian Agent) must be consulted for:

1. **CSS/Styling Modifications**
   - Any changes to colors, fonts, spacing
   - New utility classes or design tokens
   - Animation or transition updates

2. **New Component Creation**
   - Before implementing new UI components
   - When adding custom design patterns
   - Before finalizing component APIs

3. **Color/Font Changes**
   - Any deviation from specified color values
   - Font family or weight changes
   - New gradient or shadow implementations

4. **Content/Copy Updates**
   - Headlines with emphasis words
   - CTA button text
   - Marketing copy requiring brand voice

5. **Major Feature Additions**
   - New sections or pages
   - Custom design patterns
   - Integration of third-party UI libraries

**Workflow**: When in doubt about brand compliance, pause development and request Brand Guardian review BEFORE implementing changes. This prevents rework and ensures consistent brand execution.

---

## Brand Compliance Validation Commands

```bash
# Search for non-compliant Dark Gold color
grep -r "#D4880F" client/src/

# Search for old gradient angle
grep -r "180deg" client/src/index.css

# Verify easing functions are used
grep -r "var(--ease-" client/src/

# Check for direct transition timings
grep -r "transition.*ease-out" client/src/
```

**Expected Results**: All searches should return zero matches after full compliance.
