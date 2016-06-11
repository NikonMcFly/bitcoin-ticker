import axios from 'axios';

let actions = {
	recieveTicker: function(data){
		return {
			type: "RECEIVE_BITCOIN",
			data: data
		}
	},

	fetchData: function(){
		let request = axios.get('https://api.bitcoinaverage.com/ticker/all');
		return request
	},

	getTicker: function(){
		fetchData().then(function(data){
			dispatch(recieveTicker(data))
		})
	}
}


export default actions
