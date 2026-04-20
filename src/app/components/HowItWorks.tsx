import { LuSlidersHorizontal, LuWind, LuCircleCheck, LuChartBar } from 'react-icons/lu';

export default function HowItWorks() {
  const steps = [
    {
      icon: <LuSlidersHorizontal size={22} aria-hidden="true" />,
      title: 'Choose Mode and Duration',
      desc: 'Pick the breathing mode that fits your moment and set a session length that works for your day.',
    },
    {
      icon: <LuWind size={22} aria-hidden="true" />,
      title: 'Follow The Guided Session',
      desc: 'Breathe with visual pacing, calming soundscapes, and optional voice guidance tailored to your style.',
    },
    {
      icon: <LuCircleCheck size={22} aria-hidden="true" />,
      title: 'Complete and Reflect',
      desc: 'Finish your session and build steady progress with a gentle, no-pressure approach to consistency.',
    },
    {
      icon: <LuChartBar size={22} aria-hidden="true" />,
      title: 'Track Your Progress',
      desc: 'See your growth in statistics and calendar views to better understand your breathing habits over time.',
    },
  ];

  return (
    <section
      className="bg-white dark:bg-gray-900 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800"
      id="how"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            How it works
          </p>
          <h2
            id="how-heading"
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl leading-tight tracking-tight"
          >
            Four simple steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative bg-gray-50 dark:bg-gray-800 p-7 rounded-2xl border border-gray-100 dark:border-gray-700
                         flex flex-col
                         hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Step number + icon row */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-700 w-7 h-7 rounded-full flex items-center justify-center tabular-nums">
                  {i + 1}
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">
                  {s.icon}
                </span>
              </div>

              <h3 className="text-base font-bold mb-2 text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
