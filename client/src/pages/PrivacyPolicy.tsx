/**
 * Privacy Policy Page - LeadCatalyst
 * GHL (GoHighLevel) Compliant
 */

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 8, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Auranex, LLC ("Company," "we," "us," or "our"), a Delaware limited liability company,
              operates the LeadCatalyst website and services. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge
              that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>Fill out our contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This information may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>Name (first and last)</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Message content and inquiries</li>
            </ul>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent</li>
              <li>Click patterns and navigation paths</li>
              <li>Device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To send newsletters and updates about our services</li>
              <li>To improve our website and services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To comply with legal obligations</li>
              <li>To protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Service Providers</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may share your information with third-party service providers who assist us in operating
              our business. These providers include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li><strong>GoHighLevel (GHL):</strong> Our customer relationship management (CRM) platform
                that helps us manage leads, communications, and marketing automation</li>
              <li><strong>Analytics providers:</strong> To help us understand website usage and improve our services</li>
              <li><strong>Email service providers:</strong> To send newsletters and marketing communications</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These third parties are contractually obligated to protect your information and may only use
              it for the purposes we specify.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
              When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@auranex.ai" className="text-[#F5A623] hover:underline">
                privacy@auranex.ai
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. California Privacy Rights (CCPA)</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a California resident, you have additional rights under the California Consumer
              Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>The right to know what personal information is collected, used, shared, or sold</li>
              <li>The right to delete personal information held by businesses</li>
              <li>The right to opt-out of the sale of personal information</li>
              <li>The right to non-discrimination for exercising your CCPA rights</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not sell personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected information
              from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="mt-4 p-6 bg-muted/30 rounded-lg">
              <p className="text-foreground font-medium">Auranex, LLC</p>
              <p className="text-muted-foreground mt-2">131 Continental Dr, Suite 305</p>
              <p className="text-muted-foreground">Newark, DE 19713</p>
              <p className="text-muted-foreground">United States</p>
              <p className="text-muted-foreground mt-4">
                Email:{" "}
                <a href="mailto:privacy@auranex.ai" className="text-[#F5A623] hover:underline">
                  privacy@auranex.ai
                </a>
              </p>
              <p className="text-muted-foreground">
                Phone:{" "}
                <a href="tel:+17542092098" className="text-[#F5A623] hover:underline">
                  +1 (754) 209-2098
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
