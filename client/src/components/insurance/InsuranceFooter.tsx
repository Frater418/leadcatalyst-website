import { Link } from 'wouter';
import { Phone, Mail } from 'lucide-react';

export default function InsuranceFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.12_0.015_250)] border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/insurance">
              <a className="inline-flex items-center gap-2 group">
                <span className="text-xl font-display font-bold text-white">
                  LeadCatalyst
                </span>
                <span className="text-xl font-display italic text-[oklch(0.78_0.15_75)]">
                  Insurance
                </span>
              </a>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Carrier-grade insurance leads with underwriting-fit scoring, TCPA compliance, and real-time delivery.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+17542092098"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[oklch(0.78_0.15_75)] transition-colors"
              >
                <Phone size={16} />
                +1 (754) 209-2098
              </a>
              <a
                href="mailto:insurance@leadcatalyst.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[oklch(0.78_0.15_75)] transition-colors"
              >
                <Mail size={16} />
                insurance@leadcatalyst.com
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/insurance/for-carriers">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    For Carriers & Distributors
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/for-agents">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    For Agents & Producers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/platform">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Platform & Technology
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/lead-quality">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Lead Quality Standards
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/pricing">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Pricing
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/insurance/how-it-works">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    How It Works
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/compliance">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    TCPA & Compliance
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/case-studies">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Case Studies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/faq">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    FAQ
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/insurance/contact">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Contact & Demo
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    About LeadCatalyst
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="text-sm text-white/60 hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} LeadCatalyst Insurance. A division of{' '}
              <a
                href="https://auranex.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.78_0.15_75)] hover:text-[oklch(0.85_0.12_75)] transition-colors"
              >
                Auranex, LLC
              </a>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-white/40">SOC 2 Certified</span>
              <span className="text-xs text-white/40">TCPA Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
