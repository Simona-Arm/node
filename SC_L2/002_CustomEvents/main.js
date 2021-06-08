// To work with events, you need to connect the 'events' module
var fileReader = require("./readFile.js");
// Create a reader object
var reader = new fileReader.Reader();

// the readDataFromFile function connects to the file, reads the data and passes it to our callback function
reader.readDataFromFile("file.js", function (responce) {
    console.log(responce);
});