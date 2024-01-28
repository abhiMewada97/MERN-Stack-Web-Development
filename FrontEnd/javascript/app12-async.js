// async function greet() {
//     return "hello"
// }


// async function greet() {
//                    // fulfilled state
//                    // by default return promise
// }


// async function greet() {
//     abc.abc();               //rejected state
//     console.log("hello world");
//     return "hello"
// }


// /////////////////////////////////////////////

// async function greet() {
//     throw "404 page not found";         // The throw statement throws a user-defined exception. 
//                                         // Execution of the current function will stop (the statements after throw won't be executed), 
//                                         //and control will be passed to the first catch block in the call stack. 
//                                         //If no catch block exists among caller functions, the program will terminate
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolled ");
//     console.log("result was : ", result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with some error : ",err);
// })

// console.log("throw run");

// /////////////////////////////////////////////

// let demo = async() =>{
//     return 5;
// }

// let demo = () =>{
//     return 5;
// }


// //////////            await                   ///////////////////////////////////////////
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// }



// //////////            await                   ///////////////////////////////////////////

h1 = document.querySelector("h1");

function changeColor(color,delay) { 
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num > 3) {
                reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {

        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    }
    catch (err) {
        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
}

demo();