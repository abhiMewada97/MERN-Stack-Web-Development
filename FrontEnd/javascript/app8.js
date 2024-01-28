//*********       forEach loop       ******************

let arr = [1,2,3,4,5];

// // arrow function................................

// arr.forEach((el) => {
//     console.log(el);
// });

// // pass func def.................................
// arr.forEach(function(el) {
//     console.log(el);
// });

// // pass name.................................
// let print = function print(el) {
//     console.log(el);
// }

// arr.forEach(print);

// array obj....................................
let array = [
    {
        name: "abhishek",
        marks: 95,
    },
    {
        name: "ankit",
        marks: 90,
    },
    {
        name: "sachin",
        marks: 97,
    },
];

// array.forEach((student)=> {
//     console.log(student);
//     // console.log(student.name);
//     // console.log(student.marks);
// });


// ++++++++         map       *******************
let num = [1,2,3,4];

// let double = num.map((el) => {});  //if it will return nothing then after same size array will make of undefined

// let double = num.map((el) => {
//     return el*2;
// });

// let gpa = array.map((el)=>{
//     return el.marks/10;
// });

//+++++++        filter func       ***************************
// let nums = [1,2,3,4,4,5,6,7,8,9];
// let even = nums.filter((el)=>{
//     return el%2==0; // return true for even , odd -> false 
    // return el<7;
// });

//+++++++        every func       ***************************
// arr1 = [6,8,2,10]
// arr1.every((el) => el%2==0);
// [2,4,6].every((el) => el%2==0);
// [1,4,6].every((el) => el%2==0);

//+++++++        some func       ***************************
// arr2 = [6,1,3,10]
// let arr2Value = arr2.some((el) => el%2==0);
// [2,4,1].some((el) => el%2==0);
// [1,3,5].some((el) => el%2==0);

//+++++++        reduce func       ***************************
// arr3 = [10,2,3,4]
// let final = arr3.reduce((res,el) => {
//     console.log("res "+res);
//     console.log("el "+el);
//     // console.log(" "+res+el); // it will not add join like a string
//     console.log(" "+(res+el));
//     return res+el
// });
// console.log(final);

// QQQQQQQQQQQQQ      maximum element           QQQQQQQQQQQQQQ
// let arr4 = [1,5,7,9,3,2,4,6,8];
let arr4 = [10,5,7,9,30,0,4,6,8];

// let max=-1;
// for (let i=0; i<arr4.length; i++) {
//     if(max <arr4[i]) {
//         max = arr4[i];
//     }
// }
// console.log(max);

// using reduce.....

// function getMax(getnum) {
    
//     let max = getnum.reduce((max,el) =>{
//         if(max<el){
//             return el;
//         }
//         else {
//             return max
//         }
//     });
//     // console.log(max);
//     return max;
// }
// console.log(getMax([1,5,8,7,43,6,94,15,88]));

//.............           Funcition default parameter           ........................

// function sum(a=3,b) {  a=2 and b=undefined  output: NaN  // defautl parameter should write at last

// function sum(a,b=3) {
//     return a+b;
// }
// console.log(sum(2));

//.............      Spread                ........................

// arr5=[1,5,7,8,5,3,0,5]
// // Math.min(arr5)         // NaN

// let min = Math.min(...arr5)
// console.log(min)
// console.log(...arr5)          // print individually
// console.log(arr5)
// arr6=[...arr5];
// console.log(arr6)
// console.log(1,5,68,7)

//.............      Spread with array literals                ........................

// let char=[..."hello"];
// console.log(char);

// let even=[2,4,6,8];
// let odd=[1,3,5,7,9]
// let numb = [...odd, ...even];
// console.log(numb);

//.............      Spread with object literals                ........................

// const data = {
//     email: "adf@gmail.com",
//     password: "abc",
// };

// const dataCopy = {...data};
// const dataCopy = {...data, id:123, country: "India"};
// console.log(dataCopy);


// let arr7=[1,3,5,7,9];   // value
// const obj1 = {...arr7}; // obj -> key;value     // index become key
// console.log(obj1);
// const obj2 = {..."hello"}; // obj -> kay;value     // index become key
// console.log(obj2);


//.............      rest                   ........................

// function min(a,d,g) {  // give only three value
// function min() {  //give multiple value
//     console.log(arguments);  // arguments is a collection, not a array
//     console.log(arguments.length);  // argumnets is inbuilt  // similar array but not array
    
//     // arguments.push(1);  // give error becuase push is aaray method
// }


//..................................
// function sum(msg, ...args) {  // all value in array   // all argument store in this "args" array then
//     console.log("hello ");
//     for(i=0; i<args.length; i++) {
//         console.log("u give "+args[i]);
//     }

// }
//..................................................
// function sum(msg,...args) {

//     console.log(msg);
//     // return arguments.reduce((sum,el)=> sum+el);  // error  // we can not use array method
//                                                     // arguments[0]  // correct
                                                    
//     return args.reduce((sum,el)=> sum+el);  //  then use array method
// }
// sum("hello",1);
//..........      common        .....................
// sum("hello",1,4,7,3,7,9,77);


//+++++++++++            Destructuring    ***************

let names = ["tony", "bruce","peter", "steve","asd","sdf","ert"];
//let winner = names[0];      // create variable individually
//let runnerup = names[1];
//let secondRunnerup = names[2];

// let [winner, runnerup, secondRunnerup] = names;  // it is also individuall variable not array
// let [winner, runnerup, other] = names;  // it is also individuall variable not array
let [winner, runnerup, ...other] = names;  // only "other" is an array, all remaining store in other // (rest concept is using)

//+++++++++++            Destructuring  for Object   ***************

const student = {
    name: "karan",
    age:14,
    class:10,
    subject: ["hindi", "english", "math"],
    username: "karan@123",
    password: "abcd",
    // city: "indore"
};

// let username = student.username;
// let password = student.password;

// let {username, password } = student;  // search this key then value store in this variable
// let {user, password } = student;  // no "user" key in student so user=undefined
// let { username: user, password } = student; //now it is correct  // username use only for search  // search "username" key and store in user variable
// let { username: user, password, city } = student;  // there is no city so city=undefined
let { username: user, password, city="bhopal" } = student;  // it city is not available so default value is city="bhopal"

