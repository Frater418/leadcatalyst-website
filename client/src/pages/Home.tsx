/**
 * LeadCatalyst Homepage
 *
 * Design Philosophy: "Refined Catalyst"
 * - Dark charcoal background with warm gold accents
 * - Playfair Display serif for headlines (italic emphasis)
 * - Professional, trustworthy B2B aesthetic
 * - Conversion-focused layout with strategic CTAs
 * - GHL Modal integration for lead capture
 */

import { useState } from "react";
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
import { GHLModal, type ModalMode } from "@/components/ui/ghl-modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("form");

  const handleOpenModal = (mode: ModalMode) => {
    setModalMode(mode);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <HeroSection onOpenModal={handleOpenModal} />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <ApproachSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyCTA onOpenModal={handleOpenModal} />
      <GHLModal isOpen={modalOpen} onClose={handleCloseModal} mode={modalMode} />
    </div>
  );
}
