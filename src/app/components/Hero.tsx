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
            <button
              onClick={() => onNavigate('earlyaccess')}
              aria-label="Download the PausePulse app"
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Download the App
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              aria-label="See PausePulse Premium"
              className="bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 dark:bg-gray-900 dark:text-emerald-300 dark:border-emerald-700 dark:hover:bg-gray-800 px-6 py-3 rounded-full font-semibold shadow-sm transition"
            >
              See Premium
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Available on iOS and Android
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
