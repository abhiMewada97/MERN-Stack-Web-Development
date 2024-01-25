const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

const fruits = [apple, banana, orange];

console.log(fruits);

// exports.fruits;          // empty send
// module.exports.fruits;      // empty send
// exports=fruits;          // empty send

module.exports=fruits;


// index.js is a entry point