var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Note = require('./Note');

var NoteList = React.createClass({

    render: function(){

        return(
            <div className="rown small-up-2 medium-up-3 large-up-4">
                {
                    this.props.notes.map(function(note, index){
                        return (
                            <Note note={note} key={index} />
                        )
                    })
                }
            </div>
        )
    }

})

module.exports = NoteList;
