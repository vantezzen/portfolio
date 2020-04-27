/**
 * vowserDB project page
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
  ProjectHeading
} from '../styles/product'
import {
  LightButton
} from '../styles/index'
import '../styles/global.css'


const VowserDB = () => (
  <>
    <SEO title="vowserDB" />

    <Container>
      <BackBtn />

      <h1>A minimal database for host-it-yourself projects.</h1>

      <TwoOneGrid>
        <ProjectDescription>
          <ProjectParagraph>
            vowserDB is a database designed to be used in smaller host-it-yourself projects.
          </ProjectParagraph>
          <ProjectParagraph>
            It requires minimal setup and doesn't need a background service - eliminating the need to host a separate database server, e.g. MySQL.
          </ProjectParagraph>
          <ProjectParagraph>
            Tables created with vowserDB are compatible with other database software as they are stored in CSV or JSON files.
          </ProjectParagraph>
        </ProjectDescription>
        <ProjectTechStack>
          <LightFont>
            Tech stack:
          </LightFont>
          PHP, composer
        </ProjectTechStack>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
            Simple setup
          </ProjectHeading>
          No need to setup you database seperately: 
          To use a table, simply create a new <code>vowserDB\Table</code> instance with the name and columns of your table.
          If the table already exists, vowserDB will use it, otherwise create it.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/vowserDB_1.png" alt="vowserDB: Code of table creation" />
        </ProjectImage>
      </OneTwoGrid>

      <TwoOneGrid>
        <ProjectImage>
          <Image src="screenshots/vowserDB_2.png" alt="vowserDB: Code of selecting and updating data in a table" />
        </ProjectImage>

        <ProjectDescription>
          <ProjectHeading>
            Intuitive commands
          </ProjectHeading>
          Inspired by Laravel Eloquent and SQL, vowserDB is intuitive to use for anyone who has worked with SQL databases before.
        </ProjectDescription>
      </TwoOneGrid>

      <OneTwoGrid>
        <ProjectDescription>
          <ProjectHeading>
           Extendable
          </ProjectHeading>
          vowserDB has support for third-party extensions, allowing anyone to extend vowserDB or change its behaviour.<br />
          It also ships with useful extensions for encrypting tables, creating relationships and saving sessions.
        </ProjectDescription>

        <ProjectImage>
          <Image src="screenshots/vowserDB_3.png" alt="vowserDB: Code for usage of extensions" />
        </ProjectImage>
      </OneTwoGrid>

      <EqualGrid>
        <a href="https://vantezzen.github.io/vowserdb/#/" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            Open documentation
          </LightButton>
        </a>
        <a href="https://github.com/vantezzen/vowserDB" rel="noopener" style={{ textDecoration: 'none' }}>
          <LightButton>
            View source on GitHub
          </LightButton>
        </a>
      </EqualGrid>

      <Footer />
    </Container>
  </>
)

export default VowserDB
