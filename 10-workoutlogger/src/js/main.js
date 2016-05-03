var App = require('./components/App');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');
var StartData = require('./startData');

if(localStorage.getItem('workouts') == null){
    StartData.init();
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
