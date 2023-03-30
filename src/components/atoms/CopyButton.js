import React, { forwardRef } from 'react'

import Tippy from '@tippyjs/react'
import { lighten, transparentize } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

import copy from '../../assets/svg/copy.svg'

const Button = styled.button`
  padding: 0.35em;
  background-color: ${lighten(0.075, '#16171d')};
  border: none;
  border-radius: 3px;
  background-image: url(${copy});
  background-size: 55%;
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
`

const TippyStyled = styled(Tippy)`
  background-color: ${lighten(0.05, '#16171d')};
  height: fit-content;
  max-width: 300px;
  border: 1px solid ${lighten(0.075, '#16171d')};
  width: fit-content;
`

const PopUp = forwardRef((props, ref) => {
  return <Button {...props} ref={ref} />
})

const CopyButton = ({code}) => {
  const copyToClipboard = (str) => {
    navigator.clipboard.writeText(str)
  }

  return (
    <TippyStyled
      animation="scale"
      arrow={false}
      content={'Copied'}
      interactive="true"
      trigger='click'
      placement='left'
      duration={[50, 0]}>
      <PopUp onClick={() => copyToClipboard(code)} />
    </TippyStyled>
  )
}

export default CopyButton

PopUp.displayName = 'Tooltip'
CopyButton.propTypes = {
  code: PropTypes.string.isRequired,
}
