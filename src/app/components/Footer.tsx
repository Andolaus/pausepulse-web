'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/images/logo.png';
import { FaApple, FaGooglePlay, FaTiktok } from 'react-icons/fa';

type FooterProps = {
  onNavigate: (
    section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null
  ) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">

        {/* Top: brand + columns */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <button
              onClick={() => onNavigate(null)}
              aria-label="Back to home"
              className="inline-flex items-center gap-3 group"
            >
              <Image
                src={logo}
                alt="PausePulse logo"
                width={48}
                height={48}
                className="w-12 h-12 drop-shadow-md group-hover:scale-105 transition-transform"
                priority
              />
              <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Pause<span className="text-emerald-600 dark:text-emerald-400">Pulse</span>
              </span>
            </button>

            <p className="mt-5 max-w-sm text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              A breathing app for real life. Calm, gentle, and genuinely useful — without the pressure.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://apps.apple.com/us/app/pausepulse/id6761433093"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-colors"
              >
                <FaApple className="w-4 h-4" aria-hidden="true" />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.pausepulse.app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-full text-xs font-semibold transition-colors"
              >
                <FaGooglePlay className="w-4 h-4" aria-hidden="true" />
                Google Play
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('how')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">How it works</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Features</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Premium</button></li>
              <li><Link href="/apps" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Our apps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onNavigate('about')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">About</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Contact</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Terms of Service</Link></li>
              <li><Link href="/delete-data" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition">Delete data</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} PausePulse. Built with care.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@pausepulse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @pausepulse"
              className="inline-flex items-center gap-2 px-3.5 h-9 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-emerald-400 dark:hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition text-xs font-medium"
            >
              <FaTiktok className="w-4 h-4" aria-hidden="true" />
              <span>@pausepulse</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
