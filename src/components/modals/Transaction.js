import React, { useContext } from 'react'

import { lighten } from 'polished'
import styled from 'styled-components'

import { Context } from '../../context'
import { formatAddr } from '../../utils'
import Modal from '../organisms/Modal'

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0.1em auto 0;
  ${'' /* padding: 1em; */}
  > p { text-align: center; }
`

const TrxSummary = styled.div`
  width: 100%;
  margin: 0 auto;
  > div {
    padding: 0.75em 0.5em 0.75em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${lighten(0.55, '#000')};
    p:first-of-type { color: #a8a29e; }
  }
  div:first-of-type { margin-top: 0.5em; }
  div:last-of-type { margin-bottom: 1.5em; }
`


const Transaction = () => {
	const { modalFeedback } = useContext(Context)
	console.log(modalFeedback)
	const { header, message, status, details} = modalFeedback
	// console.log(trxFeedback)

	return modalFeedback &&
		<Modal
			header={ header }
			status={ status }
			>
				<Content>
					<TrxSummary>
						<h3>Your Transaction Summary</h3>
						<div>
							<p>Your Address:</p>
							<p>{formatAddr(details.address)}</p>
						</div>
					</TrxSummary>
				</Content>
		</Modal>

}

export default Transaction
