import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, FileCheck, UserCheck } from 'lucide-react';

export default function LeadQualityPreview() {
  const features = [
    {
      icon: UserCheck,
      title: 'Underwriting Pre-Screen',
      description: 'Health, lifestyle, and financial indicators assessed before delivery',
    },
    {
      icon: CheckCircle,
      title: 'Intent Verification',
      description: 'Multi-step qualification confirms genuine purchase interest',
    },
    {
      icon: Shield,
      title: 'Contact Validation',
      description: 'Phone and email verified, TCPA consent documented',
    },
    {
      icon: FileCheck,
      title: 'Compliance Audit Trail',
      description: 'Full documentation for carrier compliance requirements',
    },
  ];

  const qualityTiers = [
    { name: 'Premium', badge: 'Gold', color: 'oklch(0.78_0.15_75)' },
    { name: 'Standard', badge: 'Silver', color: 'oklch(0.75_0.01_250)' },
    { name: 'Qualified', badge: 'Bronze', color: 'oklch(0.60_0.14_75)' },
  ];

  return (
    <section id="lead-quality" className="py-20 lg:py-32 bg-[oklch(0.12_0.015_250)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-headline">
              Pre-Qualified for{' '}
              <span className="italic text-[oklch(0.78_0.15_75)]">Issue Rate</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Every lead passes through our rigorous qualification process before reaching your team
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-6 hover:border-[oklch(0.78_0.15_75)]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[oklch(0.78_0.15_75)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-[oklch(0.78_0.15_75)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quality Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">
                  Quality Tiers
                </h3>
                <p className="text-white/70 text-sm">
                  Choose the quality level that matches your needs and budget
                </p>
              </div>
              <div className="flex items-center gap-4">
                {qualityTiers.map((tier, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: `${tier.color}/20`,
                      color: tier.color,
                      borderColor: `${tier.color}/30`,
                    }}
                  >
                    {tier.badge}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10"
          >
            <Link href="/insurance/lead-quality">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 font-semibold"
              >
                Learn About Our Quality Standards →
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
