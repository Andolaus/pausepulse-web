'use client';

type HeroProps = {
  onNavigate: (section: 'about' | 'how' | 'features' | 'pricing' | 'contact' | 'earlyaccess' | null) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      className="bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 py-32 lg:py-44"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* Text column */}
        <div className="text-center lg:text-left max-w-xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
          >
            <div>BREATHE IN...</div>
            <div>BREATHE OUT...</div>
            <div className="text-emerald-600 dark:text-emerald-400">LEVEL UP</div>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Mindfulness meets motivation. Discover the app that turns calm into a quest – with XP, badges, and rewards.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start items-center gap-4">
            <button
              onClick={() => onNavigate('earlyaccess')}
              aria-label="Get early access to PausePulse"
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
            >
              Get Early Access
            </button>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Launching soon on iOS & Android
            </span>
          </div>
        </div>

        {/* Right column: XXL image */}
        <div className="w-full max-w-[3200px] mx-auto lg:mx-0 -mt-12 lg:-mt-16">
          <img
            src="/images/hero-app-preview2.png"
            alt="PausePulse app preview"
            className="w-[90vw] h-auto drop-shadow-2xl transition-all duration-300"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
