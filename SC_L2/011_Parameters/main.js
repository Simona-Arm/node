const evt = require('events').EventEmitter;
// create an event object
const emt = new evt();

emt.on('myEvent', function(a, b){
    console.log(a, b)
});

// We generate the event myEvent and pass 2 parameters to the handler function
emt.emit('myEvent', 10, 15);