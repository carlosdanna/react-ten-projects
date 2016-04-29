var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _notes = [];


var AppStore = assign({}, EventEmitter.prototype, {
    addNote: function(note){
        _notes.push(note);
    },
    getNotes: function(){
        return _notes;
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
        case AppConstants.ADD_NOTE:


            //Store save
            AppStore.addNote(action.note);
            //API save

            //Emit change
            AppStore.emit(CHANGE_EVENT);
            break;

    }

    return true;
});


module.exports = AppStore;
