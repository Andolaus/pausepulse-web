import { FaLevelUpAlt, FaAward, FaCalendarCheck, FaUserEdit } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaLevelUpAlt size={32} role="img" aria-label="XP and level system icon" />,
      title: 'XP & Level System',
      description: 'Progress through levels, earn experience points, and unlock unique titles as you master your breath.',
    },
    {
      icon: <FaAward size={32} role="img" aria-label="Badges and rewards icon" />,
      title: 'Badges & Rewards',
      description: 'Achieve special badges for reaching milestones, maintaining streaks, and completing challenges.',
    },
    {
      icon: <FaCalendarCheck size={32} role="img" aria-label="Calendar check icon" />,
      title: 'Daily & Weekly Goals',
      description: 'Stay consistent with personalized daily goals and engaging weekly challenges to build lasting habits.',
    },
    {
      icon: <FaUserEdit size={32} role="img" aria-label="User customization icon" />,
      title: 'Personalized Experience',
      description: 'Tailor your journey with customizable breathing styles, voice options, and immersive visual themes.',
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
          Unlock Your Calm: Core Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
