/**
 * Footer Component - LeadCatalyst
 *
 * Professional footer with links and branding
 * Matches the dark theme aesthetic
 */

import { Link } from "wouter";
import { Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Our Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  verticals: [
    { label: "Insurance", href: "/insurance", external: false, active: true },
    { label: "Legal / MVA", href: "/legal", external: false, active: false },
    { label: "Financial Services", href: "/financial", external: false, active: false },
    { label: "Real Estate", href: "/realestate", external: false, active: false },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F5A623] to-[#C4841D] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-background">
                  <path
                    fill="currentColor"
                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-foreground">Lead</span>
                <span className="text-[#F5A623]">Catalyst</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Strategic lead generation and performance marketing for modern businesses. 
              Verified. Qualified. Guaranteed.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@leadcatalyst.com"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+17542092098"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/auranex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Verticals
            </h3>
            <ul className="space-y-3">
              {footerLinks.verticals.map((link) => (
                <li key={link.label}>
                  {link.active ? (
                    <Link href={link.href}>
                      <a className="text-sm text-muted-foreground hover:text-[#F5A623] transition-colors">
                        {link.label}
                      </a>
                    </Link>
                  ) : (
                    <span className="text-sm text-muted-foreground/50 flex items-center gap-2">
                      {link.label}
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} LeadCatalyst. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>A</span>
            <a
              href="https://auranex.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5A623] hover:underline"
            >
              Auranex
            </a>
            <span>Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
