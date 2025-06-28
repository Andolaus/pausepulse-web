export default function About() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 dark:from-gray-900 dark:to-gray-950 py-24 px-6 sm:py-32 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Emoji - Larger and more prominent, consistent with light/dark */}
        <div className="text-6xl mb-6 animate-pulse-slow">🧘‍♀️</div> 
        
        {/* Heading - Stronger, more inviting, consistent with light/dark */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-8">
          The Problem We're Solving
        </h2>
        
        {/* Problem Description - Clear and concise, consistent with light/dark */}
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:text-xl">
          We all know that short, mindful breathing breaks can significantly reduce stress and sharpen focus.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 md:text-xl">
          Yet, in our fast-paced world, it's incredibly easy to forget to take them.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 md:text-xl">
          Most mindfulness apps out there feel passive, clinical, or simply uninspiring.
        </p>
        
        {/* Solution Statement - Bold, vibrant, and impactful, consistent with light/dark */}
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed sm:text-3xl lg:text-4xl dark:text-emerald-500"> {/* Adjusted text color for dark mode */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-800 dark:from-emerald-400 dark:to-green-600"> {/* Adjusted gradient for dark mode */}
            PausePulse is different.
          </span>
          <br className="sm:hidden" /> We make mindful breaks
          <span className="block mt-2 sm:inline sm:mt-0"> feel satisfying, game-like, and truly habit-forming.</span>
        </p>
      </div>
    </section>
  );
}