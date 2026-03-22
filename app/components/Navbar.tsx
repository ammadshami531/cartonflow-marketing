'use client';

import { useState } from 'react';
import { SITE } from '../content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#080c14] border-b border-[#1c2642]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">CartonFlow</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://app.cartonflow.io/login" 
              className="text-[#7c8fad] hover:text-white transition-colors"
            >
              Log in
            </a>
            <a 
              href={SITE.ctaUrl}
              className="bg-[#06b6d4] text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#0891b2] transition-colors"
            >
              Start free trial
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#1c2642]">
            <div className="flex flex-col space-y-4">
              <a 
                href="https://app.cartonflow.io/login" 
                className="text-[#7c8fad] hover:text-white transition-colors"
              >
                Log in
              </a>
              <a 
                href={SITE.ctaUrl}
                className="bg-[#06b6d4] text-black px-5 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#0891b2] transition-colors"
              >
                Start free trial
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
