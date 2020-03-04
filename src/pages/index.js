/**
 *  Index page
 */
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Footer from "../components/footer"

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
  SkillsContainer,
  ContactContainer,
  SubmitButton
} from '../styles/index.js'

import Logo from "../images/logo.svg"

import Image from '../components/image'

import '../styles/global.css'

const age = new Date(new Date() - new Date('2001-01-26')).getFullYear() - 1970;

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Container>
      <HeroContainer>
        <img src={ Logo } alt="Bennett Hollstein's Logo (Fox)" height={ 50 } />
        <HeroName>Bennett Hollstein</HeroName>
        <p>{age}-year-old web developer from Germany</p>
      </HeroContainer>

      <ProjectsContainer>
        <h2>Featured projects.</h2>

        <ProjectsListContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/ferdi.png" />
            </ProjectImage>

            <ProjectHeading>Ferdi</ProjectHeading>
            <ProjectDescription>All your messages in one place.</ProjectDescription>
            <ProjectTechStack>ElectronJS, ReactJS</ProjectTechStack>

            <Link to="/ferdi" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/vowserDB_1.png" />
            </ProjectImage>

            <ProjectHeading>vowserDB</ProjectHeading>
            <ProjectDescription>A minimal standalone database for host-it-yourself projects.</ProjectDescription>
            <ProjectTechStack>PHP, composer</ProjectTechStack>

            <Link to="/vowserdb" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>


          <ProjectContainer>
          <ProjectImage>
              <Image src="screenshots/minimalpedia_1.png" />
            </ProjectImage>

            <ProjectHeading>minimalpedia</ProjectHeading>
            <ProjectDescription>Reimagening the design and user experience of wikipedia.</ProjectDescription>
            <ProjectTechStack>ReactJS, tailwindcss, wikijs</ProjectTechStack>

            <Link to="/minimalpedia" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/sprous_3.png" />
            </ProjectImage>

            <ProjectHeading>Sprous</ProjectHeading>
            <ProjectDescription>Helping small teams help their customers.</ProjectDescription>
            <ProjectTechStack>GatsbyJS, styled-components, js-search</ProjectTechStack>

            <Link to="/sprous" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>

          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/cauldron_1.png" />
            </ProjectImage>

            <ProjectHeading>Cauldron.js</ProjectHeading>
            <ProjectDescription>Running a Minecraft Server in your browser.</ProjectDescription>
            <ProjectTechStack>JavaScript, socket.io, ExpressJS</ProjectTechStack>

            <Link to="/cauldron" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </Link>
          </ProjectContainer>


          <ProjectContainer>
            <ProjectImage>
              <Image src="screenshots/github_1.png" />
            </ProjectImage>

            <ProjectHeading>More projects on GitHub</ProjectHeading>
            <ProjectDescription>All open-source projects are availible on GitHub.</ProjectDescription>
            {/* <ProjectTechStack>.</ProjectTechStack> */}

            <a href="https://github.com/vantezzen" rel="noopener noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
              <LightButton>
                View
              </LightButton>
            </a>
          </ProjectContainer>

        </ProjectsListContainer>
      </ProjectsContainer>

      <AboutMeContainer>
        <h2>About me.</h2>

        <p>
          Hello, I am Bennett.
        </p>
        <p>
          I love web development and enjoy building websites that help me in my everyday life.
        </p>
        <p>
          I have a passion of challenging myself to learn new things and build better websites.
        </p>
      </AboutMeContainer>

      <SkillsContainer>
        <h2>Technologies I've used.</h2>

        <ul className="skills">
						<li><b>JavaScript</b></li>
						<li>NodeJS</li>
						<li className="slim">Express</li>
						<li className="slim">socket.io</li>
						<li className="slim">AdonisJS</li>
						<li>React</li>
						<li className="slim">GatsbyJS</li>
						<li className="slim">react-router</li>
						<li className="slim">Redux</li>
						<li className="slim">styled-components</li>
						<li className="slim">mobx</li>
						<li className="slim">mobx-react</li>
						<li>ElectronJS</li>
						<li>vueJS</li>
						<li>AngularJS</li>
						<li>jQuery</li>
						<li><b>CSS</b></li>
						<li>SCSS</li>
						<li>Bootstrap</li>
						<li>tailwind.css</li>
						<li><b>HTML</b></li>
						<li><b>PHP</b></li>
						<li>Laravel</li>
						<li>PHPUnit</li>
						<li>Composer</li>
						<li><b>SQL</b></li>
						<li>MySQL</li>
						<li>PostgreSQL</li>
						<li><b>Git</b></li>
						<li><b>Bash</b></li>

						<li><b>Adobe Photoshop</b></li>
						<li><b>Affinity Photo</b></li>
						<li><b>Adobe XD</b></li>
						<li><b>Adobe Illustrator</b></li>
					</ul>
      </SkillsContainer>

      <ContactContainer>
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
