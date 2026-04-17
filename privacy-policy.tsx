// Next.js page: app/visitnotes/privacy/page.tsx (or pages/visitnotes/privacy.tsx)
// Privacy Policy for VisitNotes

export default function PrivacyPolicy() {
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
        Privacy Policy
      </h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        VisitNotes · Last updated: April 17, 2026
      </p>

      <p>
        VisitNotes ("the App") is developed by PausePulse. We take your privacy
        seriously. This policy explains what data the App collects, how it is
        stored, and your rights.
      </p>

      <h2>1. Local-First Architecture</h2>
      <p>
        All your data is stored <strong>locally on your device</strong> using
        on-device storage. We do not operate servers that collect, store, or
        process your personal information. Your visit notes, health profile,
        medications, family profiles, doctor contacts, and all other data never
        leave your device unless you explicitly choose to use the AI Summary
        feature (see Section 3).
      </p>

      <h2>2. Data We Store On Your Device</h2>
      <p>The App stores the following information locally:</p>
      <ul>
        <li>
          <strong>Visit notes</strong> — titles, dates, clinician type,
          free-text notes (before, during, and after visits), and AI-generated
          structured summaries
        </li>
        <li>
          <strong>Health profile</strong> — medications (name, dosage,
          frequency), medical conditions, allergies, blood type, and emergency
          contact information
        </li>
        <li>
          <strong>Family profiles</strong> — name, relation, and date of birth
          for family members you add
        </li>
        <li>
          <strong>Doctor contacts</strong> — name, specialty, clinic, phone
          number, and address
        </li>
        <li>
          <strong>Action items</strong> — follow-up tasks linked to visits
        </li>
        <li>
          <strong>Photo attachments</strong> — photos you attach to visits
          (stored in your device's file system)
        </li>
        <li>
          <strong>App preferences</strong> — language, theme, biometric lock
          setting
        </li>
      </ul>
      <p>
        This data may include sensitive health information. It is never
        transmitted to our servers because we do not have servers that receive
        this data.
      </p>

      <h2>3. AI Summary Feature (Optional)</h2>
      <p>
        The App offers an optional AI-powered summary feature that uses OpenAI's
        API to structure your visit notes. This feature:
      </p>
      <ul>
        <li>
          Requires your <strong>explicit consent</strong> before any data is
          sent
        </li>
        <li>
          Uses <strong>your own OpenAI API key</strong> — we do not provide or
          have access to an API key
        </li>
        <li>
          Sends only the visit notes you choose to summarize (reason for visit,
          symptoms, medications, questions, and notes taken during/after the
          visit)
        </li>
        <li>Data is sent directly from your device to OpenAI's servers</li>
        <li>We do not intercept, log, or store the data in transit</li>
      </ul>
      <p>
        OpenAI's data handling is governed by their own{" "}
        <a
          href="https://openai.com/policies/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy policy
        </a>
        . According to OpenAI's API data usage policy, API data is not used for
        training their models.
      </p>
      <p>
        You can revoke AI consent and remove your API key at any time in the
        App's Settings.
      </p>

      <h2>4. Device Permissions</h2>
      <p>
        The App may request the following device permissions, all of which are
        optional:
      </p>
      <ul>
        <li>
          <strong>Microphone & Speech Recognition</strong> — for voice-to-text
          note input during visits
        </li>
        <li>
          <strong>Camera & Photo Library</strong> — to attach photos (e.g.,
          prescriptions, documents) to visits
        </li>
        <li>
          <strong>Calendar</strong> — to create follow-up appointment reminders
          in your calendar
        </li>
        <li>
          <strong>Notifications</strong> — to send local medication and visit
          reminders
        </li>
        <li>
          <strong>Biometrics (Face ID / Fingerprint)</strong> — for optional app
          lock
        </li>
      </ul>
      <p>
        All permissions are processed locally on your device. No data from these
        features is transmitted to external servers (except as described in
        Section 3).
      </p>

      <h2>5. Analytics & Tracking</h2>
      <p>
        The App does <strong>not</strong> use any analytics, tracking,
        advertising, or crash reporting services. We do not collect usage
        statistics, device identifiers, or behavioral data. There are no
        third-party analytics SDKs in the App.
      </p>

      <h2>6. Data Sharing</h2>
      <p>
        We do not sell, share, or transfer your personal data to third parties.
        The only external data transmission is the optional AI Summary feature
        described in Section 3, which is initiated by you and uses your own API
        credentials.
      </p>

      <h2>7. Data Retention & Deletion</h2>
      <p>
        Your data remains on your device until you delete it. You can delete all
        data at any time by going to <strong>Settings → Delete all data</strong>{" "}
        in the App. This permanently removes all visits, health profiles,
        contacts, action items, preferences, and stored API keys from your
        device.
      </p>
      <p>Uninstalling the App also removes all stored data from your device.</p>
      <p>
        For detailed deletion instructions, see our{" "}
        <a href="/visitnotes/delete-data">data deletion page</a>.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        The App is not directed at children under 13. The family profiles
        feature allows adults to manage health information for their dependents.
        If you believe a child has used the App without parental consent, the
        data can be deleted immediately using the in-app deletion feature.
      </p>

      <h2>9. Security</h2>
      <p>
        Data is stored using the device's built-in storage mechanisms. The App
        offers an optional biometric lock (Face ID / Fingerprint) for additional
        protection. Your OpenAI API key, if provided, is stored locally on your
        device.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will always be available at this URL. We encourage you to review this
        page periodically.
      </p>

      <h2>11. Contact</h2>
      <p>
        If you have questions about this Privacy Policy or your data, contact us
        at: <a href="mailto:contact@pausepulse.com">contact@pausepulse.com</a>
      </p>
    </main>
  );
}
