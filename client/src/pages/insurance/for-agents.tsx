import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, MessageSquare, Phone, Calendar, Clock, MapPin } from 'lucide-react';

export default function ForAgents() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Lead Delivery',
      items: [
        'Real-time push to CRM',
        'SMS/email notification',
        'Mobile app alerts',
        'Priority routing',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Automated Follow-Up',
      items: [
        'Pre-built SMS sequences',
        'Email drip campaigns',
        'Voicemail drops',
        'Multi-touch cadences',
      ],
    },
    {
      icon: Phone,
      title: 'Warm Transfers',
      items: [
        'Live prospect connection',
        'Pre-qualified handoff',
        'Caller ID display',
        'Recording available',
      ],
    },
    {
      icon: Calendar,
      title: 'Appointment Setting',
      items: [
        'Calendar integration',
        'Automated scheduling',
        'Reminder sequences',
        'No-show follow-up',
      ],
    },
    {
      icon: Clock,
      title: 'Speed-to-Lead',
      items: [
        '<2 minute response',
        'Automated first touch',
        'Priority queuing',
        'After-hours handling',
      ],
    },
    {
      icon: MapPin,
      title: 'Exclusive Territories',
      items: [
        'No lead sharing',
        'Geographic exclusivity',
        'Product exclusivity',
        'Volume guarantees',
      ],
    },
  ];

  return (
    <InsuranceLayout
      title="For Agents & Producers | LeadCatalyst Insurance"
      description="Stop chasing cold leads. Get exclusive, pre-qualified insurance prospects delivered with automated follow-up, warm transfers, and appointment setting."
      keywords="insurance agent leads, producer leads, exclusive insurance leads, automated follow-up, warm transfers"
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
                Agent Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
                Stop Chasing{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Cold Leads</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Get exclusive, pre-qualified prospects delivered with automated follow-up, warm transfers, and appointment setting—all in one turnkey system.
              </p>
              <Link href="/insurance/contact">
                <Button
                  size="lg"
                  className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold px-10 py-6"
                >
                  Start Getting Leads Today
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
                Your Turnkey{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Lead Engine</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Everything you need to convert prospects into policies—all automated and integrated into your workflow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-6 hover:border-[oklch(0.78_0.15_75)]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[oklch(0.78_0.15_75)]/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-[oklch(0.78_0.15_75)]" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-1.5 flex-shrink-0" />
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

      {/* Agent Dashboard Preview */}
      <section className="py-20 bg-gradient-to-br from-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-[oklch(0.78_0.15_75)]/30 rounded-2xl p-10"
            >
              <h3 className="text-3xl font-display font-bold text-white mb-6 text-center">
                Your Personal Lead Dashboard
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-[oklch(0.78_0.15_75)] mb-1">
                    24
                  </div>
                  <div className="text-sm text-white/60">Today's Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-white mb-1">12</div>
                  <div className="text-sm text-white/60">Appointments Scheduled</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-white mb-1">38%</div>
                  <div className="text-sm text-white/60">Conversion Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-white mb-1">
                    &lt;5m
                  </div>
                  <div className="text-sm text-white/60">Avg Response Time</div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/insurance/platform">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5"
                  >
                    See Dashboard Features →
                  </Button>
                </Link>
              </div>
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
                Ready to <span className="italic text-[oklch(0.78_0.15_75)]">Double</span> Your Close Rate?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Join thousands of agents who have transformed their business with LeadCatalyst Insurance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/insurance/contact">
                  <Button
                    size="lg"
                    className="bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold px-10 py-6"
                  >
                    Start Getting Leads
                  </Button>
                </Link>
                <Link href="/insurance/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 px-10 py-6"
                  >
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
