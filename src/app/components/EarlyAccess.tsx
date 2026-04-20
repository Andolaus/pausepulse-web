'use client';
import { useState } from 'react';

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
      className="bg-gray-50 dark:bg-gray-800/50 py-24 lg:py-32 px-6 sm:px-8 lg:px-12 border-t border-gray-100 dark:border-gray-800"
    >
      <div className="max-w-xl mx-auto text-center space-y-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
          Get the app
        </p>
        <h2
          id="earlyaccess-heading"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          Download PausePulse
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Now available on iOS. Android coming soon — leave your email to be first in line.
        </p>

        <a
          href="https://apps.apple.com/us/app/pausepulse/id6761433093"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PausePulse on the App Store"
          className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
          Download on App Store
        </a>

        <div className="pt-2">
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4 font-medium">Notify me when Android launches</p>
          <div aria-live="polite">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full sm:w-64 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to Android launch notification"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-full font-semibold text-sm shadow-md transition-all duration-200 whitespace-nowrap"
                >
                  Notify me
                </button>
              </form>
            ) : (
              <p className="text-emerald-600 dark:text-emerald-400 font-medium text-base">
                You&apos;re on the list — we&apos;ll let you know!
              </p>
            )}

            {error && (
              <p className="text-red-500 text-sm mt-2" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
