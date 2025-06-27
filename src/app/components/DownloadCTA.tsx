export default function DownloadCTA() {
  return (
    <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to breathe, grow and level up?</h2>
        <p className="text-lg text-white/90 mb-8">
          Start your PausePulse journey today and transform your breaks into something meaningful.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
            App Store
          </a>
          <a href="#" className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition">
            Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
