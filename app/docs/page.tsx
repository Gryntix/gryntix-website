import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Documentation Hub</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-5 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <ul className="space-y-4">
                <li>
                  <a href="/docs/quickstart" className="text-emerald-400 hover:underline">
                    Quick Start Guide
                  </a>
                </li>
                <li>
                  <a href="/docs/authentication" className="text-emerald-400 hover:underline">
                    Authentication
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-5 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">API Reference</h2>
              <ul className="space-y-4">
                <li>
                  <a href="/docs/api/analyze" className="text-emerald-400 hover:underline">
                    Analyze Endpoint
                  </a>
                </li>
                <li>
                  <a href="/docs/api/models" className="text-emerald-400 hover:underline">
                    Model Management
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}