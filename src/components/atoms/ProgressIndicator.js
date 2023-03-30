import React, { useRef } from 'react'

import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { useIntersection } from 'react-use'
import styled from 'styled-components'

const Wrap = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  svg {
    overflow: visible;
  }
  svg:nth-of-type(2) {
    position: absolute;
    transform: rotate(-90deg);
    margin-left: -30px;
  }
`

const ProgressIndicator = ({ modulesCompleted, moduleCount }) => {
  // Temp variables-- would we import this from context?

  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  const radius = 45
  const circumference = Math.ceil(2 * Math.PI * radius)
  const fill = Math.abs(
    Math.ceil((circumference / moduleCount) * (moduleCount - modulesCompleted))
  )

  const prevFill = Math.abs(
    Math.ceil((circumference / moduleCount) * (moduleCount - modulesCompleted))
  )

  const durationCalc = Math.ceil(
    (0.1 / moduleCount) * (moduleCount - modulesCompleted)
  )

  const transition = {
    duration: durationCalc,
    delay: 0.1,
    ease: 'easeIn',
  }

  const variants = {
    hidden: {
      strokeDashoffset: prevFill,
      transition,
    },
    show: {
      strokeDashoffset: fill,
      transition,
    },
  }

  return (
    <Wrap>
      <svg viewBox="0 0 100 100" width={30} height={30}>
        <circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={10}
          stroke="white"
          strokeOpacity={0.15}
          fill="transparent"
        />
      </svg>
      <svg viewBox="0 0 100 100" width={30} height={30}>
        <motion.circle
          ref={intersectionRef}
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={10}
					stroke="#A798EF"
          fill={'transparent'}
          strokeDashoffset={fill}
          strokeDasharray={circumference}
					strokeLinecap="round"
          variants={variants}
          initial="hidden"
          animate={
            intersection && intersection.intersectionRatio < 1
              ? 'show'
              : 'hidden'
          }
        />
      </svg>
    </Wrap>
  )
}

export default ProgressIndicator

ProgressIndicator.propTypes = {
  modulesCompleted: PropTypes.number.isRequired,
  moduleCount: PropTypes.number.isRequired,
}
