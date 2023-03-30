import React from 'react'

import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import arrow from '../../assets/svg/arrow-top-right.svg'
import book from '../../assets/svg/book.svg'
import terminal from '../../assets/svg/terminal.svg'
import video from '../../assets/svg/video.svg'
import Anchor from '../atoms/Anchor'

const Wrap = styled.div`
  ${'' /* border: 1px solid #9aa1b2; */}
  background-color: #2B2A2A;
  width: 315px;
  height: 200px;
  position: relative;
  border-radius: 7px;
  > div {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    align-items: center;
    padding: 0.5em 1em;
    justify-content: space-between;
    p {
      margin: 0;
      color: #9aa1b2;
      font-size: 1em;
      text-transform: capitalize;
    }
    img {
      height: 1.1em;
    }
  }
  h4 {
    margin: 0;
    color: ${lighten(0.1, '#9aa1b2')};
    padding: 0.1em 1em;
  }
  p {
    color: #9aa1b2;
    padding: 0.1em 1em;
    margin: 0.25em 0;
    font-size: 1em !important;
  }
  > img {
    position: absolute;
    height: 1em;
    bottom: 1em;
    right: 1em;
  }
`

const icons = {
  'code': terminal,
  'article': book,
  'video': video
}

const Resource = ({ data }) => {
  const { title, description, type, link } = data
  return (
    <Wrap>
      <div>
        <img src={icons[type]} alt={type} />
        <p>{type}</p>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <img src={arrow} alt="Arrow Top Right"/>
    </Wrap>
  )
}

export default Resource

Resource.propTypes = {
  data: PropTypes.object
}
