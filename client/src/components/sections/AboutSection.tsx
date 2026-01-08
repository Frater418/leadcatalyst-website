/**
 * About Section - LeadCatalyst
 * 
 * Company introduction with mission and values
 * Two-column layout with text and visual element
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Users, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is designed to deliver measurable outcomes and ROI.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage cutting-edge technology and data-driven insights.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, aligned with your goals.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Full visibility into campaign performance and lead quality.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5A623]/5 to-transparent -z-10" />
      
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
            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground italic">
                "To empower businesses with qualified leads and strategic marketing 
                solutions that drive predictable, scalable growth."
              </p>
            </div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-card border border-border hover:border-[#F5A623]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#F5A623]/10 flex items-center justify-center mb-4 group-hover:bg-[#F5A623]/20 transition-colors">
                    <value.icon className="w-6 h-6 text-[#F5A623]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="mt-8 p-6 rounded-xl bg-[#F5A623]/5 border border-[#F5A623]/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#F5A623]">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#F5A623]">5</div>
                  <div className="text-sm text-muted-foreground">Industry Verticals</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#F5A623]">$50M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
