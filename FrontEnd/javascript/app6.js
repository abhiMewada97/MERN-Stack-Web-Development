// Function Expressions
// Name less function
// sum is a variable name
// call function by variable name
// esh tarah se function ko define karne ko hi function expressions kahte hai

// let sum = function(a,b) {

//     return a+b;
// }

// console.log(sum);
// console.log(sum(1,5));

// // Higher order function...................

// function multipleGreet(func, n) {

//     for(let i=1; i<=n; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet,2);
// multipleGreet(function() {console.log("namaste");},3);




// higher order function
// function oddOrEvenFactory(request) {
//     if(request=="odd") {
//         let odd = function(n) {
//             console.log(n%2==1);
//         }
//         return odd;
//         // return function(n) {
//         //     console.log(n%2==1);
//         // }
//     }
//     else if(request=="even") {
//         return function(n) {
//             console.log(n%2==0);
//         }
//     }
//     else {
//         console.log("wrong request");
//     }
// }

// let request= "odd";


// Methods
// Action that can be performed on an object
// const calculator = {
//     add: function(a,b) {
//         return a+b;
//     },
//     sub: function(a,b) {
//         return a-b;
//     },
//     mul: function(a,b) {
//         return a*b;
//     }
// };

// let sum = calculator.add(1,4);
// console.log(sum);


// short hand
const calculator = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    },
    mul(a,b) {
        return a*b;
    }
};

let sum = calculator.add(1,4);
console.log(sum);