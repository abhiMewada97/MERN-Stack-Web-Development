let msg = "  abhi   shek    "
console.log(msg.indexOf("hi"));

let str = "ILoveCoding";
console.log(str.slice(5));
console.log(str.slice(1,4));
console.log(str.slice(-3));

let arr = ["abhishek", 22, 75.0];
console.log(arr);
console.log(arr[0]);
console.log(arr[0][2]);

let st = "rohit";
st[0] = 'm';
console.log(st);

arr[0] = "ankit";
console.log(arr);

let month = ["january", "july", "march", "august"];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);

month.splice(0,1,"dec","oct");
console.log("splice ",month);
month.splice(2);
console.log(month);
month.splice(2,0,"feb");
console.log(month);

month.sort();
console.log("sort ",month);

const arr1 = [13,52,41,63,45];
console.log(arr1);

arr1.pop();
arr1.pop();
arr1.pop();
arr1.pop();
arr1.pop();
arr1.push(5);
// arr1 = [9,4,6,2];      //wrong reference can't change of cost array
console.log(arr1);

let arr2 = [1,2,3,-1];
let n=3;
let arr3 = arr2.slice(0,n);
console.log(arr2);
console.log(arr3);

arr3 = arr2.splice(0,n);
console.log(arr2);
console.log(arr3);
console.log(arr3.length);