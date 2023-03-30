import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import chevronLeft from '../../assets/svg/chevron-left.svg'

const Wrap = styled(motion.div)`
  border-radius: 5px;
  background-color: #2B2A2A;
  color: #9aa1b2;
  padding: 0 1em;
  margin: 1.5em 0;
  box-sizing: border-box;
`

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  > h3 {
    user-select: none;
    color: #9aa1b2;
  }
  > img {
    user-select: none;
  }
`

const ContentWrap = styled(motion.div)`
  overflow: hidden;
  > div {
    padding-bottom: 1.25em;
    height: 100%;
  }
`

const contentVariants = {
  expanded: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
}

const Details = ({ header, content }) => {
  const [expanded, setExpanded] = useState(false)

  // Function to parse content
  // 1. Is it an image? -> Turn into an image tag
  // 2. Are we going to be using ASCII cinema? -> grab the link

  return (
    <Wrap
      variants={{
        open: { y: 0, opacity: 1, transition: { duration: 0.3 } },
        closed: { y: -10, opacity: 0, transition: { duration: 0 } },
      }}
    >
      <Summary onClick={() => setExpanded(!expanded)}>
        <h3>{header}</h3>
        <motion.img
          animate={{ rotate: expanded ? -90 : 0 }}
          src={chevronLeft}
          alt="Chevron"
        />
      </Summary>
      <AnimatePresence initial={false}>
        {expanded && (
          <ContentWrap
            key="content"
            variants={contentVariants}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
          >
            <div>{content}</div>
          </ContentWrap>
        )}
      </AnimatePresence>
    </Wrap>
  )
}

export default Details

Details.propTypes = {
  header: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
}
