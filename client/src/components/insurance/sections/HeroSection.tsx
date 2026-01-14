import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[oklch(0.78_0.15_75)] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[oklch(0.60_0.14_75)] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Badge className="bg-[oklch(0.78_0.15_75)]/20 text-[oklch(0.78_0.15_75)] border-[oklch(0.78_0.15_75)]/30 px-4 py-2 text-sm font-medium">
              Now Accepting New Partners
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-center text-white mb-6 leading-tight tracking-headline"
          >
            Carrier-Grade Insurance Leads —{' '}
            <span className="italic text-[oklch(0.78_0.15_75)]">Pre-Qualified</span> for Results
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 text-center mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            High-intent life and annuity prospects delivered with underwriting-fit scoring, TCPA compliance, and real-time CRM integration. For carriers, distributors, and agents.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link href="/insurance/for-carriers">
              <Button
                size="lg"
                className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold px-8 py-6 text-base"
              >
                For Carriers →
              </Button>
            </Link>
            <Link href="/insurance/for-agents">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 text-base"
              >
                For Agents →
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Shield size={18} className="text-[oklch(0.78_0.15_75)]" />
              TCPA Compliant
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Zap size={18} className="text-[oklch(0.78_0.15_75)]" />
              Real-Time Delivery
            </div>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <CheckCircle size={18} className="text-[oklch(0.78_0.15_75)]" />
              Quality Guaranteed
            </div>
          </motion.div>

          {/* Live Performance Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80">Live Performance Metrics</span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-display font-bold text-white">91</span>
                  <span className="text-sm text-white/60">/100</span>
                </div>
                <div className="text-sm text-white/60">Lead Quality Score</div>
              </div>

              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-display font-bold text-[oklch(0.78_0.15_75)]">
                    +42%
                  </span>
                </div>
                <div className="text-sm text-white/60">Higher Issue Rates</div>
              </div>

              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-display font-bold text-white">3.2x</span>
                </div>
                <div className="text-sm text-white/60">Contact-to-Quote</div>
              </div>

              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-display font-bold text-white">&lt;2h</span>
                </div>
                <div className="text-sm text-white/60">Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/40 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
