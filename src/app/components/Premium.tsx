import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa'; // Importing new icons

export default function Premium() {
  const features = [
    { label: 'Breathing sessions', free: true, premium: true, desc: 'Access to a variety of guided breathing exercises.' },
    { label: 'XP system & levels', free: true, premium: true, desc: 'Track your progress and level up as you practice.' },
    { label: 'Basic rewards', free: true, premium: true, desc: 'Earn foundational rewards for consistent use.' },
    { label: 'Advanced insights', free: false, premium: true, desc: 'Deep dive into your progress with detailed analytics.' },
    { label: 'Voice packs & themes', free: false, premium: true, desc: 'Unlock exclusive voices and immersive visual themes.' },
    { label: 'Double XP bonus', free: false, premium: true, desc: 'Accelerate your progress and level up twice as fast.' },
    { label: 'Exclusive rewards', free: false, premium: true, desc: 'Gain access to unique, premium-only achievements.' },
    { label: 'Offline mode', free: false, premium: true, desc: 'Practice anytime, anywhere, without an internet connection.' }, // Added a common premium feature
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-24 px-6 sm:py-32 lg:px-8" id="pricing">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-16 leading-tight">
          Unlock Your Full Potential: <span className="text-emerald-600 dark:text-emerald-400">Free vs. Premium</span>
        </h2>
        
        <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800">
          <table className="min-w-full bg-white dark:bg-gray-800 text-left text-base sm:text-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                <th className="py-5 px-6 font-semibold rounded-tl-xl">Feature</th>
                <th className="py-5 px-6 font-semibold text-center">Free</th>
                <th className="py-5 px-6 font-semibold text-center rounded-tr-xl">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className={`border-t border-gray-200 dark:border-gray-700 ${i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750'}`}>
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900 dark:text-white">{f.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{f.desc}</p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {f.free ? (
                      <FaCheckCircle className="text-emerald-500 mx-auto text-xl" aria-label="Available on Free plan" />
                    ) : (
                      <FaMinusCircle className="text-gray-400 dark:text-gray-500 mx-auto text-xl" aria-label="Not available on Free plan" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {f.premium ? (
                      <FaCheckCircle className="text-emerald-500 mx-auto text-xl" aria-label="Available on Premium plan" />
                    ) : (
                      <FaMinusCircle className="text-gray-400 dark:text-gray-500 mx-auto text-xl" aria-label="Not available on Premium plan" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Ready to experience the full power of PausePulse?</h3>
          <a
            href="#" // This should link to your premium subscription page or modal
            className="inline-block bg-emerald-600 dark:bg-emerald-500 text-white
                       px-10 py-5 rounded-full font-bold text-lg shadow-xl
                       hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 transition-all duration-300 ease-in-out
                       focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75"
          >
            Go Premium Today!
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            No credit card required for the free version. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}