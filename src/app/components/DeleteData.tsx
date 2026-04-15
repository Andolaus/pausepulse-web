import Link from 'next/link';

export default function DeleteData() {
  return (
    <section
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed"
      aria-labelledby="delete-data-heading"
    >
      <h1
        id="delete-data-heading"
        className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center"
      >
        PausePulse Data Deletion Request
      </h1>
      <p className="mb-10 text-sm text-center font-semibold text-sky-800 dark:text-sky-300">
        Last updated: April 15, 2026
      </p>

      <p className="mb-4">
        If you want to request deletion of data related to your use of PausePulse, please contact us by email.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">1. Contact for Deletion Requests</h2>
      <p className="mb-2">
        Email:{' '}
        <a
          className="font-bold text-emerald-600 dark:text-emerald-400 underline"
          href="mailto:andreas@pausepulse.com"
        >
          andreas@pausepulse.com
        </a>
      </p>
      <p className="mb-4">
        Subject line: <strong>Data Deletion Request - PausePulse</strong>
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">2. Please Include</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Your email used with Google Play (if you purchased Premium)</li>
        <li>Your device platform (Android or iOS)</li>
        <li>Approximate subscription or purchase date (if applicable)</li>
        <li>Any details that help us locate your request</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">3. What Data Can Be Deleted</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Data we can identify and remove from our systems or service providers, where applicable</li>
        <li>Support-related communication data linked to your request</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">4. Data Stored On Your Device</h2>
      <p className="mb-4">
        Most PausePulse usage data is stored locally on your device, including:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Breathing preferences and session history</li>
        <li>Custom voice recordings (if you recorded a personal breathing guide)</li>
        <li>Photos or images selected or taken for use as a session background</li>
      </ul>
      <p className="mb-4">
        You can remove this data by uninstalling the app or clearing app storage on your device.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">5. Billing and Legal Retention</h2>
      <p className="mb-4">
        Some payment and transaction records may be retained by Google Play, Apple, and RevenueCat under their legal,
        tax, accounting, and compliance obligations.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">6. Response Time</h2>
      <p className="mb-4">We process deletion requests within 30 days.</p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">7. Related Policy</h2>
      <p className="mb-4">
        For more details, see our{' '}
        <Link href="/privacy-policy" className="text-emerald-600 dark:text-emerald-400 underline">
          Privacy Policy
        </Link>
        .
      </p>
    </section>
  );
}
