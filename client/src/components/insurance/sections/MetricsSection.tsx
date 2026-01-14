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
    <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-headline">
            Numbers That <span className="italic text-[oklch(0.78_0.15_75)]">Matter</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-white mb-1">{metric.label}</div>
              <div className="text-sm text-white/60">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/40 text-center mt-12"
        >
          Based on aggregate data from carrier partners. Individual results may vary.
        </motion.p>
      </div>
    </section>
  );
}
