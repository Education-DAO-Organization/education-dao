import React from 'react'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import NetworkOnboarding from '../modals/NetworkOnboarding'
import Transaction from '../modals/Transaction'
import WalletOnboarding from '../modals/WalletOnboarding'
import Footer from '../organisms/Footer'
import Header from '../organisms/Header'

const Main = styled.main`
  ${({page}) => page === 'workspace' && css`
    display: grid;
    grid-template-areas:
		'instruction tabbar'
		'instruction editor'
		'instruction terminal';
    grid-template-columns: 40% calc(60% - 2em);
    grid-template-rows: 45px calc(100% - 200px) 200px;
    grid-gap: 0;
    height: calc(100vh - 10em);
    p {
      font-size: 1em;
    }
  `}
  ${({page}) => page === 'lesson' && css`
    height: fit-content;
    width: 60%;
    margin: 0 auto 2em;
    align-items: center;
  `}
  ${({page}) => page === 'profile' && css`
    height: fit-content;
  `}
`

const Layout = ({ children, page }) => {
  return (
    <>
      {/* <Modal /> */}
      {/* <WalletOnboarding /> */}
			{/* <Transaction /> */}
      {/* <NetworkOnboarding /> */}
      <Header />
      <Main page={page}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  page: PropTypes.string.isRequired
}
