"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { GHL_FORM_URL, GHL_CALENDAR_URL } from "@/config/ghl";

export type ModalMode = "form" | "calendar";

interface GHLModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: ModalMode;
}

export function GHLModal({ isOpen, onClose, mode }: GHLModalProps) {
  const url = mode === "form" ? GHL_FORM_URL : GHL_CALENDAR_URL;

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  // Show placeholder message if URL is not configured
  const hasUrl = url && url.trim() !== "";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Dark Glass Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl h-[85vh] sm:h-[80vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4 bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#F5A623] animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              {mode === "form" ? "Request Information" : "Schedule a Call"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="h-full pt-16">
          {hasUrl ? (
            <iframe
              src={url}
              className="w-full h-full border-0"
              title={mode === "form" ? "Contact Form" : "Schedule Calendar"}
              allow="camera; microphone; autoplay; encrypted-media"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center px-6">
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/10 flex items-center justify-center mb-6">
                <div className="w-8 h-8 border-2 border-[#F5A623]/30 border-t-[#F5A623] rounded-full animate-spin" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {mode === "form" ? "Form" : "Calendar"} Coming Soon
              </h3>
              <p className="text-muted-foreground max-w-sm">
                The {mode === "form" ? "contact form" : "booking calendar"} URL has not been configured yet.
                Please check back soon or contact us directly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
