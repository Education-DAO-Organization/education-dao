import React from 'react'

import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import NavLink from '../atoms/NavLink'

const Wrap = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  margin-right: auto;
  ${'' /* Temp padding value */}
  padding: 0 2em;
`

const Nav = () => {
  const location = useLocation()
  const links = [
    { page: 'Lesson', path: '/lesson' },
    { page: 'Workspace', path: '/workspace' },
    { page: 'Profile', path: '/profile' },
  ]
  return (
    <Wrap>
      {links.map((link, idx) =>
        <NavLink key={`Nav link no. ${idx}`} link={link} location={location} />
      )}
    </Wrap>
  )
}

export default Nav
