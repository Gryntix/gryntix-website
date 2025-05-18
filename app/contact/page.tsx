import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white font-sans">
        <Navigation />
      
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="bg-white bg-opacity-5 p-8 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}