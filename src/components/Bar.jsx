

var Bar = React.createClass({
      getDefaultProps: function(){
        return {

        }
      },
      render: function() {
        return (
        <rect fill={this.props.color} width={this.props.width} height={this.props.height} x={this.props.offset} y={this.props.availableHeight - this.props.height}></rect>
        );
      }
    });