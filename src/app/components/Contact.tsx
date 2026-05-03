'use client';

import { useState } from 'react';
import { FaCheckCircle, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      let data: unknown = null;
      try {
        data = await response.json();
      } catch {
        /* empty body */
      }

      if (!response.ok) {
        const msg =
          (data &&
            typeof data === 'object' &&
            typeof (data as Record<string, unknown>).error === 'string' &&
            (data as Record<string, unknown>).error) ||
          (data &&
            typeof data === 'object' &&
            typeof (data as Record<string, unknown>).message === 'string' &&
            (data as Record<string, unknown>).message) ||
          'Failed to send message';
        throw new Error(msg as string);
      }

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again later.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="bg-white dark:bg-gray-950 py-24 px-6 sm:py-32 lg:px-8 border-t border-gray-100 dark:border-gray-800"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* Left intro */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-5"
          >
            Let&apos;s connect.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            Feedback, questions, partnerships, or just a hello — I read every message personally.
          </p>

          <a
            href="mailto:andreas@pausepulse.com"
            className="inline-flex items-center gap-3 text-gray-900 dark:text-white font-semibold hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
          >
            <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center border border-emerald-100 dark:border-emerald-800">
              <FaEnvelope className="w-4 h-4" aria-hidden="true" />
            </span>
            andreas@pausepulse.com
          </a>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-7 sm:p-10 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid gap-5 text-left" noValidate>
                {error && (
                  <div
                    className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 p-4 text-sm text-red-800 dark:text-red-200"
                    role="alert"
                    aria-live="polite"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center gap-2 w-full text-white font-bold py-3.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/60 ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-emerald-500/30'
                  }`}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            ) : (
              <div
                className="flex flex-col items-center justify-center text-center p-6 sm:p-8"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                  <FaCheckCircle className="text-3xl" aria-hidden="true" />
                </div>
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">Message sent</p>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition-colors duration-200"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
