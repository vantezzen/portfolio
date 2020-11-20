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

const ferdi = () => {
  return (
    <>
      <SEO title="Ferdi" />
  
      <Container>
        <BackBtn />
  
        <ProductTitle>All messaging services in one place.</ProductTitle>
  
        <TwoOneGrid>
          <ProjectDescription>
            <ProjectParagraph>
              Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application.<br />
            </ProjectParagraph>
            <ProjectParagraph>
              It is based on <a href="https://meetfranz.com">Franz</a> - a software already used by thousands of people. 
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
              Why Ferdi?
            </ProjectHeading>
            Ferdi is based on Chromium and thus simply displays your service's webapps.<br />
            In contrast to traditional browsers though, Ferdi brings many features focused on improving your workflow in working with messaging services.<br />
            Some of these features include sorting services into different workspaces, global Do-Not-Disturb mode and a Quick-Switch to quickly change between services.
          </ProjectDescription>
  
          <ProjectImage>
            <Image src="screenshots/ferdi.png" alt="Ferdi with todos drawer opened" />
          </ProjectImage>
        </OneTwoGrid>
  
        <TwoOneGrid>
          <ProjectImage>
            <Image src="screenshots/ferdi_1.png" alt="Ferdi's GitHub page opened on mutliple tablets" />
          </ProjectImage>
          
          <ProjectDescription>
            <ProjectHeading>
              Open source with a growing community
            </ProjectHeading>
            Ferdi is the biggest open-source project I've worked on so far.<br />
            We are currently approaching 2.000 stars on GitHub and have collected nearly 750k downloads on our latest release.
          </ProjectDescription>
        </TwoOneGrid>
  
        <div>
          <h2>What I've learned</h2>
          <p>
            Ferdi is my first project using ElectronJS and mobX. As ElectronJS is a very performance-inefficient framework in itself, I learned how to optimize our React application in order to bring down its resource-comsumption.<br />
            Besides these technical lessons learned, I also learned a lot about managing and maintaining larger open-source projects. We have now passed 1.000 issues and 300 pull requests on GitHub, which required me to learn more about the moderation and management of projects like these.
          </p>
        </div>
  
        


        <EqualGrid>
          <a href="https://getferdi.com/" rel="noopener" style={{ textDecoration: 'none' }}>
            <LightButton>
              Go to Ferdi's website
            </LightButton>
          </a>
          <a href="https://github.com/getferdi/ferdi" rel="noopener" style={{ textDecoration: 'none' }}>
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

export default ferdi
