import React from 'react'

import { transparentize } from 'polished'
import styled from 'styled-components'

const Span = styled.span`
  ${'' /* Make user select none */}
  color: ${transparentize(0.65, '#9aa1b2')};
`

const Prompt = () => {
  return <Span>❯❯❯</Span>
}

export default Prompt
