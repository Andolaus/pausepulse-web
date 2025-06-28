import { FaLevelUpAlt, FaAward, FaCalendarCheck, FaUserEdit } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaLevelUpAlt size={32} />, // Increased icon size
      title: 'XP & Level System',
      description: 'Progress through levels, earn experience points, and unlock unique titles as you master your breath.',
    },
    {
      icon: <FaAward size={32} />, // Increased icon size
      title: 'Badges & Rewards',
      description: 'Achieve special badges for reaching milestones, maintaining streaks, and completing challenges.',
    },
    {
      icon: <FaCalendarCheck size={32} />, // Increased icon size
      title: 'Daily & Weekly Goals',
      description: 'Stay consistent with personalized daily goals and engaging weekly challenges to build lasting habits.',
    },
    {
      icon: <FaUserEdit size={32} />, // Increased icon size
      title: 'Personalized Experience',
      description: 'Tailor your journey with customizable breathing styles, voice options, and immersive visual themes.',
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 border-b border-gray-100 dark:border-gray-800" id="features">
      <div className="max-w-6xl mx-auto text-center"> {/* Økt max-width for litt mer plass */}
        {/* Section Heading: More impactful, consistent with Header's dark text / light text */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-16 leading-tight">
          Unlock Your Calm: Core Features
        </h2>
        
        {/* Features Grid: Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700
                         flex flex-col items-center justify-start text-center
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out" // Justert translate-y for mer standard animasjon
            >
              {/* Icon Container: Stylish circle background for icons, now in emerald */}
              <div className="mb-6 p-4 rounded-full inline-flex items-center justify-center 
                              bg-emerald-500 text-white dark:bg-emerald-600 shadow-md"> {/* Farge endret til emerald, lagt til dark-variant */}
                {f.icon}
              </div>
              
              {/* Feature Title: More prominent, consistent with light/dark */}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white"> {/* Justert farge til gray-900 for konsekvens */}
                {f.title}
              </h3>
              
              {/* Feature Description: Improved readability, consistent with light/dark */}
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed"> {/* Justert farge til gray-700 for konsekvens */}
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}