

const fetchTicker = function fetchTicker() {
  return fetch('https://api.bitcoinaverage.com/ticker/all');
}

const getTicker = function getTicker() {
  return function(dispatch) {
    return fetchTicker()
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        json => dispatch(receiveTicker(json))
      )
  };
}

const receiveTicker = function receiveTicker(data) {
  return {
    type: "RECEIVE_BITCOIN",
    data: data
  }
}


export default {  
			fetchTicker,
		  getTicker,
			receiveTicker
}
