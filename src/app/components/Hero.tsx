'use client';

import Image from 'next/image';

type HeroProps = {
  onNavigate: (section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 py-32 lg:py-44"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-16">
        {/* Text column */}
        <div className="text-center lg:text-left max-w-xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            <div>Find Calm In Seconds</div>
            <div className="text-emerald-600 dark:text-emerald-400">With PausePulse</div>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
            PausePulse helps you breathe calmer, think clearer, and reset in a busy day. Easy to start, easy to keep,
            and completely pressure-free.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <a
              href="https://apps.apple.com/us/app/pausepulse/id6761433093"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download PausePulse on the App Store"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
              </svg>
              Download on App Store
            </a>
            <button
              onClick={() => onNavigate('pricing')}
              aria-label="See PausePulse Premium"
              className="bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 dark:bg-gray-900 dark:text-emerald-300 dark:border-emerald-700 dark:hover:bg-gray-800 px-6 py-3 rounded-full font-semibold shadow-sm transition"
            >
              See Premium
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Now available on iOS
            </span>
          </div>
        </div>

        {/* Right column: XXL image */}
        <div className="w-full flex justify-center lg:justify-end">
          <Image
            src="/images/hero-app-preview2.png"
            alt="PausePulse app preview"
            width={2400}
            height={1400}
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 50vw"
            className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto drop-shadow-2xl transition-all duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
}
