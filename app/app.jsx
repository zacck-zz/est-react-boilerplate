var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Clock from './components/Clock'
import Events from './components/Events'

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <Clock/>
    <Events/>
  </div>,
  document.getElementById('app')
);
