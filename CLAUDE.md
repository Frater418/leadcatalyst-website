# CLAUDE.md

## Project Overview

LeadCatalyst is the main corporate website for a **vertical-first B2B lead generation agency** specializing in regulated industries. The site showcases multiple industry verticals (Legal, Insurance, Financial Services, Wealth Management, Real Estate) and serves as the central brand hub. The design follows a "Refined Catalyst" philosophy with a dark charcoal background, warm gold (#F5A623) accents, and Playfair Display serif typography for headlines.

**Current Status**: Website is live and ready for deployment. All sections have animations, mobile optimization is complete.

**Brand Compliance Status**: ✅ Fully Compliant (January 2026)
- Complete Brand Kit audit performed
- Brand Story optimized based on comprehensive audit
- Language Playbook implemented
- 5-Agent validation system operational

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

---

# Brand Identity (Single Source of Truth)

**Version 2.0 | January 2026**
**Source**: `/home/frater418/Lead Catalyst Brand Kit/`

---

## Brand Positioning

### Who We Are
LeadCatalyst is a **vertical-first lead generation agency** for regulated premium industries. We specialize in delivering pre-qualified prospects with compliance built into every step.

### Target Verticals
- **Legal Services** (Kanzleien, Legal Tech, Corporate Counsel)
- **Insurance** (Versicherungsmakler, Carriers, InsurTech)
- **Financial Services** (Asset Management, FinTech, Advisory)
- **Wealth Management** (Private Banking, Family Offices, HNW Advisory)
- **Real Estate** (Commercial, Investment, Development)

### What Makes Us Different

| Generic Agencies | LeadCatalyst |
|-----------------|--------------|
| "We deliver leads" | We deliver **conversion opportunities** |
| "Quality over quantity" | **Vertical-specific qualification criteria** |
| "Data-driven approach" | **Compliance-aware prospecting** (GDPR, AML, FCA) |
| "Strategic partner" | **Vertical specialist** with industry expertise |
| Volume KPIs | **Conversion KPIs** |

---

## Primary Tagline

> **Vertical-First Lead Qualification**

⚠️ **DEPRECATED**: "The Growth Engine for Modern Business" - DO NOT USE

### Alternative Taglines

| Context | Tagline |
|---------|---------|
| Homepage Hero | Pre-Qualified Prospects. Vertical Expertise. |
| Regulated Industries | Compliance-Aware Lead Generation |
| ROI Focus | Conversion-Focused, Not Volume-Focused |
| Authority | The Vertical Specialists |
| Industry Pages | Qualified Leads for Regulated Industries |

---

## Messaging Pillars (Updated)

### Pillar 1: Vertical Expertise
> "Every industry has its own rules. Legal leads need practice-area match. Insurance leads need AML compliance. We understand the differences—and qualify accordingly."

### Pillar 2: Compliance-First
> "In regulated industries, compliance isn't nice-to-have—it's existential. We've built GDPR, AML, and FCA awareness into every prospecting step."

### Pillar 3: Conversion Over Volume
> "30 pre-qualified prospects beats 100 generic leads. We optimize for your sales team's efficiency, not our dashboard metrics."

### Pillar 4: Qualification Transparency
> "You see exactly how we qualify. Which criteria. Which filters. Which results. No black box."

---

## Brand Personality: 75/25 Rule

**75% Confident:**
- Authority statements backed by data
- Clear opinions on best practices
- Willingness to say no to bad-fit prospects

**25% Approachable:**
- No corporate jargon
- Conversational where appropriate
- Transparent process explanations

---

# Language Playbook

## Forbidden Buzzwords (NEVER USE)

| ❌ Forbidden | ✅ Replace With |
|-------------|-----------------|
| "Growth Engine" | "Conversion Engine" or "Vertical Specialists" |
| "Quality over quantity" | "Vertical-specific qualification" |
| "Data-driven" | "Compliance-aware prospecting" |
| "Strategic partner" | "Vertical specialist" |
| "Modern business" | "[Specific vertical] companies" |
| "Results-driven" | "Conversion-focused" |
| "Innovative" | [Specific technology/approach] |
| "Cutting-edge" | [Specific tool/method] |
| "Help you grow" | [Specific outcome with metric] |

## Required Language

| ✅ Required | Context |
|-------------|---------|
| "Pre-qualified prospects" | Instead of "leads" |
| "Vertical-specific" | Instead of "industry expertise" |
| "Compliance-aware" | For regulated industries |
| "Conversion-focused" | Instead of "results-driven" |
| Specific metrics (X%) | Always quantify claims |

---

## Vertical-Specific Messaging

### Legal Services
**Primary Pain:** BD efficiency (respect billable hour economics)

**Use These Phrases:**
- ✅ "Practice-area match"
- ✅ "Firm-size verification"
- ✅ "Decision-maker authority"
- ✅ "GDPR-compliant"
- ✅ "Privilege-aware"
- ✅ "Billable hour economics"

**Avoid:**
- ❌ "Grow your practice" (too generic)
- ❌ "More clients" (they want profitable clients, not volume)
- ❌ "Scale your business"

### Insurance
**Primary Pain:** CAC pressure + compliance risk

**Use These Phrases:**
- ✅ "AML-compliant sourcing"
- ✅ "Verified prospect authentication"
- ✅ "Compliance-screened"
- ✅ "CAC efficiency"
- ✅ "Long-cycle capable"

**Avoid:**
- ❌ "Insurance leads" (too generic)
- ❌ "More customers"

### Financial Services
**Primary Pain:** Regulatory compliance + premium targeting

**Use These Phrases:**
- ✅ "FCA-compliant prospecting"
- ✅ "HNW-qualified"
- ✅ "Verified source documentation"
- ✅ "Regulatory-aware"
- ✅ "Premium profiling"

**Avoid:**
- ❌ "Financial leads" (vague, compliance risk)
- ❌ Generic "Growth"

### Real Estate
**Primary Pain:** Pipeline consistency + lead quality

**Use These Phrases:**
- ✅ "Active buying intent"
- ✅ "Decision-timeline verification"
- ✅ "Pipeline consistency"
- ✅ "Conversion-optimized nurturing"

**Avoid:**
- ❌ Generic volume promises

### Wealth Management
**Primary Pain:** Premium targeting + relationship building

**Use These Phrases:**
- ✅ "Ultra-premium qualification"
- ✅ "Relationship-ready prospects"
- ✅ "Wealth-verified targeting"
- ✅ "Confidential handling"

**Avoid:**
- ❌ Transactional language

---

## SEO Keywords by Vertical

| Vertical | Target Keywords |
|----------|----------------|
| Legal | "legal lead generation", "law firm leads", "qualified legal leads" |
| Insurance | "insurance lead generation", "AML compliant leads" |
| Financial | "financial services leads", "wealth management lead gen", "HNW leads" |
| Real Estate | "real estate leads", "commercial real estate lead gen" |
| Wealth Mgmt | "wealth management leads", "HNW lead generation" |

---

# 5-Agent Validation System

## Agent Overview

| Agent | Scope | Color |
|-------|-------|-------|
| **leadcatalyst-content-guardian** | Text, Messaging, Copy, SEO | 🔵 Blue |
| **leadcatalyst-brand-guardian** | Colors, Fonts, Components, Visual Design | 🟢 Green |
| **visual-enhancer** | Layout, Hierarchy, Desktop Design, Spacing | 🔵 Cyan |
| **leadcatalyst-developer** | Code Implementation, React/TypeScript | 🟣 Purple |
| **implementation-audit** | Final Verification, Spec Compliance | 🟠 Orange |

## Agent Responsibilities

### 📝 leadcatalyst-content-guardian
**Checks:**
- Messaging alignment with Brand Story
- Language compliance (buzzwords, terminology)
- Vertical-specific messaging
- SEO compliance (keywords, headings, meta)
- Tone of voice (75% confident / 25% approachable)

**Use When:**
- Writing new page content
- Reviewing existing copy
- Pre-launch content audit
- Checking vertical-specific pages

### 🛡️ leadcatalyst-brand-guardian
**Checks:**
- Exact color values (HEX compliance)
- Typography (font families, sizes, weights)
- Component styling (buttons, cards, inputs)
- Spacing & layout patterns
- Visual effects (gradients, shadows, borders)

**Use When:**
- Creating new components
- Modifying CSS/Tailwind
- Before deployment
- After styling changes

### 🖼️ visual-enhancer
**Checks:**
- Desktop layouts (widths, proportions)
- Visual hierarchy (sizes, weighting)
- Section variation (backgrounds, patterns)
- Spacing & whitespace
- Dual-accent color usage (Gold 70% + Vertical 30%)

**Use When:**
- Pages look monotonous
- Desktop layout issues
- Poor visual hierarchy
- Sections all look the same

### 💻 leadcatalyst-developer
**Does:**
- Implements code from specifications
- Creates React/TypeScript components
- Sets up routing
- Integrates GoHighLevel forms
- Implements SEO meta tags

**Use When:**
- Building new pages/components
- Technical integrations
- Implementing designs

### ✅ implementation-audit
**Checks:**
- All requirements from specs implemented
- File/folder structure correct
- Routes working
- Components complete
- No missing functionality

**Use When:**
- After development is complete
- Before deployment
- Final verification

## Agent Communication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     ROOT INSTANCE                            │
│         (Orchestrates all Agents via Task Tool)             │
└──────────────────────────┬──────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│   DEVELOPER   │  │    VISUAL     │  │   CONTENT     │
│               │  │   ENHANCER    │  │   GUARDIAN    │
│ Implements    │  │ Analyzes      │  │ Checks Copy   │
│ Code          │  │ Layout/Design │  │ & SEO         │
└───────┬───────┘  └───────┬───────┘  └───────┬───────┘
        │                  │                  │
        │   Recommends     │   Recommends     │
        ▼                  ▼                  ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│    BRAND      │  │   DEVELOPER   │  │    BRAND      │
│   GUARDIAN    │  │ (for impl.)   │  │   GUARDIAN    │
│ Checks Visual │  │               │  │ (for visual)  │
└───────┬───────┘  └───────────────┘  └───────────────┘
        │
        ▼
┌───────────────┐
│ IMPLEMENTATION│
│    AUDIT      │
│ Final Check   │
└───────────────┘
```

## When to Use Which Agent

| Task | Agent(s) to Use |
|------|-----------------|
| New landing page | developer → brand-guardian + content-guardian + visual-enhancer → implementation-audit |
| Fix copy issues | content-guardian |
| Fix color/font issues | brand-guardian |
| Page looks boring | visual-enhancer → developer |
| Pre-deployment check | implementation-audit |
| Write new content | content-guardian (for validation) |
| Build component | developer → brand-guardian |

---

# Design System

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

### Vertical Accent Colors (MUST USE!)
| Vertical | Color Name | HEX |
|----------|------------|-----|
| Legal | Justice Blue | `#2563EB` |
| Insurance | Shield Teal | `#0D9488` |
| Wealth | Prosperity Green | `#059669` |
| Real Estate | Property Amber | `#D97706` |
| Health | Vitality Cyan | `#06B6D4` |

**Rule:** Gold (70%) + Vertical Color (30%) - Both MUST be actively used!

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
/* Hero gradient (135deg, NOT 180deg!) */
background: linear-gradient(135deg, #0D1117 0%, #161B22 50%, #1C2128 100%);

/* Gold accent gradient */
background: linear-gradient(135deg, #F5A623 0%, #FFD93D 100%);

/* Card gradient */
background: linear-gradient(180deg, #161B22 0%, #0D1117 100%);
```

### Section Background Patterns
NEVER use same background for consecutive sections:

| Pattern | CSS | Use For |
|---------|-----|---------|
| Standard Dark | `#0D1117` | Hero, standard sections |
| Elevated Surface | `#161B22` | Cards, feature boxes |
| Subtle Gradient | `linear-gradient(180deg, #0D1117, #161B22)` | Transitions |
| Accent Glow | `radial-gradient(ellipse, rgba(accent, 0.15), transparent)` | Feature highlights |
| Gold Tint | `linear-gradient(rgba(245,166,35,0.05), #0D1117)` | CTA sections |
| Light Break | `#F8FAFC` with dark text | MAX 1x per page |

---

## Typography System

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
| Body | 16px | 1.6 | 400 | Inter |

### Signature Style: Italic Emphasis
One italic word in Gold per hero headline:
```html
<h1>Pre-Qualified Prospects for <em>Regulated Industries</em></h1>
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
}
.btn-primary:hover {
  background-color: #FFD93D;
  transform: translateY(-1px);
}
.btn-primary:active {
  background-color: #C4841D;
}
```

### Secondary Button (Vertical Color)
```css
.btn-secondary {
  background-color: transparent;
  color: #0D9488; /* Use vertical color */
  border: 1px solid #0D9488;
}
.btn-secondary:hover {
  background-color: rgba(13, 148, 136, 0.1);
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
}
```

---

## Animation Standards

### Timing
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

# Brand Compliance Checkpoints

## Before Any Content Change
- [ ] No forbidden buzzwords used
- [ ] Vertical-specific language if applicable
- [ ] Claims are quantified with metrics
- [ ] Tagline is NOT "Growth Engine"
- [ ] Messaging pillars represented

## Before Any Styling Change
- [ ] Colors use exact HEX values from Brand Kit
- [ ] Dark Gold is #C4841D (NOT #D4880F)
- [ ] Hero gradient uses 135deg
- [ ] Vertical accent color is used (30%)
- [ ] Section backgrounds vary

## Before Deployment
- [ ] Run content-guardian on all pages
- [ ] Run brand-guardian on all components
- [ ] Run implementation-audit for final check
- [ ] All agents report ✅ Compliant

---

# Key Integrations

### GoHighLevel (GHL) Modal
- Config: `client/src/config/ghl.ts`
- Component: `client/src/components/ui/ghl-modal.tsx`
- Modes: form, calendar

### Active Verticals
1. **Legal/MVA**: https://legal.leadcatalyst.com
2. **Insurance**: https://insurance.leadcatalyst.com

---

# Legal Information

- **Company**: Auranex, LLC (Delaware)
- **Address**: 131 Continental Dr, Suite 305, Newark, DE 19713
- **Contact**: privacy@auranex.ai / contact@leadcatalyst.com
- **Phone**: +1 (754) 209-2098

---

# Brand Kit Assets Location

```
/home/frater418/Lead Catalyst Brand Kit/
├── LeadCatalyst-Brand-Guidelines.md
├── LeadCatalyst-Brand-Story.md        # Updated Version 2.0
├── LeadCatalyst-Language-Playbook.md  # NEW
├── LeadCatalyst-Audit-Optimierung.md  # NEW
├── color-palette.md
├── typography-system.md
├── website-style-guide.md
├── email-template-newsletter.html
├── email-template-welcome.html
└── icons/
```

---

# Agent Files Location

```
/home/frater418/Lead Catalyst Brand Kit/
├── leadcatalyst-content-guardian.md   # Content & SEO validation
├── leadcatalyst-brand-guardian.md     # Visual brand validation
├── visual-enhancer.md                 # Layout & design improvements
├── leadcatalyst-developer.md          # Code implementation
└── implementation-audit.md            # Final verification
```

---

**Last Updated**: January 2026
**Brand Story Version**: 2.0
**Agent System Version**: 1.0
