/**
 * Industries Section - LeadCatalyst
 * 
 * Showcase of industry verticals served
 * Card grid with icons and hover effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Shield, Building2, Landmark, Home, Briefcase } from "lucide-react";

const industries = [
  {
    icon: Scale,
    title: "Legal",
    subtitle: "Personal Injury & MVA",
    description: "High-value case leads for personal injury law firms with verified injury and medical treatment confirmation.",
    link: "https://legal.leadcatalyst.com",
    active: true,
  },
  {
    icon: Shield,
    title: "Insurance",
    subtitle: "Life Insurance Leads",
    description: "Carrier-grade life insurance leads pre-qualified for underwriting fit, affordability, and verified purchase intent.",
    link: "https://insurance.leadcatalyst.com",
    active: true,
  },
  {
    icon: Landmark,
    title: "Financial Services",
    subtitle: "Lending & Credit",
    description: "Pre-qualified financial product leads for lenders, credit services, and financial advisors.",
    link: null,
    active: false,
  },
  {
    icon: Home,
    title: "Real Estate",
    subtitle: "Residential & Commercial",
    description: "Motivated buyer and seller leads for real estate agents, brokers, and investors.",
    link: null,
    active: false,
  },
  {
    icon: Building2,
    title: "Wealth Management",
    subtitle: "Investment & Advisory",
    description: "High-net-worth individual leads for wealth managers and financial planners.",
    link: null,
    active: false,
  },
  {
    icon: Briefcase,
    title: "B2B Services",
    subtitle: "Professional Services",
    description: "Decision-maker leads for B2B service providers and enterprise solutions.",
    link: null,
    active: false,
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
            Multi-Vertical{" "}
            <span className="font-display italic text-[#F5A623]">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As a holding company, we bring specialized knowledge and proven strategies 
            to each industry vertical we serve.
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
                <a
                  href={industry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <IndustryCard industry={industry} isInView={isInView} />
                </a>
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
  return (
    <div
      className={`h-full p-6 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
        industry.active
          ? "bg-gradient-card border-[#F5A623]/30 hover:border-[#F5A623] hover:shadow-xl hover:shadow-[#F5A623]/10 cursor-pointer"
          : "bg-card/50 border-border hover:border-border/80"
      }`}
    >
      {/* Hover Glow for Active */}
      {industry.active && (
        <div className="absolute inset-0 bg-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="flex items-start justify-between mb-4 relative z-10">
        <motion.div
          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
            industry.active ? "bg-[#F5A623]/20 group-hover:bg-[#F5A623]/30" : "bg-muted"
          }`}
          whileHover={industry.active ? { scale: 1.1, rotate: [0, -5, 5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <industry.icon
            className={`w-6 h-6 ${
              industry.active ? "text-[#F5A623]" : "text-muted-foreground"
            }`}
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

      <h3 className={`text-lg font-bold mb-1 relative z-10 transition-colors ${industry.active ? "text-foreground group-hover:text-[#F5A623]" : "text-muted-foreground"}`}>
        {industry.title}
      </h3>
      <p className={`text-sm mb-3 relative z-10 ${industry.active ? "text-[#F5A623]" : "text-muted-foreground/70"}`}>
        {industry.subtitle}
      </p>
      <p className={`text-sm leading-relaxed relative z-10 ${industry.active ? "text-muted-foreground" : "text-muted-foreground/60"}`}>
        {industry.description}
      </p>

      {industry.active && industry.link && (
        <div className="mt-4 pt-4 border-t border-border relative z-10">
          <span className="text-sm text-[#F5A623] font-medium group-hover:translate-x-1 inline-block transition-transform">
            Visit Platform →
          </span>
        </div>
      )}
    </div>
  );
}
