

let actions = {
	recieveTicker: function(data){
		return {
			type: "RECEIVE_BITCOIN",
			data: data
		}
	},

	fetchTickerSymbol: function(){
    return fetch('https://api.bitcoinaverage.com/ticker/all')
  },

  getTicker: function(){
  	return function(dispatch){
  		return fetchTickerSymbol()
  		.then(response => response.json(),
  			error => console.log(error)
  		)
  		.then(
  			json => dispatch(recieveTicker(json.data.children))
  		)
  	};
  }
}


export default actions