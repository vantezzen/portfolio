import { LegalPage, legalMetadata } from "@/components/legal/legal-page";

export const metadata = legalMetadata("Privacy policy for Skip Silence");

export default function SkipSilencePrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy for Skip Silence"
      updated="September 26, 2020"
    >
      <h2>A small letter from the creators of Skip Silence</h2>
      <p>
        Skip Silence was created in a way that protects your privacy. This is
        why we dispense with using analytics in our extension and do not sell
        your personal data to anyone.
      </p>
      <p>Skip Silence doesn’t send any data about you or your videos to us.</p>

      <h2>Introducing the Privacy Policy</h2>
      <p>
        This privacy policy (“Privacy Policy”) explains how Skip Silence (“Skip
        Silence”, “browser extension” or “we”) collects and uses information
        from users of the browser extension.
      </p>
      <p>
        This Privacy Policy sets out the basis on which we will process
        information we collect from you, or that you provide to us, in
        connection with your use of the Skip Silence extension, regardless of
        how you access or use them. Please read this Privacy Policy carefully so
        that you understand your rights in relation to how we use and process
        information that you share and that we collect.
      </p>
      <p>
        The following privacy policy is intended to inform you in particular
        about the type, scope, purpose, duration, and legal basis for the
        processing of such data either under our own control or in conjunction
        with others. We also inform you below about the third-party components
        we use to provide our service which will result in said third parties
        also processing data they collect and control.
      </p>

      <h2>About us</h2>
      <p>
        The party responsible for Skip Silence (the “controller”) for purposes
        of data protection law is:
      </p>
      <address>
        Bennett Hollstein
        <br />
        Reinbeckstr. 4
        <br />
        12459 Berlin
        <br />
        Germany
      </address>

      <h2>Information our browser extension collects</h2>
      <p>
        Our browser extension “hooks” into your current media feed when you
        activate the switch in the extension’s popup.
      </p>
      <p>
        The extension will then monitor the volume of the media to speed it up
        or slow it down. The information about your media is never sent anywhere
        and is only kept on your computer.
      </p>
      <p>
        Additionally, our browser extension saves the settings you set using{" "}
        <a
          href="https://developer.chrome.com/apps/storage"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chrome’s extension storage system
        </a>
        . Your settings will be synchronised across all your devices using
        Chrome’s built-in setting synchronisation.
      </p>
      <p>
        Your data processed when using our extension will be deleted or blocked
        as soon as the purpose for its storage ceases to apply, provided the
        deletion of the same is not in breach of any statutory storage
        obligations or unless otherwise stipulated below.
      </p>

      <h2>
        Information we do <strong>not</strong> collect
      </h2>
      <p>
        We do not collect any information about what media you watch or how you
        use our extension. Your data remains with you and we never have access.
      </p>

      <h2>How we store your information</h2>
      <p>
        We do not store the information our browser extension collects in any
        way ourselves.
      </p>

      <h2>Children</h2>
      <p>
        We created Skip Silence for the exclusive use of adults aged 18 and
        older. We do not knowingly collect or solicit personally identifiable
        information from children under the age of 18; if you are a child under
        18, please do not attempt to use Skip Silence or send any personal
        information about yourself to us. As we do not collect any information
        about our users, you will not need to contact us about the removal of
        any of your data.
      </p>

      <h2>Changes</h2>
      <p>
        We will continue to update our policies and practices as needed. As
        such, our Privacy Policy will be updated from time to time. We will
        notify you of any changes to our Privacy Policy by posting any changes
        here.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about our privacy policies and practice,
        please contact us at{" "}
        <a href="mailto:privacy@vantezzen.io">privacy@vantezzen.io</a>.
      </p>
    </LegalPage>
  );
}
