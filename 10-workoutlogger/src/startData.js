module.exports = {
    init: function(){
        localStorage.clear();
        localStorage.setItem('workouts', JSON.stringify([
            {
                id: 00001,
                type: 'Jogging',
                minutes: 20,
                miles: 2,
                date: new Date()
            },
            {
                id: 00002,
                type: 'Yoga',
                minutes: 30,
                miles: 4,
                date: new Date()
            }
        ]))
    }
}
