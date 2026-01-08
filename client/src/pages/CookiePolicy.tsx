/**
 * Cookie Policy Page - LeadCatalyst
 */

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: January 8, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you
              visit a website. They are widely used to make websites work more efficiently, provide a
              better user experience, and give website owners information about how their site is being used.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This Cookie Policy explains how Auranex, LLC ("Company," "we," "us," or "our") uses cookies
              and similar technologies on the LeadCatalyst website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Essential Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are necessary for the website to function properly. They enable core
              functionality such as security, network management, and accessibility. You cannot opt out
              of these cookies as the website would not function properly without them.
            </p>
            <div className="mt-3 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Session cookies for form submissions</li>
                <li>Security cookies to prevent fraud</li>
                <li>User preference cookies (e.g., theme settings)</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Analytics Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies help us understand how visitors interact with our website by collecting and
              reporting information anonymously. This helps us improve our website and services.
            </p>
            <div className="mt-3 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Google Analytics cookies</li>
                <li>Page view tracking</li>
                <li>User behavior analysis</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Marketing Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies are used to track visitors across websites to display relevant advertisements.
              They may be set by us or by third-party advertising partners.
            </p>
            <div className="mt-3 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Facebook Pixel</li>
                <li>Google Ads remarketing</li>
                <li>LinkedIn Insight Tag</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Functional Cookies</h3>
            <p className="text-muted-foreground leading-relaxed">
              These cookies enable enhanced functionality and personalization, such as remembering your
              preferences and settings.
            </p>
            <div className="mt-3 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground"><strong>Examples:</strong></p>
              <ul className="list-disc pl-6 text-sm text-muted-foreground mt-2 space-y-1">
                <li>Language preferences</li>
                <li>Location settings</li>
                <li>Previously entered form data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report
              usage statistics, deliver advertisements, and provide other services. These third parties include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li><strong>GoHighLevel (GHL):</strong> For lead tracking and CRM functionality</li>
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
              <li><strong>Facebook/Meta:</strong> For advertising and social media integration</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookie Duration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cookies can be either "session" cookies or "persistent" cookies:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li><strong>Session cookies:</strong> These are temporary cookies that are erased when
                you close your browser. They are used to remember you during a single browsing session.</li>
              <li><strong>Persistent cookies:</strong> These remain on your device for a set period
                or until you delete them. They are used to remember your preferences and actions across
                multiple visits.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>View what cookies are stored on your device and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Please note that blocking or deleting cookies may impact your experience on our website
              and limit certain functionality.
            </p>

            <h3 className="text-xl font-medium text-foreground mt-6 mb-3">Browser-Specific Instructions</h3>
            <p className="text-muted-foreground leading-relaxed">
              To manage cookies in your browser, please refer to your browser's help documentation:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#F5A623] hover:underline">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Do Not Track Signals</h2>
            <p className="text-muted-foreground leading-relaxed">
              Some browsers have a "Do Not Track" feature that signals to websites that you do not want
              your online activity tracked. Currently, there is no universal standard for how websites
              should respond to Do Not Track signals. Our website does not currently respond to Do Not
              Track signals, but you can manage your cookie preferences through your browser settings
              as described above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or
              for other operational, legal, or regulatory reasons. We encourage you to periodically
              review this page for the latest information on our cookie practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
