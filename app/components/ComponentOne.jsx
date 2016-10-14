import React from 'react'

var ComponentOne = React.createClass({
  /*Setting the initial; state for the Component*/
  getInitialState: function() {
    return {
      /*Setting initial state using props passed in*/
      count:this.props.count
    };
  },
  getDefaultProps: function () {
    return {
      count: 11
    }
  },
  propTypes:{
    count: React.PropTypes.number
  },
  render: function() {
    return (
      <div>
        <h3>Component One Using React.createClass</h3>
        <p>Current count: {this.state.count}</p>
      </div>
    )
  }
});


export default ComponentOne;
