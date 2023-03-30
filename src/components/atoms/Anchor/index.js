import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import urlPropType from 'url-prop-type'

import externalLink from '../../../assets/svg/external-link.svg'

const Icon = styled.img`
  height: 10px;
  width: 10px;
  margin-left: 3px;
  align-self: center;
`

// Rename this to be text link?
const Anchor = ({ children = null, url, name, external = false }) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      title={name}>
      {children || name}
      {external && <Icon src={externalLink} alt={name} />}
    </a>
  )
}

export default Anchor

Anchor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.array.isRequired,
  ]),
  external: PropTypes.bool,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  url: PropTypes.string.isRequired,
}
