console.log("Abhishek Mewada");
console.log("Hello everyone");
let pencilPrice = 10;
let erasorPrice = 5;

let total = "Total price is "+ pencilPrice + erasorPrice + " Rupees";
console.log(total);

total = "Total price is "+ (pencilPrice + erasorPrice) + " Rupees";
console.log(total);

// ( ` `) back ticks 
total = `Total price is ${pencilPrice + erasorPrice} Rupees`;
console.log(total);

console.log(`Total price is ${pencilPrice + erasorPrice} Rupees`);

console.log("Total price is", pencilPrice + erasorPrice , " Rupees");

let str = "good string";
if((str[0]>='a' || str[0] <= 'z') && str.length > 3) {
    console.log(str);
}
else {
    console.log(str);
}

// alert("Something is wrong");
// console.log("simple log");
// console.error("simple error");
// console.warn("simple warning");

let fName = prompt("Enter First name");
let sName = prompt("Enter Second name");
alert("Welcome "+ fName +" "+ sName);