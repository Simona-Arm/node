const fs = require('fs');

// const book = {
//     title: "Ego is the eniemy",
//     author: "Ryan Holiday"
// }
//
// // console.log(book);
//
// const bookJSON = JSON.stringify(book);
//
// // console.log(bookJSON);
// //
// // const bookPARSE = JSON.parse(bookJSON);
// //
// // console.log(bookPARSE.title);
// fs.writeFileSync('1-json.json', bookJSON);

// let jsonData = fs.readFileSync('1-json.json');
// jsonData = JSON.parse(jsonData);
// jsonData = jsonData.toString(); // this can make to a string , but then we need to make it json, so we can directly make it json data
// console.log(jsonData);

let earthHumanInfo = fs.readFileSync('1-json.json');
earthHumanInfo = JSON.parse(earthHumanInfo);
console.log(earthHumanInfo)
earthHumanInfo.name = 'dsfd';
earthHumanInfo.age = 79;

earthHumanInfo = JSON.stringify(earthHumanInfo);

fs.writeFileSync('1-json.json', earthHumanInfo);
earthHumanInfo = fs.readFileSync('1-json.json');
earthHumanInfo = JSON.parse(earthHumanInfo);
console.log(earthHumanInfo)



// , (err) => {
//     if (err) throw err;
//     console.log(JSON.parse(updatedInfo));
// }








