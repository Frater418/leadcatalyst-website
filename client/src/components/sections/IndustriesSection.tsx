/**
 * Industries Section - LeadCatalyst
 * 
 * Showcase of industry verticals served
 * Card grid with icons and hover effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Scale, Shield, Building2, Landmark, Home, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Scale,
    title: "Legal",
    subtitle: "Practice-Area Match. GDPR-Compliant.",
    description: "Qualified legal leads with practice-area verification and decision-maker authority confirmation.",
    link: "/legal",
    active: true,
    color: "#2563EB", // Justice Blue
  },
  {
    icon: Shield,
    title: "Insurance",
    subtitle: "AML-Verified. Carrier-Grade Qualification.",
    description: "Pre-qualified insurance leads with compliance screening and verified purchase intent.",
    link: "/insurance",
    active: true,
    color: "#0D9488", // Shield Teal
  },
  {
    icon: Landmark,
    title: "Financial Services",
    subtitle: "FCA-Compliant. HNW-Qualified.",
    description: "Regulatory-aware prospecting for financial advisors, lenders, and wealth services.",
    link: "/financial",
    active: false,
    color: "#059669", // Prosperity Green
  },
  {
    icon: Building2,
    title: "Wealth Management",
    subtitle: "Ultra-Premium Targeting. Relationship-Ready.",
    description: "Wealth-verified targeting for private banking, family offices, and HNW advisory.",
    link: "/wealth",
    active: false,
    color: "#059669", // Prosperity Green
  },
  {
    icon: Home,
    title: "Real Estate",
    subtitle: "Active Buying Intent. Decision-Timeline.",
    description: "Pipeline-consistent leads with verified buying intent and decision timelines.",
    link: "/realestate",
    active: false,
    color: "#D97706", // Property Amber
  },
  {
    icon: Briefcase,
    title: "B2B Services",
    subtitle: "Decision-Maker Access. Enterprise-Ready.",
    description: "Qualified B2B leads with authority verification and budget confirmation.",
    link: "/b2b",
    active: false,
    color: "#F5A623", // Gold
  },
];

export function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent - Animated */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#F5A623]/5 rounded-full blur-3xl -translate-y-1/2 -z-10"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-[#22C55E]/5 rounded-full blur-3xl -z-10"
        animate={{ scale: [1.2, 1, 1.2], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
            <span className="text-sm font-medium text-[#F5A623]">Industries We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            We Specialize in{" "}
            <span className="font-display italic text-[#F5A623]">Regulated Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each vertical has unique compliance requirements and qualification criteria.
            We've built vertical-specific frameworks for every industry we serve.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              whileHover={industry.active ? { y: -6, transition: { duration: 0.3 } } : {}}
            >
              {industry.active && industry.link ? (
                <Link href={industry.link}>
                  <a className="block h-full">
                    <IndustryCard industry={industry} isInView={isInView} />
                  </a>
                </Link>
              ) : (
                <IndustryCard industry={industry} isInView={isInView} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Note about verticals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-[#F5A623]">●</span> Active verticals have dedicated 
            platforms. Additional verticals launching soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, isInView }: { industry: typeof industries[0]; isInView: boolean }) {
  const verticalColor = industry.color;

  return (
    <div
      className={`h-full p-6 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
        industry.active
          ? "bg-gradient-card cursor-pointer hover:shadow-xl"
          : "bg-card/50 border-border hover:border-border/80"
      }`}
      style={{
        borderColor: industry.active ? `${verticalColor}30` : undefined,
        ["--vertical-color" as string]: verticalColor,
      }}
    >
      {/* Top Accent Bar */}
      {industry.active && (
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: verticalColor }}
        />
      )}

      {/* Hover Glow for Active */}
      {industry.active && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: `${verticalColor}08` }}
        />
      )}

      <div className="flex items-start justify-between mb-4 relative z-10 mt-1">
        <motion.div
          className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors"
          style={{
            backgroundColor: industry.active ? `${verticalColor}20` : undefined,
          }}
          whileHover={industry.active ? { scale: 1.1, rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <industry.icon
            className={`w-6 h-6 ${!industry.active ? "text-muted-foreground" : ""}`}
            style={{ color: industry.active ? verticalColor : undefined }}
          />
        </motion.div>
        {industry.active && (
          <motion.span
            className="text-xs px-2 py-1 rounded-full bg-[#22C55E]/10 text-[#22C55E] font-medium"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Active
          </motion.span>
        )}
        {!industry.active && (
          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground font-medium">
            Coming Soon
          </span>
        )}
      </div>

      <h3
        className={`text-lg font-bold mb-1 relative z-10 transition-colors ${industry.active ? "text-foreground" : "text-muted-foreground"}`}
        style={{ ["--hover-color" as string]: verticalColor }}
      >
        <span className="group-hover:text-[var(--vertical-color)] transition-colors">
          {industry.title}
        </span>
      </h3>
      <p
        className={`text-sm mb-3 relative z-10 ${!industry.active ? "text-muted-foreground/70" : ""}`}
        style={{ color: industry.active ? verticalColor : undefined }}
      >
        {industry.subtitle}
      </p>
      <p className={`text-sm leading-relaxed relative z-10 ${industry.active ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
        {industry.description}
      </p>

      {industry.active && industry.link && (
        <div className="mt-4 pt-4 border-t border-border relative z-10">
          <span
            className="text-sm font-medium group-hover:translate-x-1 inline-block transition-transform"
            style={{ color: verticalColor }}
          >
            Explore {industry.title} Lead Generation →
          </span>
        </div>
      )}
    </div>
  );
}
