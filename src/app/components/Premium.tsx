import { FaCheckCircle, FaMinusCircle, FaCheck } from 'react-icons/fa';

type PremiumProps = {
  onStartPremium?: () => void;
};

export default function Premium({ onStartPremium }: PremiumProps) {
  const features = [
    { label: 'Core breathing experience', free: true, premium: true, desc: 'Daily exercises, reminders, and language options.' },
    { label: 'Statistics & calendar overview', free: true, premium: true, desc: 'Track your activity and build awareness over time.' },
    { label: 'Basic audio & visual options', free: true, premium: true, desc: 'Foundational sounds and visual styles for calm sessions.' },
    { label: 'All breathing modes & advanced techniques', free: false, premium: true, desc: 'Unlock the full library of deeper practice modes.' },
    { label: 'Premium voices & expanded style packs', free: false, premium: true, desc: 'More guide voices, voice variations, and visuals.' },
    { label: 'Extended music & nature soundscapes', free: false, premium: true, desc: 'A broader library of background and nature sounds.' },
    { label: 'Advanced personalization & presets', free: false, premium: true, desc: 'Save more routines and fine-tune every detail.' },
  ];

  const freeBullets = ['Core breathing exercises', 'Daily reminders', 'Calendar & stats', 'Basic audio + visuals'];
  const premiumBullets = [
    'Everything in Free',
    'All breathing modes & techniques',
    'Premium voices & visual packs',
    'Full music & nature library',
    'Advanced personalization',
    'Save unlimited routines',
  ];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-950 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-emerald-100/40 dark:bg-emerald-900/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight tracking-tight"
          >
            Free to start.
            <br className="sm:hidden" />
            <span className="text-gradient-brand"> Premium when you&apos;re ready.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            The free plan is genuinely useful. Premium unlocks the complete PausePulse experience.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Free card */}
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-8 sm:p-10 shadow-sm">
            <div className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3">Free</div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">$0</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">forever</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Everything you need to build a calm habit — no card required.
            </p>

            <ul className="space-y-3 mb-8">
              {freeBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                  <FaCheck className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://apps.apple.com/us/app/pausepulse/id6761433093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Download free
            </a>
          </div>

          {/* Premium card */}
          <div className="relative bg-gradient-to-br from-gray-900 via-emerald-950 to-gray-900 dark:from-gray-900 dark:via-emerald-950 dark:to-gray-900 rounded-3xl border border-emerald-700/40 p-8 sm:p-10 shadow-2xl shadow-emerald-900/30 overflow-hidden">
            {/* Shimmer ribbon */}
            <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full" aria-hidden="true" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-emerald-300">Premium</span>
                <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-400 text-emerald-950">Most popular</span>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-extrabold text-white tracking-tight">Unlock all</span>
              </div>
              <p className="text-sm text-emerald-100/80 mb-8">
                Go deeper. The full library, every voice, every soundscape — fully tailored to you.
              </p>

              <ul className="space-y-3 mb-8">
                {premiumBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-emerald-50">
                    <span className="inline-flex w-5 h-5 mt-0.5 rounded-full bg-emerald-400/20 text-emerald-300 items-center justify-center shrink-0">
                      <FaCheck className="w-3 h-3" aria-hidden="true" />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onStartPremium}
                aria-label="Start PausePulse Premium"
                className="inline-flex w-full items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-emerald-950 px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-500/30 transition hover:shadow-emerald-400/50 hover:-translate-y-0.5"
              >
                Start Premium
              </button>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 text-sm">
                  <th scope="col" className="py-4 px-6 font-semibold">Feature</th>
                  <th scope="col" className="py-4 px-6 font-semibold text-center w-32">Free</th>
                  <th scope="col" className="py-4 px-6 font-semibold text-center w-32 text-emerald-700 dark:text-emerald-400">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-6">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{f.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{f.desc}</p>
                    </td>
                    <td className="py-4 px-6 text-center">
                      {f.free ? (
                        <FaCheckCircle className="text-emerald-500 mx-auto text-lg" aria-label="Included on Free" />
                      ) : (
                        <FaMinusCircle className="text-gray-300 dark:text-gray-600 mx-auto text-lg" aria-label="Not on Free" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {f.premium ? (
                        <FaCheckCircle className="text-emerald-500 mx-auto text-lg" aria-label="Included on Premium" />
                      ) : (
                        <FaMinusCircle className="text-gray-300 dark:text-gray-600 mx-auto text-lg" aria-label="Not on Premium" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center tracking-tight">
            Frequently asked questions
          </h3>
          <div className="space-y-3">
            {[
              { q: 'Do I need Premium to get value from the app?', a: 'Not at all. The free version is genuinely useful and includes the core breathing experience.' },
              { q: 'What does Premium unlock?', a: 'The complete library of techniques, premium voices and soundscapes, and advanced personalization.' },
              { q: 'Is PausePulse suitable for beginners?', a: 'Yes — beginners and experienced practitioners both feel at home thanks to gentle guidance and adjustable depth.' },
              { q: 'Can I cancel anytime?', a: 'Yes. You can manage or cancel your subscription at any time directly from the App Store or Google Play.' },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 py-4 open:shadow-md transition-shadow"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none gap-4">
                  <span className="font-semibold text-gray-900 dark:text-white">{item.q}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
