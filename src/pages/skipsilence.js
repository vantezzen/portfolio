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
  ProjectHeading,
  ProductTitle,
  EqualGrid
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'

const skipsilence = () => {
  return (
    <>
      <SEO title="Skip Silence" />
  
      <Container>
        <BackBtn />
  
        <ProductTitle>Skip the boring parts of videos.</ProductTitle>
  
        <TwoOneGrid>
          <ProjectDescription>
            <ProjectParagraph>
              During this pandemic, I have to watch hours of video lectures that my professors recorded.
              While some of these lectures can have a very good pace, a lot of these videos are also very slow and the lecturers can take very long to write something down.
            </ProjectParagraph>
            <ProjectParagraph>
              Due to these hours of watching slow lectures, I remembered <a href="https://www.youtube.com/watch?v=DQ8orIurGxw">YouTube video from CaryKH</a>, in which he created a software to speed up silent parts of lectures using a python script.
            </ProjectParagraph>
            <ProjectParagraph>
              While this script worked great, I didn't want to need to download all lectures before I can run them through the script - getting rid of any of the saved time.
            </ProjectParagraph>
            <ProjectParagraph>
              This is why I started to develop a WebExtension that does the same thing
            </ProjectParagraph>
          </ProjectDescription>
          <ProjectTechStack>
            <LightFont>
              Tech stack:
            </LightFont>
            ReactJS, TypeScript, JavaScript Media API, WebExtension
          </ProjectTechStack>
        </TwoOneGrid>
  
        <OneTwoGrid>
          <ProjectDescription>
            <ProjectHeading>
              How does it work?
            </ProjectHeading>
            "Skip Silence" attaches a Media Volume listener to the current <code>&lt;video&gt;</code> or <code>&lt;audio&gt;</code> element.<br />
            It then uses this information to dynamically speed up or slow down the media, based on the settings set in the popup.
          </ProjectDescription>
  
          <ProjectImage>
            <Image src="screenshots/skipsilence_1.png" alt="Skip silence popup open on top of a video lecture" />
          </ProjectImage>
        </OneTwoGrid>

        <iframe 
          src="https://www.youtube-nocookie.com/embed/os9ybhmoGcE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{
            width: '100%',
            height: 'calc(80vw / (16 / 9))'
          }}
          title="Demo video"
        />
  
        <div>
          <h2>What I've learned</h2>
          <p>
            Due this extension, I learned about the JavaScript Media APIs and what it possible with the Media Nodes available.<br />
            This is also my first project, in which I used the benefits of TypeScript. I already used it before on smaller parts of other project, but this is the first project that uses TypeScript thoughout its components.
          </p>
        </div>

  

        <EqualGrid>
          <a href="https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh" rel="noopener" style={{ textDecoration: 'none' }}>
            <LightButton>
              Download from the Chrome webstore
            </LightButton>
          </a>
          <a href="https://github.com/vantezzen/skip-silence" rel="noopener" style={{ textDecoration: 'none' }}>
            <LightButton>
              View source on GitHub
            </LightButton>
          </a>
        </EqualGrid>
  
        <Footer />
      </Container>
    </>
  );
}

export default skipsilence
