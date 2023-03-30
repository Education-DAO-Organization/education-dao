import React from 'react'

import { AnimateSharedLayout, motion } from 'framer-motion'
import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FileTab from '../atoms/FileTab'

const Wrap = styled(motion.div)`
  display: flex;
  flex-direction: row;
  border-top: none;
`

const TabBar = ({ setSelected, selectedTab, files }) => {
  return (
    <Wrap>
      {/* <AnimateSharedLayout> */}
        {files.map((file, idx) => (
          <FileTab
            key={file.name}
            fileName={file.name}
            disabled={selectedTab.name === file.name}
            language={file.language}
            selectedTab={selectedTab.name}
            handleToggle={() => setSelected(file)}
          />
        ))}
      {/* </AnimateSharedLayout> */}
    </Wrap>
  )
}

export default TabBar

TabBar.propTypes = {
  setSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired,
}
