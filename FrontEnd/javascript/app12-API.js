// https://catfact.ninja/fact

// this is string
// let jsonRes = '{"fact":"All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.","length":128}';

// this is object
// let jsonRes = {"fact":"All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.","length":128};

// console.log(jsonRes);
// console.log(jsonRes.fact);     // abhi hum json data ke sath deal ker rahe hai javascript ke obj ke deal nahi ker rahe

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);


// //////////////////////////////////////////

// let obj = {
//     name: "abhishek",
//     age: 21
// };

// let data = JSON.stringify(obj);
// console.log(data);
// data = JSON.stringify(data);
// console.log(data);
// console.log(JSON.stringify(obj));


// //////////////        our first API request        /////////////////////////////

// let url = "https://catfact.ninja/fact";
// fetch(url)

//     .then((response)=>{
//         console.log(response);
//         console.log(response.json());      // to make readable 
//     })
//     .catch((err) => {
//             console.log("ERROR -- ",err);
//         });
    
    
// ********************************    
// let url = "https://catfact.ninja/fact";
// fetch(url)

// .then((res)=>{
//         console.log(res);
//         // console.log(res.json());

//         res.json().then((data)=>{
//            console.log(data);
//     }) 
// })
// .catch((err) => {
//     console.log("ERROR -- ",err);
// });

// ---------        improved version  method chaining---------

// let url = "https://catfact.ninja/fact";
// fetch(url)

    // .then((res)=>{
    //     console.log(res);
    //     // console.log(res.json());

    //     return res.json();
    // })
    
    // .then((data)=>{
    // console.log(data);
    // }) 

    // .catch((err) => {
    // console.log("ERROR -- ",err);
    // });

// -------------------------------------

// let url = "https://catfact.ninja/fact";
// fetch(url)

    // .then((res)=>{
    //     return res.json(); 
    // })
    // .then((data)=>{
    //     console.log("data1 = ",data.fact);
    //     return fetch(url); 
    // })
    // .then((res)=>{
    //     return res.json(); 
    // })
    // .then((data2)=>{
    //     console.log("data2 = ",data2.fact); 
    // })
    // .catch((err) => {
    //     console.log("ERROR -- ",err);
    // });

    // console.log("I am happy");




// //////////////        async - await        /////////////////////////////
let url = "https://catfact.ninja/fact";

async function getFacts() {

    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log("data 1 "+data.fact);

        let res2 =  await fetch(url);
        let data2 =  await res2.json();
        console.log("data 2 "+data2.fact); 
    }
    catch (err) {
        console.log("ERROR -- ",err);
    }
    console.log("bye");
}