/**
 * Styles used on product pages
 */
import React from 'react';
import styled from 'styled-components';
import Animate from "react-awesome-reveal";
import { keyframes } from "@emotion/core";
import tw from 'tailwind.macro'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const ProductTitle = ({ children }) => (
  <Animate triggerOnce keyframes={fadeInUp}>
    <h1>
      {children}
    </h1>
  </Animate>
);

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

export const ProjectParagraph = styled.p`
  margin-bottom: 0.4em;
`
export const ProjectTechStack = styled.div`
  font-weight: 700
`
export const ProjectHeading = styled.h2`
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