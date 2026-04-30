export default function DownloadCTA() {
  return (
    <section
      className="relative bg-emerald-600 dark:bg-emerald-700 py-24 px-6 text-center sm:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Subtle decorative rings */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/5" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-100 mb-4">
          Available now
        </p>
        <h2
          id="cta-heading"
          className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5 text-white tracking-tight"
        >
          Start breathing better today
        </h2>

        <p className="text-lg text-emerald-100 leading-relaxed mb-10">
          Download PausePulse free on iOS and Android and build a calm, consistent routine — completely pressure-free.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://apps.apple.com/us/app/pausepulse/id6761433093"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PausePulse on the App Store"
            className="inline-flex items-center justify-center gap-2.5
                       bg-white text-emerald-700 font-bold 
                       px-8 py-4 rounded-full shadow-xl 
                       hover:bg-emerald-50 hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300 ease-in-out 
                       focus:outline-none focus:ring-4 focus:ring-white/40
                       text-base sm:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
            </svg>
            Download on App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pausepulse.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PausePulse on Google Play"
            className="inline-flex items-center justify-center gap-2.5
                       bg-white text-emerald-700 font-bold 
                       px-8 py-4 rounded-full shadow-xl 
                       hover:bg-emerald-50 hover:scale-105 hover:shadow-2xl 
                       transition-all duration-300 ease-in-out 
                       focus:outline-none focus:ring-4 focus:ring-white/40
                       text-base sm:text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27M20.16 10.81c.34.27.59.69.59 1.19s-.25.92-.59 1.19l-2.27 1.31-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49Z"/>
            </svg>
            Get it on Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
