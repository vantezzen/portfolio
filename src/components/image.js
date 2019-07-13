/**
 * Wrapper for Gatsby-image
 */
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const renderImage = (file, alt) => {
  return <Img alt={ alt } fluid={file.node.childImageSharp.fluid} />
}

const Image = function (props) {
  return <StaticQuery
    query={graphql`
      query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
      edges {
        node {
          extension
          relativePath
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    }
    `}
    render={({ images }) => renderImage(images.edges.find(image => image.node.relativePath === props.src), props.alt)}
  />
}
export default Image;