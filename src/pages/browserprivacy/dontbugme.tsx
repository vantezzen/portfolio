import React from "react";
import Layout from "../../components/layout/Layout";
import PageCard from "../../components/various/PageCard";
import Helmet from "react-helmet";

function Bangs() {
  return (
    <Layout>
      <PageCard>
        <Helmet>
          <title>Privacy policy</title>
          <meta name="robots" content="noindex nofollow" />
        </Helmet>
        <h1 className="font-bold text-3xl">
          Privacy policy for "Dont Bug Me".
        </h1>
        <blockquote>
          <p>Last updated June 25, 2019</p>
        </blockquote>

        <h2 id="asmallletterfromthecreatorsofdontbugme">
          A small letter from the creators of DontBugMe
        </h2>

        <p>
          DontBugMe was created to improve your privacy online - not limit it.
          This is why we dispense with using analytics in our extension and do
          not sell your personal data to anyone.
        </p>

        <p>
          We do however need to send your current website to BugMeNot to get
          credentials availible for this domain. As we do still want you to have
          the greatest privacy possible, we only send the TLD of your current
          website, e.g. <code>"example.com"</code> instead of{" "}
          <code>"example.com/profiles/John.Doe"</code>.
        </p>

        <h2 id="introducingtheprivacypolicy">Introducing the Privacy Policy</h2>

        <p>
          This privacy policy ("Privacy Policy") explains how DontBugMe
          ("DontBugMe", "browser extension" or "we") collects and uses
          information from users of the browser extension.
        </p>

        <p>
          This Privacy Policy sets out the basis on which we will process
          information we collect from you, or that you provide to us, in
          connection with your use of the DontBugMe extension, regardless of how
          you access or use them. Please read this Privacy Policy carefully so
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

        <h2 id="aboutus">About us</h2>

        <p>
          The party responsible for DontBugMe (the "controller") for purposes of
          data protection law is:
        </p>

        <pre>
          <code>Bennett Hollstein Burgweg 8 79112 Freiburg Germany</code>
        </pre>

        <h2 id="informationourbrowserextensioncollects">
          Information our browser extension collects
        </h2>

        <p>
          Our browser extension collects your current TLD ("Top-Level-Domain",
          e.g. "example.com") when you
        </p>

        <ul>
          <li>
            open the browser popup, e.g. by clicking on the "DontBugMe" icon in
            your browser toolbar
          </li>

          <li>
            enable "Automatically check for availible accounts and show badge".
            In this case, DontBugMe will collect your current TLD every time you
            open a new website or switch browser tabs or windows.
          </li>
        </ul>

        <p>
          Your data processed when using our extension will be deleted or
          blocked as soon as the purpose for its storage ceases to apply,
          provided the deletion of the same is not in breach of any statutory
          storage obligations or unless otherwise stipulated below.
        </p>

        <h2 id="informationwedonotcollect">Information we do not collect</h2>

        <p>
          We only collect the TLD of your current tab or window. This means we
          do not collect any data on e.g. your search history, your emails, your
          credit card information or other information about your browser.
        </p>

        <h2 id="howwestoreyourinformation">How we store your information</h2>

        <p>
          We do not store the information our browser extension collects in any
          way ourselves.
        </p>

        <h2 id="howweshareyourinformationwiththirdparties">
          How we share your information with third parties
        </h2>

        <p>
          Our browser extension will share your current TLD with{" "}
          <code>BugMeNot.com</code> in order to get a list of availible
          accounts. In order for this to happen, your browser will send a
          request to <code>http://bugmenot.com/view/[TLD]</code>, replacing{" "}
          <code>[TLD]</code> with your current TLD, e.g.{" "}
          <code>example.com</code>.
        </p>

        <p>
          DontBugMe will share your TLD with <code>BugMeNot.com</code> in the
          following events:
        </p>

        <ul>
          <li>
            You open the browser popup, e.g. by clicking on the "DontBugMe" icon
            in your browser toolbar
          </li>

          <li>
            You enable "Automatically check for availible accounts and show
            badge". In this case, DontBugMe will send your current TLD to{" "}
            <code>BugMeNot.com</code> when you open a new website or switch
            browser tabs or windows. The extension will then cache the result it
            got back from <code>BugMeNot.com</code> for a limited time in order
            to not send a new request everytime you open the same TLD.
          </li>
        </ul>

        <p>
          For more information on how <code>BugMeNot.com</code> will process
          your data, please visit{" "}
          <a href="http://bugmenot.com/terms.php">its terms of service</a>.
        </p>

        <h2 id="children">Children</h2>

        <p>
          We created DontBugMe for the exclusive use of adults aged 18 and
          older. We do not knowingly collect or solicit personally identifiable
          information from children under the age of 18; if you are a child
          under 18, please do not attempt to use DontBugMe or send any personal
          information about yourself to us. As we do not collect any information
          about our users, you will not need to contact us about the removal of
          any of your data.
        </p>

        <h2 id="changes">Changes</h2>

        <p>
          We will continue to update our policies and practices as needed. As
          such, our Privacy Policy will be updated from time to time. We will
          notify you of any changes to our Privacy Policy by posting any changes
          here.
        </p>

        <h2 id="contact">Contact</h2>

        <p>
          If you have any questions about our privacy policies and practice,
          please contact us at privacy@vantezzen.io
        </p>
      </PageCard>
    </Layout>
  );
}

export default Bangs;
