/**
 * Sticky CTA Component - LeadCatalyst
 *
 * Bottom sticky bar with call-to-action
 * Shows after scrolling past hero section
 * Opens GHL Modal on click
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalMode } from "@/components/ui/ghl-modal";

interface StickyCTAProps {
  onOpenModal: (mode: ModalMode) => void;
}

export function StickyCTA({ onOpenModal }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (past hero)
      setIsVisible(window.scrollY > 600 && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-0 right-0 z-40 p-2 sm:p-3 md:p-4 pointer-events-none safe-area-inset-bottom"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-card/95 backdrop-blur-md border border-border rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 shadow-2xl pointer-events-auto">
              <div className="flex items-center justify-between gap-2 sm:gap-4">
                {/* Left Text - Hidden on very small screens */}
                <p className="hidden sm:block text-foreground text-xs sm:text-sm md:text-base font-medium">
                  Ready to accelerate your growth?{" "}
                  <span className="text-muted-foreground hidden md:inline">Get qualified leads today.</span>
                </p>

                {/* CTA Button - Full width on mobile */}
                <div className="flex items-center gap-2 flex-1 sm:flex-none">
                  <Button
                    variant="amber"
                    className="flex-1 sm:flex-none px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg shadow-gold group"
                    onClick={() => onOpenModal("form")}
                  >
                    Get Qualified Leads
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <button
                    onClick={() => setIsDismissed(true)}
                    className="p-2.5 sm:p-2 -mr-1 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Dismiss"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
