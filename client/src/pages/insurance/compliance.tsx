import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Shield, FileCheck, Lock, CheckCircle } from 'lucide-react';
import type { ComplianceFeature } from '@/types/insurance';

export default function Compliance() {
  const features: ComplianceFeature[] = [
    {
      title: 'TCPA Compliance',
      items: [
        'Prior express written consent captured',
        'Clear disclosure language',
        'Opt-out mechanism included',
        'Consent timestamp recorded',
        'IP address logged',
      ],
    },
    {
      title: 'DNC Compliance',
      items: [
        'National DNC list checked',
        'State DNC lists checked',
        'Internal DNC list maintained',
        'Real-time verification',
        'Automatic suppression',
      ],
    },
    {
      title: 'Data Security',
      items: [
        'SOC 2 Type II certified',
        '256-bit encryption (transit & rest)',
        'Regular penetration testing',
        'Employee background checks',
        'Access controls & logging',
      ],
    },
    {
      title: 'Audit Trail',
      items: [
        'Complete lead history',
        'Consent documentation',
        'Contact attempt logs',
        'Disposition tracking',
        'Exportable reports',
      ],
    },
  ];

  const certifications = [
    'SOC 2 Type II',
    'TCPA Compliant',
    'GDPR Ready',
    'CCPA Compliant',
    'PCI DSS',
  ];

  return (
    <InsuranceLayout
      title="TCPA & Compliance | LeadCatalyst Insurance"
      description="Compliance built into every lead. We take regulatory compliance seriously so you can focus on selling with confidence."
      keywords="TCPA compliance, insurance lead compliance, DNC compliance, lead security"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Shield size={64} className="text-[oklch(0.78_0.15_75)] mx-auto mb-6" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
                Compliance Built Into{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Every Lead</span>
              </h1>
              <p className="text-xl text-white/70">
                We take regulatory compliance seriously so you can focus on selling with confidence.
              </p>
            </motion.div>
          </div>

          {/* Compliance Features */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-8"
              >
                <h3 className="text-2xl font-display font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={24} className="text-[oklch(0.78_0.15_75)]" />
                  {feature.title}
                </h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/30 rounded-2xl p-10"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
              Certifications & Standards
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certifications.map((cert, index) => (
                <Badge
                  key={index}
                  className="bg-[oklch(0.78_0.15_75)]/20 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30 px-6 py-3 text-base"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
