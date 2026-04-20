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

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4 mb-10">
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

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
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
