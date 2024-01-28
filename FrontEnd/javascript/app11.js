// function one(ch) {
//     console.log("1");
//     console.log(ch);
//     return 1;
// }

// function two(ch) {
//     console.log("2");
//     console.log(ch);
//     return one("call by 2,1") + one("call by 2,2");
// }

// function three() {
//     console.log("three");
//     let ans = two("call by 3,1") + one("call by 3,2");
//     console.log(ans);
// }

// three();

// //////////////////                Single threaded                /////////////////////
//                            synchronouse nature                     /////////////////

// let a=2;
// console.log(a);
// let b=3;
// console.log(a*b);

// /////////////////            single threaded handle by set time          ////////////////
//                            Asynchronouse nature                     /////////////////

// setTimeout(() => {
//     console.log("apna college ")
// },2000);

// setTimeout(() => {
//     console.log("Hello world ")
// },2000);

// console.log("Hello.........")

// ///////////////////////////////////////////////////////////

// h1 = document.querySelector("h1");
// setTimeout(()=>{
    //     h1.style.color="red";
    // },1000);
    
// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color="green";
// },3000);

// **********************************************
//                         ^
//                         |

// h1 = document.querySelector("h1");
// function changeColor(color,delay) {
    
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }

// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("orange",3000);


// *************        first func execute then second exec           ***********************
//                         ^
//                         |

// h1 = document.querySelector("h1");

// function changeColor(color,delay, nextColorChange) {  // nextColorChange is a call back
    
//     // console.log(nextColorChange);

//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }


// // callback nesting --> callback hell  ////////////////////////////////////

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("blue",1000);
//                 });
//             });
//         });
//     });
// });


// /////////////                Setting up for Promises                         //////////////////////////////

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() *10)+1;
//     if (internetSpeed > 4) {
//         success();
//     }
//     else {
//         failure();
//     }
// }

// savetoDb("apna collage",
//     ()=>{
//         console.log("Success : your data was saved ");
        
//         savetoDb("hello world",
//             () => {
//                 console.log("success2 : data2 saved ");
                
//                 savetoDb("hello abhishek",
//                     () => {
//                         console.log("success3 : data3 saved ");
//                     },
//                     () => {
//                         console.log("failure3 : weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//             );
//     },
//     ()=> {
//         console.log("failure : weak connection, data not saved ");
//     }
// );


// /////////////                Refactoring with Promises                         //////////////////////////////

// function savetoDb(data) {
//  // return new Promise((success, failure) =>{
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10)+1;
//         if (internetSpeed > 4) {
//             // success("success : ");
//             resolve("success : ");
//         }
//         else {
//             // failure("failure : ");
//             reject("failure : ");
//         }
//     });
// }

// let request = savetoDb("apna college");
// console.log(request);

// /////////////                Promises Method                         //////////////////////////////

// function savetoDb(data) {

//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10)+1;
        
//         if (internetSpeed > 4) {
//             resolve("success : ");
//         }
//         else {
//             reject("failure : ");
//         }
//     });
// }

// let request = savetoDb("apna college");

// request
//     .then(()=>{      //request basicaly promises hai

// //  savetoDb("apna college").then(()=>{   // sort way of writing

//         console.log("promise resolved1")
//         console.log(request)
//     })
//     .catch(()=>{
//         console.log("promise resolved")
//         console.log(request)
//     });
    

// /////////////                Promises - improved version                 //////////////////////////////

// -----------------------------------   nested Promise      --------------

// function savetoDb(data) {
    
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10)+1;
//         if (internetSpeed > 4) {
//             resolve("success : ");
//         }
//         else {
//             reject("failure : ");
//         }
//     });
// }

// savetoDb("apna college").then(()=>{
//         console.log("data1 saved")

//         savetoDb("helloworld").then(()=>{
//             console.log("data2 saved");
            
//             savetoDb("Abhishek").then(()=>{
//                 console.log("data3 saved");
//             })
//         })
//     })

//     .catch(()=>{
//         console.log("promise was rejected")
//     });

// --------------------------------    Below is more improved version Promise chaining ----------


// function savetoDb(data) {
    
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10)+1;
//         if (internetSpeed > 4) {
//             resolve("success : ");
//         }
//         else {
//             reject("failure : ");
//         }
//     });
// }

// savetoDb("apna college")
//     .then(()=>{
//         console.log("data1 saved")
//         return savetoDb("helloworld");
//     })
//     .then(()=>{
//         console.log("data2 saved");
//         return savetoDb("Abhishek");
//     })
//     .then(()=>{
//         console.log("data3 saved");
//     })
//     .catch(()=>{
//         console.log("promise was rejected")
//     });


// -----------------   result and error in promises  ----------------------


// function savetoDb(data) {
    
//     return new Promise((resolve, reject) =>{
//         let internetSpeed = Math.floor(Math.random() *10)+1;
//         if (internetSpeed > 4) {
//             resolve("success : ");
//         }
//         else {
//             reject("failure : ");
//         }
//     });
// }

// savetoDb("apna college")
//     .then((result)=>{
//         console.log("data1 saved");
//         console.log(result);
//         return savetoDb("helloworld");
//     })
//     .then((result)=>{
//         console.log("data2 saved");
//         console.log(result);
//         return savetoDb("Abhishek");
//     })
//     .then((result)=>{
//         console.log("data3 saved");
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log("promise wad rejected")
//         console.log(error);
//     });


// //////////////////////////////////////////////////////////////////////////

h1 = document.querySelector("h1");
function changeColor(color,delay) {  // nextColorChange is a call back
    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed!");
        },delay);
    });
}

// let requestPromise = changeColor("red", 6000);
// console.log(requestPromise);  // pending for 6 second

// //---------  promise chaining ---
changeColor("red",6000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);  // returning promise object
})
.then(()=>{
    console.log("orange color was completed");
    // return changeColor("yellow",1000);
})
changeColor("yellow",1000).then(()=>{
    console.log("yellow color was completed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was completed");
})
// ------------------------------------------
// changeColor("red",6000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);  // returning promise object
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("yellow",1000);
// })
// // changeColor("yellow",1000)
// .then(()=>{
//     console.log("yellow color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// })
//--------------------------------------------------
// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("blue",1000);
//                 });
//             });
//         });
//     });
// });
