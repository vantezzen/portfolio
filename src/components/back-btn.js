/**
 * Footer component
 */
import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

import {
  ChevronLeft
} from 'react-feather'

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

const BackBtn = () => {
  return (
    <LinkBack>
      <Link to="/" aria-label="Go back to homepage">
        <ChevronLeft width="30" height="30" />
      </Link>
    </LinkBack>
  )
}

export default BackBtn
