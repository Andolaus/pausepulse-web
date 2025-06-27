import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-16 px-6 sm:py-20 text-center border-t border-gray-100 dark:border-gray-800" id="contact">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* App Name / Logo Placeholder: Consistent with Header's logo */}
        <p className="font-extrabold text-gray-900 dark:text-white text-lg sm:text-xl tracking-wider">
          PausePulse
        </p>
        
        {/* Navigation Links: Consistent with Header's nav links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4">
          <a 
            href="mailto:hello@pausepulse.app" 
            className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Contact
          </a>
          <a 
            href="/privacy-policy" 
            className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms-of-service" 
            className="font-medium text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded px-2 -mx-2 py-1"
          >
            Terms of Service
          </a>
        </div>
        
        {/* Copyright Information: Consistent with Header's secondary text */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {currentYear} PausePulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}