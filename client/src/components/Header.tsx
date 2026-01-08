/**
 * Header Component - LeadCatalyst
 *
 * Sticky navigation with transparent-to-solid background on scroll
 * Gold accent on logo, clean navigation links
 * Opens GHL Modal on CTA click
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalMode } from "@/components/ui/ghl-modal";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#approach", label: "Our Approach" },
  { href: "#contact", label: "Contact" },
];

interface HeaderProps {
  onOpenModal?: (mode: ModalMode) => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#F5A623] to-[#D4880F] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-background">
                <path
                  fill="currentColor"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-foreground">Lead</span>
              <span className="text-[#F5A623]">Catalyst</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A623] transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onOpenModal?.("form")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
            <Button
              onClick={() => onOpenModal?.("form")}
              variant="amber"
              className="px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button - min 44px touch target */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 -mr-2 text-foreground hover:bg-foreground/5 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-lg font-medium text-foreground hover:text-[#F5A623] transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenModal?.("form");
                }}
                variant="amber"
                className="mt-4 w-full"
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
