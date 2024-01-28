let student = {
    name:"Abhishek",
    age:22,
    marks:7.01
};

let arr = ["Abhishek", 22, 7.01];

let shop = {
    name: "Shirt",
    size: 22,
    color: ["red","pink"]
};

console.log(shop.name)
console.log(shop["name"])

// Js automatically converts object keys to string
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// if roll key are not available then new roll key will be added
// obj.roll
obj.roll=23
delete obj[2]
delete obj.true

// object of object
const classInfo = {
    
    abhishek : {
        grad: "A+",
        city: "bhopal"
    },

    aman : {
        grad: "A",
        city: "sehore"
    }
};

// Array of object
const arrayInfo = [
    
    {
        name:"abhishek",
        grad: "A+",
        city: "bhopal"
    },

    {
        grad: "A",
        city: "sehore"
    }
];

console.log("full info ",arrayInfo);
console.log("grad ",arrayInfo.grad);
console.log("index 1 ",arrayInfo[1]);
console.log("index 1 grad ",arrayInfo[1].grad);
console.log("index 1 gender ",arrayInfo[1].gender="male");