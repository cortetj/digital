/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */

var DigitalPressApp = {

};

(function (io, $, DigitalPressApp) {

  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {

    socket.on('message', function(res){
        if(res.verb && res.model) {
            DigitalPressApp[res.model][res.verb](res);
        }
    });

    socket.get('/vote/list', function(res){

      if(res.success) {
        $('#AppContent').html(
          JST['assets/linker/templates/list.html'](res)
        );
      } else {
        $('#AppContent').html('KO');
      }
    });


  });   

  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;


  // Simple log function to keep the example simple
  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }
  

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io,
  jQuery,
  DigitalPressApp
);
