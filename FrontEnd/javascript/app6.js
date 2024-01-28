// Function Expressions
// Name less function
// sum is a variable name
// call function by variable name
// esh tarah se function ko define karne ko hi function expressions kahte hai

let sum = function(a,b) {

    return a+b;
}

console.log(sum);
console.log(sum(1,5));

// Higher order function...................

function multipleGreet(func, n) {

    for(let i=1; i<=n; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet,2);
multipleGreet(function() {console.log("namaste");},3);