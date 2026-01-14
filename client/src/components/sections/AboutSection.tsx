/**
 * About Section - LeadCatalyst
 *
 * Company introduction - authentic storytelling approach
 * Focus on concrete expertise rather than generic values
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Scale, ShieldCheck, Building2, TrendingUp } from "lucide-react";

// Concrete expertise areas with real focus
const expertise = [
  {
    icon: Scale,
    vertical: "Legal / MVA",
    focus: "Personal injury & auto accident leads with medical treatment verification",
    link: "/legal",
    active: true,
  },
  {
    icon: ShieldCheck,
    vertical: "Life Insurance",
    focus: "Pre-qualified leads filtered for underwriting fit and purchase intent",
    link: "/insurance",
    active: true,
  },
  {
    icon: Building2,
    vertical: "Financial Services",
    focus: "Lending, credit, and wealth management lead acquisition",
    link: null,
    active: false,
  },
  {
    icon: TrendingUp,
    vertical: "More Verticals",
    focus: "Real estate, B2B services, and custom solutions",
    link: null,
    active: false,
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5A623]/5 to-transparent -z-10" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-40 left-10 w-72 h-72 bg-[#F5A623]/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-56 h-56 bg-[#22C55E]/5 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
              <span className="text-sm font-medium text-[#F5A623]">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Your Strategic Partner for{" "}
              <span className="font-display italic text-[#F5A623]">Sustainable Growth</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              LeadCatalyst is a strategic lead generation and performance marketing agency 
              founded by industry experts with decades of combined experience. We specialize 
              in helping businesses across multiple verticals acquire high-quality leads 
              and scale their operations through data-driven digital strategies.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As a multi-vertical holding company, we bring specialized expertise to each 
              industry we serve — from legal and insurance to financial services and real 
              estate. Our approach combines deep market knowledge with cutting-edge 
              marketing technology to deliver results that matter.
            </p>

            {/* Mission Statement */}
            <motion.div
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-[#F5A623]/30 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">Our Mission</h3>
              <p className="text-muted-foreground italic relative z-10">
                "To empower businesses with qualified leads and strategic marketing
                solutions that drive predictable, scalable growth."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Content - Expertise Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Our Verticals
            </h3>
            <div className="space-y-3">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.vertical}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                >
                  {item.active && item.link ? (
                    <Link href={item.link}>
                      <a className="block">
                        <motion.div
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-card border border-[#F5A623]/30 hover:border-[#F5A623] transition-all group relative overflow-hidden"
                          whileHover={{ x: 4, transition: { duration: 0.2 } }}
                        >
                          {/* Hover Glow */}
                          <div className="absolute inset-0 bg-[#F5A623]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-[#F5A623]/20 flex items-center justify-center shrink-0 group-hover:bg-[#F5A623]/30 transition-colors relative z-10"
                            whileHover={{ scale: 1.1 }}
                          >
                            <item.icon className="w-5 h-5 text-[#F5A623]" />
                          </motion.div>
                          <div className="flex-1 relative z-10">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-foreground group-hover:text-[#F5A623] transition-colors">{item.vertical}</span>
                              <motion.span
                                className="text-xs px-2 py-0.5 rounded-full bg-[#22C55E]/10 text-[#22C55E] font-medium"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                Active
                              </motion.span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.focus}</p>
                          </div>
                          <svg className="w-5 h-5 text-[#F5A623] shrink-0 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </a>
                    </Link>
                  ) : (
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-muted-foreground">{item.vertical}</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                            Coming Soon
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground/70">{item.focus}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Holding Company Note */}
            <div className="mt-6 p-4 rounded-xl bg-background border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">LeadCatalyst</span> operates as a holding company with dedicated platforms for each vertical, ensuring specialized expertise and focused service delivery.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
