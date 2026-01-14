import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Shield, Zap, TrendingUp, Users, Package } from 'lucide-react';

export default function ForCarriers() {
  const features = [
    {
      icon: Target,
      title: 'Underwriting-Fit Scoring',
      items: [
        'Health indicators pre-screened',
        'Lifestyle factors assessed',
        'Financial qualification verified',
        'Risk category pre-classification',
      ],
    },
    {
      icon: Shield,
      title: 'Compliance Documentation',
      items: [
        'TCPA consent captured',
        'DNC list verification',
        'Full audit trail',
        'Regulatory reporting ready',
      ],
    },
    {
      icon: Zap,
      title: 'API Integration',
      items: [
        'RESTful API access',
        'Real-time lead delivery',
        'Custom field mapping',
        'Webhook notifications',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Volume Flexibility',
      items: [
        'Scale 100 to 10,000+ leads/month',
        'Geographic targeting',
        'Product-specific campaigns',
        'Seasonal adjustments',
      ],
    },
    {
      icon: Users,
      title: 'Distributor Support',
      items: [
        'White-label options',
        'Agent portal access',
        'Performance analytics',
        'Territory management',
      ],
    },
  ];

  return (
    <InsuranceLayout
      title="For Carriers & Distributors | LeadCatalyst Insurance"
      description="Enterprise-grade insurance lead distribution at scale with underwriting-fit scoring, full compliance documentation, and seamless API integration."
      keywords="insurance carrier leads, distributor leads, enterprise insurance leads, API integration, white-label insurance leads"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-[oklch(0.78_0.15_75)]/20 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30 mb-4">
                Enterprise Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
                Carrier-Grade Lead{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Distribution</span> at Scale
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Pre-qualified prospects with underwriting-fit scoring, full compliance documentation, and seamless API integration. Built for carriers and distributors who demand quality.
              </p>
              <Link href="/insurance/contact">
                <Button
                  size="lg"
                  className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold px-10 py-6"
                >
                  Schedule Enterprise Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[oklch(0.12_0.015_250)]">
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
                Enterprise-Grade{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Features</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-8 hover:border-[oklch(0.78_0.15_75)]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[oklch(0.78_0.15_75)]/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[oklch(0.78_0.15_75)]" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white mb-4">
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
          </div>
        </div>
      </section>

      {/* Enterprise Dashboard Preview */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/30 rounded-2xl p-10 text-center"
            >
              <div className="flex items-center justify-center gap-6 mb-6">
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">
                  API Connected
                </Badge>
                <Badge className="bg-[oklch(0.78_0.15_75)]/20 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30">
                  SOC 2 Certified
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-500 border-blue-500/30">
                  Real-Time Sync
                </Badge>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Enterprise Dashboard & API Access
              </h3>
              <p className="text-white/70 mb-6">
                Monitor lead quality, track conversions, and manage your entire lead pipeline from one centralized dashboard with full API integration capabilities.
              </p>
              <Link href="/insurance/platform">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Explore Platform Technology →
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-headline">
                Ready to Scale Your{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Distribution?</span>
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Schedule a consultation with our enterprise team to discuss your specific needs and volume requirements.
              </p>
              <Link href="/insurance/contact">
                <Button
                  size="lg"
                  className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold px-10 py-6"
                >
                  Schedule Enterprise Demo
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
