import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function CTASection() {
  const benefits = [
    'Free consultation with lead strategy expert',
    'Custom lead volume and quality analysis',
    'ROI projection for your specific market',
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[oklch(0.78_0.15_75)] rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
              Ready to Transform Your{' '}
              <span className="italic text-[oklch(0.78_0.15_75)]">Lead Pipeline?</span>
            </h2>

            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of carriers and agents who have already accelerated their growth with LeadCatalyst Insurance.
            </p>

            <div className="space-y-3 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center gap-3"
                >
                  <CheckCircle size={20} className="text-[oklch(0.78_0.15_75)]" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/insurance/contact">
                <Button
                  size="lg"
                  className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold px-10 py-6 text-lg"
                >
                  Schedule Enterprise Demo
                </Button>
              </Link>
              <Link href="/insurance/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 font-semibold px-10 py-6 text-lg"
                >
                  View Pricing
                </Button>
              </Link>
            </motion.div>

            <p className="text-sm text-white/40 mt-6">
              No credit card required • Setup in 48 hours • Cancel anytime
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
