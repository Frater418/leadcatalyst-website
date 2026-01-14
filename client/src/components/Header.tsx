/**
 * Header Component - LeadCatalyst
 *
 * Sticky navigation with transparent-to-solid background on scroll
 * Gold accent on logo, clean navigation links
 * Opens GHL Modal on CTA click
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalMode } from "@/components/ui/ghl-modal";

interface NavLink {
  href: string;
  label: string;
  isAnchor?: boolean;
  children?: { href: string; label: string; active: boolean }[];
}

const navLinks: NavLink[] = [
  { href: "#about", label: "About", isAnchor: true },
  { href: "#services", label: "Services", isAnchor: true },
  {
    href: "#industries",
    label: "Industries",
    isAnchor: true,
    children: [
      { href: "/insurance", label: "Insurance", active: true },
      { href: "/legal", label: "Legal / MVA", active: false },
      { href: "/financial", label: "Financial Services", active: false },
      { href: "/realestate", label: "Real Estate", active: false },
    ],
  },
  { href: "#approach", label: "Our Approach", isAnchor: true },
  { href: "#contact", label: "Contact", isAnchor: true },
];

interface HeaderProps {
  onOpenModal?: (mode: ModalMode) => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[#F5A623] to-[#C4841D] flex items-center justify-center">
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
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                onMouseLeave={() => link.children && setActiveDropdown(null)}
              >
                <button
                  onClick={() => link.isAnchor && scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group flex items-center gap-1"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5A623] transition-all group-hover:w-full" />
                </button>

                {/* Dropdown Menu */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2 w-[280px] bg-background/98 backdrop-blur-md border border-border rounded-lg shadow-xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <div key={child.href}>
                            {child.active ? (
                              <Link href={child.href}>
                                <a
                                  className="block px-4 py-3 text-sm text-foreground hover:bg-[#F5A623]/10 hover:text-[#F5A623] transition-colors"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {child.label}
                                </a>
                              </Link>
                            ) : (
                              <div className="px-4 py-3 text-sm text-muted-foreground/60 cursor-not-allowed flex items-center justify-between">
                                <span>{child.label}</span>
                                <span className="text-[10px] font-medium uppercase tracking-wider bg-[#F5A623]/10 text-[#F5A623]/70 px-2 py-0.5 rounded-full border border-[#F5A623]/20 ml-4">
                                  Coming Soon
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
                <div key={link.href}>
                  <button
                    onClick={() => link.isAnchor && scrollToSection(link.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-[#F5A623] transition-colors py-2 w-full"
                  >
                    {link.label}
                  </button>
                  {link.children && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <div key={child.href}>
                          {child.active ? (
                            <Link href={child.href}>
                              <a
                                className="block text-sm text-muted-foreground hover:text-[#F5A623] transition-colors py-1"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </a>
                            </Link>
                          ) : (
                            <div className="text-sm text-muted-foreground/50 py-2 flex items-center justify-between">
                              <span>{child.label}</span>
                              <span className="text-[10px] font-medium uppercase tracking-wider bg-[#F5A623]/10 text-[#F5A623]/70 px-2 py-0.5 rounded-full border border-[#F5A623]/20">
                                Coming Soon
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
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
