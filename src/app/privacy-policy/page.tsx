import type { Metadata } from 'next';
import Link from 'next/link';
import PrivacyPolicy from '../components/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | PausePulse',
  description: 'Read the PausePulse privacy policy and learn how data is processed and protected.',
  alternates: {
    canonical: 'https://pausepulse.app/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
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
      <PrivacyPolicy />
    </main>
  );
}
