'use client';

import Image from 'next/image';

type HeroProps = {
  onNavigate: (section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left column: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight space-y-2 mb-6">
            <div>BREATHE IN...</div>
            <div>BREATHE OUT...</div>
            <div className="text-emerald-600 dark:text-emerald-400">LEVEL UP</div>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-8">
            Mindfulness meets motivation. Discover the app that turns calm into a quest – with XP, badges, and rewards.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <button
              onClick={() => onNavigate('earlyaccess')}
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Get Early Access
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Launching soon on iOS & Android
            </span>
          </div>
        </div>

        {/* Right column: App preview image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/hero-app-preview.png"
            alt="PausePulse app preview"
            width={450}
            height={800}
            priority
            className="w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] mx-auto md:mx-0 drop-shadow-2xl transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
