import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Flux",
  description: "Flux Privacy Policy. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-flux-violet transition-colors mb-8"
          >
            ← Back to home
          </Link>

          <header className="mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-muted-foreground">
              Last updated: March 2, 2025
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                Flux (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an AI-powered workspace platform operated by Fermion AI Group. We are committed to protecting your privacy and the privacy of your organization&apos;s data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you use our services, including our website, platform, and integrations with third-party tools such as Slack, Google Drive, Calendar, CRM systems, and HR platforms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Account information (name, email address, company name)</li>
                <li>Login credentials and authentication data</li>
                <li>Content you create, upload, or share within Flux</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.2 Information from Connected Tools</h3>
              <p>
                When you connect third-party services (Slack, Google Workspace, calendars, CRMs, HR platforms, etc.), we receive data necessary to provide our services. This may include messages, files, calendar events, contacts, and other content you authorize us to access. We only access data required for indexing, organizing, and enabling intelligent search and AI-powered features.
              </p>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">2.3 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Usage data (features used, actions taken, session duration)</li>
                <li>Device and browser information</li>
                <li>IP address and general location</li>
                <li>Log data and error reports</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Index and organize your workspace data for search and AI features</li>
                <li>Generate intelligent answers, task prioritization, and recommendations</li>
                <li>Authenticate users and manage accounts</li>
                <li>Send service-related communications and updates</li>
                <li>Respond to support requests</li>
                <li>Analyze usage patterns to improve our product</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. AI and Machine Learning</h2>
              <p>
                Flux uses artificial intelligence and machine learning to power features such as intelligent search, natural language answers, and task prioritization. We process your workspace data to train and improve our AI models. We implement safeguards to ensure data is used responsibly and in accordance with this policy. We do not use your data to train general-purpose AI models for unrelated products or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li><strong>Service providers</strong> who assist in operating our platform (hosting, analytics, support)</li>
                <li><strong>Connected third-party tools</strong> as authorized by you for integration purposes</li>
                <li><strong>Legal authorities</strong> when required by law or to protect our rights</li>
                <li><strong>Business transfers</strong> in connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption in transit and at rest, access controls, and regular security assessments. We are committed to protecting your data from unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Retention</h2>
              <p>
                We retain your data for as long as your account is active or as needed to provide services. When you disconnect an integration or delete content, we remove or anonymize the associated data in accordance with our retention policies. You may request deletion of your account and associated data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct or update inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is consent-based</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, contact us at{" "}
                <a href="mailto:privacy@flux.ai" className="text-flux-violet hover:underline">privacy@flux.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. GDPR and International Compliance</h2>
              <p>
                For users in the European Economic Area (EEA) and United Kingdom, we process personal data in accordance with the General Data Protection Regulation (GDPR). We rely on lawful bases including contract performance, legitimate interests, and consent where appropriate. We may transfer data to countries outside the EEA using appropriate safeguards such as Standard Contractual Clauses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to maintain sessions, remember preferences, and analyze usage. You can manage cookie preferences through your browser settings. Some features may not function properly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Children&apos;s Privacy</h2>
              <p>
                Flux is not intended for use by individuals under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page and updating the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Contact Us</h2>
              <p>
                For questions about this Privacy Policy or our data practices, contact us at:
              </p>
              <p className="mt-2">
                <strong>Fermion AI Group</strong><br />
                Email: <a href="mailto:privacy@flux.ai" className="text-flux-violet hover:underline">privacy@flux.ai</a>
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
