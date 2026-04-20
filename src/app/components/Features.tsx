import { FaBolt, FaSpa, FaSlidersH, FaChartLine, FaBookOpen } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaBolt size={18} aria-hidden="true" />,
      title: 'Quick Start',
      description: 'Begin a guided breathing session in seconds whenever you need a fast reset.',
    },
    {
      icon: <FaSpa size={18} aria-hidden="true" />,
      title: 'Calm Experience',
      description: 'No stressful pressure mechanics, just a warm and supportive flow that helps you return to balance.',
    },
    {
      icon: <FaSlidersH size={18} aria-hidden="true" />,
      title: 'Personalized Sessions',
      description: 'Choose your visual style, guiding voice, soundscape, and session length for each moment.',
    },
    {
      icon: <FaChartLine size={18} aria-hidden="true" />,
      title: 'Insights Over Time',
      description: 'Track your pauses, minutes, and rhythm with clear statistics and calendar-based progress.',
    },
    {
      icon: <FaBookOpen size={18} aria-hidden="true" />,
      title: 'Learn In The App',
      description: 'Understand why breathing techniques work so it becomes easier to build a lasting habit.',
    },
  ];

  return (
    <section
      className="bg-gray-50 dark:bg-gray-800/50 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            Features
          </p>
          <h2
            id="features-heading"
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight tracking-tight"
          >
            Why Users Like PausePulse
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-7 rounded-2xl border border-gray-100 dark:border-gray-700
                         flex flex-col
                         hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-5 w-10 h-10 rounded-xl flex items-center justify-center
                              bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                {f.icon}
              </div>

              <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">
                {f.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
