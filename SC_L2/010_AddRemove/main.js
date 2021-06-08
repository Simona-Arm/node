const evt = require('events').EventEmitter;
// create an event object
const emt = new evt();

const count = 0;
// when a new subscriber is added, the newListener event is generated
emt.on('newListener', function(event, listener){
    if(event == 'myEvent'){
        console.log('myEvent was be added to emt.')
    }
});
// when the subscriber is removed, the removeListener event fires
emt.on('removeListener', function(event, listener){
    if(event == 'myEvent'){
        console.log('myEvent was be remowed from emt.')
    }
});

emt.on('myEvent', test);

console.log(emt.listenerCount('myEvent'));

emt.removeListener('myEvent', test);
console.log(emt.listenerCount('myEvent'));

function test(){
    console.log('test event!');
}