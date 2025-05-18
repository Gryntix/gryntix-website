import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-30 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gryntix</h3>
            <p className="text-gray-400">Empowering developers with cutting-edge AI tools</p>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-emerald-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-emerald-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-emerald-400">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers Section */}
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dev" className="text-gray-400 hover:text-emerald-400">
                  API Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/sdks" className="text-gray-400 hover:text-emerald-400">
                  SDKs
                </Link>
              </li>
              <li>
                <Link href="/status" className="text-gray-400 hover:text-emerald-400">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-emerald-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-emerald-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Gryntix. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="https://github.com/gryntix" className="hover:text-emerald-400">
              GitHub
            </Link>
            <Link href="https://twitter.com/gryntix" className="hover:text-emerald-400">
              Twitter
            </Link>
            <Link href="https://linkedin.com/company/gryntix" className="hover:text-emerald-400">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}