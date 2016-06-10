let initialState = {
  user: {
  	username: 'steve',
  	id: 21
  }
}

let userReducer = function(user = initialState, action){
	switch (action.type) {
		case 'GET_USER':
		return {
			text: "hello"
		}
		default:
			return user;
	}
}

export default userReducer