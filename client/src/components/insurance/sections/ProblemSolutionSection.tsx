import { motion } from 'framer-motion';
import { X, Zap, Target, Shield } from 'lucide-react';

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
    <section id="platform" className="relative py-24 lg:py-32 bg-[#161B22] scroll-mt-20">
      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0D9488]/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem Section - Cards instead of list */}
        <div className="max-w-5xl mx-auto mb-32 relative">
          {/* Red glow for problem emphasis */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-headline">
              Sound <span className="italic text-[#F5A623]">Familiar?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              If any of these pain points resonate, you're not alone. But there's a better way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-[#0D1117] to-[#161B22] border-2 border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <X size={24} className="text-red-500" />
                  </div>
                  <p className="text-white/90 text-lg">{problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-6xl mx-auto relative">
          {/* Gold + Teal dual glow */}
          <div className="absolute -top-32 left-1/4 w-[600px] h-[400px] bg-[#F5A623]/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -top-32 right-1/4 w-[600px] h-[400px] bg-[#0D9488]/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 tracking-headline">
              Leads + Engine + <span className="italic text-[#F5A623]">Results</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
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
                className={`group relative bg-gradient-to-br from-[#161B22] to-[#0D1117] rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 ${
                  index === 0 ? 'border-l-4 border-[#F5A623]' :
                  index === 1 ? 'border-l-4 border-[#0D9488]' :
                  'border border-white/10'
                }`}
                style={{
                  boxShadow: index === 2 ? '0 0 40px rgba(245, 166, 35, 0.15)' : '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Icon with alternating colors */}
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                  index === 0 ? 'bg-[#F5A623]/10' :
                  index === 1 ? 'bg-[#0D9488]/10' :
                  'bg-white/5'
                }`}>
                  <solution.icon size={28} className={
                    index === 0 ? 'text-[#F5A623]' :
                    index === 1 ? 'text-[#0D9488]' :
                    'text-white'
                  } />
                </div>

                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-white/70 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
