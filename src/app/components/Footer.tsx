'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo.png';

type FooterProps = {
  onNavigate: (
    section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null
  ) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-20 px-6 sm:py-24 text-center border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Large clickable logo */}
       <button
          onClick={() => onNavigate(null)}
          aria-label="Back to home"
          className="flex justify-center mx-auto transition-transform hover:scale-105 focus:outline-none"
        >

          <Image
            src={logo}
            alt="PausePulse logo"
            width={160}
            height={160}
            className="w-32 sm:w-40 md:w-44 h-auto mx-auto drop-shadow-md"
            priority
          />
        </button>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <button
            onClick={() => onNavigate('contact')}
            className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 px-2 py-1"
          >
            Contact
          </button>
          <Link
            href="/privacy-policy"
            className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 px-2 py-1"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 px-2 py-1"
          >
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} PausePulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
