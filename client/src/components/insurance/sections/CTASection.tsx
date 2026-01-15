import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award } from 'lucide-react';

export default function CTASection() {
  const benefits = [
    'Free consultation with lead strategy expert',
    'Custom lead volume and quality analysis',
    'ROI projection for your specific market',
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20 bg-gradient-to-b from-[rgba(245,166,35,0.05)] to-transparent border-t border-b border-[#F5A623]/20">
      {/* Gold Tint Section with Visible Borders */}

      {/* Layered gold glows */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#F5A623] rounded-full blur-[200px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.10, 0.15, 0.10]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD93D] rounded-full blur-[180px]"
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0D1117_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elevated container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-b from-[#161B22] to-[#0D1117] rounded-3xl p-12 lg:p-20 border-2 border-[#F5A623]/30"
            style={{
              boxShadow: '0 0 0 1px rgba(245, 166, 35, 0.2), 0 24px 80px rgba(0, 0, 0, 0.6), 0 12px 48px rgba(245, 166, 35, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Top decorative border - MORE VISIBLE */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#F5A623] to-transparent rounded-t-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Larger Headline: text-4xl lg:text-5xl */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline leading-tight">
                Ready to Transform Your{' '}
                <span className="italic text-[#F5A623]">Lead Pipeline?</span>
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of carriers and agents who have already accelerated their growth with LeadCatalyst Insurance.
              </p>

              <div className="space-y-4 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <CheckCircle size={24} className="text-[#F5A623] flex-shrink-0" />
                    <span className="text-white/90 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* DUAL Buttons: Gold filled + Teal outline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#F5A623] hover:bg-[#FFD93D] text-[#0D1117] font-semibold px-10 py-6 text-lg"
                >
                  <Link href="/insurance/contact">Schedule Demo</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/10 font-semibold px-10 py-6 text-lg"
                >
                  <Link href="/insurance/pricing">View Pricing</Link>
                </Button>
              </motion.div>

              {/* Trust Badges - SOC2, TCPA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                <Badge className="bg-white/5 text-white border-white/20 px-4 py-2 text-sm font-medium flex items-center gap-2">
                  <Shield size={16} className="text-[#0D9488]" />
                  SOC2 Compliant
                </Badge>
                <Badge className="bg-white/5 text-white border-white/20 px-4 py-2 text-sm font-medium flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#F5A623]" />
                  TCPA Certified
                </Badge>
                <Badge className="bg-white/5 text-white border-white/20 px-4 py-2 text-sm font-medium flex items-center gap-2">
                  <Award size={16} className="text-white" />
                  A+ Rated
                </Badge>
              </motion.div>

              <p className="text-sm text-white/40 mt-8">
                No credit card required • Setup in 48 hours • Cancel anytime
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
