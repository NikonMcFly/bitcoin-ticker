var React = require('react');
var $ = require('jquery');

var Model = React.createClass({
  getInitialState: function() {
    return {
      AUD: '', 
      BRL: '',
      name: '',
    };
  },
	componentDidMount: function() {
    var url = "https://api.bitcoinaverage.com/ticker/all";
    $.get(url, function(result) {
      var lastGist = result;
      console.log(result);
      if (this.isMounted()) {
        this.setState({
          AUD: lastGist.AUD.total_vol,
          BRL: lastGist.BRL.total_vol,
          USD: lastGist.USD.ask
        });
      }
    }.bind(this));
  },
  ClickMe: function(t){
      this.setState({name: t.target.value});
    },
  render: function() {
    var inlineStyle = {color: "blue", margin: "2px"};
    var background = {background: "green"};
    var currency = this.state;
    return (
      <div>
        <p style={inlineStyle}>{currency.AUD} AUD</p>
        <p style={inlineStyle}>{currency.BRL} BRL</p>
        <p style={inlineStyle}>{currency.USD} USD</p>
        <input type="text" onChange={this.ClickMe} />
        <p>{this.state.name}</p>
      </div>
    );
  }
});

module.exports = Model;