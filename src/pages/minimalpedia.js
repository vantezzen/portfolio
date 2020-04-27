/**
 * Minimalpedia project page
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

import ImageTwo from '../images/screenshots/minimalpedia_2.png'

const Minimalpedia = () => (
  <>
    <SEO title="minimalpedia" />

    <Container>
      <BackBtn />

      <h1>minimalpedia reimagines the design and user experience of wikipedia.</h1>

      <TwoOneGrid>
        <ProjectDescription>
          <ProjectParagraph>
            minimalpedia is an alternative, minimalistic frontend for wikipedia.<br />
          </ProjectParagraph>
          <ProjectParagraph>
            Its design is based on <span lang="ru">Dmitriy Kozhevnikov</span>'s Wikipedia Imagination and uses ReactJS and the wikipedia API to transform wikipedia into a single-page webapp.
          </ProjectParagraph>
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          ReactJS, tailwindcss, wikijs
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Instant results
          </ProjectHeading>
          minimapedia directly queries the wikipedia API to get relevant articles as you type.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/minimalpedia_1.png" alt="minimalpedia: demo of instant search" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/minimalpedia_3.png" alt="minimalpedia: demo of dark mode" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            Dark mode
          </ProjectHeading>
          Experience the dark side of minimalpedia by clicking the moon in the bottom left corner.
        </ProjectDescription>
      </TwoOneGrid>

      <DirectProjectImage src={ ImageTwo } alt="Homepage of minimalpedia" />

      <EqualGrid>
        <a href="https://minimalpedia.vantezzen.io/" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            Open minimalpedia
          </LightButton>
        </a>
        <a href="https://github.com/vantezzen/minimalpedia" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            View source on GitHub
          </LightButton>
        </a>
      </EqualGrid>

      <Footer />
    </Container>
  </>
)

export default Minimalpedia
