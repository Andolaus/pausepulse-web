export default function HowItWorks() {
  const steps = [
    {
      emoji: '🌀',
      emojiLabel: 'Swirl icon',
      title: 'Start Your Session',
      desc: 'Dive into a session by picking your preferred style, soothing voice, and ideal breathing duration.',
    },
    {
      emoji: '🧘‍♀️',
      emojiLabel: 'Person meditating icon',
      title: 'Embrace the Pause',
      desc: 'Immerse yourself in guided audio and calming visuals designed to deepen your mindful break.',
    },
    {
      emoji: '🌟',
      emojiLabel: 'Star icon',
      title: 'Level Up Your Calm',
      desc: 'Watch your progress grow! Earn XP with each session, level up, and solidify your daily habit.',
    },
  ];

  return (
    <section
      className="bg-white dark:bg-gray-900 py-24 px-6 sm:py-32 lg:px-8"
      id="how"
      aria-labelledby="how-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="how-heading"
          className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-16 leading-tight"
        >
          How PausePulse Transforms Your Day
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
