'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function DevPortal() {
  const [activeTab, setActiveTab] = useState('rest');
  const [apiKey, setApiKey] = useState('');
  const [codeOutput, setCodeOutput] = useState('');
  const [requestBody, setRequestBody] = useState(JSON.stringify({
    text: "Sample input for analysis",
    model: "gryntix-advanced"
  }, null, 2));

  const mockAPICall = async () => {
    setCodeOutput('Simulating API call...\n');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setCodeOutput(prev => prev + JSON.stringify({
      results: [
        { label: "positive", score: 0.92 },
        { label: "neutral", score: 0.07 },
        { label: "negative", score: 0.01 }
      ],
      model: "gryntix-advanced-v3.1",
      processing_time: "142ms"
    }, null, 2));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Gryntix Developer Hub
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Everything you need to build, integrate, and scale with Gryntix AI
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <nav className="bg-slate-800/90 backdrop-blur-lg p-6 rounded-xl sticky top-24 border border-slate-700">
              <h2 className="text-lg font-semibold mb-4 text-slate-200">Quick Links</h2>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setActiveTab('rest')}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      activeTab === 'rest' 
                        ? 'bg-emerald-500 text-slate-900' 
                        : 'bg-slate-700/50 hover:bg-slate-600 text-slate-200'
                    }`}
                  >
                    REST API
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('sdks')}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      activeTab === 'sdks' 
                        ? 'bg-emerald-500 text-slate-900' 
                        : 'bg-slate-700/50 hover:bg-slate-600 text-slate-200'
                    }`}
                  >
                    SDKs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('playground')}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      activeTab === 'playground' 
                        ? 'bg-emerald-500 text-slate-900' 
                        : 'bg-slate-700/50 hover:bg-slate-600 text-slate-200'
                    }`}
                  >
                    API Playground
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('status')}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      activeTab === 'status' 
                        ? 'bg-emerald-500 text-slate-900' 
                        : 'bg-slate-700/50 hover:bg-slate-600 text-slate-200'
                    }`}
                  >
                    System Status
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* REST API Section */}
            {activeTab === 'rest' && (
              <div className="bg-slate-800/90 backdrop-blur-lg p-8 rounded-xl border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-slate-100">REST API Documentation</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-300">Base URL</h3>
                    <code className="bg-slate-900 p-4 rounded-lg block text-slate-200 border border-slate-700">
                      https://api.gryntix.com/v1
                    </code>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-300">Authentication</h3>
                    <pre className="bg-slate-900 p-4 rounded-lg overflow-x-auto text-slate-200 border border-slate-700">
                      {`curl -X POST \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Your input here"}' \\
  https://api.gryntix.com/v1/analyze`}
                    </pre>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-slate-300">Endpoints</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-emerald-900 text-emerald-400 rounded text-sm">
                            POST
                          </span>
                          <code className="text-slate-200">/analyze</code>
                        </div>
                        <p className="text-slate-400">Text analysis endpoint</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SDKs Section */}
            {activeTab === 'sdks' && (
              <div className="bg-slate-800/90 backdrop-blur-lg p-8 rounded-xl border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-slate-100">SDKs & Libraries</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <span className="text-2xl">🐍</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-200">Python SDK</h3>
                    </div>
                    <pre className="bg-slate-800 p-4 rounded mb-4 text-slate-200">
                      pip install gryntix-sdk
                    </pre>
                    <Link href="/docs/sdks/python" className="text-emerald-400 hover:text-emerald-300 flex items-center">
                      View Documentation →
                    </Link>
                  </div>

                  <div className="bg-slate-900 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-emerald-500/20 p-2 rounded-lg">
                        <span className="text-2xl">🟨</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-200">JavaScript SDK</h3>
                    </div>
                    <pre className="bg-slate-800 p-4 rounded mb-4 text-slate-200">
                      npm install gryntix-sdk
                    </pre>
                    <Link href="/docs/sdks/javascript" className="text-emerald-400 hover:text-emerald-300 flex items-center">
                      View Documentation →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* API Playground */}
            {activeTab === 'playground' && (
              <div className="bg-slate-800/90 backdrop-blur-lg p-8 rounded-xl border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-slate-100">API Playground</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block mb-2 text-slate-300">API Key</label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="w-full bg-slate-900 rounded-lg p-3 mb-4 text-slate-200 border border-slate-700 focus:ring-2 focus:ring-emerald-400"
                      placeholder="Enter your API key"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2 text-slate-300">Request Body</label>
                      <textarea
                        value={requestBody}
                        onChange={(e) => setRequestBody(e.target.value)}
                        rows={12}
                        className="w-full bg-slate-900 rounded-lg p-3 font-mono text-sm text-slate-200 border border-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-slate-300">Response</label>
                      <pre className="w-full bg-slate-900 rounded-lg p-3 h-full text-sm overflow-auto text-slate-200 border border-slate-700">
                        {codeOutput || '// Your response will appear here'}
                      </pre>
                    </div>
                  </div>

                  <button
                    onClick={mockAPICall}
                    className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg text-slate-900 font-semibold transition-colors"
                  >
                    Send Request
                  </button>
                </div>
              </div>
            )}

            {/* System Status */}
            {activeTab === 'status' && (
              <div className="bg-slate-800/90 backdrop-blur-lg p-8 rounded-xl border border-slate-700">
                <h2 className="text-3xl font-bold mb-6 text-slate-100">System Status</h2>
                <div className="space-y-4">
                  <div className="bg-slate-900 p-4 rounded-lg flex items-center justify-between border border-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-200">API Services</h3>
                      <p className="text-slate-400 text-sm">All regions</p>
                    </div>
                    <span className="text-emerald-400">● Operational</span>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-lg flex items-center justify-between border border-slate-700">
                    <div>
                      <h3 className="font-semibold text-slate-200">Database Cluster</h3>
                      <p className="text-slate-400 text-sm">Primary Region</p>
                    </div>
                    <span className="text-emerald-400">● Operational</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="container mx-auto px-6 pb-24">
        <div className="bg-emerald-900/30 backdrop-blur-lg p-12 rounded-2xl text-center border border-emerald-800">
          <h2 className="text-3xl font-bold mb-6 text-emerald-100">Need Help Integrating?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-800/50 hover:bg-emerald-800 px-8 py-4 rounded-full transition-colors text-emerald-100"
            >
              Contact Support
            </Link>
            <Link
              href="https://github.com/gryntix/examples"
              className="bg-emerald-800/50 hover:bg-emerald-800 px-8 py-4 rounded-full transition-colors text-emerald-100"
            >
              View Code Examples
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}