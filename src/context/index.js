import React, { createContext, useEffect, useCallback } from 'react'

import { ethers } from 'ethers'
import PropTypes from 'prop-types'
import { useImmerReducer } from 'use-immer'

import { INITIAL_STATE } from './initialState'

import { reducer } from '../reducers'

export const Context = createContext(INITIAL_STATE)

export const Provider = ({ children }) => {
	const { ethereum } = window
  const [state, dispatch] = useImmerReducer(reducer, INITIAL_STATE)

	const getCertificates = useCallback(async () => {
		// Only when we refresh does this get called
		// But ideally, we're going to want allow for users to call this, like you can check on Noble.place
		if (user.certificates.length === 0) {
			// Grab the assets -- while it's a single asset FOR RN, we're gonna just grab this one and manually hardcode ONE in
			// When there are more, we'll need to iterate over how many, creating an object for each one and then pushing it
			// into the collectibles array. And then dispatching it.

			const res = await fetch('https://api.opensea.io/api/v1/assets?owner=0x55F5843236D2e95E68E58cB05a43a09fa7745657&order_direction=desc&asset_contract_address=0x1975fbcf98b5678db232c8d2c78fb574fab14d73&limit=20&include_orders=false')

			// Why do I have to get the first one?
			const data = (await res.json()).assets[0]
			// Grab the img_url, name, and permalink
			// When we iterate over this, we'll also pass in the network
			// const { image_url, name, permalink, background_color } = data

			const certificate = {
				img: data.image_url,
				name: data.name,
				permalink: data.permalink,
				bg: data.background_color,
			}

			dispatch({ type: 'SET_CERTIFICATES', payload: [certificate]})
		} else {
			console.log('o no')
		}
	}, [dispatch])

  const connectWallet = useCallback(async (provider, account) => {
  if (account.length > 0) {
    try {
      let ens = await provider?.lookupAddress(account)
      let avatar
      if (ens) {
        let resolver = await provider?.getResolver(ens)
        avatar = await resolver?.getText('avatar')
      }
      const connectedAccount = {
        address: account,
        ens,
        avatar
      }
      dispatch({ type: 'SET_ACCOUNT', payload: connectedAccount })
			// Then we want to start off with the certificates
			getCertificates()
    } catch (e) {
      console.log(e)
    }
  } else {
    dispatch({ type: 'SET_ACCOUNT', payload: INITIAL_STATE.user })
  }
}, [dispatch])

const connectProvider = useCallback(async () => {
  try {
    const provider = new ethers.providers.Web3Provider(ethereum)
    if (provider) {
      const signer = await provider.getSigner()
      const { name, chainId } = await provider.getNetwork()
      const account = (await ethereum.request({ method: 'eth_accounts' }))[0]
			connectWallet(provider, account)
      dispatch({
        type: 'CONNECTED_PROVIDER',
        payload: {
          provider,
          signer,
          network: {
            name,
            chainId
          }
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}, [connectWallet, dispatch])

useEffect(() => {
	if (ethereum) {
		console.log('does render?')
		connectProvider()

		ethereum.on('accountsChanged', () => {
			connectProvider()
		})
		ethereum.on('chainChanged', () => {
			connectProvider()
		})
	}
}, [connectProvider, dispatch])

  const { user, modalFeedback, network, provider, signer } = state

  return (
    <Context.Provider
      value={{
        user,
        modalFeedback,
        network,
        provider,
        signer
      }}>
      {children}
    </Context.Provider>
  )
}

// Why context need proptypes??
Provider.propTypes = {
  children: PropTypes.node.isRequired,
}
