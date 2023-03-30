import React from 'react'

import styled from 'styled-components'

import LinkButton from '../molecules/LinkButton'
import Modal from '../organisms/Modal'

const Header = styled.h2`
  margin: 0 auto;
  padding: 0;
  width: 90%;
  text-align: center;
`

const Body = styled.p`
  width: 90%;
  margin: 1em auto;
  text-align: center;
`

const WalletOnboarding = () => {
  return !window.ethereum &&
    <Modal>
      <Header>Hmm, it looks like you don&apos;t have a browser wallet.</Header>
      <Body>You&apos;ll need a browser wallet like MetaMask to access modules and complete lessons.</Body>
      <LinkButton
        name='Install MetaMask'
        icon='metamask'
        url='https://metamask.io/'
      />
    </Modal>
}

export default WalletOnboarding
