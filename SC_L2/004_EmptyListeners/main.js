var evt = require("events");

var emitter = new evt.EventEmitter();

// since no handler is subscribed to the event, the program will do nothing
emitter.emit("click");