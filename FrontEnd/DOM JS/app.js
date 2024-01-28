// ///////////////        iterator on getElementsByClassName       //////////

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {
    // console.dir(smallImages[i]);
    // console.dir(smallImages[i].src);
    // console.dir(smallImages[i].src="assets/spiderman_img.png");
// }
    

// ///////////////        querySelectors       ///////////////////////////

// console.dir(document.querySelector("h1"));  // print object
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));  // collection print nahi hua balki ek object print hua     // small diff between query selector and normal method

// console.dir(document.querySelector("div a"));  // all above use to select single element

// console.dir(document.querySelectorAll("div a"));  // all HTML collection come // to select all element


// ///////////////         Mainpulating style       ///////////////////////////
// anchor tag

let links = document.querySelector(".box a");  // in return collection 

// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "green";
// } 
links.style.color = "green";

// for(link of links) {
//     link.style.color = "green";
// }