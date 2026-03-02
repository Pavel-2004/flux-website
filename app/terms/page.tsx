import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Terms and Conditions - Flux",
  description: "Flux Terms and Conditions. Read our terms of service for using Flux.",
}

export default function TermsPage() {
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
              Terms and Conditions
            </h1>
            <p className="mt-3 text-muted-foreground">
              Last updated: March 2, 2025
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Agreement to Terms</h2>
              <p>
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (or the organization you represent) and Fermion AI Group (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of Flux, our AI-powered workspace platform, including our website, software, integrations, and related services (collectively, the &quot;Service&quot;). By accessing or using Flux, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
              <p>
                Flux is an AI operating system that connects your organization&apos;s tools (such as Slack, Google Drive, Calendar, CRM, and HR platforms), indexes and organizes knowledge, and enables your team to ask questions, receive intelligent answers, view prioritized tasks, and take action from a unified workspace. The Service is provided on a subscription basis and may include integrations with third-party services that have their own terms and policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Account Registration and Eligibility</h2>
              <p>
                To use Flux, you must create an account and provide accurate, complete information. You must be at least 18 years old and have the authority to bind your organization to these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Use the Service for any illegal purpose or in violation of applicable laws</li>
                <li>Upload, share, or process content that infringes intellectual property, privacy, or other rights of third parties</li>
                <li>Transmit malware, viruses, or other harmful code</li>
                <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems</li>
                <li>Reverse engineer, decompile, or disassemble the Service (except as permitted by law)</li>
                <li>Use the Service to build a competing product or service</li>
                <li>Resell or sublicense the Service without our written consent</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Use automated means (bots, scrapers) to access the Service without permission</li>
              </ul>
              <p className="mt-3">
                We reserve the right to suspend or terminate accounts that violate these Terms or pose a security risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Content and Data</h2>
              <p>
                You retain ownership of all content and data you upload, create, or process through Flux (&quot;Your Content&quot;). By using the Service, you grant us a limited license to use, store, process, and display Your Content solely to provide and improve the Service. You represent that you have the right to provide Your Content and that it does not violate any third-party rights. We are not responsible for Your Content or how you or your users use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p>
                Flux, including its software, design, branding, and documentation, is owned by Fermion AI Group and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to access and use the Service for your internal business purposes during your subscription term. No other rights are granted. You may not copy, modify, or create derivative works of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Integrations</h2>
              <p>
                Flux integrates with third-party services (e.g., Slack, Google, Microsoft). Your use of those integrations is subject to the respective third party&apos;s terms and policies. We are not responsible for third-party services, their availability, or their data practices. You authorize us to access and process data from connected services as necessary to provide Flux.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Subscription, Fees, and Payment</h2>
              <p>
                Subscription terms, fees, and payment terms are set forth in your order form or subscription agreement. Fees are generally billed in advance (monthly or annually). You must provide valid payment information and authorize us to charge your payment method. Prices may change upon renewal with reasonable notice. Refunds are handled in accordance with our refund policy, if any.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Service Availability and Modifications</h2>
              <p>
                We strive to maintain high availability but do not guarantee uninterrupted access. We may modify, suspend, or discontinue features with reasonable notice when practicable. We will not be liable for any modification, suspension, or discontinuation. We may also impose reasonable limits on use to ensure fair access and system stability.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. AI-Generated Content</h2>
              <p>
                Flux uses artificial intelligence to generate answers, summaries, and recommendations. AI outputs are provided for informational and productivity purposes. You should verify important information and not rely solely on AI-generated content for critical decisions. We do not guarantee the accuracy, completeness, or suitability of AI-generated content for any particular purpose.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">11. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">12. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FERMION AI GROUP AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS; IN SUCH CASES, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">13. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Fermion AI Group and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable attorneys&apos; fees) arising from your use of the Service, Your Content, or your violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">14. Termination</h2>
              <p>
                You may terminate your account at any time. We may suspend or terminate your access for breach of these Terms, non-payment, or at our discretion with notice. Upon termination, your right to use the Service ceases. We may retain or delete Your Content in accordance with our data retention policies and applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">15. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of the jurisdiction in which Fermion AI Group is incorporated, without regard to conflict of law principles. Any disputes shall be resolved in the courts of that jurisdiction. You agree to attempt informal resolution before initiating formal proceedings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">16. Changes to Terms</h2>
              <p>
                We may modify these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and updating the &quot;Last updated&quot; date. For paid customers, we may also notify you by email. Continued use of the Service after changes constitutes acceptance. If you do not agree, you must stop using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">17. General</h2>
              <p>
                These Terms, together with our Privacy Policy and any order forms, constitute the entire agreement between you and Fermion AI Group regarding the Service. If any provision is found unenforceable, the remaining provisions remain in effect. Our failure to enforce any right does not waive that right. You may not assign these Terms without our consent; we may assign them in connection with a merger or sale.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">18. Contact</h2>
              <p>
                For questions about these Terms, contact us at:
              </p>
              <p className="mt-2">
                <strong>Fermion AI Group</strong><br />
                Email: <a href="mailto:legal@flux.ai" className="text-flux-violet hover:underline">legal@flux.ai</a>
              </p>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
