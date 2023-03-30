export const INITIAL_STATE = {
  user: {
    address: '',
    ens: null,
    avatar: null,
    badges: [],
		certificates: [],
		hackathons: [],
		poaps: []
  },
  modalFeedback: {
		header: 'Initiating Transaction',
		message: 'Please confirm this transaction in MetaMask',
		status: 'initiated',
		details: {
			address: '0x55F5843236D2e95E68E58cB05a43a09fa7745657',
			amount: '0.5',
			transactionFee: '1',
			trxHash: '',
		}
  },
  network: {
    name: null,
    chainId: null
  },
  provider: null,
  signer: null,
}
