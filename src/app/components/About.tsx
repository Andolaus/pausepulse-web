export default function About() {
  return (
    <section className="bg-gradient-to-b from-white to-emerald-50 py-24 px-6 sm:py-32 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Emoji - Larger and more prominent */}
        <div className="text-6xl mb-6 animate-pulse-slow">🧘‍♀️</div> 
        
        {/* Heading - Stronger, more inviting */}
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8">
          The Problem We're Solving
        </h2>
        
        {/* Problem Description - Clear and concise */}
        <p className="text-lg text-gray-700 leading-relaxed mb-4 md:text-xl">
          We all know that short, mindful breathing breaks can significantly reduce stress and sharpen focus.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4 md:text-xl">
          Yet, in our fast-paced world, it's incredibly easy to forget to take them.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 md:text-xl">
          Most mindfulness apps out there feel passive, clinical, or simply uninspiring.
        </p>
        
        {/* Solution Statement - Bold, vibrant, and impactful */}
        <p className="text-2xl font-bold text-emerald-700 leading-relaxed sm:text-3xl lg:text-4xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-800">
            PausePulse is different.
          </span>
          <br className="sm:hidden" /> We make mindful breaks
          <span className="block mt-2 sm:inline sm:mt-0"> feel satisfying, game-like, and truly habit-forming.</span>
        </p>
      </div>
    </section>
  );
}