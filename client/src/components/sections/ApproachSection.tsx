/**
 * Approach Section - LeadCatalyst
 * 
 * Process/methodology showcase
 * Step-by-step visual with connecting lines
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, TrendingUp, ArrowRightLeft, Code2 } from "lucide-react";
import { SiSalesforce, SiHubspot, SiZapier } from "react-icons/si";
import type { IconType } from "react-icons";

// Custom GoHighLevel icon (based on their brand)
const GoHighLevelIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.18l5.45 2.73L12 9.64 6.55 6.91 12 4.18zM6 8.27l5 2.5v7.96l-5-2.5V8.27zm12 7.96l-5 2.5V10.77l5-2.5v7.96z" />
  </svg>
);

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin with a comprehensive analysis of your business, target market, and competitive landscape to identify growth opportunities.",
    details: ["Market Research", "Competitor Analysis", "Audience Profiling", "Goal Setting"],
    accent: "#6B7280", // Gray - starting point
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop a customized lead generation and marketing strategy tailored to your specific objectives.",
    details: ["Channel Selection", "Budget Planning", "KPI Definition", "Timeline Creation"],
    accent: "#D4880F", // Darker gold - planning
  },
  {
    icon: Rocket,
    number: "03",
    title: "Campaign Execution",
    description:
      "Our team implements multi-channel campaigns with precision, continuously monitoring performance and making real-time adjustments.",
    details: ["Campaign Launch", "A/B Testing", "Quality Monitoring", "Lead Delivery"],
    accent: "#F5A623", // Brand gold - execution
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimization & Scaling",
    description:
      "We analyze results, optimize for better performance, and scale successful campaigns to maximize your return on investment.",
    details: ["Performance Analysis", "ROI Optimization", "Scale Strategies", "Reporting"],
    accent: "#22C55E", // Green - success/growth
  },
];

export function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="py-24 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Diagonal Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)" }} />

      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/about-team.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#22C55E]/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
            <span className="text-sm font-medium text-[#F5A623]">Our Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A Proven{" "}
            <span className="font-display italic text-[#F5A623]">Methodology</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our systematic approach ensures consistent results and transparent 
            communication throughout every engagement.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) - Color gradient matching step progression */}
          <div className="hidden lg:block absolute top-28 left-[12.5%] right-[12.5%]">
            <div
              className="h-1 rounded-full"
              style={{
                background: "linear-gradient(to right, #6B7280, #D4880F, #F5A623, #22C55E)",
              }}
            />
            {/* Animated Glow on Line */}
            <motion.div
              className="absolute top-0 h-1 w-24 rounded-full blur-sm"
              style={{
                background: "linear-gradient(to right, transparent, #F5A623, transparent)",
              }}
              animate={{
                left: ["0%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative"
              >
                {/* Step Card */}
                <div
                  className="h-full p-6 rounded-xl bg-gradient-card border border-border hover:border-opacity-50 transition-all duration-300 group overflow-hidden relative hover:shadow-lg"
                  style={{
                    borderColor: `${step.accent}30`,
                    ["--accent" as string]: step.accent,
                  }}
                >
                  {/* Top Accent Bar with Glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: step.accent }}
                  />
                  <div
                    className="absolute top-0 left-0 right-0 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: step.accent }}
                  />

                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-6 mt-2">
                    <motion.span
                      className="text-4xl font-bold transition-colors"
                      style={{ color: `${step.accent}40` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.span>
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${step.accent}15` }}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: step.accent }} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.span
                        key={detail}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.15 + detailIndex * 0.05 }}
                        className="text-xs px-2 py-1 rounded transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: `${step.accent}10`,
                          color: step.accent,
                        }}
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CRM Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 p-8 md:p-10 rounded-2xl bg-gradient-card border border-[#F5A623]/20 relative overflow-hidden"
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#F5A623]/10 blur-3xl -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Header with Icon */}
          <div className="flex flex-col items-center mb-8">
            <motion.div
              className="w-14 h-14 rounded-xl bg-[#F5A623]/10 border border-[#F5A623]/30 flex items-center justify-center mb-4"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(245, 166, 35, 0)",
                  "0 0 20px 5px rgba(245, 166, 35, 0.2)",
                  "0 0 0 0 rgba(245, 166, 35, 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <ArrowRightLeft className="w-7 h-7 text-[#F5A623]" />
              </motion.div>
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Seamless Integration
            </h3>
            <p className="text-muted-foreground max-w-xl text-center">
              Our lead delivery system integrates with all major CRMs and marketing
              platforms. Real-time delivery directly to your existing systems.
            </p>
          </div>

          {/* Integration Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: "Salesforce", icon: SiSalesforce, color: "#00A1E0", url: "https://www.salesforce.com" },
              { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", url: "https://www.hubspot.com" },
              { name: "Go High Level", icon: GoHighLevelIcon, color: "#22C55E", url: "https://www.gohighlevel.com" },
              { name: "Zapier", icon: SiZapier, color: "#FF4F00", url: "https://zapier.com" },
              { name: "Custom API", icon: Code2, color: "#F5A623", url: null },
            ].map((tool, index) => (
              <motion.a
                key={tool.name}
                href={tool.url || undefined}
                target={tool.url ? "_blank" : undefined}
                rel={tool.url ? "nofollow noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className={`group flex flex-col items-center p-4 rounded-xl bg-background/50 border border-border transition-all duration-300 ${tool.url ? "cursor-pointer" : "cursor-default"}`}
                style={{
                  ["--tool-color" as string]: tool.color,
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3 transition-colors relative"
                  style={{ backgroundColor: `${tool.color}15` }}
                  whileHover={{
                    backgroundColor: `${tool.color}25`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                    style={{ backgroundColor: `${tool.color}30` }}
                  />
                  <tool.icon
                    className="w-6 h-6 relative z-10 transition-transform group-hover:scale-110"
                    style={{ color: tool.color }}
                  />
                </motion.div>
                <span className="text-sm font-medium text-foreground text-center group-hover:text-[var(--tool-color)] transition-colors">
                  {tool.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Bottom Note */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            + Support for webhooks, email parsing, and custom integrations
          </p>
        </motion.div>
      </div>

      {/* Diagonal Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 100%)" }} />
    </section>
  );
}
