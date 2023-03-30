import { useState, useEffect, useContext } from 'react'

import styled from 'styled-components'

import rubiks from '../../assets/brand/rubiks-transparent.svg'
import { Context } from '../../context'
// import ConnectButton from '../atoms/ConnectButton'
import Account from '../molecules/Account'
import Nav from '../molecules/Nav'

const Brand = styled.img`
  height: 30px;
  width: auto;
  position: relative;
`

const Header = () => {
  const { user } = useContext(Context)
  const { address } = user

  return (
    <header>
      <Brand src={rubiks} alt='Education Dao' />
      <Nav />
      {/* {address
        ? <Account />
        : <ConnectButton handleConnect={() => console.log('')} />
      } */}
    </header>
  )
}

export default Header
