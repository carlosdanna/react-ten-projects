var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');
var EditForm = require('./EditForm');
var ContactList = require('./ContactList')

function getAppState(){
    return {
        contacts: AppStore.getContacts(),
        activeContact: AppStore.getContactToEdit()
    }
}

var App = React.createClass({
    getInitialState: function(){
        return getAppState();
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
        console.log(this.state);
        if(this.state.activeContact == ''){
            var form = <AddForm />
        }else{
            var form = <EditForm contactToEdit = {this.state.activeContact} />
        }
        return(
            <div>
                {form}
                <ContactList contacts={this.state.contacts} />
            </div>
        )
    },

    _onChange: function(){
        this.setState(getAppState());
    }

})

module.exports = App;
