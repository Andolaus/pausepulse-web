// Next.js page: app/visitnotes/delete-data/page.tsx (or pages/visitnotes/delete-data.tsx)
// Data Deletion Instructions for VisitNotes

export default function DeleteData() {
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
        Delete Your Data
      </h1>
      <p style={{ color: "#666", marginBottom: 32 }}>
        VisitNotes · Last updated: April 17, 2026
      </p>

      <p>
        VisitNotes stores all your data locally on your device. We do not have
        access to your data and cannot delete it remotely. You have full control
        over your data at all times.
      </p>

      <h2>Option 1: Delete All Data From the App</h2>
      <p>To delete all your data while keeping the App installed:</p>
      <ol>
        <li>
          Open <strong>VisitNotes</strong>
        </li>
        <li>
          Go to the <strong>Settings</strong> tab (gear icon)
        </li>
        <li>Scroll to the bottom</li>
        <li>
          Tap <strong>"Delete all data"</strong>
        </li>
        <li>Confirm the deletion when prompted</li>
      </ol>
      <p>This permanently deletes:</p>
      <ul>
        <li>All saved visits and visit notes</li>
        <li>All AI-generated summaries</li>
        <li>
          Your health profile (medications, conditions, allergies, blood type,
          emergency contact)
        </li>
        <li>All family member profiles</li>
        <li>All doctor contacts</li>
        <li>All action items and follow-up tasks</li>
        <li>Photo attachments metadata</li>
        <li>Your OpenAI API key (if stored)</li>
        <li>All app preferences (language, theme, biometric settings)</li>
      </ul>

      <div
        style={{
          backgroundColor: "#FFF3CD",
          border: "1px solid #FFECB5",
          borderRadius: 12,
          padding: "16px 20px",
          margin: "24px 0",
        }}
      >
        <p style={{ margin: 0, fontWeight: 600 }}>
          ⚠️ This action cannot be undone. Once deleted, your data cannot be
          recovered because it was only stored on your device.
        </p>
      </div>

      <h2>Option 2: Uninstall the App</h2>
      <p>
        Deleting the VisitNotes app from your device removes all app data,
        including everything listed above. This is equivalent to using the
        in-app deletion feature.
      </p>
      <ol>
        <li>
          On your iPhone, long-press the <strong>VisitNotes</strong> app icon
        </li>
        <li>
          Tap <strong>"Remove App"</strong>
        </li>
        <li>
          Tap <strong>"Delete App"</strong> to confirm
        </li>
      </ol>

      <h2>Option 3: Delete Specific Data</h2>
      <p>You can also delete individual items without clearing everything:</p>
      <ul>
        <li>
          <strong>Individual visits:</strong> Open a visit → tap the delete
          option
        </li>
        <li>
          <strong>Medications:</strong> Go to Health tab → tap the × on any
          medication
        </li>
        <li>
          <strong>Conditions/Allergies:</strong> Go to Health tab → tap the × on
          any chip
        </li>
        <li>
          <strong>Doctor contacts:</strong> Go to Doctors tab → swipe to delete
        </li>
        <li>
          <strong>Family profiles:</strong> Go to Settings → Family Profiles →
          remove a member
        </li>
        <li>
          <strong>Action items:</strong> Tap to complete or swipe to delete
        </li>
        <li>
          <strong>AI API key:</strong> Go to Settings → clear the API key field
        </li>
        <li>
          <strong>AI consent:</strong> Go to Settings → toggle off AI data
          sharing
        </li>
      </ul>

      <h2>What About Data Sent to OpenAI?</h2>
      <p>
        If you used the AI Summary feature, your visit notes were sent to
        OpenAI's servers using your own API key. This data is subject to{" "}
        <a
          href="https://openai.com/policies/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenAI's privacy policy
        </a>
        . According to OpenAI's API data usage policy, API data is not used for
        training and is retained for a limited period. To manage data held by
        OpenAI, contact OpenAI directly through their privacy portal.
      </p>

      <h2>No Server-Side Data</h2>
      <p>
        VisitNotes does not store any of your data on our servers. There is no
        account, no cloud sync, and no backup. This means:
      </p>
      <ul>
        <li>We cannot access your data</li>
        <li>We cannot delete your data for you</li>
        <li>Once you delete data from your device, it is gone permanently</li>
      </ul>

      <h2>Contact</h2>
      <p>
        If you have questions about data deletion, contact us at:{" "}
        <a href="mailto:contact@pausepulse.com">contact@pausepulse.com</a>
      </p>
    </main>
  );
}
