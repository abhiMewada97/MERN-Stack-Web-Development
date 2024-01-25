
// exports = "hello";  // error  // treated as a variable, not treated as a module export 
                        // treated as a module when a object

// module.exports = "hello"; // modole.exports it is a object jiske ander ki 'property' or 'method' want to send to other file in same directory
                            // giving some information

// **************************************                    

// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const g=9.8;
// const PI = 3.14;

// const obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// }                    

// module.exports = obj;

// *****************************************

// const sum = (a,b) => a+b;
// const mul = (a,b) => a*b;
// const g=9.8;
// const PI = 3.14;

// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// }


// *****************************************

// module.exports.sum = (a,b) => a+b;
// module.exports.mul = (a,b) => a*b;
// module.exports.g=9.8;
// module.exports.PI = 3.14;

// *****************************************

exports.sum = (a,b) => a+b;
exports.mul = (a,b) => a*b;
exports.g=9.8;
exports.PI = 3.14;