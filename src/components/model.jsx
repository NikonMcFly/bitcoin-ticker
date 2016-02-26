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
          EUR: lastGist.EUR.ask,
          CNY: lastGist.CNY.ask,
          USD: lastGist.USD.ask,
          GBP: lastGist.GBP.ask,
          CAD: lastGist.CAD.ask
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
        <p style={inlineStyle}>{currency.EUR} AUD I dont know what im doing</p>
        <p style={inlineStyle}>{currency.CNY} BRL</p>
        <p style={inlineStyle}>{currency.USD} USD</p>
        <p style={inlineStyle}>{currency.GBP} GBP</p>
        <p style={inlineStyle}>{currency.CAD} CAD</p>
        <p>{this.state.name}</p>
      </div>
    );
  }
});

module.exports = Model;