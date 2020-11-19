/**
 * Styles used on the index page
 */
import styled from 'styled-components'
import tw from 'tailwind.macro'

export const Container = styled.div`
  ${tw`mx-auto text-white`}

  font: 400 19px/1.5 -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;


  width: 90%;

  @media screen and (min-width: 500px) {
    width: 80%;
  }

  @media screen and (min-width: 800px) {
    width: 60%;
  }
`
export const HeroContainer = styled.div`
  margin-top: 40vh;
`
export const HeroName = styled.h1`
  font-size: 3rem;
  margin-top: 150px;
`
export const ScrollDownInfo = styled.div`
  font-size: 0.9rem;
  color: #212121;
  font-weight: 500;
  position: absolute;
  bottom: 1rem;
  left: 0;
  text-align: center;
  width: 100%;

  animation: animateScrollDown 8s ease-in-out;
  animation-iteration-count: infinite;
`

export const ProjectsContainer = styled.div`
  margin-top: 20vh;
`
export const ProjectsListContainer = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
  }
`
export const ProjectContainer = styled.div`
  ${tw`w-full mb-12 lg:mb-0`}
`
export const ProjectImage = styled.div`
  width: 100%;
  margin-bottom: .5rem;

  img {
    border-radius: .6rem;
  }
`
export const ProjectHeading = styled.h3`
  margin-bottom: .8rem;
`
export const ProjectDescription = styled.div`
  margin-bottom: .5rem;
`
export const ProjectTechStack = styled.div`
  color: #888888;
`

export const LightButton = styled.div`
  background-color: #EBEBEB;
  color: #212121;
  width: 100%;
  text-align: center;
  text-decoration: none;
  border-radius: 4rem;
  margin-top: 1rem;
  padding: .6rem;
  font-size: 1rem;
`
export const AboutMeContainer = styled.div`
  margin-top: 5rem;
  padding-top: 5rem;

  border-top-color: rgba(100, 100, 100, 0.5);
  border-top-style: solid;
  border-top-width: .25rem;

  p {
    margin-bottom: 0.6rem;
  }
`
export const AboutMeLinkContainer = styled.div`
  margin-top: 2rem;
`;
export const AboutMeLink = styled.a`
  color: #FFFFFF;
  transition: .5s;
  padding: 1rem;

  &:hover {
    color: #e83e8c;
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 5rem;
  padding-top: 5rem;

  border-top-color: rgba(100, 100, 100, 0.5);
  border-top-style: solid;
  border-top-width: .25rem;

  ul {
    margin: 0;
    
    li {
      display: inline-block;
      margin: 10px;
      padding: 5px 10px;
      color: #d7d7d7;
      background: #5A5A5A;
      list-style: none;
      font-weight: 600;
  
      b {
        color: #FFFFFF;
        font-weight: 900;
      }
  
      &.slim {
        font-weight: 300;
        color: #b3b3b3;
      }
    }
  }
`

export const ContactContainer = styled.div`
  margin-top: 5rem;
  padding-top: 5rem;

  border-top-color: rgba(100, 100, 100, 0.5);
  border-top-style: solid;
  border-top-width: .25rem;

  .form-group {
    margin-bottom: 1rem;

    label {
      padding-left: 0;
      font-weight: normal;
      margin-bottom: 2pt;
      display: block;
      text-align: left;
      color: #666;
      font-size: 0.9em;
      padding-left: 10pt;
    }

    input, textarea {
      border-radius: 0;
      background-color: #313131;
      color: #FFFFFF;
      border: 0;
      padding: 1rem;
      font-weight: normal;

      width: 100%;

      outline: none;
    }
  }
`
export const SubmitButton = styled.button`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`