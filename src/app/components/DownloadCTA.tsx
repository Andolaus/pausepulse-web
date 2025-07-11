export default function DownloadCTA() {
  return (
    <section
      className="bg-white dark:bg-gray-900 py-28 px-6 text-center sm:py-32 lg:py-40 border-t border-gray-100 dark:border-gray-800"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white"
        >
          Ready to breathe deeper, grow stronger, and level up your calm?
        </h2>

        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12 sm:text-2xl">
          Join our exclusive early access list today and be among the first to build a calm, consistent, and deeply rewarding routine.
        </p>

        <a
          href="#earlyaccess"
          role="button"
          aria-label="Join the PausePulse early access list"
          className="inline-flex items-center justify-center 
                     bg-emerald-600 dark:bg-emerald-500 text-white font-bold 
                     px-10 py-5 rounded-full shadow-xl 
                     hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 hover:shadow-2xl 
                     transition-all duration-300 ease-in-out 
                     focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75 
                     text-lg sm:text-xl"
        >
          Join Early Access
        </a>
      </div>
    </section>
  );
}
