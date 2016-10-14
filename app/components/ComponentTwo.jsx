import React from 'react'

//higher order component functionality
// var isAdmin = true;
// var adminComponent = (Component) => {
//   return class Admin extends  React.Component {
//     render() {
//       if (isAdmin) {
//         return(
//           <div className="callout secondary">
//             <p className="alert label">Private Admin Information</p>
//             <Component {...this.props}/>
//           </div>
//         );
//       } else
//       {
//           return null;
//       }
//     }
//   };
// };

var isAdmin = true;
var adminComponent = (Component) => {
  return class Admin extends  Component {
    componentDidUpdate () {
      console.log('Admin Component did update');
      if(super.componentDidUpdate) {
        super.componentDidUpdate();
      }
    }
    render() {
      if (isAdmin) {
        return(
          <div className="callout secondary">
            <p className="alert label">Private Admin Information</p>
            {super.render()}
          </div>
        );
      } else
      {
          return null;
      }
    }
  };
};


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
  componentDidUpdate() {
    console.log('component 2 did update');
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
};


//setting default props
ComponentTwo.defaultProps = {
  count: 50
};

//setting prop types
ComponentTwo.propTypes = {
  count: React.PropTypes.number
};

export default adminComponent(ComponentTwo);
