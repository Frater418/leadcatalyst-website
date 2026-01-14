import InsuranceLayout from '@/components/insurance/InsuranceLayout';
import HeroSection from '@/components/insurance/sections/HeroSection';
import ProblemSolutionSection from '@/components/insurance/sections/ProblemSolutionSection';
import MetricsSection from '@/components/insurance/sections/MetricsSection';
import LeadQualityPreview from '@/components/insurance/sections/LeadQualityPreview';
import SolutionTeasers from '@/components/insurance/sections/SolutionTeasers';
import TestimonialsSection from '@/components/insurance/sections/TestimonialsSection';
import CTASection from '@/components/insurance/sections/CTASection';

export default function InsuranceHome() {
  return (
    <InsuranceLayout
      title="Carrier-Grade Insurance Leads | LeadCatalyst Insurance"
      description="High-intent life and annuity prospects with underwriting-fit scoring, TCPA compliance, and real-time CRM integration. For carriers, distributors, and agents."
      keywords="insurance leads, life insurance leads, annuity leads, carrier-grade leads, TCPA compliant leads, underwriting-fit scoring"
    >
      <HeroSection />
      <ProblemSolutionSection />
      <MetricsSection />
      <LeadQualityPreview />
      <SolutionTeasers />
      <TestimonialsSection />
      <CTASection />
    </InsuranceLayout>
  );
}
