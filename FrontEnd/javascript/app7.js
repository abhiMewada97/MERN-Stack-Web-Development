// const student = {
//     name: "abhishek",
//     age:22,
//     eng: 85,
//     math: 72,
//     phys: 80,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phys)/3;
//         console.log(`${this.name} avg marks is = ${avg}`);
//     }
// }

// function getAvg() {
//     console.log(this);
// }



//try and catch...................................

// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch (err){
//     console.log("a is not define..........");
//     console.log(err);
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");




// Arrow function.....................................

// const sum = a => {    //for one value paranthesis is optional
// const sum = () => {    //for zero value paranthesis is compalsary

// const sum = (a, b) => {
//     console.log(a+b);
// };

// sum(4,6);





//Implicit Return......................................
// const mul = (a,b) =>console.log(a*b);
// mul(4,6);

// const mull = (a,b) =>console.log(a*b);console.log("Hello abhishek");
// mul(4,6);




// Set Timeout.......................................

// setTimeout( ()=> {
//     console.log("hello");
// }, 4000);
// console.log("Welcome");





// Power function....................................

// const pow = (a,b) => {
//     console.log(a**b);
// }





// Set Interval......................................

// let id = setInterval( ()=> {
//     console.log("hello");
// },3000);         // hello execute in every 3 sec, To stop interval clearInterval(id) 

// console.log(id);

// let id2= setInterval( ()=> {
//     console.log("apna collage");
// },2000);

// console.log(id2);





// this with Arrow function.....................................

// // const a =5; // global scope
const student = {  // student is a obj // scope is global
    name: "abhishek",
    marks: 80,
    prop: this,   // global scope  // esh obj ke andar jo ye this hai bo ye obj kudh nahi hai ushke scop me kya hai, ushke obj me hai window obj
    getName: function () {
        console.log(this);
        return this.name;     // this ki value hai calling obj  // func call by student so get name ke ander this hai student
    },
    getMarks: () => {
        console.log(this);  // this scope is window
        return this.marks;  // arrow function me this ushki calling obj nahi hoti balki
                            // parent's scope hai (student is a parant)   // parent's scope is window
                            // marks this ke scope me nahi hai eshliye recognize nahi kar pa raha hai
    },

    getInfo1: function() {  // "this" = student 
        setTimeout(()=> {     //setTimeout call by window obj but // arrow function "this" is parent "this"  (parent "this" is student)
            console.log(this);  // "this" = student  // "this" not see whow call it but see parent
        }, 2000);
    },

    getInfo2: function() {
        setTimeout(function () {  //setTimeout call by window obj but  // normal func has "this" is who call it (call by window)
            console.log(this);  // "this" = window
        }, 2000);
    },
};





// Squar......................................................

// const val = a =>(
//     a*a
// )

// const val = a =>{
//     return a*a;
// }





//.............................................................
// id = setInterval(() =>{
//     console.log("hello world")
// },1000);

// setTimeout(()=> {
//     clearInterval(id);
// },10000);