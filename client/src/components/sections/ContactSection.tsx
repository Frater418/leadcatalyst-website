/**
 * Contact Section - LeadCatalyst
 *
 * Contact form with Go High Level webhook integration
 * Submits directly to GHL workflow for contact creation
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { GHL_WEBHOOK_URL } from "@/config/ghl";

const industries = [
  { value: "legal", label: "Legal / Personal Injury" },
  { value: "insurance", label: "Insurance" },
  { value: "financial", label: "Financial Services" },
  { value: "realestate", label: "Real Estate" },
  { value: "wealth", label: "Wealth Management" },
  { value: "b2b", label: "B2B Services" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@leadcatalyst.com",
    href: "mailto:contact@leadcatalyst.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (754) 209-2098",
    href: "tel:+17542092098",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      industry: formData.get("industry") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch(GHL_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      toast.success("Thank you! We'll be in touch within 24 hours.");
      form.reset();

      // Reset success state after delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-dark relative overflow-hidden">
      {/* Diagonal Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)" }} />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 right-10 w-80 h-80 bg-[#F5A623]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-10 w-64 h-64 bg-[#22C55E]/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/30 mb-6">
              <span className="text-sm font-medium text-[#F5A623]">Get In Touch</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to See{" "}
              <span className="font-display italic text-[#F5A623]">Vertical-First</span>
              <br />
              in Action?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how LeadCatalyst can deliver pre-qualified prospects
              for your industry. Fill out the form and our team will get back
              to you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-[#F5A623]/10 flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-5 h-5 text-[#F5A623]" />
                  </motion.div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-[#F5A623] transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with our team:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/auranex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#22C55E]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-[#22C55E]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        placeholder="John"
                        className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        placeholder="Doe"
                        className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
                      Industry *
                    </label>
                    <Select name="industry" required>
                      <SelectTrigger className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map((industry) => (
                          <SelectItem key={industry.value} value={industry.value}>
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your lead generation needs..."
                      className="bg-background border-border focus:border-[#F5A623] focus:ring-[#F5A623]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F5A623] hover:bg-[#C4841D] text-background font-semibold h-12"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-[#F5A623] hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
