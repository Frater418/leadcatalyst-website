import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { TestimonialItem } from '@/types/insurance';

export default function TestimonialsSection() {
  const testimonials: TestimonialItem[] = [
    {
      quote:
        'LeadCatalyst transformed our distribution. Issue rates are up 40% and our agents love the quality of prospects they\'re receiving.',
      author: 'Sarah Chen',
      role: 'VP of Distribution',
      company: 'Regional Life Carrier',
    },
    {
      quote:
        'The speed-to-lead automation changed everything. I\'m connecting with prospects within minutes instead of hours, and my close rate has doubled.',
      author: 'Marcus Thompson',
      role: 'Independent Agent, Top Producer',
      company: 'Texas',
    },
    {
      quote:
        'Finally, a lead source that understands carrier compliance requirements. The documentation and audit trails give us confidence in every lead.',
      author: 'Jennifer Rodriguez',
      role: 'Chief Compliance Officer',
      company: 'National Insurance Group',
    },
    {
      quote:
        'I was skeptical about lead quality, but the pre-qualification is real. These prospects are actually interested and ready to talk.',
      author: 'David Kim',
      role: 'Agency Owner',
      company: 'Multi-State IMO',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[oklch(0.12_0.015_250)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 tracking-headline">
            What Our <span className="italic text-[oklch(0.78_0.15_75)]">Partners</span> Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[oklch(0.16_0.015_250)] to-[oklch(0.12_0.015_250)] border border-white/10 rounded-xl p-8 hover:border-[oklch(0.78_0.15_75)]/30 transition-all duration-300"
            >
              <Quote size={32} className="text-[oklch(0.78_0.15_75)]/30 mb-4" />
              <p className="text-white/90 text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-white/60">
                  {testimonial.role}
                  {testimonial.company && `, ${testimonial.company}`}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
