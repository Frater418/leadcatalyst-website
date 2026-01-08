/**
 * Services Section - LeadCatalyst
 * 
 * Service offerings with custom illustrations
 * Card-based layout with hover effects
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Lead Generation",
    description:
      "Qualified lead acquisition through multi-channel campaigns. We deliver verified, exclusive leads that convert into real business opportunities.",
    features: ["Exclusive Leads", "Multi-Channel Acquisition", "Quality Verification", "CRM Integration"],
    image: "/images/services-leadgen.png",
  },
  {
    title: "Performance Marketing",
    description:
      "ROI-focused paid advertising management across all major platforms. Data-driven optimization ensures maximum return on your marketing investment.",
    features: ["Paid Media Management", "A/B Testing", "Conversion Optimization", "Real-Time Analytics"],
    image: "/images/services-performance.png",
  },
  {
    title: "Digital Strategy",
    description:
      "Comprehensive market analysis and campaign planning. We develop customized growth strategies aligned with your business objectives.",
    features: ["Market Analysis", "Campaign Planning", "Competitive Research", "Growth Roadmaps"],
    image: "/images/services-strategy.png",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-dark relative">
      {/* Diagonal Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
      
      <div className="container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
            <span className="text-sm font-medium text-[#F5A623]">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solutions That{" "}
            <span className="font-display italic text-[#F5A623]">Drive Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing services designed to accelerate your growth 
            and maximize your return on investment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-gradient-card border border-border hover:border-[#F5A623]/30 transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-[#F5A623]/10 text-[#F5A623] border border-[#F5A623]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={scrollToContact}
                    className="flex items-center gap-2 text-sm font-medium text-[#F5A623] hover:text-[#D4880F] transition-colors group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom solution? We also offer marketing automation, CRM integration, 
            and consulting services.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-[#F5A623] hover:text-[#D4880F] font-medium transition-colors"
          >
            Contact us to discuss your needs
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Diagonal Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0%, 100% 100%, 0 100%)" }} />
    </section>
  );
}
