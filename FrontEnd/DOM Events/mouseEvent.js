let btn = document.querySelector("button");

// btn.addEventListener("click",function(e){    // call back function ke andar ek dafault argument hota jise hum event argument kahte hai
//     console.log("button clicked ");
//     console.log(e);
// });

btn.addEventListener("dblclick",function(event){   // give any name "e" "event" "etc"
    console.log("button double clicked ");
    console.log(event);
});