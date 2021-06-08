const evt = require("events");

// Create a constructor function that will inherit from the EventEmitter function
// The object created by the function will allow you to connect to the file and read data from it

function ReadFile() {
    this.file = "";
}

// We write the EventEmitter object to the reader prototype so that we can generate events
ReadFile.prototype = new evt.EventEmitter();

// path - File name
// callback - a function that is called after the data has been read
ReadFile.prototype.readDataFromFile = function (path, callback) {
    this.file = path;
    if (typeof callback == "function") {
        console.log(this)
        this.on("readData", callback);
    }
    this._read();
};

ReadFile.prototype._read = function () {
    console.log("Loading...");
    const someDataFromFile = "Text text text"; // data read from file
    this.emit("readData", someDataFromFile);
    console.log("Data was read.");
};

module.exports.Reader = ReadFile;