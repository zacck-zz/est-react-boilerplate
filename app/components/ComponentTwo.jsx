import React from 'react'

//make a class
class ComponentTwo extends React.Component {
  //override constructor
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    }
    //bind the handler to the component
    this.onClick = this.onClick.bind(this)
  }
  onClick () { //bind on clice
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <h3>Component Two Extending  React.Component</h3>
        <p>Current count: {this.state.count}</p>
        <button className="button hollow" onClick= {this.onClick}>Button Two</button>

      </div>
    )
  }
}


//setting default props
ComponentTwo.defaultProps = {
  count: 50
}

//setting prop types
ComponentTwo.propTypes = {
  count: React.PropTypes.number
}
export default ComponentTwo;
