import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Anchor from '../Anchor'

const Image = styled.img.attrs(props => ({ src: props.image }))`
  height: 20px;
  margin: 0 5px;
  width: auto;
`

const IconButton = ({ type, url = null, image, handleClick = null, name }) => {
  switch (type) {
    case 'link':
      return (
        <Anchor url={url} name={name}>
          <Image image={image} alt={name} />
        </Anchor>
      )
    case 'function':
      return <div onClick={handleClick}>fn btn</div>
    default:
      break
  }
}

IconButton.propTypes = {
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}

export default IconButton
