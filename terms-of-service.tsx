// Next.js page: app/visitnotes/terms/page.tsx (or pages/visitnotes/terms.tsx)
// Terms of Service for VisitNotes

export default function TermsOfService() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
        color: "#1a1a1a",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
        Terms of Service
      </h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        VisitNotes · Last updated: April 17, 2026
      </p>

      <p>
        These Terms of Service ("Terms") govern your use of the VisitNotes
        mobile application ("the App"), developed by PausePulse. By downloading
        or using the App, you agree to these Terms.
      </p>

      <h2>1. Description of Service</h2>
      <p>
        VisitNotes is a personal health visit management app that helps you
        prepare for, take notes during, and review medical visits. The App
        stores data locally on your device and offers optional AI-powered note
        summarization.
      </p>

      <h2>2. Not Medical Advice</h2>
      <p>
        <strong>
          The App is not a medical device and does not provide medical advice,
          diagnosis, or treatment.
        </strong>{" "}
        It is a personal note-taking and organization tool. AI-generated
        summaries are for your convenience and may contain errors or
        misinterpretations. Always consult a qualified healthcare professional
        for medical decisions.
      </p>

      <h2>3. User Responsibilities</h2>
      <ul>
        <li>
          You are responsible for the accuracy of data you enter into the App
        </li>
        <li>
          You are responsible for keeping your device secure and using the
          optional biometric lock if desired
        </li>
        <li>
          If you use the AI Summary feature, you are responsible for providing
          your own valid OpenAI API key and any costs associated with its use
        </li>
        <li>
          You agree not to use the App for purposes that violate any applicable
          laws or regulations
        </li>
      </ul>

      <h2>4. Health Data</h2>
      <p>
        The App allows you to store sensitive health information including
        medications, conditions, allergies, and visit notes. This data is stored
        only on your device. We strongly recommend:
      </p>
      <ul>
        <li>Enabling biometric lock in Settings to protect your health data</li>
        <li>Keeping your device passcode enabled</li>
        <li>
          Not sharing your device with others who should not access your health
          records
        </li>
      </ul>

      <h2>5. AI Summary Feature</h2>
      <p>
        The optional AI Summary feature sends your visit notes to OpenAI for
        processing using your own API key. By using this feature, you:
      </p>
      <ul>
        <li>
          Acknowledge that your visit notes will be transmitted to OpenAI's
          servers
        </li>
        <li>
          Accept OpenAI's{" "}
          <a
            href="https://openai.com/policies/terms-of-use"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>{" "}
          and{" "}
          <a
            href="https://openai.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          Understand that AI-generated summaries may be inaccurate and should
          not replace professional medical records
        </li>
        <li>
          Accept responsibility for any charges from OpenAI associated with your
          API key usage
        </li>
      </ul>

      <h2>6. Free and Premium Tiers</h2>
      <p>
        The App offers a free tier with a limited number of visits per month and
        a premium tier with unlimited access. Premium features and pricing may
        change. Any purchases are processed through Apple's App Store and are
        subject to Apple's terms.
      </p>

      <h2>7. Intellectual Property</h2>
      <p>
        The App, including its design, code, and content, is owned by
        PausePulse. You may not copy, modify, distribute, or reverse-engineer
        the App. Your personal data and notes remain yours — we claim no
        ownership over content you create in the App.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        The App is provided "as is" without warranties of any kind. To the
        maximum extent permitted by law:
      </p>
      <ul>
        <li>
          We are not liable for any data loss resulting from device failure, App
          updates, or deletion
        </li>
        <li>
          We are not liable for any medical decisions made based on information
          stored in or generated by the App
        </li>
        <li>
          We are not liable for any costs incurred through your use of
          third-party services (e.g., OpenAI)
        </li>
        <li>
          Our total liability shall not exceed the amount you paid for the App
          in the 12 months preceding any claim
        </li>
      </ul>

      <h2>9. Data Deletion</h2>
      <p>
        You can delete all your data at any time through{" "}
        <strong>Settings → Delete all data</strong>. Uninstalling the App also
        removes all locally stored data. See our{" "}
        <a href="/visitnotes/delete-data">data deletion page</a> for detailed
        instructions.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the App at any time by deleting it from your device.
        We reserve the right to discontinue the App or modify these Terms with
        reasonable notice.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Norway. Any disputes arising
        from these Terms shall be resolved in the courts of Norway.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The latest version will
        always be available at this URL. Continued use of the App after changes
        constitutes acceptance of the updated Terms.
      </p>

      <h2>13. Contact</h2>
      <p>
        Questions about these Terms? Contact us at:{" "}
        <a href="mailto:contact@pausepulse.com">contact@pausepulse.com</a>
      </p>
    </main>
  );
}
