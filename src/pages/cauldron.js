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

const Cauldron = () => (
  <>
    <SEO title="Cauldron.js" />

    <Container>
      <LinkBack>
        <Link to="/">
          <ChevronLeft width="30" height="30" />
        </Link>
      </LinkBack>

      <h1>Running a Minecraft Server in your browser.</h1>

      <TwoOneGrid>
        <ProjectDescription>
            Traditionally, a Minecraft Server is a Java application, being run inside the terminal. The server owner has to open ports on their networks to allow others to join.<br />
            Cauldron.js moves all computing and disk space intensive work into the browser, while keeping all communication with the Minecraft clients on a centralised server.<br />
            This allows possibly hundreds of Minecraft Servers to be run on a single networking server.
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          JavaScript, socket.io, ExpressJS, minecraft-protocol
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Run a server on any device
          </ProjectHeading>
          As Cauldron.js is a normal website, it can be run on almost any device.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/cauldron_1.png" alt="cauldron: website running on different devices" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/cauldron_2.png" alt="cauldron: server starting page" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            Start a server in seconds
          </ProjectHeading>
          After opening Cauldron.js, a new Minecraft Server will be ready in seconds.
        </ProjectDescription>
      </TwoOneGrid>

      <EqualGrid>
        <a href="https://cauldron.vantezzen.io/" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            Open demo
          </LightButton>
        </a>
        <a href="https://github.com/vantezzen/cauldron-js" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            View source on GitHub
          </LightButton>
        </a>
      </EqualGrid>

      <Footer />
    </Container>
  </>
)

export default Cauldron
