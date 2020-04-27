/**
 * Cauldron.js project page
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
  ProjectDescription,
  ProjectParagraph,
  ProjectTechStack,
  LightFont,
  ProjectImage,
  ProjectHeading
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'

const ferdi = () => (
  <>
    <SEO title="Ferdi" />

    <Container>
      <BackBtn />

      <h1>All your messages in one place.</h1>

      <TwoOneGrid>
        <ProjectDescription>
          <ProjectParagraph>
            Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application.<br />
          </ProjectParagraph>
          <ProjectParagraph>
            It is based on Franz - a software already used by thousands of people - but with many added features. 
          </ProjectParagraph>
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          ElectronJS, ReactJS, mobx, webpack
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Increase productivity
          </ProjectHeading>
          Ferdi increases your productivity by bringing all your messages and tools into a single application.<br />
          Profit from advanced features like Workspaces and Quick Switch to keep you up-to-date.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/ferdi_2.png" alt="Ferdi with Workspace drawer opened" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/ferdi_1.png" alt="Ferdi with GitHub opened" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            50k+ downloads on the latest release alone
          </ProjectHeading>
          Ferdi already receives over 50k downloads on every new release - just 6 months after its first release.
        </ProjectDescription>
      </TwoOneGrid>

      <a href="https://getferdi.com/" rel="noopener" style={{ textDecoration: 'none' }}>
        <LightButton>
          Learn more
        </LightButton>
      </a>

      <Footer />
    </Container>
  </>
)

export default ferdi
