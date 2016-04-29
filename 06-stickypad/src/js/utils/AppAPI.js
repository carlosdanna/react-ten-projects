var AppActions = require('../actions/AppActions');

var url = "https://api.mlab.com/api/1/databases/stickypad/collections/notes";
var apiKey = "?apiKey=QxnCpZ0YRbFTOVuTy0aosuh_o4oqCbjP";

module.exports = {

    addNote: function(note){
        $.ajax({
            url: url+apiKey,
            data: JSON.stringify(note),
            type: "POST",
            contentType: 'application/json'
        })
    },
    getNotes: function(){
        $.ajax({
            url: url+apiKey,
            type: "GET",
            cache: false,
            success: function(data){
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        })
    },
    removeNote: function(noteId){
        $.ajax({
            url: `${url}/${noteId}${apiKey}`,
            type: "DELETE",
            async: true,
            timeuot: 300000,
            success: function(data){
                console.log(data,'deleted');
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        })
    }
}
//
