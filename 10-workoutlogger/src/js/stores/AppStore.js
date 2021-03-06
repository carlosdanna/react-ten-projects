var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    showForm: function(){
        _showForm = true;
    },
    getShowForm: function(){
        return _showForm;
    },
    getWorkouts: function(){
        return _workouts;
    },
    receiveWorkouts: function(workouts){
        _workouts = workouts
    },
    addWorkout: function(workout){
        _workouts.push(workout);
    },
    removeWorkout: function(workoutId){
        var index = _workouts.findIndex(x => x.id === workoutId);
        _workouts.splice(index, 1);
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
        case AppConstants.SHOW_FORM:
            console.log('Executing show form...');

            //App store modification
            AppStore.showForm();


            //Emit changes
            AppStore.emitChange();
        break;

        case AppConstants.ADD_WORKOUT:
            console.log('Add workout form...');

            //App store modification
            AppStore.addWorkout(action.workout);

            //App API add workout
            AppAPI.addWorkout(action.workout);

            //Emit changes
            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_WORKOUTS:
        console.log('Add workout form...');

            //App store modification
            AppStore.receiveWorkouts(action.workouts);

            //Emit changes
            AppStore.emitChange();
            break;

        case AppConstants.REMOVE_WORKOUT:
            console.log('Removing workout from the list...');

            //App store modification
            AppStore.removeWorkout(action.workoutId);

            //App API add workout
            AppAPI.removeWorkout(action.workoutId);

            //Emit changes
            AppStore.emitChange();
            break;

    }

    return true;
});


module.exports = AppStore;
