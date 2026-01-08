/**
 * Why Us Section - LeadCatalyst
 *
 * Authentic approach - focused on concrete promises
 * No generic icon grids or comparison tables
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, RefreshCw, Zap, Lock } from "lucide-react";

const promises = [
  {
    icon: Lock,
    title: "Exclusive Leads",
    description:
      "Your leads are yours alone. We never resell or share leads between clients in the same territory.",
  },
  {
    icon: Shield,
    title: "Verified Quality",
    description:
      "Every lead goes through our multi-point verification process before delivery to ensure accuracy.",
  },
  {
    icon: RefreshCw,
    title: "Replacement Guarantee",
    description:
      "If a lead doesn't meet our quality standards, we replace it. No questions asked.",
  },
  {
    icon: Zap,
    title: "Real-Time Delivery",
    description:
      "Leads are delivered directly to your CRM within seconds of qualification.",
  },
];

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#F5A623]/[0.02] to-background -z-10" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-48 h-48 bg-[#F5A623]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            <span className="text-sm font-medium text-[#F5A623]">
              Our Commitment
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What We{" "}
            <span className="font-display italic text-[#F5A623]">Promise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No fluff. No hidden fees. Just qualified leads delivered to your
            team with full transparency.
          </p>
        </motion.div>

        {/* Promises - Horizontal Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex gap-4 p-6 rounded-xl bg-gradient-card border border-border hover:border-[#F5A623]/30 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-[#F5A623]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5A623]/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                <promise.icon className="w-6 h-6 text-[#F5A623]" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#F5A623] transition-colors">
                  {promise.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {promise.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Guarantee */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-gradient-card border border-[#F5A623]/30 text-center">
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-[#F5A623]/5 blur-3xl rounded-2xl -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Badge */}
            <motion.div
              className="absolute -top-5 left-1/2 -translate-x-1/2 z-10"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="px-4 py-2 rounded-full bg-[#F5A623] text-background font-semibold text-sm shadow-lg">
                100% Guarantee
              </div>
            </motion.div>

            <div className="pt-4 relative z-10">
              <motion.div
                className="w-20 h-20 rounded-full border-4 border-[#F5A623] flex items-center justify-center mx-auto mb-6"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(245, 166, 35, 0)",
                    "0 0 30px 10px rgba(245, 166, 35, 0.2)",
                    "0 0 0 0 rgba(245, 166, 35, 0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield className="w-10 h-10 text-[#F5A623]" />
                </motion.div>
              </motion.div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                Quality Assurance Promise
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                If any lead we deliver doesn't meet our published quality
                criteria — wrong contact info, outside your target area, or
                doesn't match the specified intent — we'll replace it at no
                additional cost.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-3 py-1.5 rounded-lg bg-background border border-border text-muted-foreground">
                  Verified Contact Info
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-background border border-border text-muted-foreground">
                  Geographic Match
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-background border border-border text-muted-foreground">
                  Intent Confirmed
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
