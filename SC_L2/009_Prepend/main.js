const evt = require("events");

const emt = new evt.EventEmitter();

emt.on("myEvent", function tset1() {
    console.log("test string 1");
});
// The prependListener method adds a subscriber to the beginning of the chain
emt.prependListener("myEvent", function tset2() {
    console.log("test string 2");
});

emt.once("once", function tsetOnce1() {
    console.log("First once listener");
});
// The prependListener method adds a subscriber to the beginning of the chain
emt.prependOnceListener("once", function tsetOnce2() {
    console.log("Seconds once listener");
});

console.log(emt);
emt.emit("myEvent");
emt.emit("once");