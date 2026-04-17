import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PausePulse | Our Apps',
  description: 'PausePulse — breathe calmer, think clearer. Privacy policy, terms, and data deletion.',
};

export default function PausePulseAppPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/apps"
          className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
          aria-label="Back to all apps"
        >
          ← All Apps
        </Link>
      </div>

      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white text-center">
          PausePulse
        </h1>
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 italic mb-6">
          Breathe calmer, think clearer.
        </p>

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4 mb-16">
          <p>
            PausePulse is a modern breathing app built for real life. Guided sessions, calming
            soundscapes, and personal insights — completely pressure-free. Available on iOS and
            Android.
          </p>
          <p>
            <Link href="/" className="text-emerald-600 dark:text-emerald-400 underline">
              Visit the PausePulse homepage →
            </Link>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Legal &amp; Data
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/privacy-policy"
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Privacy Policy</span>
          </Link>
          <Link
            href="/terms"
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Terms of Service</span>
          </Link>
          <Link
            href="/delete-data"
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Delete Data</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
