// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('dequeue', function(song) {
      this.remove(song);
    }, this);

    this.on('add', function(song){
      if(this.length === 1){
        this.playFirst();
      } 
    },this);
  
    // this.on()

  },


  playFirst: function() {
    this.at(0).play(); 
  }


});