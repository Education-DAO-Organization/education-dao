import React, { useState, useContext } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { transparentize, darken, cover, lighten } from 'polished'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { fadeInWithDelay, dropIn } from '../../theme/Variants'

const backgroundPalette = {
  warning: '#ffb74b',
  initiated: '#49a6f9',
  pending: '#ffdb59',
  rejected: 'hsl(0, 70%, 67%)',
  success: '#6cd47b'
}

const Overlay = styled(motion.div)`
  ${cover}
  ${'' /* background-color: ${({ status }) => transparentize(0.65, darken(0.5, backgroundPalette[status]))}; */}
  background-color: ${transparentize(0.25, '#1D1C1C')};
  display: grid;
  height: 100%;
  overflow-y: hidden;
  position: absolute;
  place-items: center;
  top: 0;
  width: 100%;
  will-change: transform;
  z-index: 100;
  @media (min-width: 768px) {
    height: 100vh;
  }
`

const Container = styled(motion.div)`
  height: fit-content;
  width: 450px;
  padding: 0.5em;
  box-sizing: border-box;
  border: 1px solid #CDCDCD;
  background-color: #2B2A2A;
  ${'' /* border: 2px solid ${lighten(0.1, '#2B2A2A')}; */}
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 400px;
  }
`

const Banner = styled.div`
  background: ${({ status }) => backgroundPalette[status]};
  opacity: 0.8;
  z-index: 1000;
  background-image:
    linear-gradient(
      ${({ status }) => backgroundPalette[status]} 2px,
      transparent 2px
      ),
    linear-gradient(
      to right,
      ${({ status }) => backgroundPalette[status]} 2px,
      ${({ status }) => lighten(0.1, backgroundPalette[status])} 2px
      );
  background-size: 20px 20px;
  border-bottom: 2px solid #000;
  height: fit-content;
  padding: 1.5em 0 0.5em;
  width: 100%;
  height: fit-content;
  text-align: center;
    h2 {
      color: #000;
      font-weight: 500;
  }
  @media (min-width: 500px) {
    h2 {
      width: 80%;
      margin: 0.5em auto 0.25em;
      text-align: center;
      font-size: calc(1em + 0.45vmax);
    }
  }
`

// The props that get passed in here will change to accomodate more kinds of modals
// If it's just a notification, or if it's a trx receipt, or even a form.
const Modal = ({ header, status, children }) => {
  const [modalSeen, setModalSeen] = useState(true)
  // React 18 blessed us with not having to return null if modalSeen is false
  return modalSeen && ReactDOM.createPortal(
        <AnimatePresence>
          <Overlay
            animate="animate"
            exit="exit"
            initial="initial"
            tabIndex='-1'
            variants={fadeInWithDelay}>
            <Container
              animate="visible"
              exit="exit"
              initial="hidden"
              variants={dropIn}>
							<Banner status={status}>
								<h2>{header}</h2>
							</Banner>
							{children}
            </Container>
          </Overlay>
        </AnimatePresence>,
        document.getElementById('portal'))
}

export default Modal

Modal.propTypes = {
  children: PropTypes.node,
	header: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired
}
