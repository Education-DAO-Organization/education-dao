import React, { useContext } from 'react'

import styled from 'styled-components'

import gnosis from '../../assets/logos/gnosis-chain.svg'
import { Context } from '../../context'
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

// Temp button definition here
const Button = styled.button`
  padding: 0.75em 1.5em;
  margin: 1em 0 1em;
  cursor: pointer;
  border-radius: 25px;
  border: 2px solid #826FD8;
  background-color: transparent;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 0.75em;
  align-items: center;
  p {
    color: #CDCDCD;
    text-decoration: none;
    font-size: 1.1em;
  }
  img {
    height: 25px;
    width: 25px;
  }
`

const NetworkOnboarding = () => {
  const { provider, network } = useContext(Context)
  const { chainId } = network

  // https://github.com/SporkDAOOfficial/ETHDenver2022-Faucet/blob/main/src/Wallet/ArbitrumConnect.js
  const connectGnosis = async () => {
    if (provider) {
      try {
        // Oh this is fancy
        await provider.send('wallet_switchEthereumChain', [{ chainId: 100 }])
      } catch (error) {
        // This means the network isn't recognized by MetaMask
        // This also means that there will be two things to confirm in MetaMask here
        // Which means we should dispatch some transparent messaging saying
        // "Hey, is it your first time using Gnosis Chain? You'll have to add it as a
        // custom network" "Click this button to Add It".
        try {
            await provider.send('wallet_addEthereumChain', [
              {
                chainId: '0x64',
                chainName: 'Gnosis',
                nativeCurrency: { decimals: 18, name: 'XDAI', symbol: 'XDAI' },
                rpcUrls: ['https://rpc.gnosischain.com'],
                blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
              },
            ])
          } catch (error) {
            // user rejects the request to "add chain" or param values are wrong, maybe you didn't use hex above for `chainId`?
            console.log(`wallet_addEthereumChain Error: ${error.message}`)
            console.log(error)
            }
          }
        }
      }

  return provider && chainId !== 0x64 &&
    <Modal>
      <Header>Hey! You&apos;re not connected to the right network.</Header>
      <Body>You&apos;ll need to connect to Gnosis Chain</Body>
      <Button onClick={connectGnosis}>
        <img src={gnosis} alt='Gnosis Chain Logo' />
        <p>Switch to Gnosis Chain</p>
      </Button>
    </Modal>

}

export default NetworkOnboarding
