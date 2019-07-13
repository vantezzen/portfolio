/**
 * Minimalpedia project page
 */
import React from "react"
import { Link } from "gatsby"

import {
  ChevronLeft
} from 'react-feather'

import SEO from "../components/seo"
import Footer from "../components/footer"
import Image from '../components/image'

import {
  Container,
  LinkBack,
  TwoOneGrid,
  OneTwoGrid,
  EqualGrid,
  ProjectDescription,
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
      <LinkBack>
        <Link to="/">
          <ChevronLeft width="30" height="30" />
        </Link>
      </LinkBack>

      <h1>minimalpedia reimagines the design and user experience of wikipedia.</h1>

      <TwoOneGrid>
        <ProjectDescription>
        minimalpedia is an alternative, minimalistic frontend for wikipedia.<br />
        Its design is based on Dmitriy Kozhevnikov's Wikipedia Imagination and uses ReactJS and the wikipedia API to transform wikipedia into a single-page webapp.
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
