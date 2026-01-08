/**
 * Hero Section - LeadCatalyst
 *
 * Full-viewport hero with abstract background image
 * Asymmetric layout with text left, live activity feed right
 * Gold accent buttons, serif italic headline emphasis
 * Opens GHL Modal on CTA click
 */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Scale, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { ModalMode } from "@/components/ui/ghl-modal";

const stats = [
  { icon: Shield, value: "100%", label: "Verified Leads" },
  { icon: TrendingUp, value: "3x", label: "Average ROI" },
  { icon: Users, value: "500+", label: "Clients Served" },
];

// Live activity feed data - anonymized for authenticity
const activityData = [
  { type: "legal", action: "Lead delivered", desc: "Personal Injury Case", location: "Miami, FL" },
  { type: "insurance", action: "Lead qualified", desc: "Term Life Policy", location: "Austin, TX" },
  { type: "legal", action: "Lead verified", desc: "Auto Accident Claim", location: "Chicago, IL" },
  { type: "insurance", action: "Lead delivered", desc: "Whole Life Inquiry", location: "Denver, CO" },
  { type: "legal", action: "Lead delivered", desc: "Slip & Fall Case", location: "Los Angeles, CA" },
  { type: "insurance", action: "Lead qualified", desc: "Family Coverage", location: "Phoenix, AZ" },
  { type: "legal", action: "Lead verified", desc: "Workplace Injury", location: "New York, NY" },
  { type: "insurance", action: "Lead delivered", desc: "Senior Life Plan", location: "Seattle, WA" },
  { type: "legal", action: "Lead qualified", desc: "Medical Malpractice", location: "Houston, TX" },
  { type: "insurance", action: "Lead verified", desc: "Universal Life", location: "Atlanta, GA" },
  { type: "legal", action: "Lead delivered", desc: "Product Liability", location: "Boston, MA" },
  { type: "insurance", action: "Lead delivered", desc: "Final Expense", location: "San Diego, CA" },
];

interface HeroSectionProps {
  onOpenModal: (mode: ModalMode) => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-abstract.webp"
          alt=""
          className="w-full h-full object-cover opacity-60"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              <span className="text-sm font-medium text-[#F5A623]">
                Strategic Growth Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Growth{" "}
              <span className="font-display italic text-[#F5A623]">Engine</span>
              <br />
              for Modern Business
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Strategic lead generation and performance marketing that drives
              measurable results. We help businesses scale through data-driven
              digital campaigns and qualified lead acquisition.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => onOpenModal("form")}
                variant="amber"
                size="lg"
                className="px-8 h-12 text-base shadow-gold group"
              >
                <Shield className="w-5 h-5 mr-2" />
                Get Qualified Leads
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-border hover:border-[#F5A623]/50 hover:bg-[#F5A623]/5 h-12 text-base"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#F5A623]" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <LiveActivityFeed />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#F5A623]"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Live Activity Feed Component - Items appear one by one at the top
function LiveActivityFeed() {
  const [items, setItems] = useState<Array<{ id: number; type: string; action: string; desc: string; location: string; time: string }>>([]);
  const [dataIndex, setDataIndex] = useState(0);
  const [itemCounter, setItemCounter] = useState(0);

  // Initialize with first few items
  useEffect(() => {
    const initialItems = [];
    for (let i = 0; i < 5; i++) {
      initialItems.push({
        ...activityData[i],
        id: i,
        time: getTimeAgo(i),
      });
    }
    setItems(initialItems);
    setDataIndex(5);
    setItemCounter(5);
  }, []);

  // Add new item at random intervals (2-6 seconds) for realism
  useEffect(() => {
    const scheduleNextItem = () => {
      const randomDelay = 2000 + Math.random() * 4000; // 2-6 seconds
      return setTimeout(() => {
        setItems((prev) => {
          const newItem = {
            ...activityData[dataIndex % activityData.length],
            id: itemCounter,
            time: "Just now",
          };

          // Update times for existing items
          const updatedItems = prev.map((item, idx) => ({
            ...item,
            time: getTimeAgo(idx + 1),
          }));

          // Add new item at top, keep exactly 5 items
          return [newItem, ...updatedItems].slice(0, 5);
        });

        setDataIndex((prev) => (prev + 1) % activityData.length);
        setItemCounter((prev) => prev + 1);
      }, randomDelay);
    };

    const timeoutId = scheduleNextItem();
    return () => clearTimeout(timeoutId);
  }, [dataIndex, itemCounter]);

  const getTimeAgo = (index: number): string => {
    const times = ["Just now", "8s ago", "23s ago", "41s ago", "1m ago", "2m ago"];
    return times[Math.min(index, times.length - 1)];
  };

  const getIcon = (type: string) => {
    return type === "legal" ? Scale : ShieldCheck;
  };

  const getActionColor = (action: string) => {
    if (action.includes("delivered")) return "#22C55E";
    if (action.includes("qualified")) return "#F5A623";
    return "#3B82F6";
  };

  return (
    <div className="relative">
      {/* Main Card */}
      <div className="bg-gradient-card rounded-2xl border border-border p-6 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#22C55E] animate-ping" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Live Activity
            </span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] font-medium">
            LIVE
          </span>
        </div>

        {/* Activity List - Fixed height container for stability */}
        <div className="h-[280px] sm:h-[310px] md:h-[340px] overflow-hidden mb-5">
          <div className="space-y-2">
            <AnimatePresence initial={false} mode="popLayout">
              {items.map((item, index) => {
                const Icon = getIcon(item.type);
                const isNew = index === 0;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -30 }}
                    animate={{
                      opacity: 1 - index * 0.1,
                      x: 0,
                    }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                      layout: { duration: 0.3 }
                    }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                    style={{
                      borderColor: isNew ? "rgba(34, 197, 94, 0.3)" : undefined,
                      backgroundColor: isNew ? "rgba(34, 197, 94, 0.05)" : undefined,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.type === "legal" ? "#F5A623" : "#3B82F6"}15` }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: item.type === "legal" ? "#F5A623" : "#3B82F6" }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-medium px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: `${getActionColor(item.action)}15`,
                            color: getActionColor(item.action)
                          }}
                        >
                          {item.action}
                        </span>
                        {isNew && (
                          <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-[#22C55E]/20 text-[#22C55E] font-medium"
                          >
                            NEW
                          </motion.span>
                        )}
                      </div>
                      <p className="text-sm text-foreground font-medium truncate mt-0.5">
                        {item.desc}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.location}</p>
                    </div>
                    <div className="text-xs text-muted-foreground shrink-0 tabular-nums">
                      {item.time}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-[#22C55E]">847</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </div>
            <div>
              <div className="text-lg font-bold text-[#F5A623]">98.2%</div>
              <div className="text-xs text-muted-foreground">Verified</div>
            </div>
            <div>
              <div className="text-lg font-bold text-foreground">&lt;30s</div>
              <div className="text-xs text-muted-foreground">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        className="absolute -top-3 -right-3 bg-[#22C55E] text-white px-3 py-1.5 rounded-lg font-semibold text-xs shadow-lg flex items-center gap-1.5"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        Verified
      </motion.div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-[#22C55E]/5 rounded-3xl blur-2xl -z-10" />
    </div>
  );
}
