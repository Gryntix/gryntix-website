import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
      <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert bg-slate-800/80 backdrop-blur-lg p-8 rounded-xl border border-slate-700">
            <p className="text-slate-300 mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">1. Data Collection</h2>
            <p className="text-slate-300 mb-6">
              We collect information that you provide to us, such as account data, and data collected automatically through cookies and other tracking technologies.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">2. Use of Data</h2>
            <p className="text-slate-300 mb-6">
              We use the data to provide and improve our services, including personalized experiences and communications.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">3. Data Sharing</h2>
            <p className="text-slate-300 mb-6">
              We do not sell your data. We may share data with third-party providers to operate our services, but only under strict agreements to protect your data.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-slate-100">4. Data Security</h2>
            <p className="text-slate-300 mb-6">
              We implement security measures to protect your data, but no method of transmission or storage is completely secure.
            </p>

            <p className="text-slate-300">
              For questions regarding our privacy practices, contact us at <a href="mailto:privacy@gryntix.com" className="text-emerald-400">privacy@gryntix.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
