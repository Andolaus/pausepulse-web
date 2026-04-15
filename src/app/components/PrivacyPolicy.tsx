export default function PrivacyPolicy() {
  return (
    <section
      className="py-24 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed"
      aria-labelledby="privacy-heading"
    >
      <h1
        id="privacy-heading"
        className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center"
      >
        Privacy Policy for PausePulse
      </h1>
      <p className="mb-10 text-sm text-center font-semibold text-sky-800 dark:text-sky-300">
        Last updated: April 15, 2026
      </p>

      <p className="mb-4">
        PausePulse (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This Privacy Policy explains what
        information is processed, the purposes of processing, and the choices available to you.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">1. Who We Are</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>App name: PausePulse</li>
        <li>
          Contact email:{' '}
          <a href="mailto:andreas@pausepulse.com" className="text-emerald-600 dark:text-emerald-400 underline">
            andreas@pausepulse.com
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">2. Data We Process</h2>
      <p className="mb-4">PausePulse is designed to function primarily with data stored on your device.</p>
      <p className="mb-2">Examples of on-device data:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Onboarding completion status</li>
        <li>Preferred language and theme</li>
        <li>Breathing preferences and session history</li>
        <li>Optional progress data (for example streaks, XP, badges)</li>
        <li>Optional voice recordings when you choose a custom voice feature</li>
        <li>Optional photos or images you select or capture for use as a breathing session background</li>
      </ul>
      <p className="mb-4">This data is stored locally on your device (for example via AsyncStorage).</p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">
        3. Device Permissions (Android and iOS)
      </h2>
      <p className="mb-4">
        PausePulse may request the following device permissions. All permissions are optional and feature-based.
        If you do not grant a permission, core breathing features still work.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Microphone</h3>
      <p className="mb-2">
        PausePulse uses your microphone to record a custom voice for personalized breathing guidance.
        For example, you can record your own &quot;Breathe in&quot; and &quot;Breathe out&quot; prompts.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Microphone access is only requested when you use the custom voice recording feature.</li>
        <li>Voice recordings are stored locally on your device and are not uploaded to any server.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Photo Library</h3>
      <p className="mb-2">
        PausePulse uses your photo library so you can choose a personal image as your breathing session background.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Photo library access is only requested when you choose to set a custom background image.</li>
        <li>Selected images are stored locally on your device and are not uploaded to any server.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900 dark:text-white">Camera</h3>
      <p className="mb-2">
        PausePulse uses your camera so you can take a photo to use as your breathing session background.
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Camera access is only requested when you choose to take a photo for your background.</li>
        <li>Photos taken are stored locally on your device and are not uploaded to any server.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">4. Analytics and Diagnostics</h2>
      <p className="mb-4">At this time, PausePulse does not use third-party analytics or crash-reporting services.</p>
      <p className="mb-4">
        In development builds, technical debug messages may appear locally on a developer device. These messages are
        not used for user profiling and are not sent to analytics platforms by default.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">5. Purchases and Subscriptions</h2>
      <p className="mb-4">
        If you buy a premium subscription, PausePulse uses RevenueCat and platform billing providers (Apple App Store
        and Google Play) to validate purchases and entitlements.
      </p>
      <p className="mb-4">
        We do not receive your full payment card details directly. Billing providers process payment information in
        accordance with their own terms and privacy policies.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">6. Why We Process Data</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Provide core app functionality</li>
        <li>Save your preferences and progress</li>
        <li>Support reminders and session features</li>
        <li>Enable optional custom voice recording features</li>
        <li>Allow you to personalize your breathing session background with your own photos</li>
        <li>Provide premium access if purchased</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">7. Data Sharing</h2>
      <p className="mb-4">We do not sell personal data.</p>
      <p className="mb-4">
        We may share limited data with service providers only where necessary to operate subscription and billing
        infrastructure (for example RevenueCat, Apple, and Google).
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">8. Data Retention</h2>
      <p className="mb-4">On-device data remains until you remove it, reset the app, or uninstall the app.</p>
      <p className="mb-4">
        Purchase and subscription records handled by billing providers are retained according to those providers&apos;
        own policies.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">9. Your Rights and Choices</h2>
      <p className="mb-4">
        Depending on your region, you may have rights to access, correct, delete, or restrict processing of personal
        data. To request support regarding these rights, contact{' '}
        <a href="mailto:andreas@pausepulse.com" className="text-emerald-600 dark:text-emerald-400 underline">
          andreas@pausepulse.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">10. Children</h2>
      <p className="mb-4">
        PausePulse is not directed to children under the age defined by applicable law without parental consent.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">11. International Transfers</h2>
      <p className="mb-4">
        Your data may be processed in countries other than your own by our service providers, subject to applicable
        safeguards.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">12. Security</h2>
      <p className="mb-4">
        We use reasonable technical and organizational measures to protect data, but no method of transmission or
        storage is 100% secure.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">13. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy from time to time. If we do, we will revise the &quot;Last updated&quot; date shown above.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">14. Contact</h2>
      <p className="mb-4">
        For privacy questions, contact{' '}
        <a
          href="mailto:andreas@pausepulse.com"
          className="text-emerald-600 dark:text-emerald-400 underline"
          aria-label="Email Andreas at PausePulse"
        >
          andreas@pausepulse.com
        </a>
        .
      </p>
    </section>
  );
}
