// const math = require("./1-5math");

// console.log(math);
// console.log(math.sum(4,5));


//        ^
//        |

// above give error

// we can not import, export directory 
// import, export we can not use directory should have "package.json" file and "type": "module"
// cdm //  npm init

//        |
//        V

import {sum, PI} from "./1-9math.js";
console.log(sum(4,5));


// npm install random-words

// import { generate, count } from "random-words";
// import { generate } from "random-words";
// console.log(generate());