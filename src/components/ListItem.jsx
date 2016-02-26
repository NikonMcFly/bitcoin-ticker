var React = require('react');
var Model = require('./model.jsx');
var ListItem = React.createClass({
	render: function() {
		return (
					<li>
							<Model></Model>
					</li>
			);
		}
});


module.exports = ListItem;

