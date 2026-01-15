import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, User, ArrowRight } from 'lucide-react';

export default function SolutionTeasers() {
  const carrierFeatures = [
    'Underwriting-Fit Scoring',
    'Compliance Documentation',
    'API Integration',
    'Volume Flexibility',
    'Distributor Network',
    'White-Label Options',
  ];

  const agentFeatures = [
    'Instant Lead Delivery',
    'Automated Follow-Up',
    'Warm Transfers',
    'Appointment Setting',
    'Speed-to-Lead',
    'Exclusive Territories',
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0D1117] overflow-hidden">
      {/* Dual accent glows behind cards */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/8 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0D9488]/8 rounded-full blur-[140px]" />

      {/* Decorative connecting line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* For Carriers - Gold Accent + Elevated (-mt-4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:-mt-4 bg-gradient-to-br from-[#161B22] to-[#0D1117] border-2 border-[#F5A623]/20 rounded-2xl p-10 hover:border-[#F5A623]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 166, 35, 0.15)'
            }}
          >
            {/* Decorative GOLD top accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#F5A623] via-[#FFD93D] to-[#F5A623] rounded-t-2xl" />

            {/* Enterprise Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#F5A623]/20 text-[#F5A623] border-[#F5A623]/30 text-xs font-medium">
                Enterprise
              </Badge>
            </div>

            <div className="w-16 h-16 bg-[#F5A623]/10 rounded-xl flex items-center justify-center mb-6">
              <Building2 size={32} className="text-[#F5A623]" />
            </div>

            <div className="mb-2">
              <span className="text-sm font-medium text-[#F5A623] uppercase tracking-wider">
                For Carriers & Distributors
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-headline">
              Enterprise-Grade Lead <span className="italic text-[#F5A623]">Solutions</span>
            </h3>

            <ul className="space-y-3 mb-8">
              {carrierFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-[#F5A623] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="w-full bg-[#F5A623] hover:bg-[#FFD93D] text-[#0D1117] font-semibold group"
            >
              <Link href="/insurance/for-carriers">
                Explore Carrier Solutions
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
          </motion.div>

          {/* For Agents - TEAL Accent + Standard Position */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#161B22] to-[#0D1117] border-2 border-[#0D9488]/20 rounded-2xl p-10 hover:border-[#0D9488]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(13, 148, 136, 0.15)'
            }}
          >
            {/* Decorative TEAL top accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0D9488] via-[#14B8A6] to-[#0D9488] rounded-t-2xl" />

            {/* Individual Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#0D9488]/20 text-[#0D9488] border-[#0D9488]/30 text-xs font-medium">
                Individual
              </Badge>
            </div>

            {/* Decorative corner element */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#0D9488]/10 rounded-br-2xl" />

            <div className="w-16 h-16 bg-[#0D9488]/10 rounded-xl flex items-center justify-center mb-6">
              <User size={32} className="text-[#0D9488]" />
            </div>

            <div className="mb-2">
              <span className="text-sm font-medium text-[#0D9488] uppercase tracking-wider">
                For Agents & Producers
              </span>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-4 tracking-headline">
              Your Turnkey Lead <span className="italic text-[#0D9488]">Engine</span>
            </h3>

            <ul className="space-y-3 mb-8">
              {agentFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80">
                  <div className="w-1.5 h-1.5 bg-[#0D9488] rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488]/10 font-semibold group"
            >
              <Link href="/insurance/for-agents">
                Explore Agent Solutions
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
