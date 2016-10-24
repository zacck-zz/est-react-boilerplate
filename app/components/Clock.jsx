import React, {Component} from 'react'

export default class Clock extends Component {
  render() {
    return(
      <div>
        <h1>Clock with state and lifecycle methods</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
