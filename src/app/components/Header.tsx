'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

type HeaderProps = {
  onNavigate: (section: 'about' | 'how' | 'features' | 'pricing' | null) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section: HeaderProps['onNavigate'] extends (s: infer S) => void ? S : never) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span
          className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white flex items-center cursor-pointer"
          onClick={() => handleNavClick(null)}
        >
          Pause<span className="text-emerald-600 dark:text-emerald-400">Pulse</span>
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <button
            onClick={() => handleNavClick('how')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            How it works
          </button>
          <button
            onClick={() => handleNavClick('features')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Pricing
          </button>
          <button
            onClick={() => handleNavClick(null)}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="#"
          className="hidden sm:inline-block bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75"
        >
          Join Early Access
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 text-3xl p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
          <nav className="flex flex-col gap-4 text-base text-gray-700 dark:text-gray-200 pt-4">
            <button
              onClick={() => handleNavClick('how')}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              How it works
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick(null)}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              Contact
            </button>
            <a
              href="#"
              className="mt-4 bg-emerald-600 dark:bg-emerald-500 text-white text-center py-3 rounded-full font-semibold shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75"
            >
              Join Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
