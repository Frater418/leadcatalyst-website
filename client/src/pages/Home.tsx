/**
 * LeadCatalyst Homepage
 * 
 * Design Philosophy: "Refined Catalyst"
 * - Dark charcoal background with warm gold accents
 * - Playfair Display serif for headlines (italic emphasis)
 * - Professional, trustworthy B2B aesthetic
 * - Conversion-focused layout with strategic CTAs
 */

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <ApproachSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
