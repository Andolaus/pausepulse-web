import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa';

export default function Premium() {
  const features = [
    { label: 'Breathing sessions', free: true, premium: true, desc: 'Access to a variety of guided breathing exercises.' },
    { label: 'XP system & levels', free: true, premium: true, desc: 'Track your progress and level up as you practice.' },
    { label: 'Basic rewards', free: true, premium: true, desc: 'Earn foundational rewards for consistent use.' },
    { label: 'Advanced insights', free: false, premium: true, desc: 'Deep dive into your progress with detailed analytics.' },
    { label: 'Voice packs & themes', free: false, premium: true, desc: 'Unlock exclusive voices and immersive visual themes.' },
    { label: 'Double XP bonus', free: false, premium: true, desc: 'Accelerate your progress and level up twice as fast.' },
    { label: 'Exclusive rewards', free: false, premium: true, desc: 'Gain access to unique, premium-only achievements.' },
    { label: 'Offline mode', free: false, premium: true, desc: 'Practice anytime, anywhere, without an internet connection.' },
  ];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-24 px-6 sm:py-32 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="pricing-heading"
          className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-16 leading-tight"
        >
          Unlock Your Full Potential: <span className="text-emerald-600 dark:text-emerald-400">Free vs. Premium</span>
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800">
          <table className="min-w-full bg-white dark:bg-gray-800 text-left text-base sm:text-lg">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                <th scope="col" className="py-5 px-6 font-semibold rounded-tl-xl">Feature</th>
                <th scope="col" className="py-5 px-6 font-semibold text-center">Free</th>
                <th scope="col" className="py-5 px-6 font-semibold text-center rounded-tr-xl">Premium</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr
                  key={i}
                  className={`border-t border-gray-200 dark:border-gray-700 ${
                    i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750'
                  }`}
                >
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900 dark:text-white">{f.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{f.desc}</p>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {f.free ? (
                      <FaCheckCircle
                        className="text-emerald-500 mx-auto text-xl"
                        role="img"
                        aria-label="Available on Free plan"
                      />
                    ) : (
                      <FaMinusCircle
                        className="text-gray-400 dark:text-gray-500 mx-auto text-xl"
                        role="img"
                        aria-label="Not available on Free plan"
                      />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {f.premium ? (
                      <FaCheckCircle
                        className="text-emerald-500 mx-auto text-xl"
                        role="img"
                        aria-label="Available on Premium plan"
                      />
                    ) : (
                      <FaMinusCircle
                        className="text-gray-400 dark:text-gray-500 mx-auto text-xl"
                        role="img"
                        aria-label="Not available on Premium plan"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
