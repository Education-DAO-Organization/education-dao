import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.div`
  > div {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1em;
    justify-content: space-between;
  }
`

const ResourceList = ({ title, children }) => {
  return (
    <Wrap>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </Wrap>
  )
}

export default ResourceList

ResourceList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}
