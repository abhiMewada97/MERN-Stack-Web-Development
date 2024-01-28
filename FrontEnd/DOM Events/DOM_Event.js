
// let btn = document.querySelector('button'); 
// console.dir(btn);

// btn.onclick =function() { 
//     // console.log("button was clicked"); 
//     alert("button was clicked"); 
// };

// function sayHello() {
//     alert("Say hello ");
// }

// btn.onclick = sayHello;

// ////////////////////////////////////////

// let btn = document.querySelectorAll('button'); 
// for(bt of btn) {
//     console.dir(bt);

//     bt.onmouseenter=function(){
//         console.log("onmouseenter working");
//     }

//     bt.onclick = sayHello;  // we are assigning the function // we are not executing the function
//     // bt.onclick = sayHello();  // in this case executing function not assigning
// }

// function sayHello() {
//     alert("Hello ");
// }

// ek bar me ek hi value set ker sakte hai that's why event listener come
// Example
    // bt.onclick = sayHello;
    // bt.onclick = sayWelcome;


// //////////////           Event Listener            /////////////////////
// we can set multiple value

let btn = document.querySelectorAll('button'); 

for(bt of btn) {

    // bt.onclick = sayHello;
    // bt.onclick = sayWelcome;

    bt.addEventListener("click",sayHello); 
    bt.addEventListener("click",sayWelcome); 
}

function sayHello() {
    alert("Hello ");
}

function sayWelcome() {
    alert(" Welcome ");
}
