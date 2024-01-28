let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(){
//     console.log("key was pressed");
// });

// inp.addEventListener("keydown", function(event){
//     console.log(event);
//     // console.log("key "+event.key);
//     console.log("key ",event.key);
//     console.log("code ",event.code);
//     console.log("key was pressed");
// });

// inp.addEventListener("keyup", function(){
//     console.log("key was released");
// });



// how game key work ///////////////////////

inp.addEventListener("keydown", function(event){

    // if(event.code=="ArrowUp") {
    if(event.code=="KeyU") {

        console.log("character move forward");
    }
    // else if(event.code=="ArrowDown") {
    else if(event.code=="KeyD") {
        
        console.log("character move bakcward");
    }
    // else if(event.code=="ArrowRight") {
    else if(event.code=="KeyR") {
        
        console.log("character move right");
    }
    // else if(event.code=="ArrowLeft") {
    else if(event.code=="KeyL") {
        
        console.log("character move left");
    }
});