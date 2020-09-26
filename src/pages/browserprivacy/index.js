/**
 * 404 page
 */
import React from "react"
import { Link } from "gatsby"

import Logo from "../../images/logo.svg"
import {
  Container,
  HeroContainer,
  HeroName,
  LightButton
} from '../../styles/index.js'
import '../../styles/global.css'

import SEO from "../../components/seo"
import Footer from "../../components/footer"

const BrowserPrivacy = () => (
  <>
    <SEO title="Privacy policies for browser extensions" />

    <Container>
      <HeroContainer>
        <img alt="Bennett Hollstein's Logo" src={ Logo } height={ 50 } />
        <HeroName>Privacy policies for browser extensions</HeroName>
        <p>Please select a browser extension</p>
        <Link to="/browserprivacy/dontbugme" style={{ textDecoration: 'none' }}>
          <LightButton>
            DontBugMe
          </LightButton>
        </Link>
        <Link to="/browserprivacy/dymfg" style={{ textDecoration: 'none' }}>
          <LightButton>
            "Did you mean...?" for GitHub
          </LightButton>
        </Link>
        <Link to="/browserprivacy/skip-silence" style={{ textDecoration: 'none' }}>
          <LightButton>
            Skip Silence
          </LightButton>
        </Link>
      </HeroContainer>

      <Footer />
    </Container>
  </>
)

export default BrowserPrivacy
