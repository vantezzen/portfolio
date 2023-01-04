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
          Privacy policy for "Bangs for Google".
        </h1>
        <blockquote>
          <p>Last updated November 3, 2020</p>
        </blockquote>

        <h2 id="asmallletterfromthecreators">
          A small letter from the creators of the extension
        </h2>

        <p>
          "Bangs for Google" was created to help you use Google - not limit your
          privacy. This is why we dispense with using analytics in our extension
          and do not sell your personal data to anyone.
        </p>

        <p>
          We never store any of your search queries or other browsing data but
          simply redirect your to DuckDuckGo whenever your query start with a
          "!".
        </p>

        <h2 id="introducingtheprivacypolicy">Introducing the Privacy Policy</h2>

        <p>
          This privacy policy ("Privacy Policy") explains how "Bangs for Google"
          ("extension", "browser extension" or "we") collects and uses
          information from users of the browser extension.
        </p>

        <p>
          This Privacy Policy sets out the basis on which we will process
          information we collect from you, or that you provide to us, in
          connection with your use of the extension, regardless of how you
          access or use them. Please read this Privacy Policy carefully so that
          you understand your rights in relation to how we use and process
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
          The party responsible for this extension (the "controller") for
          purposes of data protection law is:
        </p>

        <pre>
          <code>Bennett Hollstein Reinbeckstr. 4 12459 Berlin Germany</code>
        </pre>

        <h2 id="informationourbrowserextensioncollects">
          Information our browser extension collects
        </h2>

        <p>
          Our browser extension uses your search query whenever you visit
          Google. This data will not be sent to any of our servers. Instead, we
          locally check, if the query starts with a "!" and redirect you to
          DuckDuckGo if that is the case.
        </p>

        <p>
          Your data processed when using our extension will be deleted or
          blocked as soon as the purpose for its storage ceases to apply,
          provided the deletion of the same is not in breach of any statutory
          storage obligations or unless otherwise stipulated below.
        </p>

        <h2 id="informationwedonotcollect">Information we do not collect</h2>

        <p>
          We only collect the query locally. This means we do not collect any
          data on e.g. your search history, your emails, your credit card
          information or other information about your browser.
        </p>

        <h2 id="howwestoreyourinformation">How we store your information</h2>

        <p>
          We do not store the information our browser extension collects in any
          way ourselves.
        </p>

        <h2 id="children">Children</h2>

        <p>
          We created the extension for the exclusive use of adults aged 18 and
          older. We do not knowingly collect or solicit personally identifiable
          information from children under the age of 18; if you are a child
          under 18, please do not attempt to use this extension or send any
          personal information about yourself to us. As we do not collect any
          information about our users, you will not need to contact us about the
          removal of any of your data.
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
