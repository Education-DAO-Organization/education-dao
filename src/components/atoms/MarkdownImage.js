import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin: 1em auto;
`

const MarkdownImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} />
}

export default MarkdownImage

MarkdownImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
