import React, {Component} from 'react'

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  /*Lets add life cycle methods*/
  componentDidMount() {
    {/* so we should set stuff up here this is called after render*/}
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnMount() {
    {/*unset up clear stuff you arent using*/}
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return(
      <div>
        <h1>Clock with state and lifecycle methods</h1>
        <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
