// Code goes here
var Hello = React.createClass({
  render: function() {
    return(
      <h2>What's up React? Hallo from Antonio Seraus</h2>
      );
  }
})

React.render(<Hello/>, document.getElementById("root"));