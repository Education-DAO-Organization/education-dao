import React, { useContext } from 'react'

import { lighten } from 'polished'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Context } from '../../context'

const Wrap = styled.div`
  border: 1px solid red;
  height: 225px;
  width: 250px;
  img {
    width: 100%;
  }
  h3 {
    text-align: center;
  }
`

const Card = ({ path, data }) => {
  return (
    <Wrap>
      <img src={data?.image} />
      <h3>
        <Link to={path || '#'}>{data?.title}</Link>
      </h3>
    </Wrap>
  )
}

export default Card

Card.propTypes = {
  path: PropTypes.string,
  data: PropTypes.object
}
