/**
 * Sticky CTA Component - LeadCatalyst
 * 
 * Bottom sticky bar with call-to-action
 * Shows after scrolling past hero section
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 600px (past hero)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-lg"
        >
          <div className="container py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-foreground">
                  Ready to accelerate your growth?
                </p>
                <p className="text-xs text-muted-foreground">
                  Get qualified leads delivered to your CRM.
                </p>
              </div>
              <p className="sm:hidden text-sm font-medium text-foreground">
                Start generating leads today
              </p>

              <div className="flex items-center gap-3">
                <Button
                  onClick={scrollToContact}
                  className="bg-[#F5A623] hover:bg-[#D4880F] text-background font-semibold px-6 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
