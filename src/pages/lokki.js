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

const lokkiCloud = () => (
  <>
    <SEO title="lokki.cloud" />

    <Container>
      <LinkBack>
        <Link to="/">
          <ChevronLeft width="30" height="30" />
        </Link>
      </LinkBack>

      <h1>Easily transfer files between any device.</h1>

      <TwoOneGrid>
        <ProjectDescription>
            lokki.cloud aims to be the simplest and fastest method when transferring files between devices.<br />
            It uses a direct WebRTC connection to allow fast transfer speeds. Should one of the devices not support WebRTC or should the connection fail, lokki.cloud will fallback to file transfer over WebSockets, allowing for better compatability.
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          WebRTC, socket.io, Blobs, ExpressJS
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Simple design
          </ProjectHeading>
          lokki.cloud's simple design guides you through the steps needed to transfer your files.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/lokki_1.png" alt="lokki.cloud: homepage" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/lokki_2.png" alt="lokki.cloud: project on ProductHunt" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            150+ upvotes on ProductHunt
          </ProjectHeading>
          lokki.cloud gained over 150 upvotes on ProductHunt during its launch week.<br />
          Today, lokki.cloud is used by up to 400 users every day.
        </ProjectDescription>
      </TwoOneGrid>

      <a href="https://lokki.cloud/" rel="noopener" style={{ textDecoration: 'none' }}>
        <LightButton>
          Open lokki.cloud
        </LightButton>
      </a>

      <Footer />
    </Container>
  </>
)

export default lokkiCloud
