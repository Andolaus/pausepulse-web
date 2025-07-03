'use client';

export default function TermsOfService() {
  return (
    <section
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed"
      aria-labelledby="terms-heading"
    >
      <h1
        id="terms-heading"
        className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center"
      >
        Terms of Service
      </h1>

      <p className="mb-4">
        By using PausePulse, you agree to use the app responsibly and for personal well-being purposes only. All content,
        graphics, and features are the intellectual property of PausePulse unless stated otherwise.
      </p>
      <p className="mb-4">
        We reserve the right to change or remove content at any time. Use of the app does not constitute medical advice.
        Always consult a professional if you have health-related concerns.
      </p>
      <p className="mb-4">
        Violation of terms may result in restricted access. For any questions, please reach out to{' '}
        <a
          href="mailto:andreas@pausepulse.com"
          className="text-emerald-600 underline"
          aria-label="Email Andreas at PausePulse"
        >
          andreas@pausepulse.com
        </a>.
      </p>

      <p className="mt-12 text-sm text-gray-500 text-center">Last updated: July 2025</p>
    </section>
  );
}
