import React from 'react'

import { AnimateSharedLayout } from 'framer-motion'
// import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ToggleTab from '../atoms/ToggleTab'

const Wrap = styled.div`
  align-items: center;
	${'' /* background-color: #191917; */}
	background-color: #121212;
	padding: 0.5em;
  border-radius: 30px;
  display: flex;
	width: fit-content;
  justify-content: space-around;
	box-sizing: border-box;
`

const Toggle = ({ labels, selectedTab, toggleTab }) => {
	return (
		<AnimateSharedLayout type="crossfade">
			<Wrap
				aria-label="Credential Toggle"
				onKeyPress={() => console.log('pressed')}
				role='tablist'
				tabIndex='0'>
				{labels.map((label, idx) =>
					<ToggleTab
						idx={idx}
						key={label}
						label={label}
						selectedTab={selectedTab}
						tabIndex='-1'
						toggleTab={() => toggleTab(idx)}
					/>
				)}
			</Wrap>
		</AnimateSharedLayout>
	)
}

export default Toggle

Toggle.propTypes = {
	labels: PropTypes.array.isRequired,
	selectedTab: PropTypes.number.isRequired,
	toggleTab: PropTypes.func.isRequired,
}
