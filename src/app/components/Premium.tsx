import { FaCheckCircle, FaMinusCircle } from 'react-icons/fa';

type PremiumProps = {
  onStartPremium?: () => void;
};

export default function Premium({ onStartPremium }: PremiumProps) {
  const features = [
    {
      label: 'Core breathing experience',
      free: true,
      premium: true,
      desc: 'Access the core app, daily breathing exercises, reminders, and language options.',
    },
    {
      label: 'Statistics and calendar overview',
      free: true,
      premium: true,
      desc: 'Track your breathing activity and build awareness over time.',
    },
    {
      label: 'Basic audio and visual options',
      free: true,
      premium: true,
      desc: 'Choose from foundational sound and visual styles for calm sessions.',
    },
    {
      label: 'All breathing modes and advanced techniques',
      free: false,
      premium: true,
      desc: 'Unlock the full breathing library with deeper and more advanced practice modes.',
    },
    {
      label: 'Premium voices and expanded style packs',
      free: false,
      premium: true,
      desc: 'Get additional guide voices, premium voice variations, and more visual breathing styles.',
    },
    {
      label: 'Extended music and nature sounds',
      free: false,
      premium: true,
      desc: 'Access a broader library of background music and nature soundscapes.',
    },
    {
      label: 'Advanced personalization and more presets',
      free: false,
      premium: true,
      desc: 'Save more routines and use advanced settings for a fully tailored experience.',
    },
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
          Free vs Premium
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          Upgrade to Premium and unlock the complete PausePulse experience.
        </p>

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
                    i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'
                  }`}
                >
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900 dark:text-white">{f.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-200 mt-1">{f.desc}</p>
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

        <div className="mt-14 text-left max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">PausePulse Premium</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            For users who want to go deeper: all breathing modes, more personalized guidance, expanded sound and
            visual options, and full freedom to build your own routines.
          </p>
          <button
            type="button"
            onClick={onStartPremium}
            aria-label="Start PausePulse premium"
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
          >
            Start Premium
          </button>
        </div>

        <div className="mt-14 text-left max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">FAQ</h3>
          <div className="space-y-5 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Do I need Premium to get value from the app?</p>
              <p>No. The free version gives you a solid and useful breathing experience.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">What does Premium unlock?</p>
              <p>Premium unlocks the full content library and advanced personalization features.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">Is PausePulse suitable for beginners?</p>
              <p>Yes. PausePulse is designed for both beginners and experienced users.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
