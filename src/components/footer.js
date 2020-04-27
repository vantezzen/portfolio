/**
 * Footer component
 */
import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  display: flex;
`
const LinkContent = styled.div`
  color: #bbbbbb;
  font-size: .85rem;
  margin-right: 1rem;
`


const Footer = () => {
  return (
    <Container>
      <Link to="/impressum" style={{ textDecoration: 'none' }} lang="de">
        <LinkContent>
          Impressum
        </LinkContent>
      </Link>
      <Link to="/datenschutz" style={{ textDecoration: 'none' }} lang="de">
        <LinkContent>
          Datenschutzerklärung
        </LinkContent>
      </Link>
    </Container>
  )
}

export default Footer
