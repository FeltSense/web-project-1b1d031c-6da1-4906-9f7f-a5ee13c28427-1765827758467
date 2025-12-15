'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo/Brand */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-slate-900 text-lg">Website</span>
          <span className="text-xs text-slate-500 font-medium">12/15/2025</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
          Home
        </Link>
        <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200">
          Contact
        </a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button 
          onClick={(e) => {
            e.currentTarget.closest('nav').classList.toggle('mobile-menu-open');
          }}
          className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation */}
    <div className="hidden md:hidden pb-4 border-t border-slate-200/50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex flex-col gap-3 pt-4">
        <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 block px-2 py-2 rounded-lg hover:bg-slate-50">
          Home
        </Link>
        <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 block px-2 py-2 rounded-lg hover:bg-slate-50">
          Contact
        </a>
        <button className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200">
          Get Started
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}