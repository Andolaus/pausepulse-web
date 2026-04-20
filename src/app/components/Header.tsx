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

  const handleNavClick = (
    section: HeaderProps['onNavigate'] extends (s: infer S) => void ? S : never
  ) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Brand */}
        <span
          className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white flex items-center cursor-pointer"
          onClick={() => handleNavClick(null)}
        >
          Pause<span className="text-emerald-600 dark:text-emerald-400">Pulse</span>
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <button
            onClick={() => handleNavClick('about')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('how')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            How it works
          </button>
          <button
            onClick={() => handleNavClick('features')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            Why PausePulse
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            Premium
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            Contact
          </button>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://apps.apple.com/us/app/pausepulse/id6761433093"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PausePulse on the App Store"
          className="hidden lg:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
          Download Free
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-800 dark:text-gray-200 text-3xl p-1 rounded-md"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 shadow-lg px-6 pb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <nav className="flex flex-col gap-4 text-base text-gray-700 dark:text-gray-200">
            <button
              onClick={() => handleNavClick('about')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('how')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => handleNavClick('features')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Why PausePulse
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Premium
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Contact
            </button>
            <a
              href="https://apps.apple.com/us/app/pausepulse/id6761433093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PausePulse on the App Store"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-6 rounded-full font-semibold shadow-sm transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
              </svg>
              Download Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
