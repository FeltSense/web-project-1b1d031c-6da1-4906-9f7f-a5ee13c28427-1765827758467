'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
  {/* Main Footer Content */}
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
      {/* Company Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Website</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Crafting digital experiences that inspire, engage, and deliver results for modern businesses.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 002.856-3.915 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="#"
            className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.366c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.394 3.745 4.39v5.498zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.188 0 1.915.755 1.938 1.71 0 .951-.75 1.71-1.981 1.71zm1.581 11.019H3.656V9.807h3.262v10.645zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              About Us
            </a>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Documentation
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-3">
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <a href="mailto:hello@website.com" className="text-gray-300 hover:text-white transition-colors duration-300">
              hello@website.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors duration-300">
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Address</p>
            <p className="text-gray-300">San Francisco, CA 94105</p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Website. All rights reserved. Crafted with excellence.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Terms
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}