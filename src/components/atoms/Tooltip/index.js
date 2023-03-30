import React, { forwardRef } from 'react'

import Tippy from '@tippyjs/react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'tippy.js/dist/svg-arrow.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'

import help from '../../../assets/svg/help.svg'

const TippyButton = styled.div`
	background-color: #f1f1f1;
  background-image: url(${help});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30%;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`

const Poppy = styled(Tippy)`
  height: fit-content;
	background-color: #f1f1f1;
  max-width: 300px;
	border-radius: 25px;
  width: fit-content;
	p { color: #121212; }
	&.tippy-box[data-placement^=bottom] > .tippy-svg-arrow > svg { bottom: 10px; }
	&.tippy-box[data-placement^=top] >.tippy-svg-arrow>svg {
	  top: 10px;
	  transform: rotate(180deg);
	}
`

const Button = forwardRef((props, ref) => {
  return (
		<TippyButton ref={ref} />
	)
})

const Tooltip = ({ content }) => {
  return (
    <Poppy
      animation="scale"
			arrow={`
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.50423 32.368"><defs><style>.a{fill:#f1f1f1;}</style></defs><path class="a" d="M13.3818,12.0497a2.29122,2.29122,0,0,1,4.23634,0L29.07672,39.83526A2.2912,2.2912,0,0,1,26.95861,43H4.04145a2.29121,2.29121,0,0,1-2.11817-3.16474Z" transform="translate(-1.74788 -10.632)"/></svg>
			`}
			offset={[0, 15]}
      content={content}
      interactive="true">
      <Button />
    </Poppy>
  )
}

export default Tooltip

Button.displayName = 'Tippy Button'

Tooltip.propTypes = {
  content: PropTypes.element.isRequired
}
