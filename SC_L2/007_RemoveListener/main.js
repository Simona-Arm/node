const evt = require("events").EventEmitter;
// create an event object
const emt = new evt();

// Add a handler to the myEvent event
emt.on("myEvent", test);
console.log("Listener added!");

// Generating the myEvent event
emt.emit("myEvent");
console.log(emt);
// Remove event handler my Event
emt.removeListener("myEvent", test);

console.log(emt);
console.log("Listener removed!");

// We re-generate the myEvent event
emt.emit("myEvent");

function test() {
    console.log("test function!");
}