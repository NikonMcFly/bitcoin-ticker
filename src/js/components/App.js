import React, { Component } from 'react';
import actions from '../redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {

	render() {
		console.log(this.props.fetchTickerSymbol)
		return (
			<div>
			<h1>Steve</h1>
			</div>
			)
	}
}

function mapStateToProp(state){
	return state
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProp, mapDispatchToProps)(App)