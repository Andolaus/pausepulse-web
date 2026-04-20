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
      className="bg-gray-50 dark:bg-gray-800 py-32 lg:py-44 px-6 sm:px-8 lg:px-12 text-center"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <h2
          id="earlyaccess-heading"
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          Download PausePulse
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Now available on iOS! Android coming soon — enter your email to be notified when it launches.
        </p>

        <a
          href="https://apps.apple.com/us/app/pausepulse/id6761433093"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download PausePulse on the App Store"
          className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 focus:ring-opacity-75 text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
          </svg>
          Download on App Store
        </a>

        <div aria-live="polite">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="w-full sm:w-auto text-left">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe to Android launch notification"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-full font-semibold shadow-md transition"
              >
                Notify Me for Android
              </button>
            </form>
          ) : (
            <p className="text-emerald-700 dark:text-emerald-400 font-medium text-lg">
              Thank you! You&apos;re on the list 🎉
            </p>
          )}

          {error && (
            <p className="text-red-500 text-sm mt-2" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
