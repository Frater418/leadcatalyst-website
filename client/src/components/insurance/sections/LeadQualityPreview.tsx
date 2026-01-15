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
    { name: 'Premium', badge: 'Gold', color: '#F5A623' },
    { name: 'Standard', badge: 'Silver', color: '#8B949E' },
    { name: 'Qualified', badge: 'Bronze', color: '#C4841D' },
  ];

  return (
    <section id="lead-quality" className="relative py-24 lg:py-32 bg-[#0D1117] overflow-hidden scroll-mt-20">
      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-[#0D9488]/10 rounded-lg rotate-12" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-[#F5A623]/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-[#0D9488]/10 rounded-lg -rotate-6" />

      {/* Gold glow left side */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#F5A623]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
              Pre-Qualified for{' '}
              <span className="italic text-[#F5A623]">Issue Rate</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Every lead passes through our rigorous qualification process before reaching your team
            </p>
          </motion.div>

          {/* Features Grid - DIFFERENT card accents */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
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
                  boxShadow: index >= 2 ? '0 0 30px rgba(13, 148, 136, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 border-t border-r rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  index % 2 === 0 ? 'border-[#F5A623]/20' : 'border-[#0D9488]/20'
                }`} />

                <div className="flex items-start gap-4">
                  {/* Icon - min-w-12 min-h-12 (48px) */}
                  <div className={`min-w-12 min-h-12 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? 'bg-[#F5A623]/10' : 'bg-[#0D9488]/10'
                  }`}>
                    <feature.icon size={24} className={
                      index % 2 === 0 ? 'text-[#F5A623]' : 'text-[#0D9488]'
                    } />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
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
            className="relative bg-gradient-to-br from-[#161B22] to-[#0D1117] border-2 border-[#F5A623]/20 rounded-xl p-8"
            style={{
              boxShadow: '0 0 0 1px rgba(245, 166, 35, 0.1), 0 12px 40px rgba(0, 0, 0, 0.4), 0 4px 20px rgba(245, 166, 35, 0.15)'
            }}
          >
            {/* Decorative gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent rounded-t-xl" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-semibold text-white mb-2">
                  Quality Tiers
                </h3>
                <p className="text-white/70">
                  Choose the quality level that matches your needs and budget
                </p>
              </div>
              <div className="flex items-center gap-4">
                {qualityTiers.map((tier, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-sm font-medium border"
                    style={{
                      backgroundColor: `${tier.color}20`,
                      color: tier.color,
                      borderColor: `${tier.color}30`,
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 font-semibold"
            >
              <Link href="/insurance/lead-quality">Learn About Our Quality Standards →</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
