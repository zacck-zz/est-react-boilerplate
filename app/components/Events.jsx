import React, {Component} from 'react'


export default class Events extends Component {
  render() {
    function activateLasers(event) {
      event.preventDefault();
      console.log('Lasers Active');
    }
    return(
      <div>
        <button className="button hollow" onClick={activateLasers}>
          Activate lasers
        </button>
      </div>
    )
  }
}
