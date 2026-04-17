import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | VisitNotes',
  description: 'Read the VisitNotes terms of service.',
  alternates: {
    canonical: 'https://pausepulse.app/apps/visitnotes/terms',
  },
};

export default function VisitNotesTermsPage() {
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
        aria-labelledby="terms-heading"
      >
        <h1
          id="terms-heading"
          className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center"
        >
          Terms of Service
        </h1>
        <p className="mb-10 text-sm text-center font-semibold text-sky-800 dark:text-sky-300">
          VisitNotes · Last updated: April 17, 2026
        </p>

        <p className="mb-4">
          These Terms of Service (&quot;Terms&quot;) govern your use of the VisitNotes mobile
          application (&quot;the App&quot;), developed by PausePulse. By downloading or using the
          App, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          1. Description of Service
        </h2>
        <p className="mb-4">
          VisitNotes is a personal health visit management app that helps you prepare for, take
          notes during, and review medical visits. The App stores data locally on your device and
          offers optional AI-powered note summarization.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          2. Not Medical Advice
        </h2>
        <p className="mb-4">
          <strong>
            The App is not a medical device and does not provide medical advice, diagnosis, or
            treatment.
          </strong>{' '}
          It is a personal note-taking and organization tool. AI-generated summaries are for your
          convenience and may contain errors or misinterpretations. Always consult a qualified
          healthcare professional for medical decisions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          3. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>You are responsible for the accuracy of data you enter into the App</li>
          <li>
            You are responsible for keeping your device secure and using the optional biometric lock
            if desired
          </li>
          <li>
            If you use the AI Summary feature, you are responsible for providing your own valid
            OpenAI API key and any costs associated with its use
          </li>
          <li>
            You agree not to use the App for purposes that violate any applicable laws or
            regulations
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          4. Health Data
        </h2>
        <p className="mb-2">
          The App allows you to store sensitive health information including medications, conditions,
          allergies, and visit notes. This data is stored only on your device. We strongly
          recommend:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Enabling biometric lock in Settings to protect your health data</li>
          <li>Keeping your device passcode enabled</li>
          <li>
            Not sharing your device with others who should not access your health records
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          5. AI Summary Feature
        </h2>
        <p className="mb-2">
          The optional AI Summary feature sends your visit notes to OpenAI for processing using your
          own API key. By using this feature, you:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            Acknowledge that your visit notes will be transmitted to OpenAI&apos;s servers
          </li>
          <li>
            Accept OpenAI&apos;s{' '}
            <a
              href="https://openai.com/policies/terms-of-use"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Terms of Use
            </a>{' '}
            and{' '}
            <a
              href="https://openai.com/policies/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            Understand that AI-generated summaries may be inaccurate and should not replace
            professional medical records
          </li>
          <li>
            Accept responsibility for any charges from OpenAI associated with your API key usage
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          6. Free and Premium Tiers
        </h2>
        <p className="mb-4">
          The App offers a free tier with a limited number of visits per month and a premium tier
          with unlimited access. Premium features and pricing may change. Any purchases are
          processed through Apple&apos;s App Store or Google Play and are subject to their
          respective terms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          7. Intellectual Property
        </h2>
        <p className="mb-4">
          The App, including its design, code, and content, is owned by PausePulse. You may not
          copy, modify, distribute, or reverse-engineer the App. Your personal data and notes remain
          yours — we claim no ownership over content you create in the App.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          8. Limitation of Liability
        </h2>
        <p className="mb-2">
          The App is provided &quot;as is&quot; without warranties of any kind. To the maximum
          extent permitted by law:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            We are not liable for any data loss resulting from device failure, App updates, or
            deletion
          </li>
          <li>
            We are not liable for any medical decisions made based on information stored in or
            generated by the App
          </li>
          <li>
            We are not liable for any costs incurred through your use of third-party services (e.g.,
            OpenAI)
          </li>
          <li>
            Our total liability shall not exceed the amount you paid for the App in the 12 months
            preceding any claim
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          9. Data Deletion
        </h2>
        <p className="mb-4">
          You can delete all your data at any time through{' '}
          <strong>Settings → Delete all data</strong>. Uninstalling the App also removes all locally
          stored data. See our{' '}
          <Link
            href="/apps/visitnotes/delete-data"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            data deletion page
          </Link>{' '}
          for detailed instructions.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          10. Termination
        </h2>
        <p className="mb-4">
          You may stop using the App at any time by deleting it from your device. We reserve the
          right to discontinue the App or modify these Terms with reasonable notice.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          11. Governing Law
        </h2>
        <p className="mb-4">
          These Terms are governed by the laws of Norway. Any disputes arising from these Terms
          shall be resolved in the courts of Norway.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          12. Changes to These Terms
        </h2>
        <p className="mb-4">
          We may update these Terms from time to time. The latest version will always be available
          at this URL. Continued use of the App after changes constitutes acceptance of the updated
          Terms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
          13. Contact
        </h2>
        <p className="mb-4">
          Questions about these Terms? Contact us at:{' '}
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
