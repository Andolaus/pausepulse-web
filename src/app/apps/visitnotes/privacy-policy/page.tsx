import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | VisitNotes',
  description: 'Read the VisitNotes privacy policy and learn how data is processed and protected.',
  alternates: {
    canonical: 'https://pausepulse.app/apps/visitnotes/privacy-policy',
  },
};

export default function VisitNotesPrivacyPolicyPage() {
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
        aria-labelledby="privacy-heading"
      >
        <h1
          id="privacy-heading"
          className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center"
        >
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-center font-semibold text-sky-800 dark:text-sky-300">
          VisitNotes · Last updated: April 17, 2026
        </p>

        <p className="mb-4">
          VisitNotes (&quot;the App&quot;) is developed by PausePulse. We take your privacy
          seriously. This policy explains what data the App collects, how it is stored, and your
          rights.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          1. Local-First Architecture
        </h2>
        <p className="mb-4">
          All your data is stored <strong>locally on your device</strong> using on-device storage.
          We do not operate servers that collect, store, or process your personal information. Your
          visit notes, health profile, medications, family profiles, doctor contacts, and all other
          data never leave your device unless you explicitly choose to use the AI Summary feature
          (see Section 3).
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          2. Data We Store On Your Device
        </h2>
        <p className="mb-2">The App stores the following information locally:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Visit notes</strong> — titles, dates, clinician type, free-text notes (before,
            during, and after visits), and AI-generated structured summaries
          </li>
          <li>
            <strong>Health profile</strong> — medications (name, dosage, frequency), medical
            conditions, allergies, blood type, and emergency contact information
          </li>
          <li>
            <strong>Family profiles</strong> — name, relation, and date of birth for family members
            you add
          </li>
          <li>
            <strong>Doctor contacts</strong> — name, specialty, clinic, phone number, and address
          </li>
          <li>
            <strong>Action items</strong> — follow-up tasks linked to visits
          </li>
          <li>
            <strong>Photo attachments</strong> — photos you attach to visits (stored in your
            device&apos;s file system)
          </li>
          <li>
            <strong>App preferences</strong> — language, theme, biometric lock setting
          </li>
        </ul>
        <p className="mb-4">
          This data may include sensitive health information. It is never transmitted to our servers
          because we do not have servers that receive this data.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          3. AI Summary Feature (Optional)
        </h2>
        <p className="mb-2">
          The App offers an optional AI-powered summary feature that uses OpenAI&apos;s API to
          structure your visit notes. This feature:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Requires your <strong>explicit consent</strong> before any data is sent
          </li>
          <li>
            Uses <strong>your own OpenAI API key</strong> — we do not provide or have access to an
            API key
          </li>
          <li>
            Sends only the visit notes you choose to summarize (reason for visit, symptoms,
            medications, questions, and notes taken during/after the visit)
          </li>
          <li>Data is sent directly from your device to OpenAI&apos;s servers</li>
          <li>We do not intercept, log, or store the data in transit</li>
        </ul>
        <p className="mb-4">
          OpenAI&apos;s data handling is governed by their own{' '}
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            privacy policy
          </a>
          . According to OpenAI&apos;s API data usage policy, API data is not used for training
          their models.
        </p>
        <p className="mb-4">
          You can revoke AI consent and remove your API key at any time in the App&apos;s Settings.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          4. Device Permissions
        </h2>
        <p className="mb-2">
          The App may request the following device permissions, all of which are optional:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Microphone &amp; Speech Recognition</strong> — for voice-to-text note input
            during visits
          </li>
          <li>
            <strong>Camera &amp; Photo Library</strong> — to attach photos (e.g., prescriptions,
            documents) to visits
          </li>
          <li>
            <strong>Calendar</strong> — to create follow-up appointment reminders in your calendar
          </li>
          <li>
            <strong>Notifications</strong> — to send local medication and visit reminders
          </li>
          <li>
            <strong>Biometrics (Face ID / Fingerprint)</strong> — for optional app lock
          </li>
        </ul>
        <p className="mb-4">
          All permissions are processed locally on your device. No data from these features is
          transmitted to external servers (except as described in Section 3).
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          5. Analytics &amp; Tracking
        </h2>
        <p className="mb-4">
          The App does <strong>not</strong> use any analytics, tracking, advertising, or crash
          reporting services. We do not collect usage statistics, device identifiers, or behavioral
          data. There are no third-party analytics SDKs in the App.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          6. Data Sharing
        </h2>
        <p className="mb-4">
          We do not sell, share, or transfer your personal data to third parties. The only external
          data transmission is the optional AI Summary feature described in Section 3, which is
          initiated by you and uses your own API credentials.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          7. Data Retention &amp; Deletion
        </h2>
        <p className="mb-4">
          Your data remains on your device until you delete it. You can delete all data at any time
          by going to <strong>Settings → Delete all data</strong> in the App. This permanently
          removes all visits, health profiles, contacts, action items, preferences, and stored API
          keys from your device.
        </p>
        <p className="mb-4">
          Uninstalling the App also removes all stored data from your device.
        </p>
        <p className="mb-4">
          For detailed deletion instructions, see our{' '}
          <Link
            href="/apps/visitnotes/delete-data"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            data deletion page
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          8. Children&apos;s Privacy
        </h2>
        <p className="mb-4">
          The App is not directed at children under 13. The family profiles feature allows adults to
          manage health information for their dependents. If you believe a child has used the App
          without parental consent, the data can be deleted immediately using the in-app deletion
          feature.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          9. Security
        </h2>
        <p className="mb-4">
          Data is stored using the device&apos;s built-in storage mechanisms. The App offers an
          optional biometric lock (Face ID / Fingerprint) for additional protection. Your OpenAI
          API key, if provided, is stored locally on your device.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          10. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. The latest version will always be
          available at this URL. We encourage you to review this page periodically.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          11. Contact
        </h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy or your data, contact us at:{' '}
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
