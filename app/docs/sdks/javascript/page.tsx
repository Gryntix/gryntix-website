import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function JavaScriptSDKPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">JavaScript SDK Documentation</h1>
          
          <div className="prose prose-invert">
            <h2>Installation</h2>
            <pre className="bg-gray-800 p-4 rounded-lg">
              npm install gryntix-sdk
            </pre>

            <h2>Basic Usage</h2>
            <pre className="bg-gray-800 p-4 rounded-lg">
              {`import { Grynix } from 'gryntix-sdk';

const client = new Grynix('YOUR_API_KEY');
const response = await client.analyze('Sample input');`}
            </pre>

            <h2>Browser Usage</h2>
            <pre className="bg-gray-800 p-4 rounded-lg">
              {`<script src="https://unpkg.com/gryntix-sdk@latest/dist/browser.min.js"></script>
<script>
  const client = new Grynix('YOUR_API_KEY');
  client.analyze('Sample input').then(console.log);
</script>`}
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}