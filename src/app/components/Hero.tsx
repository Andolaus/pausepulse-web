'use client';

import Image from 'next/image';

type HeroProps = {
  onNavigate: (section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 overflow-hidden py-24 lg:py-32"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-100/60 dark:bg-emerald-900/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-emerald-50/80 dark:bg-emerald-900/10 blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Text column */}
        <div className="text-center lg:text-left max-w-xl">

          {/* iOS badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Now available on iOS
          </div>

          <h1
            id="hero-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.05] tracking-tight mb-6"
          >
            Find Calm
            <br />
            <span className="text-emerald-600 dark:text-emerald-400">In Seconds</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Guided breathing sessions, calming soundscapes, and gentle progress — no stress, no pressure.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/pausepulse/id6761433093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PausePulse on the App Store"
              className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg transition-all duration-200 hover:scale-105 text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
              </svg>
              Download on App Store
            </a>
            <button
              onClick={() => onNavigate('pricing')}
              aria-label="See PausePulse Premium"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium text-base transition-colors duration-200"
            >
              See Premium
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image column */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src="/images/hero-app-preview2.png"
            alt="PausePulse app preview"
            width={2400}
            height={1400}
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md h-auto drop-shadow-2xl rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
