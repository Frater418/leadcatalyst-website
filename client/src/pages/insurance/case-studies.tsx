import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, CheckCircle } from 'lucide-react';
import type { CaseStudy } from '@/types/insurance';

export default function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      title: 'Regional Life Carrier',
      client: 'Mid-size life insurance carrier',
      challenge: 'Low issue rates and compliance concerns were impacting distribution growth',
      solution: 'Implemented underwriting pre-screening and compliance documentation system',
      results: ['+42% issue rate improvement', '100% compliance audit pass', '3x distributor satisfaction'],
      testimonial: {
        quote:
          'LeadCatalyst transformed our distribution. Issue rates are up 40% and our agents love the quality of prospects they\'re receiving.',
        author: 'Sarah Chen',
        role: 'VP of Distribution',
      },
    },
    {
      title: 'Independent Agent (Texas)',
      client: 'Top-producing independent agent',
      challenge: 'Cold leads and slow manual follow-up resulting in missed opportunities',
      solution: 'Deployed speed-to-lead automation with instant CRM integration',
      results: ['2x close rate', '<5 min response time', '50% more appointments'],
      testimonial: {
        quote:
          'The speed-to-lead automation changed everything. I\'m connecting with prospects within minutes instead of hours, and my close rate has doubled.',
        author: 'Marcus Thompson',
        role: 'Independent Agent',
      },
    },
    {
      title: 'Multi-State IMO',
      client: 'Insurance Marketing Organization',
      challenge: 'Inconsistent lead quality across multiple states and products',
      solution: 'Premium tier leads with warm transfers and territory management',
      results: ['3x ROI', '50% reduction in cost per policy', '200+ agent network growth'],
      testimonial: {
        quote:
          'I was skeptical about lead quality, but the pre-qualification is real. These prospects are actually interested and ready to talk.',
        author: 'David Kim',
        role: 'Agency Owner',
      },
    },
  ];

  const aggregateMetrics = [
    { value: '500+', label: 'Active Partners' },
    { value: '1M+', label: 'Leads Delivered' },
    { value: '42%', label: 'Avg Issue Rate Improvement' },
    { value: '98%', label: 'Partner Retention' },
  ];

  return (
    <InsuranceLayout
      title="Case Studies & Success Stories | LeadCatalyst Insurance"
      description="Real results from real partners. See how carriers and agents are transforming their lead pipeline with LeadCatalyst."
      keywords="insurance lead case studies, success stories, customer testimonials"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline"
            >
              Real Results from Real{' '}
              <span className="italic text-[oklch(0.78_0.15_75)]">Partners</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              See how carriers and agents are transforming their lead pipeline with LeadCatalyst.
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12 mb-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-2xl p-8 lg:p-12"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-2">
                      {study.title}
                    </h2>
                    <p className="text-white/60">{study.client}</p>
                  </div>
                  <TrendingUp size={32} className="text-[oklch(0.78_0.15_75)] flex-shrink-0" />
                </div>

                <div className="space-y-6">
                  <div>
                    <Badge className="mb-2 bg-red-500/20 text-red-500 border-red-500/30">
                      Challenge
                    </Badge>
                    <p className="text-white/80">{study.challenge}</p>
                  </div>

                  <div>
                    <Badge className="mb-2 bg-blue-500/20 text-blue-500 border-blue-500/30">
                      Solution
                    </Badge>
                    <p className="text-white/80">{study.solution}</p>
                  </div>

                  <div>
                    <Badge className="mb-2 bg-green-500/20 text-green-500 border-green-500/30">
                      Results
                    </Badge>
                    <div className="grid sm:grid-cols-3 gap-4 mt-3">
                      {study.results.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-[oklch(0.78_0.15_75)] font-semibold"
                        >
                          <CheckCircle size={20} />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {study.testimonial && (
                    <div className="bg-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/20 rounded-lg p-6 mt-6">
                      <p className="text-white/90 italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="text-sm">
                        <div className="font-semibold text-white">
                          {study.testimonial.author}
                        </div>
                        <div className="text-white/60">{study.testimonial.role}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Aggregate Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/30 rounded-2xl p-10"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
              Aggregate Results Across All Partners
            </h3>
            <div className="grid sm:grid-cols-4 gap-8 text-center">
              {aggregateMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-4xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
