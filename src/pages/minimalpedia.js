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
  ProjectHeading,
  ProductTitle
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

      <ProductTitle>minimalpedia reimagines the design and user experience of wikipedia.</ProductTitle>

      <TwoOneGrid>
        <ProjectDescription>
          <ProjectParagraph>
            minimalpedia is an alternative, minimalistic, SPA frontend for wikipedia.<br />
          </ProjectParagraph>
          <ProjectParagraph>
            Its design is based on <a href="https://www.behance.net/gallery/75870375/Wikipedia-Imagination">a Wikipedia redesign I saw on Behance</a> and it uses ReactJS and the wikipedia API to transform wikipedia into a single-page website.
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
            Fast responds and actions
          </ProjectHeading>
          minimapedia is build with React and the wikipedia API. Using these technologies, the webapp can provide very fast feedback to actions searching or clicking on articles without the need to reload any part of the page.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/minimalpedia_1.png" alt="minimalpedia: demo of instant search" />
        </ProjectImage>
      </OneTwoGrid>

      {/* <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/minimalpedia_3.png" alt="minimalpedia: demo of dark mode" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            Dark mode
          </ProjectHeading>
          Experience the dark side of minimalpedia by clicking the moon in the bottom left corner.
        </ProjectDescription>
      </TwoOneGrid> */}

      <DirectProjectImage src={ ImageTwo } alt="Homepage of minimalpedia" />

      <div>
        <h2>What I've learned</h2>
        <p>
          With minimalpedia I first learned to implement the application's API interaction in a way that provides the fastest response to user actions.<br />
          For instance, if you search for articles, minimalpedia will first query wikipedia for the most necessary information like titles to provide fast results. Only after that, minimalpedia will start loading details like article previews and images.<br />
          minimalpedia is also my first project, where the design is based on an existing mockup. Due to this, I learned a lot about how to transfer the mockups ideas onto the real product.
        </p>
      </div>

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
