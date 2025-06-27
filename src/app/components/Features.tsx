'use client';

import { FaLevelUpAlt, FaAward, FaCalendarCheck, FaUserEdit } from 'react-icons/fa';

export default function Features() {
  const features = [
    {
      icon: <FaLevelUpAlt size={32} />,
      title: 'XP & Level System',
      description: 'Earn XP for every pause and unlock new titles as you grow.',
    },
    {
      icon: <FaAward size={32} />,
      title: 'Badges & Rewards',
      description: 'Unlock achievements for milestones like streaks and challenges.',
    },
    {
      icon: <FaCalendarCheck size={32} />,
      title: 'Daily Goals & Streaks',
      description: 'Build momentum with daily breathing goals and streak tracking.',
    },
    {
      icon: <FaUserEdit size={32} />,
      title: 'Personalized Experience',
      description: 'Choose voice, background sounds, and breathing style to suit you.',
    },
  ];

  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Core Features</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <div className="text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
