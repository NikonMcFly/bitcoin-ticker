var React = require('react');
var Model = require('./model.jsx');
var ListItem = React.createClass({
	render: function() {
		return (
					<li>
							<h4>{this.props.ingredient}</h4>
							<Model></Model>
					</li>
			);
		}
});


module.exports = ListItem;

