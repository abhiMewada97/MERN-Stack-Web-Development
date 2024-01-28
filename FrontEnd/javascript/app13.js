
// let url = "https://catfact.ninja/fact";

// async function getFacts() {

//     try {
//         let res = await axios.get(url);
//         // console.log(res);
//         // console.log(res.data);
//         console.log(res.data.fact);
//         return res;
//     }
//     catch (err) {
//         console.log("ERROR -- ",err);
//     }
//     // console.log("bye");
// }


// let btn = document.querySelector("#btn");

// btn.addEventListener("click", async ()=>{
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
//     // p.innerText = fact.data;
//     // p.innerText = fact.data.fact;
// });

// /////////////           cats random fact        ////////////

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", async ()=>{
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;

// });


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
    
//     try {
//         let res = await axios.get(url);   // call api
//         return res.data.fact;
//     }
//     catch (err) {
//         return "No fact found";
//     }
// }


// //////////////          dog image                 ///////////////////////

// let url1 = "https://dog.ceo/api/breeds/image/random";

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", async ()=>{
//     let link = await getImage();
//     let img = document.querySelector("#result-img");
//     img.setAttribute("src",link);
// });


// async function getImage() {
    
//     try {
//         let res = await axios.get(url1);   // call api
//         return res.data.message;
//         console.log("hh");
//     }
//     catch (err) {
//         return "No image found";
//     }
// }

// //////////////        sending header               //////////////////////             Ramining                 ////////////////////////



// //////////////        activity using queri sring               //////////////////////

// let url2 = "http://universities.hipolabs.com/search?name=";

// let country = "nepal";

// async function getColleges() {

//     try {
//         let res = await axios.get(url2+country);
//         console.log(res);
//     }
//     catch(err) {
//        console.log("err - ",err); 
//     }
// }



let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("#Search-college");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let collArr = await getColleges(country);
    // console.log(collArr);
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerText ="";
    for (col of collArr) {
        // console.log(col);
        console.log(col.name);
        
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);   
    }
}


async function getColleges(country) {

    try {
        let res = await axios.get(url+country);
        // console.log(res);
        return res.data;
    }
    catch(err) {
       console.log("err - ",err); 
       return [];
    }
}