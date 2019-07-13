/**
 * 404 page
 */
import React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo.svg"
import {
  Container,
  HeroContainer,
  HeroName,
  LightButton
} from '../styles/index.js'

import SEO from "../components/seo"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <>
    <SEO title="Home" />

    <Container>
      <HeroContainer>
        <img alt="Bennett Hollstein's Logo" src={ Logo } height={ 50 } />
        <HeroName>404 - page not found</HeroName>
        <p>We could not find the page you are looking for</p>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <LightButton>
            Back to home
          </LightButton>
        </Link>
      </HeroContainer>

      <Footer />
    </Container>
  </>
)

export default NotFoundPage
