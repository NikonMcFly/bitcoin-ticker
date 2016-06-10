

let actions = {
	getUser: function(text){
		type: "GET_USER",
		text
	},

	fetchTickerSymbol: function(){
    return fetch('https://api.bitcoinaverage.com/ticker/all')
      .then(req => req.json())
  }
}


export default actions