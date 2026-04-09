import type { Metadata } from 'next';
import Link from 'next/link';
import TermsOfService from '../components/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | PausePulse',
  description: 'Read the PausePulse terms of service for app usage and legal terms.',
  alternates: {
    canonical: 'https://pausepulse.app/terms',
  },
};

export default function TermsPage() {
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
      <TermsOfService />
    </main>
  );
}
