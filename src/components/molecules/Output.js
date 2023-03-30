import React, { useEffect, useRef } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Prompt from '../atoms/Prompt'

const Wrap = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${'' /* Can be a ul */}
  div {
    display: flex;
    flex-direction: column;
  }
`

// Can actually be an li
const Line = styled.span`
`

const Output = ({ output }) => {




  return (
    <Wrap >
      {output.map((item, idx) => (
          <div key={idx}>
            <Line>
              <Prompt />
              <code>{item.input}</code>
            </Line>
            <Line>
              <code>{item.output}</code>
            </Line>
          </div>
      ))}
    </Wrap>
  )
}

export default Output

Output.propTypes = {
  output: PropTypes.array.isRequired,
}
