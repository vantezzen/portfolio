/**
 * Styles used on product pages
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

`
export const LinkBack = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;

  a {
    color: #FFFFFF;
    transition: .5s;

    &:hover {
      color: #e83e8c;
    }
  }
`
export const TwoOneGrid = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  margin-bottom: 3rem;
`
export const OneTwoGrid = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  margin-bottom: 3rem;
`
export const EqualGrid = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  margin-bottom: 3rem;
`

export const ProjectDescription = styled.div`
  color: #bbbbbb;
`
export const ProjectTechStack = styled.div`
  font-weight: 700
`
export const ProjectHeading = styled.h4`
  margin: 1.414em 0 .5em;
  line-height: 1.35;
  font-size: 1.2em;
  color: #fff;
  font-weight: 400;
`
export const ProjectImage = styled.div`
  img {
    border-radius: 2rem;
  }
`
export const DirectProjectImage = styled.img`
  border-radius: 2rem;
`
export const LightFont = styled.div`
  font-weight: 300;
  color: #bbbbbb;
`