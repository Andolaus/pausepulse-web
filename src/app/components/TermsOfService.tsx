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
        By using PausePulse, you agree to use the app responsibly and for personal well-being purposes only. PausePulse
        is designed to support breathing and relaxation routines and does not replace medical care.
      </p>
      <p className="mb-4">
        We may update features, pricing, or content over time to improve the service. Continued use of the app after
        updates means you accept the current version of these terms.
      </p>
      <p className="mb-4">
        You are responsible for keeping your account details and device secure. Misuse of the app or violation of
        applicable law may result in restricted access.
      </p>
      <p className="mb-4">
        For questions about these terms, please reach out to{' '}
        <a
          href="mailto:andreas@pausepulse.com"
          className="text-emerald-600 dark:text-emerald-400 underline"
          aria-label="Email Andreas at PausePulse"
        >
          andreas@pausepulse.com
        </a>.
      </p>

      <p className="mt-12 text-sm text-gray-500 text-center">Last updated: April 2026</p>
    </section>
  );
}
