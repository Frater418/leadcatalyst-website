import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Building2, User, ArrowRight } from 'lucide-react';

export default function SolutionTeasers() {
  const carrierFeatures = [
    'Underwriting-Fit Scoring',
    'Compliance Documentation',
    'API Integration',
    'Volume Flexibility',
    'Distributor Network',
    'White-Label Options',
  ];

  const agentFeatures = [
    'Instant Lead Delivery',
    'Automated Follow-Up',
    'Warm Transfers',
    'Appointment Setting',
    'Speed-to-Lead',
    'Exclusive Territories',
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Carriers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/20 rounded-2xl p-8 lg:p-10 hover:border-[oklch(0.78_0.15_75)]/40 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[oklch(0.78_0.15_75)]/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 size={32} className="text-[oklch(0.78_0.15_75)]" />
            </div>

            <div className="mb-2">
              <span className="text-sm font-medium text-[oklch(0.78_0.15_75)] uppercase tracking-wider">
                For Carriers & Distributors
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-headline">
              Enterprise-Grade Lead Solutions
            </h3>

            <ul className="space-y-3 mb-8">
              {carrierFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/insurance/for-carriers">
              <Button
                size="lg"
                className="w-full bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold group"
              >
                Explore Carrier Solutions
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </motion.div>

          {/* For Agents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/20 rounded-2xl p-8 lg:p-10 hover:border-[oklch(0.78_0.15_75)]/40 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[oklch(0.78_0.15_75)]/10 rounded-xl flex items-center justify-center mb-6">
              <User size={32} className="text-[oklch(0.78_0.15_75)]" />
            </div>

            <div className="mb-2">
              <span className="text-sm font-medium text-[oklch(0.78_0.15_75)] uppercase tracking-wider">
                For Agents & Producers
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-headline">
              Your Turnkey Lead Engine
            </h3>

            <ul className="space-y-3 mb-8">
              {agentFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-white/80">
                  <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/insurance/for-agents">
              <Button
                size="lg"
                className="w-full bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold group"
              >
                Explore Agent Solutions
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
