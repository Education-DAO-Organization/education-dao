import React, { useContext } from 'react'

import { ethers } from 'ethers'
import { lighten, transparentize } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CONTRACTS } from '../../constants/Contracts.js'
import { Context } from '../../context'

const Button = styled.button`
  padding: 0.75em 2em;
  cursor: pointer;
  border-radius: 25px;
  border: none;
  background-color: #826FD8;
  float: right;
  p {
    padding-bottom: 2px;
    font-weight: 500;
    font-size: 1.5em;
  }
`

const LessonComplete = () => {
  const { signer } = useContext(Context)
  const handleComplete = async ( lessonName ) => {
    try {
      console.log('rendered')
      const dummyLessonContract = new ethers.Contract(CONTRACTS[0].address, CONTRACTS[0].abi, signer)
      const tx = await dummyLessonContract.incrementCounter()

      await tx.wait()

      const { hash } = tx
      console.log(hash)


    } catch(e) {
      console.log(e)
    }
  }

  // try {
  //   const approveDai = await dai.approve(spread.address, bigNumberify(amount))
  //   await approveDai.wait()
  //   const allowance = await dai.allowance(user.address, spread.address)
  //   dispatch({ type: 'SET_ALLOWANCE', payload: smolNumberify(allowance) })
  //   const successInfo = {
  //     ...success,
  //     details: {
  //       address,
  //       amount: smolNumberify(allowance),
  //       trxHash: approveDai.hash
  //     }
  //   }

  return (
    <Button onClick={handleComplete}>
      <p>Continue</p>
    </Button>
  )
}

export default LessonComplete

// LessonComplete.propTypes = {
//   handleComplete: PropTypes.func.isRequired,
// }
