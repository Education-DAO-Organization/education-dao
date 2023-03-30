import React from 'react'

import styled from 'styled-components'

import Details from './Details'

const Wrap = styled.section`
`

// Set this up to have an array of objs with keys of header and content
// Iterate over
const Accordion = () => {
	return (
		<Wrap>
			<Details
				header="Question"
				content="Answer"
			/>
			<Details
				header="Question"
				content="Answer"
			/>
			<Details
				header="Question"
				content="Answer"
			/>
		</Wrap>
	)
}

export default Accordion
