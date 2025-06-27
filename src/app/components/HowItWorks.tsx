import { FaRegPlayCircle, FaWind, FaStar } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaRegPlayCircle size={32} />,
      title: 'Start a Session',
      description: 'Choose your preferred breathing length, theme, and voice.',
    },
    {
      icon: <FaWind size={32} />,
      title: 'Take a Guided Pause',
      description: 'Breathe with visual cues, calming audio, and gentle narration.',
    },
    {
      icon: <FaStar size={32} />,
      title: 'Earn XP & Rewards',
      description: 'Collect XP bubbles, level up, and build healthy streaks.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
