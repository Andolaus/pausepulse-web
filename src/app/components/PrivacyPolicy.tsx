'use client';

export default function PrivacyPolicy() {
  return (
    <section
      className="py-32 px-6 sm:px-8 lg:px-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed"
      aria-labelledby="privacy-heading"
    >
      <h1
        id="privacy-heading"
        className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center"
      >
        Privacy Policy
      </h1>

      <p className="mb-4">
        PausePulse respects your privacy. We only collect the minimum amount of information necessary to provide our
        services — like your email address when you sign up for early access or contact us.
      </p>
      <p className="mb-4">
        We never sell or share your personal information. All data is securely stored and only used for the purpose it
        was collected.
      </p>
      <p className="mb-4">
        You can contact us at any time at{' '}
        <a
          href="mailto:andreas@pausepulse.com"
          className="text-emerald-600 underline"
          aria-label="Email Andreas at PausePulse"
        >
          andreas@pausepulse.com
        </a>{' '}
        if you want your data removed or have any questions.
      </p>

      <p className="mt-12 text-sm text-gray-500 text-center">Last updated: July 2025</p>
    </section>
  );
}
