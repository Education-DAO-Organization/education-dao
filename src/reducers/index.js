export const reducer = (state, action) => {
  const { type } = action
  switch(type) {
    case 'CONNECT_WALLET': {
      state.provider = action.payload.provider
      state.signer = action.payload.signer
      state.network = action.payload.network
      return
    }

    case 'SET_ACCOUNT': {
      state.user = action.payload
			return
    }

		case 'SET_CERTIFICATES': {
			state.user.certificates = action.payload
			return
		}
  }
}
