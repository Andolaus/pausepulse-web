import { FaBolt, FaSpa, FaSlidersH, FaChartLine, FaBookOpen, FaShieldAlt } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaBolt size={18} aria-hidden="true" />,
      title: 'Instant reset',
      description: 'Begin a guided session in under 5 seconds. Perfect between meetings, school runs, and inbox spikes.',
    },
    {
      icon: <FaSpa size={18} aria-hidden="true" />,
      title: 'Calm, not clinical',
      description: 'A warm, beautiful flow that helps you exhale — no rigid streaks, no shaming notifications.',
    },
    {
      icon: <FaSlidersH size={18} aria-hidden="true" />,
      title: 'Tailored to you',
      description: 'Choose visuals, voice, soundscape, and length so every session feels personally yours.',
    },
    {
      icon: <FaChartLine size={18} aria-hidden="true" />,
      title: 'Gentle insights',
      description: 'A clear calendar and stats reveal your rhythm without turning self-care into a leaderboard.',
    },
    {
      icon: <FaBookOpen size={18} aria-hidden="true" />,
      title: 'Learn as you go',
      description: 'Bite-sized lessons explain why each technique works — so the habit actually sticks.',
    },
    {
      icon: <FaShieldAlt size={18} aria-hidden="true" />,
      title: 'Privacy-first',
      description: 'Your breath data stays yours. No accounts required, no tracking that you didn\u2019t agree to.',
    },
  ];

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900/60 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            Why PausePulse
          </p>
          <h2
            id="features-heading"
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight tracking-tight"
          >
            Everything you need.
            <br className="hidden sm:block" />
            <span className="text-gradient-brand">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Crafted to remove friction and pressure — so calm becomes a habit, not a chore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-gray-900 p-7 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-200/50 to-transparent dark:from-emerald-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" aria-hidden="true" />

              <div className="relative">
                <div className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/60 dark:to-emerald-800/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {f.icon}
                </div>

                <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
