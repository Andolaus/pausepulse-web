'use client';
import { useState } from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

export default function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    }
  };

  return (
    <section
      id="earlyaccess"
      aria-labelledby="earlyaccess-heading"
      className="relative py-24 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-gray-100 dark:border-gray-800"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-white/5" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-100 mb-4">
          Start now
        </p>
        <h2
          id="earlyaccess-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
        >
          Your next calm breath
          <br />
          is one tap away.
        </h2>
        <p className="text-base sm:text-lg text-emerald-50/90 leading-relaxed mb-10 max-w-xl mx-auto">
          Download PausePulse free on iOS and Android. Build a steady, gentle routine — without pressure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
          <a
            href="https://apps.apple.com/us/app/pausepulse/id6761433093"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PausePulse on the App Store"
            className="inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white px-7 py-4 rounded-2xl font-semibold shadow-xl shadow-black/20 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 border border-gray-900"
          >
            <FaApple className="w-6 h-6" aria-hidden="true" />
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium opacity-70">Download on the</div>
              <div className="text-base font-bold">App Store</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.pausepulse.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download PausePulse on Google Play"
            className="inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-black text-white px-7 py-4 rounded-2xl font-semibold shadow-xl shadow-black/20 hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-300 border border-gray-900"
          >
            <FaGooglePlay className="w-5 h-5" aria-hidden="true" />
            <div className="text-left leading-tight">
              <div className="text-[10px] font-medium opacity-70">Get it on</div>
              <div className="text-base font-bold">Google Play</div>
            </div>
          </a>
        </div>

        <div className="pt-6 border-t border-white/15 max-w-md mx-auto">
          <p className="text-sm text-emerald-100/90 mb-4 font-medium">Want updates? Join the newsletter.</p>
          <div aria-live="polite">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <label htmlFor="ea-email" className="sr-only">Email address</label>
                <input
                  type="email"
                  id="ea-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white placeholder-emerald-100/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/60 transition"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-full font-semibold text-sm shadow-md transition-all duration-200 whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-white font-medium text-base">You&apos;re on the list — talk soon.</p>
            )}
            {error && (
              <p className="text-red-200 text-sm mt-2" role="alert">{error}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
