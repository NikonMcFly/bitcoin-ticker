let initialState = {
  bitcoin_data: {}
}

let bitcoinReducer = function(bitcoin = {}, action){
	switch (action.type) {
		case 'RECEIVE_BITCOIN':
		action.data.map(i => obj[i.data.display_name] = i.data)
		return Object.assign({}, state, {
		  reqInProgress: false,
		  subreddits_data: {...state.subreddits_data, ...obj
		  }
		})
		default:
			return bitcoin;
	}
}

export default bitcoinReducer

// recieveSubreddits
// getSubreddits
// fetchSubreddits
// let obj = {};
// action.data.map(i => obj[i.data.display_name] = i.data)
// return Object.assign({}, state, {
//   reqInProgress: false,
//   subreddits_data: {...state.subreddits_data, ...obj
//   }
// })