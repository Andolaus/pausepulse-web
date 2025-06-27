'use client'; // This directive is correct for Next.js 13+ App Router components

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
// Removed: import { useColorScheme } from 'nativewind';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Removed: const { colorScheme } = useColorScheme();
  // Removed: const isDark = colorScheme === 'dark';

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white flex items-center">
          Pause<span className="text-emerald-600 dark:text-emerald-400">Pulse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <a
            href="#how"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            How it works
          </a>
          <a
            href="#features"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <a
          href="#" // This should link to your early access signup form/modal
          className="hidden sm:inline-block bg-emerald-600 dark:bg-emerald-500 text-white
                     px-6 py-3 rounded-full text-sm font-semibold shadow-md
                     hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 transition-all duration-300
                     focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75"
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

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 pb-6 border-t border-gray-100 dark:border-gray-700">
          <nav className="flex flex-col gap-4 text-base text-gray-700 dark:text-gray-200 pt-4">
            <a
              href="#how"
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              How it works
            </a>
            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2"
            >
              Contact
            </a>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-emerald-600 dark:bg-emerald-500 text-white text-center
                         py-3 rounded-full font-semibold shadow-md
                         hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200
                         focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75"
            >
              Join Early Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}