function PersonMaker(name,age){
    
    const person = {

        name:name,
        age: age,
    
        talk() {
            console.log(`Hi, my name is ${name}`);
        },
    }

    return person;
};

let p1 = PersonMaker("adam",23);    //copy
let p2 = PersonMaker("eve",25);     //copy
// p1.talk===p2.talk
