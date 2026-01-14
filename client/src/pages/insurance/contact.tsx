import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { GHL_INSURANCE_WEBHOOK_URL } from '@/config/ghl';
import type { InsuranceFormData } from '@/types/insurance';

export default function Contact() {
  const [formData, setFormData] = useState<InsuranceFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: 'agent',
    leadVolume: '<50',
    message: '',
    preferredContact: 'email',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare payload with source and page tracking
    const payload = {
      ...formData,
      source: 'insurance-vertical',
      page: window.location.pathname,
    };

    try {
      const response = await fetch(GHL_INSURANCE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      toast.success('Thank you! We\'ll be in touch within 2 hours.');
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <InsuranceLayout
      title="Contact & Demo Request | LeadCatalyst Insurance"
      description="Get in touch with our team to discuss your insurance lead generation needs. We're here to help carriers, distributors, and agents grow their business."
      keywords="contact insurance leads, demo request, insurance lead consultation"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline"
              >
                Let's Talk About Your{' '}
                <span className="italic text-[oklch(0.78_0.15_75)]">Lead Strategy</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/70"
              >
                Whether you're a carrier looking for enterprise solutions or an agent seeking quality leads, we're here to help.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+17542092098"
                      className="flex items-center gap-3 text-white/80 hover:text-[oklch(0.78_0.15_75)] transition-colors"
                    >
                      <Phone size={20} className="flex-shrink-0" />
                      <span>+1 (754) 209-2098</span>
                    </a>
                    <a
                      href="mailto:insurance@leadcatalyst.com"
                      className="flex items-center gap-3 text-white/80 hover:text-[oklch(0.78_0.15_75)] transition-colors"
                    >
                      <Mail size={20} className="flex-shrink-0" />
                      <span>insurance@leadcatalyst.com</span>
                    </a>
                    <div className="flex items-center gap-3 text-white/80">
                      <Clock size={20} className="flex-shrink-0" />
                      <div>
                        <div>Mon-Fri 9AM-6PM EST</div>
                        <div className="text-sm text-white/60">Response time: &lt;2 hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-display font-semibold text-white mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                      <span>Initial consultation within 2 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                      <span>Custom pricing and volume analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                      <span>ROI projection for your market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.15_75)] rounded-full mt-2 flex-shrink-0" />
                      <span>Live within 48 hours</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-2"
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-8"
                >
                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Phone *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-white mb-2">
                      Company *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Your Role *
                      </label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            role: value as InsuranceFormData['role'],
                          })
                        }
                      >
                        <SelectTrigger className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="carrier">Carrier/Distributor</SelectItem>
                          <SelectItem value="agent">Agent/Producer</SelectItem>
                          <SelectItem value="imo">IMO/FMO</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Monthly Lead Volume *
                      </label>
                      <Select
                        value={formData.leadVolume}
                        onValueChange={(value) =>
                          setFormData({
                            ...formData,
                            leadVolume: value as InsuranceFormData['leadVolume'],
                          })
                        }
                      >
                        <SelectTrigger className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="<50">Less than 50</SelectItem>
                          <SelectItem value="50-250">50-250</SelectItem>
                          <SelectItem value="250-1000">250-1000</SelectItem>
                          <SelectItem value="1000+">1000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-white mb-2">
                      Preferred Contact Method *
                    </label>
                    <Select
                      value={formData.preferredContact}
                      onValueChange={(value) =>
                        setFormData({
                          ...formData,
                          preferredContact: value as 'phone' | 'email',
                        })
                      }
                    >
                      <SelectTrigger className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your lead generation needs..."
                      className="bg-[oklch(0.12_0.015_250)] border-white/20 text-white"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-[oklch(0.78_0.15_75)] hover:bg-[oklch(0.85_0.12_75)] text-[oklch(0.12_0.015_250)] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Request Consultation'}
                  </Button>

                  <p className="text-xs text-white/40 text-center mt-4">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
