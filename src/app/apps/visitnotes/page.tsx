import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'VisitNotes | PausePulse Apps',
  description:
    'VisitNotes — prepare, remember, and organize every doctor visit. Privacy policy, terms of service, and data deletion.',
};

export default function VisitNotesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/apps"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          aria-label="Back to all apps"
        >
          ← All Apps
        </Link>
      </div>

      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto">
        <div className="flex justify-center mb-2">
          <Image
            src="/images/adaptive-icon-visitnotes.png"
            alt="VisitNotes icon"
            width={160}
            height={160}
            className="rounded-3xl"
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white text-center">
          VisitNotes
        </h1>
        <p className="text-center text-lg text-gray-500 dark:text-gray-400 italic mb-6">
          Prepare, remember, and organize every doctor visit.
        </p>

        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6 mb-16">
          <p>
            VisitNotes is a local-first mobile app for iOS and Android that helps you prepare,
            document, and organize doctor visits — for yourself and your whole family. All data is
            stored only on your device.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
            Key Features
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>3-phase visit flow</strong> — preparation (symptoms, medications, questions),
              during the visit (notes &amp; speech-to-text), and after (follow-up notes, photo
              attachments).
            </li>
            <li>
              <strong>AI summary</strong> — optional structured summaries powered by OpenAI
              (gpt-4o-mini) using your own API key.
            </li>
            <li>
              <strong>8 visit templates</strong> — GP, specialist, dentist, mental health,
              physiotherapy, urgent care, pediatrician, and eye doctor.
            </li>
            <li>
              <strong>Family profiles</strong> — add family members with individual health profiles
              (medications, conditions, allergies, blood type, emergency contact).
            </li>
            <li>
              <strong>Medication reminders</strong> — configurable local push notifications (1–24 h
              interval).
            </li>
            <li>
              <strong>Doctor book</strong> — save doctors and specialists with contact details.
            </li>
            <li>
              <strong>PDF export &amp; sharing</strong> — export visits and share via native share
              sheet.
            </li>
            <li>
              <strong>12 languages</strong> — English, Norwegian, Swedish, Danish, German, Spanish,
              French, Polish, Dutch, Portuguese, Arabic, and Hindi.
            </li>
            <li>
              <strong>Security</strong> — biometric lock (Face ID / fingerprint), secure API key
              storage, and full local data deletion.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4">
            Free vs Premium
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Free</strong> — up to 3 visits per month.
            </li>
            <li>
              <strong>Premium</strong> — unlimited visits, AI summaries, PDF export, and more.
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Legal &amp; Data
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/apps/visitnotes/privacy-policy"
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Privacy Policy</span>
          </Link>
          <Link
            href="/apps/visitnotes/terms"
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Terms of Service</span>
          </Link>
          <Link
            href="/apps/visitnotes/delete-data"
            className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Delete Data</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
