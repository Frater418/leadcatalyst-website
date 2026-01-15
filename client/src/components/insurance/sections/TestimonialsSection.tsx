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
    <section className="relative py-24 lg:py-32 bg-[#161B22] overflow-hidden">
      {/* HUGE decorative quote icons - text-[120px] opacity-5 */}
      <div className="absolute top-20 left-10 opacity-[0.05] pointer-events-none">
        <Quote size={120} className="text-[#F5A623]" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.05] pointer-events-none">
        <Quote size={120} className="text-[#0D9488] rotate-180" />
      </div>

      {/* Subtle gradient overlay with BOTH colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F5A623]/3 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0D9488]/3 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-headline">
            What Our <span className="italic text-[#F5A623]">Partners</span> Say
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Real results from carriers, agents, and compliance officers across the country
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br from-[#0D1117] to-[#161B22] border rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 ${
                index % 2 === 0 ? 'md:mt-0 border-[#F5A623]/20' : 'md:mt-8 border-[#0D9488]/20'
              }`}
              style={{
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Alternating decorative elements: Gold for even, Teal for odd */}
              {index % 2 === 0 ? (
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#F5A623]/10 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              ) : (
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#0D9488]/10 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              {/* Quote icon with alternating colors */}
              <Quote size={40} className={`mb-6 ${
                index % 2 === 0 ? 'text-[#F5A623]/40' : 'text-[#0D9488]/40'
              }`} />

              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Avatar Placeholder - w-16 h-16 */}
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-2xl ${
                  index % 2 === 0
                    ? 'bg-[#F5A623]/20 text-[#F5A623]'
                    : 'bg-[#0D9488]/20 text-[#0D9488]'
                }`}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/60">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
