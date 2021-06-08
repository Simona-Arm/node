const evt = require("events").EventEmitter;
// create an event object
const emt = new evt();

// Add 3 handlers to the myEvent event
emt.on("myEvent", () => {
    console.log("Listener 1");
});

emt.on("myEvent", () => {
    console.log("Listener 2");
});

emt.on("myEvent", () => {
    console.log("Listener 3");
});
console.log(emt);
// Generating the myEvent event
emt.emit("myEvent");
// Remove all handlers from the myEvent event
emt.removeAllListeners("myEvent");
console.log(emt);
console.log("Listeners was deleted!");
// We re-generate the myEvent event
emt.emit("myEvent");