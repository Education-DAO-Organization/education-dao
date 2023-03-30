import React from 'react'

import styled from 'styled-components'

const Wrap = styled.div`
	height: 100%;
	display: grid;
	place-items: center;
`

const Placeholder = () => {
	return (
		<Wrap>
			<h2>Hmm, there&apos;s nothing here yet.</h2>
		</Wrap>
	)
}

export default Placeholder
