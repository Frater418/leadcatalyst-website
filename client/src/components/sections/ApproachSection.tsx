/**
 * Approach Section - LeadCatalyst
 * 
 * Process/methodology showcase
 * Step-by-step visual with connecting lines
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin with a comprehensive analysis of your business, target market, and competitive landscape to identify growth opportunities.",
    details: ["Market Research", "Competitor Analysis", "Audience Profiling", "Goal Setting"],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy Development",
    description:
      "Based on our findings, we develop a customized lead generation and marketing strategy tailored to your specific objectives.",
    details: ["Channel Selection", "Budget Planning", "KPI Definition", "Timeline Creation"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Campaign Execution",
    description:
      "Our team implements multi-channel campaigns with precision, continuously monitoring performance and making real-time adjustments.",
    details: ["Campaign Launch", "A/B Testing", "Quality Monitoring", "Lead Delivery"],
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Optimization & Scaling",
    description:
      "We analyze results, optimize for better performance, and scale successful campaigns to maximize your return on investment.",
    details: ["Performance Analysis", "ROI Optimization", "Scale Strategies", "Reporting"],
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
          src="/images/about-team.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

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
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="relative"
              >
                {/* Step Card */}
                <div className="h-full p-6 rounded-xl bg-gradient-card border border-border hover:border-[#F5A623]/30 transition-all duration-300 group">
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-[#F5A623]/20 group-hover:text-[#F5A623]/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-[#F5A623]/10 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                      <step.icon className="w-6 h-6 text-[#F5A623]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connector Dot (Desktop) */}
                <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F5A623] border-4 border-background z-10" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CRM Integration Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-4">
            Seamless Integration with Your Workflow
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our lead delivery system integrates with all major CRMs and marketing 
            platforms. Leads are delivered in real-time directly to your existing systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Salesforce", "HubSpot", "Go High Level", "Zapier", "Custom API"].map((crm) => (
              <span
                key={crm}
                className="px-4 py-2 rounded-lg bg-muted text-sm font-medium text-muted-foreground"
              >
                {crm}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Diagonal Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 100%)" }} />
    </section>
  );
}
