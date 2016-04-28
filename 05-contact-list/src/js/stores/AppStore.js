var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _contacts = [];


var AppStore = assign({}, EventEmitter.prototype, {
    saveContact: function(contact){
        _contacts.push(contact);
    },
    getContacts: function(){
        return _contacts;
    },
    setContacts: function(contacts){
        _contacts = contacts;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
        case AppConstants.SAVE_CONTACT:
            console.log('saving contact...');

            //Store saveContact
            AppStore.saveContact(action.contact);

            //save to API
            AppAPI.saveContact(action.contact);

            //Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.RECEIVE_CONTACT:

            AppStore.setContacts(action.contacts);

            AppStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});


module.exports = AppStore;
