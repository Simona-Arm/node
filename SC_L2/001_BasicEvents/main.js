const evt = require('events');

// All objects that generate ecents in NOde.js must be instances of the EentEmitter class or it's heirs
const emitter = new evt.EventEmitter();

//To set a listener for an event, you need to use the on() method, which is available on the event object
emitter.on('create', function() {
    console.log("Folder was created!");
});

//Tje emit method is designed to generate an event
emitter.emit("create");
