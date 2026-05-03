'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '/public/images/logo.png';

type HeaderProps = {
  onNavigate: (
    section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null
  ) => void;
};

export default function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (
    section: HeaderProps['onNavigate'] extends (s: infer S) => void ? S : never
  ) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-[0_4px_24px_-12px_rgba(0,0,0,0.15)] border-b border-gray-100/60 dark:border-gray-800/60'
          : 'bg-white/40 dark:bg-gray-950/40 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3.5 flex justify-between items-center">

        {/* Logo / Brand */}
        <button
          onClick={() => handleNavClick(null)}
          aria-label="Back to top"
          className="group flex items-center gap-2.5 cursor-pointer"
        >
          <Image
            src={logo}
            alt="PausePulse logo"
            width={36}
            height={36}
            priority
            className="w-9 h-9 rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
          />
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Pause<span className="text-emerald-600 dark:text-emerald-400">Pulse</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {[
            { id: 'about', label: 'About' },
            { id: 'how', label: 'How it works' },
            { id: 'features', label: 'Features' },
            { id: 'pricing', label: 'Premium' },
            { id: 'contact', label: 'Contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as 'about' | 'how' | 'features' | 'pricing' | 'contact')}
              className="px-3.5 py-2 rounded-full hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://apps.apple.com/us/app/pausepulse/id6761433093"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PausePulse on the App Store"
          className="hidden lg:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
          Get the app
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-800 dark:text-gray-200 text-2xl p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-xl px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-800">
          <nav className="flex flex-col gap-1 text-base text-gray-700 dark:text-gray-200">
            {[
              { id: 'about', label: 'About' },
              { id: 'how', label: 'How it works' },
              { id: 'features', label: 'Features' },
              { id: 'pricing', label: 'Premium' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as 'about' | 'how' | 'features' | 'pricing' | 'contact')}
                className="text-left px-3 py-3 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://apps.apple.com/us/app/pausepulse/id6761433093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PausePulse on the App Store"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-center py-3 px-6 rounded-full font-semibold shadow-md transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
              </svg>
              Get the app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
