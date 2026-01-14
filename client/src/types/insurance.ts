// Insurance Vertical TypeScript Interfaces

export interface QualityTier {
  name: string;
  badge: 'Gold' | 'Silver' | 'Bronze';
  description: string;
  useCase: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'quality' | 'delivery' | 'pricing' | 'compliance' | 'getting-started';
}

export interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: TestimonialItem;
}

export interface QualificationStep {
  number: number;
  title: string;
  description: string;
}

export interface ComplianceFeature {
  title: string;
  items: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  result: string;
}

export interface InsuranceFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: 'carrier' | 'agent' | 'imo' | 'other';
  leadVolume: '<50' | '50-250' | '250-1000' | '1000+';
  message: string;
  preferredContact?: 'phone' | 'email';
}
