import { ReactNode, useEffect } from 'react';
import InsuranceHeader from './InsuranceHeader';
import InsuranceFooter from './InsuranceFooter';

interface InsuranceLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export default function InsuranceLayout({
  children,
  title = 'LeadCatalyst Insurance - Carrier-Grade Insurance Leads',
  description = 'High-intent life and annuity prospects with underwriting-fit scoring, TCPA compliance, and real-time CRM integration. For carriers, distributors, and agents.',
  keywords = 'insurance leads, life insurance leads, annuity leads, carrier-grade leads, TCPA compliant leads, insurance lead generation',
  ogImage = '/images/og-insurance.png',
}: InsuranceLayoutProps) {
  const fullTitle = title.includes('LeadCatalyst') ? title : `${title} | LeadCatalyst Insurance`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Set meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
  }, [fullTitle, description, keywords, ogImage]);

  return (
    <div className="min-h-screen flex flex-col bg-[oklch(0.12_0.015_250)]">
      <InsuranceHeader />
      <main className="flex-grow pt-16 lg:pt-20">{children}</main>
      <InsuranceFooter />
    </div>
  );
}
