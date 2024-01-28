// ////////////          this in event listener                  ////////////////

// let btn = document.querySelector("button"); 
// console.log(btn); 

// btn.addEventListener("click",function() {
//     console.log(btn); 
//     console.log(this);
//     console.dir(this);
//     this.style.color="red";  //this means btn obj  (this = btn)
// }); 

//////////////////////

let h1 = document.querySelector("h1"); 
let p = document.querySelector("p"); 
let btn = document.querySelector("button"); 

// h1.addEventListener("click",function() {
    
//     console.dir(this.innerText);
//     this.style.color="red";
// });

// p.addEventListener("click",function() {
    
//     console.dir(this.innerText);
//     this.style.color="red";
// });

// btn.addEventListener("click",function() {
    
//     console.dir(this.innerText);
//     this.style.color="red";
// });

/////////////////////////////     
//            ^
//            |

function changeColor() {

    console.log(this.innerText);
    this.style.color = "red";
} 

h1.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);
btn.addEventListener("click",changeColor);
