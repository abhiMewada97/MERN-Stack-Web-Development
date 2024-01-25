//cmd // process.version
//cmd // process.release
//cmd // process.cwd();   //current working directory


// *******************************
// console.log(process.argv);
// console.log("j");

// //////////                cmd  to run file            /////////////////////////////
//cmd // node script.js     //  if we not pass argument then it have by defult 2 argument
//cmd // node script.js hello abhishek welcome to apna college


// ********************************
let args = process.argv;

for (let i = 2; i < args.length; i++) {
    console.log("hello ",args[i]);    
}

//cmd // node script.js abhishek ankit manish rohit