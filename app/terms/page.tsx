import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
      <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <div className="prose prose-invert bg-slate-800/80 backdrop-blur-lg p-8 rounded-xl border border-slate-700">
            <p className="text-slate-300 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">1. Acceptance of Terms</h2>
            <p className="text-slate-300 mb-6">
              By accessing or using Gryntix services, you agree to be bound by these Terms. If you disagree with any part, you may not access our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 text-slate-300 space-y-2">
              <li>You must be at least 13 years old to use our services</li>
              <li>You are responsible for maintaining account security</li>
              <li>Prohibited activities include illegal actions, service disruption, data scraping, and reverse engineering</li>
              <li>You may not use our services for any unlawful purpose or to violate any law or regulation</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">3. Intellectual Property</h2>
            <p className="text-slate-300 mb-6">
              All content, logos, trademarks, and intellectual property associated with Gryntix are protected by copyright laws. You retain ownership of your content, but by using our services, you grant Gryntix a non-exclusive, royalty-free, and transferable license to operate our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">4. Data Collection and Privacy</h2>
            <p className="text-slate-300 mb-6">
              We collect and process data as described in our Privacy Policy. By agreeing to these Terms, you also agree to our data practices as outlined in our Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">5. Payment and Subscriptions</h2>
            <p className="text-slate-300 mb-6">
              Subscription payments are processed through third-party providers. All payments are non-refundable, except as required by law. We reserve the right to change subscription fees with prior notice.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">6. Termination and Account Suspension</h2>
            <p className="text-slate-300 mb-6">
              Gryntix reserves the right to suspend or terminate your account for violations of these Terms, non-payment of fees, or at our discretion. You may also terminate your account by contacting support.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">7. Disclaimers and Limitation of Liability</h2>
            <p className="text-slate-300 mb-6">
              Gryntix services are provided "as is" without warranties of any kind. Gryntix shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">8. Changes to Terms</h2>
            <p className="text-slate-300 mb-6">
              Gryntix reserves the right to update these Terms at any time. Continued use of services after changes constitute acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">9. Contact Us</h2>
            <p className="text-slate-300">
              For questions or concerns about these Terms, please contact us at <a href="mailto:legal@gryntix.com" className="text-emerald-400">legal@gryntix.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
