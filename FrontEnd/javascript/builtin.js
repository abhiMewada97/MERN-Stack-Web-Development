let msg = "  abhi   shek    "
let index = msg.indexOf("hi");

Math.min(arr5) 

let str = "ILoveCoding";
console.log(str.slice(5));
console.log(str.slice(1,4));
console.log(str.slice(-3));


let month = ["january", "july", "march", "august"];
month.shift();
month.unshift("june");


month.splice(0,1,"dec","oct");
month.splice(2);
month.splice(2,0,"feb");


month.sort();


const arr1 = [13,52,41,63,45];
arr1.pop();
arr1.push(5);
// arr1 = [9,4,6,2];      //wrong reference can't change of cost array

let arr2 = [1,2,3,-1];
let n = arr2.length;
let arr3 = arr2.slice(0,n);


// if roll key are not available then new roll key will be added
// obj.roll
obj.roll=23

delete obj[2]
delete obj.name



id = setInterval(() =>{
    console.log("hello world")
},2000);

setTimeout(()=> {
    clearInterval(id);
},1000);

//+++++++            forEach           ***************************
arr.forEach((el) => {
    console.log(el);
});


//+++++++             map           ***************************

let double = num.map((el) => {
    return el*2;
});


// +++++++               filter           ***************************

let even = nums.filter((el)=>{
    return el%2==0; // return true for even , odd -> false 
    return el<7;
});


//+++++++        every func       ***************************

arr1.every((el) => el%2==0);

[2,4,6].every((el) => el%2==0);


//+++++++        some func       ***************************

arr2.every((el) => el%2==0);

[2,4,1].every((el) => el%2==0);


//+++++++        reduce func       ***************************

arr3.reduce((res,el) => { 

    return res+el
});

//.............      Spread                ........................

Math.min(arr5)         // NaN

Math.min(...arr5) 
console.log(...arr5)          // print individually 


//.............      rest                   ........................

function min(a,d,g) {console.log(arguments)}  // give only three value
function min() {console.log(arguments)}  //give multiple value

function sum(msg,...args) {

    console.log(msg);
    // return arguments.reduce((sum,el)=> sum+el);  // error  // we can not use array method
                                                    // arguments[0]  // correct
                                                    
    return args.reduce((sum,el)=> sum+el);  //  then use array method
}


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
