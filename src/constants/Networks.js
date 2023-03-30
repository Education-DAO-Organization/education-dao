export const NETWORKS = [
  {
    chainId: 1,
    name: 'Mainnet',
    message: 'Please send your DAI to dinadeljanin.eth.'
  },
  {
    chainId: 3,
    name: 'Ropsten',
    message: 'Please don\'t send test DAI here.'
  },
  {
    chainId: 4,
    name: 'Rinkeby',
    message: 'Please don\'t send test DAI here.'
  },
  {
    chainId: 5,
    name: 'Görli',
    message: 'Please don\'t send test DAI here.'
  },
  {
    chainId: 42,
    name: 'Kovan',
    message: 'Please don\'t send test DAI here.'
  },
  {
    chainId: 31337,
    name: 'Mainnet Fork',
    message: 'You\'re on a local fork of Mainnet.'
  },
  {
    chainId: 0x64,
    name: 'Gnosis Chain',
    message: ''
  }
]

// From Gnosis docs
// Note: Chain ID 0x64 is the hexadecimal equivalent of 100, which is the xDai chain ID. MetaMask recently updated the ChainID to be a required field. When you update, you may need to reenter the Chain ID: 100, and it will be converted to a hexadecimal: 0x64.
