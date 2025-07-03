export default function About() {
  return (
    <section
      className="bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-950 py-24 px-6 sm:py-32 lg:px-8"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Emoji with accessibility */}
        <div
          className="text-6xl mb-6 animate-pulse-slow"
          role="img"
          aria-label="Person in lotus position"
        >
          🧘‍♀️
        </div>

        {/* Heading with ID */}
        <h2
          id="about-heading"
          className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-8"
        >
          The Problem We're Solving
        </h2>

        {/* Description paragraphs */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:text-xl">
          We all know that short, mindful breathing breaks can significantly reduce stress and sharpen focus.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:text-xl">
          Yet, in our fast-paced world, it's incredibly easy to forget to take them.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:text-xl">
          Most mindfulness apps out there feel passive, clinical, or simply uninspiring.
        </p>

        {/* Solution */}
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed sm:text-3xl lg:text-4xl dark:text-emerald-500">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-800 dark:from-emerald-400 dark:to-green-600">
            PausePulse is different.
          </span>{' '}
          <span className="block mt-2 sm:inline sm:mt-0">
            We make mindful breaks feel satisfying, game-like, and truly habit-forming.
          </span>
        </p>
      </div>
    </section>
  );
}
