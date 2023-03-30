import React, { useState, useContext } from 'react'

import styled from 'styled-components'

import CredentialBody from './CredentialBody'

import { Context } from '../../../context'
// import { ToolTip } from '../../atoms/ToolTip'
import Toggle from '../../molecules/Toggle'
import Layout from '../../templates/Layout'

const Wrap = styled.section`
  width: 70%;
  margin: 2em auto;
  height: fit-content;
`

const Profile = () => {
	const [selectedTab, toggleTab] = useState(0)
	const labels = ['badges', 'certificates', 'hackathons']

  return (
    <Layout page='profile'>

      <Wrap>
				<Toggle
					labels={labels}
					selectedTab={selectedTab}
					toggleTab={toggleTab}
				/>
				<CredentialBody selectedTab={labels[selectedTab]} />
      </Wrap>
    </Layout>
  )
}

export default Profile
