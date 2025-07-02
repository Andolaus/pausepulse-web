'use client';

import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

type HeaderProps = {
  onNavigate: (
    section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null
  ) => void;
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
          <button onClick={() => handleNavClick('about')}>About Me</button>
          <button onClick={() => handleNavClick('how')}>How it works</button>
          <button onClick={() => handleNavClick('features')}>Features</button>
          <button onClick={() => handleNavClick('pricing')}>Pricing</button>
          <button onClick={() => handleNavClick('contact')}>Contact</button>
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick('earlyaccess')}
          className="hidden sm:inline-block bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition"
        >
          Join Early Access
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200 text-3xl p-1 rounded-md"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 pb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <nav className="flex flex-col gap-4 text-base text-gray-700 dark:text-gray-200">
            <button onClick={() => handleNavClick('about')}>About Me</button>
            <button onClick={() => handleNavClick('how')}>How it works</button>
            <button onClick={() => handleNavClick('features')}>Features</button>
            <button onClick={() => handleNavClick('pricing')}>Pricing</button>
            <button onClick={() => handleNavClick('contact')}>Contact</button>
            <button
              onClick={() => handleNavClick('earlyaccess')}
              className="mt-4 bg-emerald-600 dark:bg-emerald-500 text-white text-center py-3 rounded-full font-semibold shadow-md hover:bg-emerald-700 dark:hover:bg-emerald-600 transition"
            >
              Join Early Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
