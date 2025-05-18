'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xnndwlnq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 text-gray-300">Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full bg-gray-800 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full bg-gray-800 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <div>
        <label className="block mb-2 text-gray-300">Message</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full bg-gray-800 rounded-lg p-3 focus:ring-2 focus:ring-emerald-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-lg font-semibold transition disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-emerald-400 text-center mt-4">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center mt-4">Error sending message. Please try again.</p>
      )}
    </form>
  );
}