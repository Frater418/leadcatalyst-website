import { motion } from 'framer-motion';
import { X, Check, Zap, Target, Shield } from 'lucide-react';

export default function ProblemSolutionSection() {
  const problems = [
    'Buying leads that go cold before you call',
    'Low issue rates from poorly qualified prospects',
    'Following up manually—hours after the lead came in',
    'No consistent system, just random results',
    'Compliance headaches and audit concerns',
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Exclusive Leads',
      description: 'High-intent prospects exclusively for your territory',
    },
    {
      icon: Zap,
      title: 'Instant Delivery',
      description: 'Real-time CRM integration with automated follow-up',
    },
    {
      icon: Shield,
      title: 'Compliance Built-In',
      description: 'TCPA consent, DNC awareness, full audit trails',
    },
  ];

  return (
    <section id="platform" className="py-20 lg:py-32 bg-[oklch(0.12_0.015_250)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-headline">
              Sound <span className="italic text-[oklch(0.78_0.15_75)]">Familiar?</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-[oklch(0.16_0.015_250)] border border-red-500/20 rounded-lg"
              >
                <X size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{problem}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-headline">
              Leads + Engine + <span className="italic text-[oklch(0.78_0.15_75)]">Results</span>
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              LeadCatalyst Insurance combines exclusive leads, automated follow-up, and carrier-grade qualification into one system that delivers qualified prospects ready to convert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/20 rounded-xl p-8 hover:border-[oklch(0.78_0.15_75)]/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[oklch(0.78_0.15_75)]/10 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon size={24} className="text-[oklch(0.78_0.15_75)]" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-white/70">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
