var Firebase = require('firebase');
var AppActions = require('../actions/AppActions');

module.exports = {
    saveVideo: function(video){
        this.firebaseRef = new Firebase("https://yttestgallery.firebaseio.com/videos");
        this.firebaseRef.push(video);
    },
    getVideos: function(){
        this.firebaseRef = new Firebase("https://yttestgallery.firebaseio.com/videos");
        this.firebaseRef.once('value', function(snapshot){
            var videos = [];
            snapshot.forEach(function(childSnapshot){
                var video ={
                    id: childSnapshot.key(),
                    title: childSnapshot.val().title,
                    video_id: childSnapshot.val().video_id,
                    description: childSnapshot.val().description
                }
                videos.push(video);
                AppActions.receiveVideos(videos);
            });
        });
    },

    removeVideo: function(videoId){
        console.log(videoId);
        this.firebaseRef = new Firebase("https://yttestgallery.firebaseio.com/videos/"+videoId);
        this.firebaseRef.remove();
    }
}
