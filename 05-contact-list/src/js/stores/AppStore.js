var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _contacts = [];
var _activeContact = '';


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
    removeContact: function(contactId){
        var index = _contacts.findIndex(x=>x.id === contactId);
        _contacts.splice(index, 1);
    },
    setContactToEdit: function(contact){
        _activeContact = contact;
    },
    getContactToEdit: function(){
        return _activeContact;
    },
    emptyContact: function(){
        _activeContact ='';
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on('change', callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change', callback);
    },
    updateContact: function(contact){
        for (var i = 0; i< _contacts.length; i++){
            if  (_contacts[i].id == contact.id)
            {
                _contacts.splice(i,1);
                _contacts.push(contact);
            }
        }
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

        case AppConstants.REMOVE_CONTACT:

            AppStore.removeContact(action.contactId);

            //Api removeContact
            AppAPI.removeContact(action.contactId);

            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.EDIT_CONTACT:

            AppStore.setContactToEdit(action.contact);

            //Api removeContact
            // AppAPI.editContact(action.contact);

            AppStore.emit(CHANGE_EVENT);
            break;

        case AppConstants.UPDATE_CONTACT:

            //store update
            AppStore.updateContact(action.contact);

            //Api removeContact
            AppAPI.updateContact(action.contact);

            //Empty _active contact variable
            AppStore.emptyContact();

            AppStore.emit(CHANGE_EVENT);
            break;
    }

    return true;
});


module.exports = AppStore;
