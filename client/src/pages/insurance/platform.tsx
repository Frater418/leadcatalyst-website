import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Link as LinkIcon, Shield, BarChart3 } from 'lucide-react';

export default function Platform() {
  const components = [
    {
      icon: Target,
      title: 'Lead Qualification Engine',
      items: [
        'Multi-step verification',
        'Intent scoring algorithm',
        'Underwriting pre-screen',
        'Fraud detection',
      ],
    },
    {
      icon: Zap,
      title: 'Real-Time Delivery System',
      items: [
        '<30 second delivery',
        'Multiple delivery methods',
        'Failover redundancy',
        '99.9% uptime SLA',
      ],
    },
    {
      icon: LinkIcon,
      title: 'CRM Integration Hub',
      items: [
        '50+ CRM integrations',
        'Custom API access',
        'Zapier connectivity',
        'Webhook support',
      ],
    },
    {
      icon: Shield,
      title: 'Compliance Management',
      items: [
        'TCPA consent capture',
        'DNC list checking',
        'Audit trail logging',
        'Regulatory reporting',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      items: [
        'Real-time metrics',
        'Conversion tracking',
        'ROI calculation',
        'Custom reports',
      ],
    },
  ];

  const security = [
    'SOC 2 Type II Certified',
    'TCPA Compliant',
    'GDPR Ready',
    '256-bit Encryption',
  ];

  return (
    <InsuranceLayout
      title="Platform & Technology | LeadCatalyst Insurance"
      description="Our proprietary platform combines AI-powered qualification, real-time delivery, and carrier-grade compliance into one seamless system."
      keywords="insurance lead platform, lead technology, CRM integration, lead qualification engine"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
                The Technology Behind{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Better Leads</span>
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Our proprietary platform combines AI-powered qualification, real-time delivery, and carrier-grade compliance into one seamless system.
              </p>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-8"
                >
                  <div className="w-12 h-12 bg-[oklch(0.78_0.15_75)]/10 rounded-lg flex items-center justify-center mb-4">
                    <component.icon size={24} className="text-[oklch(0.78_0.15_75)]" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-4">
                    {component.title}
                  </h3>
                  <ul className="space-y-2">
                    {component.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70">
                        <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/30 rounded-2xl p-10"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
                Security & Compliance
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {security.map((item, index) => (
                  <Badge
                    key={index}
                    className="bg-[oklch(0.78_0.15_75)]/20 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30 px-4 py-2"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
