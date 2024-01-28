let arr = [1,2,3];
let arr2 = [1,2,3];

arr.sayHello = ()=>{        // this function is not inside prototype that's why it not create for arr2
    console.log("hello ");
}
arr2.sayHello = ()=>{        // this function is not inside prototype that's why it not create for arr
    console.log("hello ");
}

// we also change the defination of function
// arr.__proto__.push = (n) => { console.log("pushing value is ",n);}