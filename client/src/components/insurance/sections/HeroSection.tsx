import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D1117]">
      {/* DUAL-ACCENT Background: Teal Radial Gradient Top Right */}
      <div className="absolute inset-0">
        {/* Teal Glow - Top Right */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.20, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#0D9488] rounded-full blur-[180px]"
        />

        {/* Gold Accent - Bottom Left */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.10, 0.15, 0.10]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#F5A623] rounded-full blur-[160px]"
        />

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(13, 148, 136, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 148, 136, 0.3) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        {/* Split Layout: Text Left (60%), Stats Right (40%) */}
        <div className="grid lg:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column: Text + CTAs */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start mb-6"
            >
              <Badge className="bg-[#0D9488]/20 text-[#0D9488] border-[#0D9488]/30 px-4 py-2 text-sm font-medium">
                Now Accepting New Partners
              </Badge>
            </motion.div>

            {/* Headline: 56-64px (text-5xl lg:text-6xl) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1] tracking-headline"
            >
              Carrier-Grade Insurance Leads —{' '}
              <span className="italic text-[#F5A623]">Pre-Qualified</span> for Results
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed"
            >
              High-intent life and annuity prospects delivered with underwriting-fit scoring, TCPA compliance, and real-time CRM integration. For carriers, distributors, and agents.
            </motion.p>

            {/* DUAL CTAs: Gold + Teal Outline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#F5A623] hover:bg-[#FFD93D] text-[#0D1117] font-semibold px-8 py-6 text-base"
              >
                <Link href="/insurance/for-carriers">For Carriers →</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/10 font-semibold px-8 py-6 text-base"
              >
                <Link href="/insurance/for-agents">For Agents →</Link>
              </Button>
            </motion.div>

            {/* Trust Badges - More Prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="flex items-center gap-3 bg-[#161B22] px-4 py-3 rounded-lg border border-white/10">
                <Shield size={24} className="text-[#0D9488] flex-shrink-0" />
                <span className="text-sm text-white/80 font-medium">TCPA Compliant</span>
              </div>
              <div className="flex items-center gap-3 bg-[#161B22] px-4 py-3 rounded-lg border border-white/10">
                <Zap size={24} className="text-[#F5A623] flex-shrink-0" />
                <span className="text-sm text-white/80 font-medium">Real-Time Delivery</span>
              </div>
              <div className="flex items-center gap-3 bg-[#161B22] px-4 py-3 rounded-lg border border-white/10">
                <CheckCircle size={24} className="text-[#0D9488] flex-shrink-0" />
                <span className="text-sm text-white/80 font-medium">Quality Guaranteed</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stats Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative bg-gradient-to-br from-[#161B22] to-[#0D1117] border border-[#0D9488]/30 rounded-2xl p-8 backdrop-blur-xl shadow-2xl"
              style={{
                boxShadow: '0 0 0 1px rgba(13, 148, 136, 0.2), 0 20px 60px -10px rgba(0, 0, 0, 0.5), 0 8px 32px -8px rgba(13, 148, 136, 0.3)'
              }}
            >
              {/* Decorative Teal Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D9488] via-[#F5A623] to-[#0D9488] rounded-t-2xl" />

              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">Live Performance Metrics</span>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-display font-bold text-[#F5A623]">91</span>
                    <span className="text-lg text-white/60">/100</span>
                  </div>
                  <div className="text-sm text-white/70">Lead Quality Score</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display font-bold text-[#0D9488]">+42%</span>
                  </div>
                  <div className="text-sm text-white/70">Higher Issue Rates</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display font-bold text-white">3.2x</span>
                  </div>
                  <div className="text-sm text-white/70">Contact-to-Quote Ratio</div>
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display font-bold text-[#0D9488]">&lt;2h</span>
                  </div>
                  <div className="text-sm text-white/70">Avg Response Time</div>
                </div>
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
