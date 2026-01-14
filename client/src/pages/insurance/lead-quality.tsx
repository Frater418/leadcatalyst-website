import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield } from 'lucide-react';
import type { QualityTier, MetricItem } from '@/types/insurance';

export default function LeadQuality() {
  const qualificationSteps = [
    { number: 1, title: 'Source Verification', description: 'Validated lead sources only' },
    { number: 2, title: 'Contact Validation', description: 'Phone and email verified' },
    { number: 3, title: 'Intent Confirmation', description: 'Multi-step interest verification' },
    { number: 4, title: 'Demographic Screening', description: 'Age, income, location check' },
    { number: 5, title: 'Underwriting Pre-Screen', description: 'Health and lifestyle indicators' },
    { number: 6, title: 'TCPA Consent', description: 'Documented opt-in consent' },
    { number: 7, title: 'Duplicate Check', description: 'Cross-reference existing leads' },
  ];

  const qualityTiers: QualityTier[] = [
    {
      name: 'Premium',
      badge: 'Gold',
      description: 'Highest intent, best underwriting fit, immediate contact',
      useCase: 'High-value policies',
    },
    {
      name: 'Standard',
      badge: 'Silver',
      description: 'Strong prospects, good conversion potential',
      useCase: 'Standard campaigns',
    },
    {
      name: 'Qualified',
      badge: 'Bronze',
      description: 'Verified interest, requires nurturing',
      useCase: 'Volume campaigns',
    },
  ];

  const metrics: MetricItem[] = [
    { value: '92%', label: 'Contact Rate', description: 'Prospects answer calls' },
    { value: '78%', label: 'Quote Rate', description: 'Request policy quote' },
    { value: '34%', label: 'Issue Rate', description: 'Convert to policy' },
    { value: '<5%', label: 'Return Rate', description: 'Quality issues' },
  ];

  return (
    <InsuranceLayout
      title="Lead Quality Standards | LeadCatalyst Insurance"
      description="Every lead passes through our 7-point qualification process before reaching your team. Quality you can measure, results you can count on."
      keywords="lead quality, insurance lead qualification, TCPA consent, lead verification"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline"
            >
              Quality You Can <span className="italic text-[oklch(0.78_0.15_75)]">Measure</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              Every lead passes through our 7-point qualification process before reaching your team.
            </motion.p>
          </div>

          {/* Qualification Process */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-4">
              {qualificationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-lg p-6 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-[oklch(0.78_0.15_75)] rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-[oklch(0.12_0.015_250)]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-white/60 text-sm">{step.description}</p>
                  </div>
                  <CheckCircle size={24} className="text-green-500 ml-auto flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality Tiers */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Quality Tiers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {qualityTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/20 rounded-xl p-8"
                >
                  <Badge className="bg-[oklch(0.78_0.15_75)]/20 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30 mb-4">
                    {tier.badge}
                  </Badge>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-white/70 mb-4">{tier.description}</p>
                  <div className="text-sm text-white/50">Best for: {tier.useCase}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Performance Metrics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-sm text-white/60">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quality Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/30 rounded-2xl p-10 text-center"
          >
            <Shield size={48} className="text-[oklch(0.78_0.15_75)] mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Quality Guarantee
            </h3>
            <p className="text-white/70 mb-2">
              Return policy for leads not meeting quality standards
            </p>
            <p className="text-white/70 mb-2">Credit or replacement within 48 hours</p>
            <p className="text-white/70">No questions asked for first 30 days</p>
          </motion.div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
