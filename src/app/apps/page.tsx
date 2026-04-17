import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Apps | PausePulse',
  description: 'Explore apps by PausePulse — breathing, health tools, and more.',
};

const apps = [
  {
    slug: 'visitnotes',
    name: 'VisitNotes',
    tagline: 'Prepare, remember, and organize every doctor visit.',
    description:
      'A local-first app that helps you prepare, document, and organize doctor visits for yourself and your family. All data stays on your device.',
    color: 'blue',
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
          aria-label="Back to home"
        >
          Back to home
        </Link>
      </div>

      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center">
          Our Apps
        </h1>
        <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
          Apps we have built. Tap an app to see more details.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 max-w-lg mx-auto">
          {apps.map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="group flex items-start gap-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src="/images/adaptive-icon-visitnotes.png"
                alt="VisitNotes icon"
                width={96}
                height={96}
                className="rounded-xl flex-shrink-0"
              />
              <div>
              <h2
                className="text-2xl font-bold mb-1 text-blue-600 dark:text-blue-400 group-hover:underline"
              >
                {app.name}
              </h2>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 italic">
                {app.tagline}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {app.description}
              </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
