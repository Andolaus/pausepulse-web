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
    <section className="bg-white py-24 px-6 sm:py-32 lg:px-8" id="features">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading: More impactful */}
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-16 leading-tight">
          Unlock Your Calm: Core Features
        </h2>
        
        {/* Features Grid: Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 
                         flex flex-col items-center justify-start 
                         hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 ease-in-out"
            >
              {/* Icon Container: Stylish circle background for icons */}
              <div className="mb-6 p-4 rounded-full inline-flex items-center justify-center 
                              bg-indigo-500 text-white shadow-md">
                {f.icon}
              </div>
              
              {/* Feature Title: More prominent */}
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {f.title}
              </h3>
              
              {/* Feature Description: Improved readability */}
              <p className="text-base text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}