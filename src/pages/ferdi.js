/**
 * Cauldron.js project page
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

const ferdi = () => (
  <>
    <SEO title="Ferdi" />

    <Container>
      <LinkBack>
        <Link to="/">
          <ChevronLeft width="30" height="30" />
        </Link>
      </LinkBack>

      <h1>All your messages in one place.</h1>

      <TwoOneGrid>
        <ProjectDescription>
          Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application.<br />
          It is based on Franz - a software already used by thousands of people - but with many added features. 
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
            20.000+ downloads on the latest release alone
          </ProjectHeading>
          Ferdi already receives over 20.000 downloads on every new release - just 6 months after its first release.
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
