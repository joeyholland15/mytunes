// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('enqueue', this.addToQueue, this)

    },

  addToQueue: function(model) {
    debugger;
    this.push(model);
  }

});