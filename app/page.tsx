import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

export default function HomePage() {
  const products = [
    {
      id: 1,
      name: 'AI Studio',
      description: 'Build and deploy custom AI models with no-code interface',
      icon: '🤖',
      link: '/products/ai-studio'
    },
    {
      id: 2,
      name: 'Code Automator',
      description: 'Generate code from natural language prompts',
      icon: '💻',
      link: '/products/code-automator'
    },
    {
      id: 3,
      name: 'Data Forge',
      description: 'Advanced data analysis and visualization toolkit',
      icon: '📊',
      link: '/products/data-forge'
    },
    {
      id: 4,
      name: 'SecureConnect',
      description: 'End-to-end encrypted collaboration platform',
      icon: '🔒',
      link: '/products/secure-connect'
    }
  ];

  return (
    <>
      {/* Add the Head component here */}
      <Head>
        <title>Gryntix - Homapage</title>
        <meta name="description" content="Discover powerful tools to boost your productivity and streamline your life." />
        <link rel="icon" href="/images/logo/gryntix-logo.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
        <Navigation />

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Transform Your Workflow with
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Gryntix Tools
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover powerful solutions for developers, teams, and enterprises. 
            Leverage cutting-edge AI and automation to supercharge your productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/docs"
              className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-full text-lg font-semibold transition transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/products"
              className="border border-emerald-500 hover:bg-emerald-900 px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              View All Products
            </Link>
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white bg-opacity-5 p-8 rounded-2xl hover:bg-opacity-10 transition h-full"
              >
                <div className="text-4xl mb-6">{product.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
                <p className="text-gray-400 mb-6">{product.description}</p>
                <Link
                  href={product.link}
                  className="text-emerald-400 hover:text-emerald-300 flex items-center"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
