/**
 * Hero Section - LeadCatalyst
 * 
 * Full-viewport hero with abstract background image
 * Asymmetric layout with text left, floating card right
 * Gold accent buttons, serif italic headline emphasis
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Shield, value: "100%", label: "Verified Leads" },
  { icon: TrendingUp, value: "3x", label: "Average ROI" },
  { icon: Users, value: "500+", label: "Clients Served" },
];

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          src="/images/hero-abstract.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
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
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
              <span className="text-sm font-medium text-[#F5A623]">
                Strategic Growth Partner
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              The Growth{" "}
              <span className="font-display italic text-[#F5A623]">Engine</span>
              <br />
              for Modern Business
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Strategic lead generation and performance marketing that drives
              measurable results. We help businesses scale through data-driven
              digital campaigns and qualified lead acquisition.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#F5A623] hover:bg-[#D4880F] text-background font-semibold px-8 h-12 text-base group"
              >
                Get Started
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
            <div className="flex flex-wrap gap-6 md:gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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

          {/* Right Content - Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-card rounded-2xl border border-border p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                    <span className="text-sm font-medium text-muted-foreground">
                      Live Performance
                    </span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623] font-medium">
                    REAL-TIME
                  </span>
                </div>

                {/* Score Display */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-[#F5A623] mb-4">
                    <span className="text-4xl font-bold text-[#F5A623]">96</span>
                  </div>
                  <div className="text-lg font-semibold text-foreground">
                    Lead Quality Score
                  </div>
                  <div className="text-sm text-[#22C55E] flex items-center justify-center gap-1 mt-1">
                    <TrendingUp className="w-4 h-4" />
                    High Conversion Potential
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {[
                    { label: "Qualification Rate", value: "94%", color: "#22C55E" },
                    { label: "Response Time", value: "<2h", color: "#F5A623" },
                    { label: "Client Satisfaction", value: "4.9/5", color: "#22C55E" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#F5A623] text-background px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                Exclusive Leads
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-[#F5A623]/5 rounded-3xl blur-2xl -z-10" />
            </div>
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
