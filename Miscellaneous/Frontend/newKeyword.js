// this type of func is --> Constructors --> doesn't return anything & start with capital  // we should not small letter
function Person(name,age){
    
    this.name = name;
    this.age = age;
    console.log(this);
    
    Person.prototype.talk = function(){
        console.log(`hi, my name is ${this.name}`);
    }
}

// Person.prototype.talk = function(){
//     console.log(`hi, my name is ${this.name}`);
// }

// what is deference b/t both 

// Person.talk = function(){
//     console.log(`hi, my name is ${this.name}`);
// }

let p1 = new Person("adam",23);      // both p1 and p2 access same copy
let p2 = new Person("eve",23);

// p1.talk===p2.talk