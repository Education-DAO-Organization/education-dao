import React from 'react'

import { motion } from 'framer-motion'
import { cover } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.div`
	border-radius: 25px;
	display: grid;
	place-items: center;
	width: 175px;
	text-align: center;
	cursor: pointer;
	height: 45px;
	position: relative;
	span {
		color: ${props => props.isSelected ? '#292524' : '#e7e5e4'};
		font-family: 'Fraktion Sans Bold';
		font-size: 1.2em;
		font-weight: 600;
		z-index: 1;
		text-transform: capitalize;
	}
	div {
		${cover()}
		box-sizing: border-box;
		width: 175px;
		height: 100%;
		border-radius: 25px;
		background-color: #826FD8;
	}
`

const ToggleTab = ({ label, idx, selectedTab, toggleTab, tabIndex }) => {
	return (
		<Wrap
			aria-label={`${label} Tab`}
			aria-selected={selectedTab === idx}
			key={label}
			label={label}
			onClick={toggleTab}
			role='tab'
			tabIndex={tabIndex}
			isSelected={selectedTab === idx}>
			<span>{label}</span>
			{selectedTab === idx && (
				<motion.div
					layoutId='tab'
					transition={{
						type: 'spring',
						stiffness: 600,
						damping: 50
					}}
				/>
			)}
		</Wrap>
	)
}

export default ToggleTab

ToggleTab.propTypes = {
  label: PropTypes.string.isRequired,
	idx: PropTypes.number.isRequired,
	selectedTab: PropTypes.number.isRequired,
	toggleTab: PropTypes.func.isRequired,
	tabIndex: PropTypes.string.isRequired
}
