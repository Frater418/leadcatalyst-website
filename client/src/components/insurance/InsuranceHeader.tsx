import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function InsuranceHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[oklch(0.12_0.015_250)]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/insurance">
            <a className="flex items-center gap-2 group">
              <span className="text-xl md:text-2xl font-display font-bold text-white">
                LeadCatalyst
              </span>
              <span className="text-xl md:text-2xl font-display italic text-[#F5A623]">
                Insurance
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/insurance">
              <a className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Home
              </a>
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-[oklch(0.16_0.015_250)] border border-white/10 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link href="/insurance/for-carriers">
                      <a
                        className="block px-4 py-3 hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-sm font-medium text-white">For Carriers & Distributors</div>
                        <p className="text-xs text-white/60 mt-1">Enterprise-grade lead solutions at scale</p>
                      </a>
                    </Link>
                    <Link href="/insurance/for-agents">
                      <a
                        className="block px-4 py-3 hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="text-sm font-medium text-white">For Agents & Producers</div>
                        <p className="text-xs text-white/60 mt-1">Turnkey lead engine for independent agents</p>
                      </a>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/insurance/platform">
              <a className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Platform
              </a>
            </Link>

            <Link href="/insurance/lead-quality">
              <a className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Lead Quality
              </a>
            </Link>

            <Link href="/insurance/pricing">
              <a className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Pricing
              </a>
            </Link>

            <Link href="/insurance/how-it-works">
              <a className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                How It Works
              </a>
            </Link>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1">
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[200px] bg-[oklch(0.16_0.015_250)] border border-white/10 rounded-lg shadow-xl overflow-hidden"
                  >
                    <Link href="/insurance/compliance">
                      <a
                        className="block px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Compliance
                      </a>
                    </Link>
                    <Link href="/insurance/case-studies">
                      <a
                        className="block px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        Case Studies
                      </a>
                    </Link>
                    <Link href="/insurance/faq">
                      <a
                        className="block px-4 py-3 text-sm text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        FAQ
                      </a>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/insurance/contact">
              <a className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/">
              <a className="text-sm font-medium text-[#F5A623] hover:text-[#FFD93D] transition-colors">
                ← Back to LeadCatalyst
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 -mr-2 text-white hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            className="lg:hidden bg-[oklch(0.12_0.015_250)]/98 backdrop-blur-md border-b border-white/10"
          >
            <nav className="container py-6 flex flex-col gap-4">
              <Link href="/insurance">
                <a
                  className="text-lg font-medium text-white hover:text-[#F5A623] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
              </Link>

              <div>
                <div className="text-lg font-medium text-white py-2">Solutions</div>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link href="/insurance/for-carriers">
                    <a
                      className="text-sm text-white/70 hover:text-[#F5A623] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      For Carriers & Distributors
                    </a>
                  </Link>
                  <Link href="/insurance/for-agents">
                    <a
                      className="text-sm text-white/70 hover:text-[#F5A623] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      For Agents & Producers
                    </a>
                  </Link>
                </div>
              </div>

              <Link href="/insurance/platform">
                <a
                  className="text-lg font-medium text-white hover:text-[#F5A623] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Platform
                </a>
              </Link>

              <Link href="/insurance/lead-quality">
                <a
                  className="text-lg font-medium text-white hover:text-[#F5A623] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Lead Quality
                </a>
              </Link>

              <Link href="/insurance/pricing">
                <a
                  className="text-lg font-medium text-white hover:text-[#F5A623] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
              </Link>

              <Link href="/insurance/how-it-works">
                <a
                  className="text-lg font-medium text-white hover:text-[#F5A623] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  How It Works
                </a>
              </Link>

              <div>
                <div className="text-lg font-medium text-white py-2">Resources</div>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link href="/insurance/compliance">
                    <a
                      className="text-sm text-white/70 hover:text-[#F5A623] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Compliance
                    </a>
                  </Link>
                  <Link href="/insurance/case-studies">
                    <a
                      className="text-sm text-white/70 hover:text-[#F5A623] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Case Studies
                    </a>
                  </Link>
                  <Link href="/insurance/faq">
                    <a
                      className="text-sm text-white/70 hover:text-[#F5A623] transition-colors py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAQ
                    </a>
                  </Link>
                </div>
              </div>

              <Link href="/insurance/contact">
                <a
                  className="text-lg font-medium text-white hover:text-[#F5A623] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </Link>

              <div className="pt-4 mt-2 border-t border-white/10">
                <Link href="/">
                  <a
                    className="text-sm font-medium text-[#F5A623] hover:text-[#FFD93D] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ← Back to LeadCatalyst
                  </a>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
