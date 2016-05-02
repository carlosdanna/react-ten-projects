var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
    saveVideo: function(video){
        this.firebaseRef = new Firebase("https://yttestgallery.firebaseio.com/videos");
        this.firebaseRef.push(video);
    }
}
