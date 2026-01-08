/**
 * Terms of Service Page - LeadCatalyst
 */

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 8, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and
              Auranex, LLC ("Company," "we," "us," or "our"), a Delaware limited liability company,
              concerning your access to and use of the LeadCatalyst website and services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree
              with any part of these Terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              LeadCatalyst provides lead generation and performance marketing services for businesses.
              Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>Lead generation campaigns</li>
              <li>Performance marketing strategies</li>
              <li>Digital advertising management</li>
              <li>Marketing consultation</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Representations</h2>
            <p className="text-muted-foreground leading-relaxed">
              By using our services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>You are at least 18 years of age</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You are not located in a jurisdiction where use of our services is prohibited</li>
              <li>All information you provide is accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information</li>
              <li>Your use of our services does not violate any applicable law or regulation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Prohibited Activities</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may not use our services for any unlawful purpose or in any way that could damage,
              disable, or impair our services. Prohibited activities include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>Systematic retrieval of data or content from our services</li>
              <li>Making unauthorized use of our services</li>
              <li>Engaging in unauthorized framing or linking to our website</li>
              <li>Interfering with security features of our services</li>
              <li>Engaging in any automated use of our system</li>
              <li>Attempting to bypass any measures designed to prevent or restrict access</li>
              <li>Using the services to advertise or sell goods and services without our permission</li>
              <li>Impersonating another user or person</li>
              <li>Using information obtained from our services to harass or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise indicated, the website and all content, features, and functionality
              (including but not limited to all information, software, text, displays, images, video,
              and audio) are owned by the Company and are protected by United States and international
              copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may not reproduce, distribute, modify, create derivative works of, publicly display,
              publicly perform, republish, download, store, or transmit any of the material on our
              website without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. User Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              Any content, information, or material you submit through our forms or communications
              ("User Content") remains your property. However, by submitting User Content, you grant
              us a non-exclusive, worldwide, royalty-free license to use, reproduce, and process such
              content for the purpose of providing our services to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or
              controlled by us. We have no control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party websites or services. You acknowledge
              and agree that we shall not be responsible for any damage or loss caused by your use of
              any such content or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              OUR SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL
              WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We do not warrant that our services will be uninterrupted, timely, secure, or error-free,
              or that any defects will be corrected. We do not warrant or make any representations
              regarding the results that may be obtained from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY, ITS DIRECTORS,
              EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
              LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>Your access to or use of or inability to access or use our services</li>
              <li>Any conduct or content of any third party on our services</li>
              <li>Any content obtained from our services</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless the Company and its officers, directors,
              employees, contractors, agents, licensors, and suppliers from and against any claims,
              liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including
              reasonable attorneys' fees) arising out of or relating to your violation of these Terms
              or your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Delaware, without regard to its conflict of law provisions. Any legal action or
              proceeding arising out of or relating to these Terms shall be brought exclusively in the
              state or federal courts located in Delaware.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">12. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is held to be unenforceable or invalid, such provision
              will be changed and interpreted to accomplish the objectives of such provision to the
              greatest extent possible under applicable law, and the remaining provisions will continue
              in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">13. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion.
              If a revision is material, we will provide at least 30 days' notice prior to any new terms
              taking effect. By continuing to access or use our services after any revisions become
              effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us:
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
