'use client';

type AboutMeProps = {
  onNavigate: (section: 'contact') => void;
};

export default function AboutMe({ onNavigate }: AboutMeProps) {
  return (
    <section
      id="about"
      aria-labelledby="aboutme-heading"
      className="bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-950 py-32 lg:py-44 px-6 sm:px-8 lg:px-12 transition-colors duration-500"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Icon for personality */}
        <div className="text-5xl mb-2 animate-pulse-slow" role="img" aria-label="Leaf">
          🌿
        </div>

        <h2
          id="aboutme-heading"
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          The Human Behind PausePulse
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi there — I&apos;m a developer from Norway, building my very first mobile app. I&apos;ve long been drawn to mindfulness,
          breathing techniques, and the idea that small habits can shift how we feel and live.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          PausePulse is a personal project born from that passion — a space to pause, reflect, and grow. I hope it makes
          your moments of calm feel meaningful, playful, and rewarding.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          If you ever have feedback, questions, or just want to share how you&apos;re using the app — I&apos;d love to hear from you.
        </p>

        {/* Reach Out button */}
        <div className="pt-4">
          <button
            onClick={() => onNavigate('contact')}
            aria-label="Contact the creator of PausePulse"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg transition-all duration-300"
          >
            Reach Out
          </button>
        </div>
      </div>
    </section>
  );
}
