let initialState = {
  bitcoin_data: {}
}

let bitcoinReducer = function(bitcoin = initialState, action){
	switch (action.type) {
		case 'RECEIVE_BITCOIN':
		 return action.data
		default:
			return bitcoin;
	}
}

export default bitcoinReducer