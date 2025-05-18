import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PythonSDKPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Python SDK Documentation</h1>
          
          <div className="prose prose-invert">
            <h2>Installation</h2>
            <pre className="bg-gray-800 p-4 rounded-lg">
              pip install gryntix-sdk
            </pre>

            <h2>Basic Usage</h2>
            <pre className="bg-gray-800 p-4 rounded-lg">
              {`from gryntix import GrynixClient

client = GrynixClient(api_key="YOUR_API_KEY")
response = client.analyze(text="Sample input")`}
            </pre>

            <h2>Advanced Features</h2>
            <pre className="bg-gray-800 p-4 rounded-lg">
              {`# Batch processing
client.batch_analyze(texts=["input1", "input2"])

# Custom models
client.use_model("gryntix-advanced-v2")`}
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}