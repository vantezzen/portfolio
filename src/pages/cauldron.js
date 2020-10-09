/**
 * Cauldron.js project page
 */
import React from "react"

import SEO from "../components/seo"
import Footer from "../components/footer"
import BackBtn from '../components/back-btn'

import {
  Container,
  TwoOneGrid,
  ProjectDescription,
  ProjectParagraph,
  ProjectTechStack,
  LightFont,
  DirectProjectImage,
  ProductTitle
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'

import image from '../images/screenshots/cauldron_1.png';

const Cauldron = () => (
  <>
    <SEO title="Cauldron.js" />

    <Container>
      <BackBtn />

      <ProductTitle>Running a Minecraft Server in your browser.</ProductTitle>

      <TwoOneGrid>
        <ProjectDescription>
          <ProjectParagraph>
            Traditionally a Minecraft Server is a Java application, being run inside the terminal. Due to this, opening a server to play with friends can be compicated or expensice for new users.<br />
          </ProjectParagraph>
          <ProjectParagraph>
            Cauldron.js instead moves all computing and disk space intensive work into the browser, while keeping all communication with the Minecraft clients on a centralised server.<br />
          </ProjectParagraph>
          <ProjectParagraph>
            This allows possibly hundreds of Minecraft Servers to be run on a single, inexpensive server while players can simply open a webpage to start a Minecraft server.
          </ProjectParagraph>
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          JavaScript, socket.io, ExpressJS, Minecraft-protocol
        </ProjectTechStack>
      </TwoOneGrid>

      {/* <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Run a server on any device
          </ProjectHeading>
          As Cauldron.js is a normal website, it can be run on almost any device.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/cauldron_1.png" alt="cauldron: website running on different devices" />
        </ProjectImage>
      </OneTwoGrid> */}

      <DirectProjectImage src={image} alt="Homepage of minimalpedia" />

      {/* <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/cauldron_2.png" alt="cauldron: server starting page" />
        </ProjectImage>
        
        <ProjectDescription>
          <ProjectHeading>
            Start a server in seconds
          </ProjectHeading>
          After opening Cauldron.js, a new Minecraft Server will be ready in seconds.
        </ProjectDescription>
      </TwoOneGrid> */}

      <div>
        <h2>What I've learned</h2>
        <p>
          Cauldron.js is project that intensively uses modern JavaScript features like IndexedDB and websockets.<br />
          Besides learning those technologies, I also learned about optimizing the server-client connection in order to make the Minecraft server perform as best as possible.
        </p>
      </div>

      <a href="https://github.com/vantezzen/cauldron-js" rel="noopener" style={{ textDecoration: 'none' }}>
        <LightButton>
          View on GitHub
        </LightButton>
      </a>
      <Footer />
    </Container>
  </>
)

export default Cauldron
