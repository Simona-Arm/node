var count = 0;
var print = () => {
    count++;
    console.log("Click - ", count);
};

// To work with events, you need to connect the 'events' module
var evt = require("events");

var emt = new evt.EventEmitter();

// the on method and addListener add a handler to the event
emt.on("click", print);
emt.addListener("click", print);

// add a handler using the Once method, the handler will fire only once and will be removed
emt.once("click", print);

// Calling handlers
emt.emit("click");
emt.emit("click");