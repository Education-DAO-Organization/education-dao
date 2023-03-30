import React from 'react'

import { lighten , transparentize } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import urlPropType from 'url-prop-type'

import metamask from '../../assets/logos/metamask.svg'
import Anchor from '../atoms/Anchor'

const Button = styled.div`
  padding: 0.75em 1.5em;
  margin: 1em 0 1em;
  cursor: pointer;
  border-radius: 25px;
${'' /* If the bg was flat out violet, then it would wash out lil fox :( */}
  background-color: #CDCDCD;
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    gap: 0.75em;
    align-items: center;
    p {
      color: #1D1C1C;
      text-decoration: none;
      font-size: 1.1em;
    }
    img {
      height: 25px;
      width: 25px;
    }
  }
`

// Also have this work for 'view on blockscout'
// https://blockscout.com/xdai/mainnet/
const icons = {
  metamask,
}

const LinkButton = ({ name, icon, url }) => {
  return (
    <Button>
      <Anchor url={url} name={name}>
          <img src={icons[icon]} alt={name} />
          <p>{name}</p>
      </Anchor>
    </Button>
  )
}

export default LinkButton

LinkButton.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  url: PropTypes.string.isRequired,
}
