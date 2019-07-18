/**
 * Imprint page
 */
import React from "react"
import { Link } from "gatsby"

import {
  ChevronLeft
} from 'react-feather'

import SEO from "../../components/seo"
import Footer from "../../components/footer"

import {
  Container,
  LinkBack,
  ProjectDescription,
} from '../../styles/product'
import '../../styles/global.css'

const Impressum = () => (
  <>
    <SEO title="Did you mean...? for GitHub - Privacy policy" />

    <Container>
      <LinkBack>
        <Link to="/browserprivacy">
          <ChevronLeft width="30" height="30" />
        </Link>
      </LinkBack>

      <h1>Privacy policy for "Did you mean...? for GitHub".</h1>

      <ProjectDescription>
      <blockquote>
        <p>Last updated June 25, 2019</p>
      </blockquote>

      <h2 id="asmallletterfromthecreators">A small letter from the creators of the extension</h2>

      <p>"Did you mean...? For GitHub" was created to help you browser GitHub - not limit your privacy. This is why we dispense with using analytics in our extension and do not sell your personal data to anyone.</p>

      <p>We do however send a list of possible corrections to GitHub to improve your experience. As we do still want you to have the greatest privacy possible, you can prevent this by not giving this extension a GitHub API token.</p>

      <h2 id="introducingtheprivacypolicy">Introducing the Privacy Policy</h2>

      <p>This privacy policy ("Privacy Policy") explains how "Did you mean...? For GitHub" ("extension", "browser extension" or "we") collects and uses information from users of the browser extension.</p>

      <p>This Privacy Policy sets out the basis on which we will process information we collect from you, or that you provide to us, in connection with your use of the extension, regardless of how you access or use them. Please read this Privacy Policy carefully so that you understand your rights in relation to how we use and process information that you share and that we collect.</p>

      <p>The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to provide our service which will result in said third parties also processing data they collect and control.</p>

      <h2 id="aboutus">About us</h2>

      <p>The party responsible for this extension (the "controller") for purposes of data protection law is:</p>

      <pre><code>Bennett Hollstein
      Burgweg 8
      79112 Freiburg
      Germany
      </code></pre>

      <h2 id="informationourbrowserextensioncollects">Information our browser extension collects</h2>

      <p>Our browser extension collects the name and author of the currently open repository when you encounter a GitHub 404 page.</p>

      <p>Your data processed when using our extension will be deleted or blocked as soon as the purpose for its storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless otherwise stipulated below.</p>

      <h2 id="informationwedonotcollect">Information we do not collect</h2>

      <p>We only collect the name and author of the repository open in your current tab or window. This means we do not collect any data on e.g. your search history, your emails, your credit card information or other information about your browser.</p>

      <h2 id="howwestoreyourinformation">How we store your information</h2>

      <p>We do not store the information our browser extension collects in any way ourselves.</p>

      <h2 id="howweshareyourinformationwiththirdparties">How we share your information with third parties</h2>

      <p>Our browser extension will share its collected information with the GitHub GraphQL API in order to see if a possible name correction is actually exitent and to get more details on corrections. 
        In order for this to happen, your browser will send a request to <code>https://api.github.com/graphql</code> with a list of 50 possible corrections the extension found.</p>

      <p>The extension will call the GitHub GraphQL API as soon as you encounter a 404 error on GitHub.</p>

      <p>You can prevent the extension from sending a request to GitHub by not providing a GitHub API token. In this case, the extension will not send data to third parties.</p>

      <p>For more information on how <code>GitHub.com</code> will process your data, please visit <a href="https://help.github.com/en/articles/github-privacy-statement">its privacy policy</a>.</p>

      <h2 id="children">Children</h2>

      <p>We created the extension for the exclusive use of adults aged 18 and older. We do not knowingly collect or solicit personally identifiable information from children under the age of 18; if you are a child under 18, please do not attempt to use this extension or send any personal information about yourself to us. As we do not collect any information about our users, you will not need to contact us about the removal of any of your data.</p>

      <h2 id="changes">Changes</h2>

      <p>We will continue to update our policies and practices as needed. As such, our Privacy Policy will be updated from time to time. We will notify you of any changes to our Privacy Policy by posting any changes here.</p>

      <h2 id="contact">Contact</h2>

      <p>If you have any questions about our privacy policies and practice, please contact us at privacy@vantezzen.io</p>

      </ProjectDescription>

      <Footer />
    </Container>
  </>
)

export default Impressum
