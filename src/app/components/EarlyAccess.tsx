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
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section id="earlyaccess" className="py-32 lg:py-44 px-6 sm:px-8 lg:px-12 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
          Join the Early Access List
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Enter your email and be the first to know when PausePulse launches.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-full font-semibold shadow-md transition"
            >
              Notify Me
            </button>
          </form>
        ) : (
          <p className="text-emerald-700 dark:text-emerald-400 font-medium text-lg">
            Thank you! You're on the list 🎉
          </p>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </section>
  );
}
