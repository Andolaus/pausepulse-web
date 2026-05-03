import { LuSlidersHorizontal, LuWind, LuCircleCheck, LuChartBar } from 'react-icons/lu';

export default function HowItWorks() {
  const steps = [
    {
      icon: <LuSlidersHorizontal size={22} aria-hidden="true" />,
      title: 'Choose your moment',
      desc: 'Pick a breathing mode and a length that fits — from a quick 60-second reset to a full unwind.',
    },
    {
      icon: <LuWind size={22} aria-hidden="true" />,
      title: 'Breathe with guidance',
      desc: 'Follow visual pacing, calming soundscapes, and an optional guiding voice tuned to you.',
    },
    {
      icon: <LuCircleCheck size={22} aria-hidden="true" />,
      title: 'Land back lighter',
      desc: 'Finish refreshed. No streaks, no guilt — just a small, steady investment in yourself.',
    },
    {
      icon: <LuChartBar size={22} aria-hidden="true" />,
      title: 'See gentle progress',
      desc: 'Track your pauses on a clear calendar so you can spot what works without obsessing.',
    },
  ];

  return (
    <section
      className="bg-white dark:bg-gray-950 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800"
      id="how"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight tracking-tight"
          >
            Four breaths to a calmer you
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Designed to remove every excuse for skipping your pause.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-emerald-300 dark:via-emerald-800 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {steps.map((s, i) => (
              <div
                key={i}
                className="relative group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-7 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number medallion */}
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow" />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-base tabular-nums">
                    {i + 1}
                  </div>
                </div>

                <div className="mb-3 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800">
                  {s.icon}
                </div>

                <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
