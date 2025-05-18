'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/gryntix-logo.png"
            alt="Gryntix"
            width={48}
            height={48}
            className="mr-2"
          />
          <span className="text-2xl font-bold text-slate-100">Gryntix</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link href="/docs" className="text-slate-300 hover:text-emerald-400 transition">
            Docs
          </Link>
          <Link href="/dev" className="text-slate-300 hover:text-emerald-400 transition">
            Developers
          </Link>
          <Link href="/products" className="text-slate-300 hover:text-emerald-400 transition">
            Products
          </Link>
          <Link href="/contact" className="text-slate-300 hover:text-emerald-400 transition">
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-800 text-slate-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-slate-800 p-4 rounded-lg">
          <Link href="/docs" className="block text-slate-300 hover:text-emerald-400">
            Documentation
          </Link>
          <Link href="/dev" className="block text-slate-300 hover:text-emerald-400">
            Developers
          </Link>
          <Link href="/products" className="block text-slate-300 hover:text-emerald-400">
            Products
          </Link>
          <Link href="/contact" className="block text-slate-300 hover:text-emerald-400">
            Contact
          </Link>
          <Link href="/terms" className="text-slate-400 hover:text-emerald-400">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-slate-400 hover:text-emerald-400">
             Privacy Policy
          </Link>
        </div>
      )}
    </nav>
  );
}