import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import type { ProcessStep } from '@/types/insurance';

export default function HowItWorks() {
  const steps: ProcessStep[] = [
    {
      step: 1,
      title: 'We Generate',
      description: 'Multi-channel lead generation brings high-intent prospects into our system',
      details: [
        'Targeted advertising campaigns',
        'Content marketing funnels',
        'Partner referral networks',
        'Strategic co-marketing',
      ],
      result: 'High-intent prospects enter our system',
    },
    {
      step: 2,
      title: 'We Qualify',
      description: 'Rigorous 7-point qualification ensures only qualified leads pass through',
      details: [
        '7-point qualification process',
        'Underwriting pre-screening',
        'Intent verification',
        'Contact validation',
      ],
      result: 'Only qualified leads pass through',
    },
    {
      step: 3,
      title: 'You Close',
      description: 'Real-time delivery with automated follow-up gets prospects to your phone fast',
      details: [
        'Real-time delivery to your CRM',
        'Automated follow-up sequences',
        'Warm transfer option',
        'Appointment setting available',
      ],
      result: 'You focus on selling, not chasing',
    },
  ];

  return (
    <InsuranceLayout
      title="How It Works | LeadCatalyst Insurance"
      description="From lead to close in 3 steps. Our streamlined process gets qualified prospects to your phone faster than any other system."
      keywords="insurance lead process, how insurance leads work, lead generation process"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline"
            >
              From Lead to Close in{' '}
              <span className="italic text-[oklch(0.78_0.15_75)]">3 Steps</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              Our streamlined process gets qualified prospects to your phone faster than any other system.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-gradient-to-br from-[oklch(0.78_0.15_75)] to-[oklch(0.60_0.14_75)] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-4xl font-display font-bold text-[oklch(0.12_0.015_250)]">
                      {step.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-display font-bold text-white mb-3">
                      {step.title}
                    </h2>
                    <p className="text-lg text-white/70 mb-6">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/80">
                          <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[oklch(0.78_0.15_75)]/10 border border-[oklch(0.78_0.15_75)]/30 rounded-lg p-4">
                      <span className="text-sm font-semibold text-[oklch(0.78_0.15_75)] uppercase tracking-wider">
                        Result:
                      </span>
                      <p className="text-white mt-1">{step.result}</p>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-10 top-20 w-0.5 h-full bg-gradient-to-b from-[oklch(0.78_0.15_75)] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-20 bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-2xl p-10"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
              Average Timeline
            </h3>
            <div className="grid sm:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-2">
                  0m
                </div>
                <div className="text-sm text-white/60">Lead Generated</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white mb-2">5m</div>
                <div className="text-sm text-white/60">Qualification Complete</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white mb-2">6m</div>
                <div className="text-sm text-white/60">Delivered to You</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white mb-2">8m</div>
                <div className="text-sm text-white/60">First Contact (Auto)</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-2">
                  &lt;30m
                </div>
                <div className="text-sm text-white/60">Live Conversation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
