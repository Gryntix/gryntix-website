import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'AI Studio',
    description: 'Build and deploy custom AI models',
    link: '/products/ai-studio'
  },
  {
    id: 2,
    name: 'Code Automator',
    description: 'Generate code from natural language',
    link: '/products/code-automator'
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
      <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-16 text-center">Our Products</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="bg-white bg-opacity-5 p-8 rounded-xl hover:bg-opacity-10 transition"
            >
              <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              <p className="text-gray-400">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}