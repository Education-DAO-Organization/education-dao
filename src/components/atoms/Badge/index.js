import React from 'react'

import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrap = styled(motion.div)`
	padding: 0.5em 0.75em;
	border-radius: 25px;
	background-color: rgba(167,152,239,0.3);
	cursor: pointer;
`

// Temp prop of color
const Badge = ({ label }) => {
  return (
    <Wrap whileHover={{ backgroundColor: 'rgba(167,152,239,0.2)'}}>
      <p>{label}</p>
    </Wrap>
  )
}

export default Badge

Badge.propTypes = {
	label: PropTypes.string.isRequired
}
