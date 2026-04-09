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
        {/* Icon for section personality */}
        <div className="text-5xl mb-2 animate-pulse-slow" role="img" aria-label="Leaf">
          🌿
        </div>

        <h2
          id="aboutme-heading"
          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          What Is PausePulse?
        </h2>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          PausePulse is a modern breathing app built for real life. In seconds, you can start a guided session with
          techniques that support both beginners and experienced users.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          You get guided breathing sessions, calming soundscapes, personal settings, and insights into your own
          breathing patterns. The goal is simple: less stress, more balance, one breath at a time.
        </p>

        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Instead of stressful streak pressure, PausePulse supports steady habits with a warm and flexible approach
          that helps you return to calm when life gets busy.
        </p>

        {/* Reach Out button */}
        <div className="pt-4">
          <button
            onClick={() => onNavigate('contact')}
            aria-label="Contact PausePulse"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
