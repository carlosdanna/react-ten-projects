var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Workout = require('./Workout');

var Workouts = React.createClass({

    render: function(){
        return(
            <div>
                <ul className ="list-group">
                    {
                        this.props.workouts.map(function(workout,i){
                            return (<Workout workout={workout} key={i} />)
                        })
                    }
                </ul>
            </div>
        )
    }
})

module.exports = Workouts;
