import React from 'react'

import { motion } from 'framer-motion'
import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import javascript from '../../assets/icons/javascript.svg'
import solidity from '../../assets/icons/solidity.svg'

const languageIcons = { javascript, solidity }

const Tab = styled(motion.div)`
  position: relative;
  height: fit-content;
  width: fit-content;
  button {
    padding: 1em;
    gap: 0.75em;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    border: none;
    ${'' /* background-color: ${lighten(0.05, '#16171d')}; */}
    user-select: none;
    > p {
      color: #9aa1b2;
      font-family: pt-mono, monospace;
    }
  }
`

const Underline = styled(motion.div).attrs(() => ({ layoutId: 'underline' }))`
  border-bottom: 2px solid ${lighten(0.5, '#16171d')};
  height: 2px;
  width: 100%;
  bottom: -2px;
  position: absolute;
  z-index: 1;
`

const Icon = styled.img`
  height: 16px;
  width: 16px;
`

const FileTab = ({ selectedTab, fileName, language, handleToggle }) => {
  return (
    <Tab animate onClick={handleToggle}>
      <button>
        <Icon src={languageIcons[language]} alt={`${language} Icon`} />
        <p>{fileName}</p>
      </button>
      {selectedTab === fileName && <Underline />}
    </Tab>
  )
}

export default FileTab

FileTab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
}
