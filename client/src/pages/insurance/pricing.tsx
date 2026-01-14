import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import type { PricingTier } from '@/types/insurance';

export default function Pricing() {
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: 'Contact for Pricing',
      description: 'Best for: New agents testing the waters',
      features: [
        'Up to 50 leads/month',
        'Standard quality tier',
        'Email delivery',
        'Basic dashboard',
        'Email support',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      price: 'Contact for Pricing',
      description: 'Best for: Established agents scaling up',
      features: [
        'Up to 250 leads/month',
        'Premium quality tier',
        'Real-time CRM delivery',
        'Automated follow-up',
        'Phone + email support',
        'Territory exclusivity',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Best for: Carriers and large agencies',
      features: [
        'Unlimited volume',
        'All quality tiers',
        'API integration',
        'White-label options',
        'Dedicated account manager',
        'Custom SLA',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <InsuranceLayout
      title="Pricing | LeadCatalyst Insurance"
      description="Transparent pricing, predictable results. Choose the plan that fits your volume and goals. No hidden fees, no long-term contracts."
      keywords="insurance lead pricing, lead cost, insurance lead plans"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline"
            >
              Transparent <span className="italic text-[oklch(0.78_0.15_75)]">Pricing</span>,
              Predictable Results
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              Choose the plan that fits your volume and goals. No hidden fees, no long-term contracts.
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] rounded-2xl p-8 ${
                  tier.popular
                    ? 'border-2 border-[oklch(0.78_0.15_75)] relative'
                    : 'border border-white/10'
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[oklch(0.78_0.15_75)] text-[oklch(0.12_0.015_250)]">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-2xl font-display font-bold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-2">
                  {tier.price}
                </div>
                <p className="text-sm text-white/60 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/80">
                      <Check size={20} className="text-[oklch(0.78_0.15_75)] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/insurance/contact">
                  <Button
                    className={
                      tier.popular
                        ? 'w-full bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)]'
                        : 'w-full border-white/20 text-white hover:bg-white/5'
                    }
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Add-Ons Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
              <span className="italic text-[oklch(0.78_0.15_75)]">Enhance</span> Your Plan
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Warm Transfers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 hover:border-[oklch(0.78_0.15_75)]/30 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2 text-white">Warm Transfers</h3>
                <p className="text-white/70 text-sm mb-4">
                  Live prospect connection with pre-qualified handoff
                </p>
                <p className="text-[oklch(0.78_0.15_75)] font-bold">+$X per transfer</p>
              </motion.div>

              {/* Appointment Setting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 hover:border-[oklch(0.78_0.15_75)]/30 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2 text-white">Appointment Setting</h3>
                <p className="text-white/70 text-sm mb-4">
                  Calendar integration with automated scheduling
                </p>
                <p className="text-[oklch(0.78_0.15_75)] font-bold">+$X per appointment</p>
              </motion.div>

              {/* Exclusive Territory */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 hover:border-[oklch(0.78_0.15_75)]/30 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2 text-white">Exclusive Territory</h3>
                <p className="text-white/70 text-sm mb-4">
                  Geographic exclusivity with no lead sharing
                </p>
                <p className="text-[oklch(0.78_0.15_75)] font-bold">+$X/month</p>
              </motion.div>

              {/* Priority Delivery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 hover:border-[oklch(0.78_0.15_75)]/30 transition-all"
              >
                <h3 className="font-semibold text-lg mb-2 text-white">Priority Delivery</h3>
                <p className="text-white/70 text-sm mb-4">
                  First access to new leads in your territory
                </p>
                <p className="text-[oklch(0.78_0.15_75)] font-bold">+$X per lead</p>
              </motion.div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-2xl p-10"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4 text-white/70">
              <div>
                <p className="font-semibold text-white mb-1">No setup fees</p>
                <p className="text-sm">Get started immediately with zero upfront costs</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">No long-term contracts</p>
                <p className="text-sm">Month-to-month plans, cancel anytime</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Volume discounts available</p>
                <p className="text-sm">Contact us for custom enterprise pricing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
