import React, { useContext } from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Credential from './Credential'
import Placeholder from './Placeholder'

import { Context } from '../../../context'

const Wrap = styled.section`
	background-color: #292524;
	border-radius: 20px;
	height: 600px;
	padding: 1em;
	box-sizing: border-box;
	margin: 1em 0;
`

const CredentialBody = ({ selectedTab }) => {
	const { user } = useContext(Context)

	// We know the user obj is gonna come with certificates/hackathons/badges/poaps
	// When the we update the selected tab, we want to pass in
	return (
		<Wrap>
			{user[selectedTab]
				? user[selectedTab].map((credential, idx) => <Credential key={`Credential ${idx + 1}`} credential={credential}/>)
				: <Placeholder />
			}
		</Wrap>
	)
}

export default CredentialBody

CredentialBody.propTypes = {
  selectedTab: PropTypes.string.isRequired,
}
