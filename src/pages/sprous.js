/**
 * Sprous project page
 */
import React from "react"

import SEO from "../components/seo"
import Footer from "../components/footer"
import Image from '../components/image'
import BackBtn from '../components/back-btn'

import {
  Container,
  TwoOneGrid,
  OneTwoGrid,
  EqualGrid,
  ProjectDescription,
  ProjectParagraph,
  ProjectTechStack,
  LightFont,
  ProjectImage,
  DirectProjectImage,
  ProjectHeading
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'

import ImageThree from '../images/screenshots/sprous_3.png'

const Sprous = () => (
  <>
    <SEO title="🌱 Sprous" />

    <Container>
      <BackBtn />

      <h1>Helping small teams help their customers.</h1>

      <TwoOneGrid>
        <ProjectDescription>
          <ProjectParagraph>
            Sprous is a minimalistic knowledge base, helping customers find answers to their most common questions.
          </ProjectParagraph>
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          GatsbyJS, styled-components, tailwindcss, js-search
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Easy hosting
          </ProjectHeading>
          Sprous is built with GatsbyJS and thus can be compiled into static files, allowing it to be hosted anywhere.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/sprous_1.png" alt="Sprous: Homepage of the help center" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/sprous_2.png" alt="Sprous: Demo of the instant search" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            Instant search
          </ProjectHeading>
          Sprous uses js-search to provide instant search functionality without a backend.
        </ProjectDescription>
      </TwoOneGrid>

      <DirectProjectImage src={ ImageThree } alt="Sprous: Homepage of the help center" />

      <EqualGrid>
        <a href="https://vantezzen.github.io/sprous" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            Open demo
          </LightButton>
        </a>
        <a href="https://github.com/vantezzen/sprous" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            View source on GitHub
          </LightButton>
        </a>
      </EqualGrid>

      <Footer />
    </Container>
  </>
)

export default Sprous
