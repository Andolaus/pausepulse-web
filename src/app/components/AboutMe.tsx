'use client';

type AboutMeProps = {
  onNavigate: (section: 'contact') => void;
};

export default function AboutMe({ onNavigate }: AboutMeProps) {
  return (
    <section
      id="about"
      aria-labelledby="aboutme-heading"
      className="bg-gray-50 dark:bg-gray-800/50 py-24 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">

        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
          About PausePulse
        </p>

        <h2
          id="aboutme-heading"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
        >
          What Is PausePulse?
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          PausePulse is a modern breathing app built for real life. In seconds, you can start a guided session with
          techniques that support both beginners and experienced users.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          You get guided breathing sessions, calming soundscapes, personal settings, and insights into your own
          breathing patterns. The goal is simple: less stress, more balance, one breath at a time.
        </p>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
          Instead of stressful streak pressure, PausePulse supports steady habits with a warm and flexible approach
          that helps you return to calm when life gets busy.
        </p>

        <div className="pt-4">
          <button
            onClick={() => onNavigate('contact')}
            aria-label="Contact PausePulse"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-base transition-colors duration-200"
          >
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
