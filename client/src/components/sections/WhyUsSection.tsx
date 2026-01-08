/**
 * Why Us Section - LeadCatalyst
 * 
 * Key differentiators and value propositions
 * Comparison style with checkmarks
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Shield, Award, Clock, HeadphonesIcon } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "Exclusive Partnerships",
    description: "We limit partnerships per territory to ensure lead exclusivity and maximize your competitive advantage.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Every lead is verified and backed by our replacement guarantee. If it doesn't meet standards, we replace it.",
  },
  {
    icon: Clock,
    title: "Real-Time Delivery",
    description: "Leads are delivered instantly to your CRM or preferred platform, ensuring rapid response and higher conversion.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Your dedicated account manager provides strategic guidance and ensures campaign success.",
  },
];

const comparison = {
  others: [
    "Shared leads with competitors",
    "No verification process",
    "Delayed delivery",
    "Generic targeting",
    "No replacement policy",
    "Limited reporting",
  ],
  leadcatalyst: [
    "100% exclusive lead delivery",
    "Multi-point verification",
    "Real-time CRM integration",
    "Precision targeting",
    "Full replacement guarantee",
    "Transparent analytics dashboard",
  ],
};

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5A623]/5 to-transparent -z-10" />
      
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
            <span className="text-sm font-medium text-[#F5A623]">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The LeadCatalyst{" "}
            <span className="font-display italic text-[#F5A623]">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just another lead vendor. We're your strategic growth partner 
            committed to delivering measurable results.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 rounded-xl bg-gradient-card border border-border hover:border-[#F5A623]/30 transition-colors text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#F5A623]/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-[#F5A623]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            How We Compare
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Others Column */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <h4 className="text-lg font-semibold text-muted-foreground">
                  Generic Lead Vendors
                </h4>
              </div>
              <ul className="space-y-4">
                {comparison.others.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LeadCatalyst Column */}
            <div className="p-6 rounded-xl bg-gradient-card border border-[#F5A623]/30 shadow-lg shadow-[#F5A623]/5">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5A623]/20">
                <div className="w-10 h-10 rounded-lg bg-[#F5A623]/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#F5A623]" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  LeadCatalyst
                </h4>
              </div>
              <ul className="space-y-4">
                {comparison.leadcatalyst.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Guarantee Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#F5A623]/10 border border-[#F5A623]/30">
            <div className="w-16 h-16 rounded-full border-4 border-[#F5A623] flex items-center justify-center">
              <Shield className="w-8 h-8 text-[#F5A623]" />
            </div>
            <div>
              <div className="text-sm text-[#F5A623] font-medium mb-1">Quality Assurance</div>
              <div className="text-xl font-bold text-foreground">100% Replacement Guarantee</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
