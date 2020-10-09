/**
 *  Index page
 */
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"

import {
  GitHub,
  Linkedin,
} from 'react-feather'

import {
  Container,
  HeroContainer,
  HeroName,
  ProjectsContainer,
  ProjectsListContainer,
  ProjectContainer,
  ProjectImage,
  ProjectHeading,
  ProjectDescription,
  ProjectTechStack,
  LightButton,
  AboutMeContainer,
  AboutMeLinkContainer,
  AboutMeLink,
  SkillsContainer,
  ContactContainer,
  SubmitButton
} from '../styles/index.js'

import Logo from "../images/logo.svg"

import Image from '../components/image'
import TiltedByMouse from '../components/TiltedByMouse';

import '../styles/global.css'

const age = new Date(new Date() - new Date('2001-01-26')).getFullYear() - 1970;

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Container>
      <HeroContainer>
        <img src={ Logo } alt="Bennett Hollstein's Logo" height={ 50 } aria-hidden />
        <HeroName>
          Hi there, I'm Bennett!<br />
          Student, Web-Developer and working at Smarketer.
        </HeroName>
      </HeroContainer>

      <AboutMeContainer>
        <p>
          Hey there, I am Bennett.
        </p>
        <p>
          I'm a {age}-year-old and currently studying Applied Computer Science at <a href="https://htw-berlin.de">HTW Berlin</a>.
        </p>
        <p>
          Alongside my studies I am working at <a href="https://smarketer.de">Smarketer</a> and develop open-source software on GitHub.
        </p>

        <AboutMeLinkContainer>
          <h3>Connect with me</h3>
          <AboutMeLink href="https://github.com/vantezzen" aria-label="My GitHub profile">
            <GitHub />
          </AboutMeLink>
          <AboutMeLink href="https://www.linkedin.com/in/bennett-h/" aria-label="My LinkedIn profile">
            <Linkedin />
          </AboutMeLink>
        </AboutMeLinkContainer>
      </AboutMeContainer>

      <ProjectsContainer>
        <h2>Recent projects.</h2>

        <ProjectsListContainer>

          <ProjectContainer>
            <TiltedByMouse>
              <ProjectImage>
                <Image src="screenshots/ferdi.png" />
              </ProjectImage>
            </TiltedByMouse>

            <ProjectHeading aria-label="Project name: Ferdi">Ferdi</ProjectHeading>
            <ProjectDescription>Ferdi is a messaging browser that allows you to combine your favorite messaging services into one application</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">ElectronJS, ReactJS</ProjectTechStack>

            <Link to="/ferdi" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          {/* <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/vowserDB_1.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: vowserDB">vowserDB</ProjectHeading>
            <ProjectDescription>A minimal standalone database for host-it-yourself projects.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">PHP, composer</ProjectTechStack>

            <Link to="/vowserdb" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer> */}

          <ProjectContainer>
            <TiltedByMouse>
              <ProjectImage>
                <Image src="screenshots/minimalpedia_1.png" />
              </ProjectImage>
            </TiltedByMouse>

            <ProjectHeading aria-label="Project name: minimalpedia">minimalpedia</ProjectHeading>
            <ProjectDescription>minimalpedia is project focused on reimagening the design and user experience of wikipedia.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">ReactJS, tailwind.css, wiki.js</ProjectTechStack>

            <Link to="/minimalpedia" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          {/* <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/sprous_3.png" />
            </ProjectImage>

            <ProjectHeading aria-label="Project name: Sprous">Sprous</ProjectHeading>
            <ProjectDescription>Helping small teams help their customers.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">GatsbyJS, styled-components, js-search</ProjectTechStack>

            <Link to="/sprous" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer> */}

          <ProjectContainer>
            <TiltedByMouse>
              <ProjectImage>
                <Image src="screenshots/cauldron_1.png" />
              </ProjectImage>
            </TiltedByMouse>

            <ProjectHeading aria-label="Project name: Cauldron.js">Cauldron.js</ProjectHeading>
            <ProjectDescription>Cauldron.js is an experimental project that tries to run a Minecraft server in the browser.</ProjectDescription>
            <ProjectTechStack aria-label="Technologies used">JavaScript, socket.io, ExpressJS</ProjectTechStack>

            <Link to="/cauldron" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>


          <ProjectContainer>
            <TiltedByMouse>
              <ProjectImage>
                <Image src="screenshots/github_1.png" />
              </ProjectImage>
            </TiltedByMouse>

            <ProjectHeading>More projects on GitHub</ProjectHeading>
            <ProjectDescription>You can find all of my open-source projects on GitHub.</ProjectDescription>
            {/* <ProjectTechStack>.</ProjectTechStack> */}

            <a href="https://github.com/vantezzen" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }} aria-label="GitHub profile">
              <LightButton>
                View
              </LightButton>
            </a>
          </ProjectContainer>

        </ProjectsListContainer>
      </ProjectsContainer>

      <SkillsContainer>
        <h2>Technologies I've used.</h2>

        <ul className="skills">
						<li>JavaScript</li>
						<li>NodeJS</li>
						<li>Express</li>
						<li>socket.io</li>
						<li>AdonisJS</li>
						<li>React</li>
						<li>GatsbyJS</li>
						<li>react-router</li>
						<li>Redux</li>
						<li>styled-components</li>
						<li>mobx</li>
						<li>mobx-react</li>
						<li>ElectronJS</li>
						<li>vueJS</li>
						<li>AngularJS</li>
						<li>jQuery</li>
						<li>CSS</li>
						<li>SCSS</li>
						<li>Bootstrap</li>
						<li>tailwind.css</li>
						<li>HTML</li>
						<li>PHP</li>
						<li>Laravel</li>
						<li>PHPUnit</li>
						<li>Composer</li>
						<li>SQL</li>
						<li>MySQL</li>
						<li>PostgreSQL</li>
						<li>Git</li>
						<li>Bash</li>

						<li>Adobe Photoshop</li>
						<li>Affinity Photo</li>
						<li>Adobe XD</li>
						<li>Adobe Illustrator</li>
					</ul>
      </SkillsContainer>

      <ContactContainer id="contact">
        <h2>Contact me.</h2>

        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" placeholder="Jon Doe" required />
					</div>
					<div className="form-group">
						<label htmlFor="mail">Mail</label>
						<input type="email" name="mail" id="mail" placeholder="jon@example.com" required />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" placeholder="Hello,..." required></textarea>
					</div>
          <SubmitButton type="submit">
            <LightButton>
              Send message
            </LightButton>
          </SubmitButton>
					
				</form>
      </ContactContainer>

      <Footer />
    </Container>
  </>
)

export default IndexPage
