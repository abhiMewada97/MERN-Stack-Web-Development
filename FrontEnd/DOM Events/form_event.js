// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();   // by default action page par ja rahe the to abh preventDefault ushe rok dega
//     alert("form is submited ");
// });

// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     // console.dir(inp.value);
//     console.log(inp.value);
// });

// /////////////////////////////////
let user = document.querySelector("#user");

user.addEventListener("change",function(event){   //small small change ko triger nahi karta  // intial or final state ke change ko track karta hai

    event.preventDefault();  
    console.log("change event ");
    console.log("final value = ",user.value);
});


// let inp = document.querySelector("#user");
// let p = document.querySelector("p");

// inp.addEventListener("input",function(event){   //small small change ko triger karta hai  // non character key not triger our input // only character key triger input
    
//     event.preventDefault();  
//     console.log(inp.value);
//     p.innerText = inp.value; 
// });


// p.addEventListener("input",function(event){
    
//     event.preventDefault();  
//     // console.log("change event ");
//     console.log(p.value);
// });
