import { FaBolt, FaSpa, FaSlidersH, FaChartLine, FaBookOpen } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaBolt size={32} role="img" aria-label="Quick start icon" />,
      title: 'Quick Start',
      description: 'Begin a guided breathing session in seconds whenever you need a fast reset.',
    },
    {
      icon: <FaSpa size={32} role="img" aria-label="Calm experience icon" />,
      title: 'Calm Experience',
      description: 'No stressful pressure mechanics, just a warm and supportive flow that helps you return to balance.',
    },
    {
      icon: <FaSlidersH size={32} role="img" aria-label="Personalization icon" />,
      title: 'Personalized Sessions',
      description: 'Choose your visual style, guiding voice, soundscape, and session length for each moment.',
    },
    {
      icon: <FaChartLine size={32} role="img" aria-label="Progress insights icon" />,
      title: 'Insights Over Time',
      description: 'Track your pauses, minutes, and rhythm with clear statistics and calendar-based progress.',
    },
    {
      icon: <FaBookOpen size={32} role="img" aria-label="Learning icon" />,
      title: 'Learn In The App',
      description: 'Understand why breathing techniques work so it becomes easier to build a lasting habit.',
    },
  ];

  return (
    <section
      className="bg-white dark:bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 border-b border-gray-100 dark:border-gray-800"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="features-heading"
          className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-16 leading-tight"
        >
          Why Users Like PausePulse
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700
                         flex flex-col items-center justify-start text-center
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="mb-6 p-4 rounded-full inline-flex items-center justify-center 
                              bg-emerald-500 text-white dark:bg-emerald-600 shadow-md">
                {f.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {f.title}
              </h3>

              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
