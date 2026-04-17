import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delete Data | VisitNotes',
  description: 'Instructions for deleting your data from VisitNotes.',
  alternates: {
    canonical: 'https://pausepulse.app/apps/visitnotes/delete-data',
  },
};

export default function VisitNotesDeleteDataPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/apps/visitnotes"
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          aria-label="Back to VisitNotes"
        >
          ← VisitNotes
        </Link>
      </div>

      <section
        className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed"
        aria-labelledby="delete-data-heading"
      >
        <h1
          id="delete-data-heading"
          className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center"
        >
          Delete Your Data
        </h1>
        <p className="mb-10 text-sm text-center font-semibold text-sky-800 dark:text-sky-300">
          VisitNotes · Last updated: April 17, 2026
        </p>

        <p className="mb-4">
          VisitNotes stores all your data locally on your device. We do not have access to your data
          and cannot delete it remotely. You have full control over your data at all times.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          Option 1: Delete All Data From the App
        </h2>
        <p className="mb-2">To delete all your data while keeping the App installed:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            Open <strong>VisitNotes</strong>
          </li>
          <li>
            Go to the <strong>Settings</strong> tab (gear icon)
          </li>
          <li>Scroll to the bottom</li>
          <li>
            Tap <strong>&quot;Delete all data&quot;</strong>
          </li>
          <li>Confirm the deletion when prompted</li>
        </ol>
        <p className="mb-2">This permanently deletes:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>All saved visits and visit notes</li>
          <li>All AI-generated summaries</li>
          <li>
            Your health profile (medications, conditions, allergies, blood type, emergency contact)
          </li>
          <li>All family member profiles</li>
          <li>All doctor contacts</li>
          <li>All action items and follow-up tasks</li>
          <li>Photo attachments metadata</li>
          <li>Your OpenAI API key (if stored)</li>
          <li>All app preferences (language, theme, biometric settings)</li>
        </ul>

        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-5 my-6">
          <p className="font-semibold text-amber-800 dark:text-amber-200 m-0">
            ⚠️ This action cannot be undone. Once deleted, your data cannot be recovered because it
            was only stored on your device.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          Option 2: Uninstall the App
        </h2>
        <p className="mb-2">
          Deleting the VisitNotes app from your device removes all app data, including everything
          listed above. This is equivalent to using the in-app deletion feature.
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            On your device, long-press the <strong>VisitNotes</strong> app icon
          </li>
          <li>
            Tap <strong>&quot;Remove App&quot;</strong> (iOS) or{' '}
            <strong>&quot;Uninstall&quot;</strong> (Android)
          </li>
          <li>Confirm to delete</li>
        </ol>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          Option 3: Delete Specific Data
        </h2>
        <p className="mb-2">You can also delete individual items without clearing everything:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Individual visits:</strong> Open a visit → tap the delete option
          </li>
          <li>
            <strong>Medications:</strong> Go to Health tab → tap the × on any medication
          </li>
          <li>
            <strong>Conditions/Allergies:</strong> Go to Health tab → tap the × on any chip
          </li>
          <li>
            <strong>Doctor contacts:</strong> Go to Doctors tab → swipe to delete
          </li>
          <li>
            <strong>Family profiles:</strong> Go to Settings → Family Profiles → remove a member
          </li>
          <li>
            <strong>Action items:</strong> Tap to complete or swipe to delete
          </li>
          <li>
            <strong>AI API key:</strong> Go to Settings → clear the API key field
          </li>
          <li>
            <strong>AI consent:</strong> Go to Settings → toggle off AI data sharing
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          What About Data Sent to OpenAI?
        </h2>
        <p className="mb-4">
          If you used the AI Summary feature, your visit notes were sent to OpenAI&apos;s servers
          using your own API key. This data is subject to{' '}
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            OpenAI&apos;s privacy policy
          </a>
          . According to OpenAI&apos;s API data usage policy, API data is not used for training and
          is retained for a limited period. To manage data held by OpenAI, contact OpenAI directly
          through their privacy portal.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          No Server-Side Data
        </h2>
        <p className="mb-2">
          VisitNotes does not store any of your data on our servers. There is no account, no cloud
          sync, and no backup. This means:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>We cannot access your data</li>
          <li>We cannot delete your data for you</li>
          <li>Once you delete data from your device, it is gone permanently</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Contact</h2>
        <p className="mb-4">
          If you have questions about data deletion, contact us at:{' '}
          <a
            href="mailto:andreas@pausepulse.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            andreas@pausepulse.com
          </a>
        </p>
      </section>
    </main>
  );
}
