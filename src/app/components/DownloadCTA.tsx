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
          href="https://apps.apple.com/us/app/pausepulse/id6761433093"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PausePulse on the App Store"
          className="inline-flex items-center justify-center gap-2
                     bg-emerald-600 dark:bg-emerald-500 text-white font-bold 
                     px-10 py-5 rounded-full shadow-xl 
                     hover:bg-emerald-700 dark:hover:bg-emerald-600 hover:scale-105 hover:shadow-2xl 
                     transition-all duration-300 ease-in-out 
                     focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75 
                     text-lg sm:text-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
          Download on App Store
        </a>
      </div>
    </section>
  );
}
