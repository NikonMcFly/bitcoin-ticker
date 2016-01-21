

var BarChart = React.createClass({
  render: function() {
    return (
      <Chart width={this.props.width} height={this.props.height}>
        <DataSeries data={[4, 7, 6]} color={"blue"} width={this.props.width} height={this.props.height}></DataSeries>
      </Chart>
    );
  }
});