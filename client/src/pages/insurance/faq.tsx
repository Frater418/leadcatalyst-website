import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { FAQItem } from '@/types/insurance';

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      category: 'general',
      question: 'What types of insurance leads do you provide?',
      answer:
        'We specialize in life insurance and annuity leads. Our leads are pre-qualified prospects actively seeking coverage or retirement planning solutions.',
    },
    {
      category: 'general',
      question: 'How are leads generated?',
      answer:
        'We use multi-channel lead generation including targeted advertising, content marketing, and strategic partnerships. All leads go through our 7-point qualification process before delivery.',
    },
    {
      category: 'general',
      question: 'What makes your leads different?',
      answer:
        'Our leads include underwriting-fit scoring, TCPA compliance documentation, and real-time CRM integration. We pre-screen for health, lifestyle, and financial indicators before delivery.',
    },
    {
      category: 'quality',
      question: 'How do you qualify leads?',
      answer:
        'Every lead passes through our 7-point qualification process: source verification, contact validation, intent confirmation, demographic screening, underwriting pre-screen, TCPA consent, and duplicate check.',
    },
    {
      category: 'quality',
      question: 'What is your return policy?',
      answer:
        'We offer credit or replacement within 48 hours for leads not meeting quality standards. No questions asked for the first 30 days.',
    },
    {
      category: 'quality',
      question: 'What are the quality tiers?',
      answer:
        'Premium (Gold): Highest intent, best underwriting fit. Standard (Silver): Strong prospects with good conversion potential. Qualified (Bronze): Verified interest, requires nurturing.',
    },
    {
      category: 'delivery',
      question: 'How quickly are leads delivered?',
      answer:
        'Leads are delivered in real-time, typically within 30 seconds of qualification completion. You receive instant notifications via SMS, email, or CRM push.',
    },
    {
      category: 'delivery',
      question: 'What CRMs do you integrate with?',
      answer:
        'We integrate with 50+ popular CRMs including Salesforce, HubSpot, AgencyBloc, and more. We also offer custom API access and Zapier connectivity.',
    },
    {
      category: 'delivery',
      question: 'Can I get leads on my phone?',
      answer:
        'Yes! Leads can be delivered via SMS, mobile app notifications, email, and direct CRM integration. Our mobile app is available for iOS and Android.',
    },
    {
      category: 'pricing',
      question: 'How much do leads cost?',
      answer:
        'Pricing varies by volume, quality tier, and features. Contact us for a custom quote based on your specific needs. No hidden fees or setup costs.',
    },
    {
      category: 'pricing',
      question: 'Are there volume discounts?',
      answer:
        'Yes, we offer volume discounts for higher monthly commitments. Enterprise pricing is available for carriers and large agencies.',
    },
    {
      category: 'pricing',
      question: 'Do you require contracts?',
      answer:
        'No long-term contracts required. We offer month-to-month plans with the ability to cancel anytime. Enterprise clients can opt for annual agreements with additional benefits.',
    },
    {
      category: 'compliance',
      question: 'Are your leads TCPA compliant?',
      answer:
        'Yes, 100%. We capture prior express written consent, maintain complete audit trails, and provide full TCPA compliance documentation for every lead.',
    },
    {
      category: 'compliance',
      question: 'Do you check DNC lists?',
      answer:
        'Yes. We check National DNC, State DNC, and maintain our own internal DNC list. Verification happens in real-time before lead delivery.',
    },
    {
      category: 'compliance',
      question: 'Can I get compliance documentation?',
      answer:
        'Absolutely. Every lead includes complete compliance documentation: consent timestamp, IP address, opt-in language, and full audit trail. Exportable for regulatory reviews.',
    },
    {
      category: 'getting-started',
      question: 'How do I sign up?',
      answer:
        'Contact our team to schedule a consultation. We\'ll discuss your needs, provide pricing, and set up your account. Most clients are live within 48 hours.',
    },
    {
      category: 'getting-started',
      question: 'Is there a minimum commitment?',
      answer:
        'Our Starter plan begins at 50 leads/month. We recommend starting with a lower volume to test quality before scaling up.',
    },
    {
      category: 'getting-started',
      question: 'Do you offer a trial?',
      answer:
        'We offer a 30-day money-back guarantee for new clients. If you\'re not satisfied with lead quality, we\'ll refund your investment.',
    },
  ];

  const categories = [
    { value: 'general', label: 'General' },
    { value: 'quality', label: 'Quality' },
    { value: 'delivery', label: 'Delivery' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'compliance', label: 'Compliance' },
    { value: 'getting-started', label: 'Getting Started' },
  ];

  return (
    <InsuranceLayout
      title="FAQ | LeadCatalyst Insurance"
      description="Frequently asked questions about our insurance lead generation services, pricing, quality standards, and compliance."
      keywords="insurance leads FAQ, lead generation questions, TCPA compliance FAQ"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-[oklch(0.12_0.015_250)] via-[oklch(0.15_0.015_250)] to-[oklch(0.12_0.015_250)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline"
            >
              Frequently Asked{' '}
              <span className="italic text-[oklch(0.78_0.15_75)]">Questions</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/70"
            >
              Everything you need to know about LeadCatalyst Insurance
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((category, categoryIndex) => {
              const categoryFaqs = faqs.filter((faq) => faq.category === category.value);
              if (categoryFaqs.length === 0) return null;

              return (
                <motion.div
                  key={category.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-display font-bold text-white mb-6">
                    {category.label}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {categoryFaqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.value}-${index}`}
                        className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-lg px-6"
                      >
                        <AccordionTrigger className="text-white hover:text-[oklch(0.78_0.15_75)] text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/70">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </InsuranceLayout>
  );
}
