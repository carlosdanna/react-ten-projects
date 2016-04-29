var AppActions = require('../actions/AppActions');

var url = "https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=QxnCpZ0YRbFTOVuTy0aosuh_o4oqCbjP"

module.exports = {

    addNote: function(note){
        console.log(url);
        $.ajax({
            url: url,
            data: JSON.stringify(note),
            type: "POST",
            contentType: 'application/json'
        })
    },
    getNotes: function(){
        $.ajax({
            url: url,
            type: "GET",
            cache: false,
            success: function(data){
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        })
    }
}
//
