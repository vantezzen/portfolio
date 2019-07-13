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

const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Container>
      <HeroContainer>
        <img src={ Logo } alt="Bennett Hollstein's Logo (Fox)" height={ 50 } />
        <HeroName>Bennett Hollstein</HeroName>
        <p>18-year-old web developer from Germany</p>
      </HeroContainer>

      <ProjectsContainer>
        <h2>Featured projects.</h2>

        <ProjectsListContainer>

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
            <ProjectTechStack>ReactJS, tailwindcss, wikijs</ProjectTechStack>

            <Link to="/sprous" style={{ textDecoration: 'none' }}>
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
          I love web development and enjoy building websites that help my in my everyday life.
        </p>
        <p>
          I have a passion of challenging myself to learn new things to build better and more modern websites.
        </p>
      </AboutMeContainer>

      <SkillsContainer>
        <h2>Technologies I've used.</h2>

        <ul class="skills">
						<li><b>JavaScript</b></li>
						<li>NodeJS</li>
						<li class="slim">Express</li>
						<li class="slim">socket.io</li>
						<li class="slim">AdonisJS</li>
						<li>React</li>
						<li class="slim">GatsbyJS</li>
						<li class="slim">react-router</li>
						<li class="slim">Redux</li>
						<li class="slim">styled-components</li>
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
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" name="name" id="name" placeholder="Jon Doe" />
					</div>
					<div class="form-group">
						<label for="mail">Mail</label>
						<input type="email" name="mail" id="mail" placeholder="jon@example.com" />
					</div>
					<div class="form-group">
						<label for="message">Message</label>
						<textarea name="message" id="message" placeholder="Hello,..."></textarea>
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
