var AppActions = require('../actions/AppActions');

module.exports = {
    getWorkouts: function(){
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        AppActions.receiveWorkouts(workouts);
    },
    addWorkout: function(workout){
        console.log('Saving workout...');
        var workouts = JSON.parse(localStorage.getItem('workouts'));
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts));
    }
}
