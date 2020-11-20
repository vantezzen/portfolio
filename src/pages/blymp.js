/**
 * Cauldron.js project page
 */
import React, { useEffect } from "react"

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
  ProjectHeading,
  ProductTitle,
  EqualGrid
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'

const blymp = () => {
  return (
    <>
      <SEO title="blymp" />
  
      <Container>
        <BackBtn />
  
        <ProductTitle>Easily transfer files between devices.</ProductTitle>
  
        <TwoOneGrid>
          <ProjectDescription>
            <ProjectParagraph>
              I always enjoyed the ease-of-use of Apple&trade;'s AirDrop®, however, most of the time, I am not transferring files between Apple devices.
            </ProjectParagraph>
            <ProjectParagraph>
              That was my motivation to create blymp.<br />
              blymp is a simple website that you can use to directly transfer files between devices using a simple 4-digit code.
            </ProjectParagraph>
          </ProjectDescription>
          <ProjectTechStack>
            <LightFont>
              Tech stack:
            </LightFont>
            ReactJS, WebSockets, WebRTC, JavaScript File API
          </ProjectTechStack>
        </TwoOneGrid>
  
        <OneTwoGrid>
          <ProjectDescription>
            <ProjectHeading>
              Fast transfer speeds
            </ProjectHeading>
            blymp tries to use the fastest transfer speeds possible.<br />
            In order to do this, blymp tries to establish a Peer-to-Peer connection using WebRTC with which files can be transferred without the need of a server.<br />
            If that is however not possible, blymp will use WebSockets to transfer the file using the blymp server.
          </ProjectDescription>
  
          <ProjectImage>
            <Image src="screenshots/blymp_1.png" alt="blymp opened on a phone and tablet" />
          </ProjectImage>
        </OneTwoGrid>
  
        <TwoOneGrid>
          <ProjectImage>
            <Image src="screenshots/blymp_2.png" alt="blymp transferring file" />
          </ProjectImage>
          
          <ProjectDescription>
            <ProjectHeading>
              Transfer using packages
            </ProjectHeading>
            When transferring files using other upload services, you'll first need to upload your complete file before you can download it on the other device.<br />
            blymp instead breaks the file into small packages and directly transfers them to the recepient - resulting in higher transfer speeds. 
          </ProjectDescription>
        </TwoOneGrid>
  
        <div>
          <h2>What I've learned</h2>
          <p>
            blymp is my first project, in which I used a Peer-to-Peer connection to connect devices and in which I used the JavaScript FileReader API to slowly read files in chunks.<br />
            It was very interesting to develop this webapp in a way that doesn't rely on a central server when transferring files using WebRTC but instead directly establishing a protocol between individual users.
          </p>
        </div>
  
        <EqualGrid>
          <a href="https://blymp.io/" rel="noopener" style={{ textDecoration: 'none' }}>
            <LightButton>
              Open blymp
            </LightButton>
          </a>
          <a href="https://github.com/vantezzen/blymp-io" rel="noopener" style={{ textDecoration: 'none' }}>
            <LightButton>
              View source on GitHub
            </LightButton>
          </a>
        </EqualGrid>

        <p>
          Apple and AirDrop are trademarks of Apple Inc., registered in the U.S. and other countries. blymp is not associated with Apple or Apple's AirDrop service.
        </p>
  
        <Footer />
      </Container>
    </>
  );
}

export default blymp
