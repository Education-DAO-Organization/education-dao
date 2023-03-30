import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrap = styled.div`
  a {
    text-decoration: none;
  }
`

const NavLink = ({ link, location }) => {
  const { path, page, icon } = link
  const { pathname } = location

  return (
    <Wrap active={pathname === path ? 'active' : 'inactive'}>
      <Link to={path}>
        <p>{page}</p>
      </Link>
    </Wrap>
  )
}

export default NavLink

NavLink.propTypes = {
  location: PropTypes.object,
  link: PropTypes.object
}
