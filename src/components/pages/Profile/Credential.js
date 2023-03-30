import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrap = styled.div`
	width: 200px;
	background-color: ${({bg}) => bg ? 'transparent' : '#f5f5f4'};
	border-radius: 10px;
`

const Credential = ({ credential }) => {
	const { img, name, permalink, bg } = credential
	return (
		// Fix link
		<a href={permalink}>
			<Wrap bg={bg}>
				<img src={img} alt={name}/>
			</Wrap>
		</a>
	)
}

export default Credential

Credential.propTypes = {
	credential: PropTypes.object.isRequired
}
