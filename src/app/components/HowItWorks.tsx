export default function HowItWorks() {
  const steps = [
    {
      emoji: '🌀',
      emojiLabel: 'Swirl icon',
      title: 'Choose Mode and Duration',
      desc: 'Pick the breathing mode that fits your moment and set a session length that works for your day.',
    },
    {
      emoji: '🧘‍♀️',
      emojiLabel: 'Person meditating icon',
      title: 'Follow The Guided Session',
      desc: 'Breathe with visual pacing, calming soundscapes, and optional voice guidance tailored to your style.',
    },
    {
      emoji: '✅',
      emojiLabel: 'Check mark icon',
      title: 'Complete and Reflect',
      desc: 'Finish your session and build steady progress with a gentle, no-pressure approach to consistency.',
    },
    {
      emoji: '📅',
      emojiLabel: 'Calendar icon',
      title: 'Track Your Progress',
      desc: 'See your growth in statistics and calendar views to better understand your breathing habits over time.',
    },
  ];

  return (
    <section
      className="bg-gray-50 dark:bg-gray-800 py-24 px-6 sm:py-32 lg:px-8"
      id="how"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="how-heading"
          className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-16 leading-tight"
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700
                         flex flex-col items-center text-center
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white rounded-full 
                              w-10 h-10 flex items-center justify-center text-lg font-bold shadow-md">
                {i + 1}
              </div>

              {/* Emoji with accessibility */}
              <div
                className="text-5xl mb-6 mt-6"
                role="img"
                aria-label={s.emojiLabel}
              >
                {s.emoji}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{s.title}</h3>

              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
