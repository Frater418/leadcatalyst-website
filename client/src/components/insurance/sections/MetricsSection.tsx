import { motion } from 'framer-motion';
import type { MetricItem } from '@/types/insurance';

export default function MetricsSection() {
  const metrics: MetricItem[] = [
    {
      value: '+42%',
      label: 'Higher Issue Rates',
      description: 'Compared to industry average',
    },
    {
      value: '-38%',
      label: 'Lower Not-Taken Rates',
      description: 'Pre-qualified for underwriting fit',
    },
    {
      value: '3.2x',
      label: 'Contact-to-Quote Ratio',
      description: 'Speed-to-lead automation',
    },
    {
      value: '-65%',
      label: 'Reduced Friction',
      description: 'Streamlined underwriting process',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#F8FAFC] overflow-hidden scroll-mt-20">
      {/* LIGHT SECTION - Visual Break! */}

      {/* Subtle decorative elements for light background */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#0D9488]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#F5A623]/5 rounded-full blur-[100px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(13, 148, 136, 0.4) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#0D1117] mb-6 tracking-headline">
            Numbers That <span className="italic text-[#F5A623]">Matter</span>
          </h2>
          <p className="text-xl text-[#0D1117]/70 max-w-3xl mx-auto">
            Real performance metrics from carrier partners across the country
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative text-center"
            >
              {/* Glassmorphism card background on hover */}
              <div className="absolute inset-0 bg-white/60 rounded-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[#0D1117]/10" />

              <div className="relative p-6">
                {/* Alternating colors: Dark Gold, Dark Teal for WCAG contrast on light bg */}
                <div
                  className={`text-5xl lg:text-6xl font-display font-bold mb-3 ${
                    index % 2 === 0 ? 'text-[#C4841D]' : 'text-[#0A7C72]'
                  }`}
                  style={{
                    textShadow: index % 2 === 0
                      ? '0 0 40px rgba(196, 132, 29, 0.3)'
                      : '0 0 40px rgba(10, 124, 114, 0.3)'
                  }}
                >
                  {metric.value}
                </div>
                <div className="text-xl font-semibold text-[#0D1117] mb-2">{metric.label}</div>
                <div className="text-sm text-[#0D1117]/60">{metric.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-[#0D1117]/40 text-center mt-16"
        >
          Based on aggregate data from carrier partners. Individual results may vary.
        </motion.p>
      </div>
    </section>
  );
}
